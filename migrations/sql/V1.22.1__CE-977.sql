--
-- create history tables
--
CREATE TABLE
  case_management.decision_h (
    h_decision_guid uuid NOT NULL DEFAULT uuid_generate_v4 (),
    target_row_id uuid NOT NULL,
    operation_type char(1) NOT NULL,
    operation_user_id varchar(32) NOT NULL DEFAULT current_user,
    operation_executed_at timestamp NOT NULL DEFAULT now(),
    data_after_executed_operation jsonb,
    CONSTRAINT "PK_h_decision" PRIMARY KEY (h_decision_guid)
  );

CREATE
OR REPLACE TRIGGER decision_history_trigger BEFORE INSERT
OR DELETE
OR
UPDATE ON case_management.decision FOR EACH ROW
EXECUTE PROCEDURE audit_history ('decision_h', 'decision_guid');