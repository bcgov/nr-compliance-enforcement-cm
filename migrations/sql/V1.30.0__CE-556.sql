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

