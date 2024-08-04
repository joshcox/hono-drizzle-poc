-- Check if the database exists
SELECT 'CREATE DATABASE bluffcountrybeef'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'bluffcountrybeef')\gexec

-- Connect to the database
\c bluffcountrybeef

-- Create the uuid-ossp extension, which is used to generate UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Rename the public schema to bluffcountrybeef and set the search path to bluffcountrybeef, public
ALTER SCHEMA public RENAME TO bluffcountrybeef;
ALTER DATABASE bluffcountrybeef SET search_path TO bluffcountrybeef, public;
