require('dotenv').config();
const { Client } = require('pg');
const faker = require('faker');

const client = new Client({   
  host: process.env.POSTGRES_HOST, //note make sure port not specified in .env file!
  port: 5433,
  database: process.env.POSTGRES_DATABASE,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,});

client.connect();

const generateHWCRCaseData = () => {
  const action_not_required_ind = faker.datatype.boolean();

  let generatedCase = {
    case_file_guid: faker.datatype.uuid(), // Generates a random GUID (UUID)
    case_code: 'HWCR',
    owned_by_agency_code: 'COS',
    action_not_required_ind: action_not_required_ind,
    note_text: faker.lorem.sentence(), // Random note text
    review_required_ind: faker.datatype.boolean(), // True or false
  }

  if(action_not_required_ind){
    return {
      ...generatedCase,
      inaction_reason_code: faker.random.arrayElement(['DUPLICATE', 'NOPUBSFTYC', 'OTHOPRPRTY']), // Random inaction reason  
    }
  } else {
    return {
      ...generatedCase,
      complainant_contacted_ind: faker.datatype.boolean(), // True or false
      attended_ind: faker.datatype.boolean(), // True or false
      case_location_code: faker.random.arrayElement(['RURAL', 'URBAN', 'WLDNS']), // Random location code
      case_conflict_history_code: faker.random.arrayElement(['L', 'M', 'H', 'U']), // Random conflict history
      case_threat_level_code: faker.random.arrayElement(['1', '2', '3', 'U']), // Random threat level code
    }
  }
}

const generateLeadData = (year, num, case_file_guid) => {
  return {
    lead_identifier: `${year}-${num.toString().padStart(6, '0')}`,
    case_identifier: case_file_guid
  }
}

const generateActionData = (case_file_guid, actions)  => {
  return {
    action_guid: faker.datatype.uuid(), // Generates a random GUID (UUID)
    case_guid: case_file_guid,
    action_type_action_xref_guid: faker.random.arrayElement(actions),
    actor_guid: faker.datatype.uuid(), // Generates a random GUID (UUID) - This won't render properly in the app
    action_date: faker.date.recent().toISOString(),
    active_ind: true,
    equipment_guid: null, // Not implemented
    wildlife_guid: null, // Not implmented
    decision_guid: null // Not implemented
  }
}

const getActionXrefs = async () => {
  try {
    const result = await client.query(`
      select action_type_action_xref_guid
      from case_management.action_type_action_xref
      where action_type_code = 'COMPASSESS'
    `);
    return result.rows.map(row => row.action_type_action_xref_guid);  // Return an array of action_type_action_xref_guid
  } catch (err) {
    console.error('Error fetching action types:', err);
    return [];  // Return an empty array if there is an error
  }
};

const generateBulkData = async (year, num, type) => {
  let cases = [];

  const actions = await getActionXrefs();

  if(type === 'HWCR') {
    for (let i = 0; i < num; i++) {
      const generatedCase = generateHWCRCaseData();
      const generatedLead = generateLeadData(year, i, generatedCase.case_file_guid);
      const generatedAction = generateActionData(generatedCase.case_file_guid, actions);

      cases.push({
        case: generatedCase,
        lead: generatedLead,
        action: generatedAction
      });
    }    
  }

  return cases;
};

const insertData = async (records) => {
  try {
    const currentTimestamp = new Date().toISOString(); // Get the current timestamp

    // Begin transaction
    await client.query('BEGIN');

// Insert cases into the database
const caseInsertPromises = records.map(caseFile => 
  client.query(
    `INSERT INTO case_management.case_file (
      case_file_guid, 
      case_code, 
      owned_by_agency_code, 
      inaction_reason_code, 
      action_not_required_ind, 
      note_text, 
      review_required_ind, 
      complainant_contacted_ind, 
      attended_ind, 
      case_location_code, 
      case_conflict_history_code, 
      case_threat_level_code, 
      create_user_id, 
      create_utc_timestamp, 
      update_user_id, 
      update_utc_timestamp
    ) 
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16
    )`,
    [
      caseFile.case.case_file_guid, 
      caseFile.case.case_code, 
      caseFile.case.owned_by_agency_code, 
      caseFile.case.inaction_reason_code, 
      caseFile.case.action_not_required_ind, 
      caseFile.case.note_text, 
      caseFile.case.review_required_ind, 
      caseFile.case.complainant_contacted_ind, 
      caseFile.case.attended_ind, 
      caseFile.case.case_location_code, 
      caseFile.case.case_conflict_history_code, 
      caseFile.case.case_threat_level_code, 
      'Bulk Data Load', // create_user_id
      currentTimestamp, // create_utc_timestamp
      'Bulk Data Load', // update_user_id
      currentTimestamp // update_utc_timestamp
    ]
  )
);
await Promise.all(caseInsertPromises);

// Insert leads into the database
const leadInsertPromises = records.map(caseFile => 
  client.query(
    `INSERT INTO case_management.lead (
      lead_identifier,
      case_identifier, 
      create_user_id, 
      create_utc_timestamp, 
      update_user_id, 
      update_utc_timestamp
    ) 
    VALUES (
      $1, $2, $3, $4, $5, $6
    )`,
    [
      caseFile.lead.lead_identifier, 
      caseFile.lead.case_identifier, 
      'Bulk Data Load', // create_user_id
      currentTimestamp, // create_utc_timestamp
      'Bulk Data Load', // update_user_id
      currentTimestamp // update_utc_timestamp
    ]
  )
);
await Promise.all(leadInsertPromises);

// Insert actions into the database
const actionInsertPromises = records.map(caseFile => 
  client.query(
    `INSERT INTO case_management.action (
      action_guid,
      case_guid,
      action_type_action_xref_guid, 
      actor_guid,
      action_date,
      active_ind,
      equipment_guid,
      wildlife_guid,
      decision_guid,
      create_user_id, 
      create_utc_timestamp, 
      update_user_id, 
      update_utc_timestamp
    ) 
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13
    )`,
    [
      caseFile.action.action_guid,
      caseFile.action.case_guid,
      caseFile.action.action_type_action_xref_guid,
      caseFile.action.actor_guid,
      caseFile.action.action_date,
      caseFile.action.active_ind,
      caseFile.action.equipment_guid,
      caseFile.action.wildlife_guid,
      caseFile.action.decision_guid, 
      'Bulk Data Load', // create_user_id
      currentTimestamp, // create_utc_timestamp
      'Bulk Data Load', // update_user_id
      currentTimestamp // update_utc_timestamp
    ]
  )
);
await Promise.all(actionInsertPromises);

// Commit transaction
await client.query('COMMIT');
  } catch (err) {
    console.error('Error loading data:', err);
    await client.query('ROLLBACK');
  } finally {
    await client.end();
  }
};

const main = async () => {
  // Adjust these as required.
// No more than 10k at a time or the insert will blow up.
// This script assumes requisite complaint data exists.
  const yearPrefix = 25;
  const numRecords = 10;
  const type = 'HWCR';

  // Ensure that the bulk data is generated before starting insertion
  const records = await generateBulkData(yearPrefix, numRecords, type);
  await insertData(records);  // Ensure insertion happens after bulk data is ready
};

main().catch((err) => {
  console.error('Error running the main process:', err);
});

  

    
    

