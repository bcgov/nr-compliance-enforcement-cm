--
-- INSERT INTO drug_method_code
--
INSERT INTO drug_method_code (drug_method_code, short_description, long_description, display_order, active_ind, create_user_id, create_utc_timestamp, update_user_id, update_utc_timestamp)
  VALUES('ORNA', 'Oral/nasal', 'Oral/nasal', 4, true, 'FLYWAY', now(), 'FLYWAY', now());

--
-- UPDATE Reverse distribution -> Returned to vet
--
UPDATE case_management.drug_remaining_outcome_code
  SET short_description='Returned to vet', long_description='Returned to vet', update_user_id='FLYWAY', update_utc_timestamp=now()
  WHERE drug_remaining_outcome_code='RDIS';

--
-- CREATE TABLE drug_additional_comments
--

ALTER TABLE case_management.drug_administered
  ADD additional_comments_text varchar(1000) NULL;

comment on column case_management.drug_administered.additional_comments_text is 'Includes comments on immobilization outcomes, any adverse reactions, and drug storage or discarding.';

--
-- Migrate existing adverse reactions, discard method, amount discarded to Additional comments
--

UPDATE case_management.drug_administered
  SET additional_comments_text = TRIM(
    CONCAT(
      CASE WHEN adverse_reaction_text IS NOT NULL AND adverse_reaction_text <> ''
        THEN 'Adverse reaction: ' || adverse_reaction_text || '; '
        ELSE ''
      END,
      CASE WHEN discard_method_text IS NOT NULL AND discard_method_text <> ''
        THEN 'Discard method: ' || discard_method_text || '; '
        ELSE ''
      END,
      CASE WHEN drug_discarded_amount IS NOT NULL
        THEN 'Amount discarded: ' || drug_discarded_amount::text || '; '
        ELSE ''
      END
    )
  )
  WHERE additional_comments_text IS NULL;


--
-- DROP Adverse reactions, discard method, amount discarded columns.
--

ALTER TABLE case_management.drug_administered DROP COLUMN adverse_reaction_text;
ALTER TABLE case_management.drug_administered DROP COLUMN drug_discarded_amount;
ALTER TABLE case_management.drug_administered DROP COLUMN discard_method_text;


--
-- Bump CM configuration to trigger re-fetch of code tables
--

UPDATE case_management.configuration
SET configuration_value = configuration_value::int + 1
WHERE configuration_code = 'CDTABLEVER';
