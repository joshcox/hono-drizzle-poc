-- Check if the database exists
SELECT 'CREATE DATABASE bluffcountrybeef'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'bluffcountrybeef')\gexec

-- Connect to the database
\c bluffcountrybeef

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

ALTER SCHEMA public RENAME TO bluffcountrybeef;
ALTER DATABASE bluffcountrybeef SET search_path TO bluffcountrybeef, public;
ALTER SYSTEM SET wal_level TO 'logical';
SELECT pg_reload_conf();

-- Your table creation statements here, for example:
CREATE TABLE IF NOT EXISTS bluffcountrybeef.user (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
