-- Grant privileges to case management objects
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA case_management TO case_management;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA case_management TO case_management;

-- Grant privileges to investigation objects
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA investigation TO investigation;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA investigation TO investigation;