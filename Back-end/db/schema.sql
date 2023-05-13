-- if our db already exists, drop it
DROP DATABASE IF EXISTS bookmarks_dev;

-- Create our Database
CREATE DATABASE bookmarks_dev;

-- Connect to the db
\c bookmarks_dev;

-- Create a table for our bookmarks
CREATE TABLE bookmarks (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 url TEXT,
 category TEXT,
 is_favorite BOOLEAN
);



DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    title TEXT,
    content TEXT,
    rating NUMERIC,
    CHECK ( rating >= 0 AND rating <= 5),
    bookmark_id INTEGER REFERENCES bookmarks (id)
    ON DELETE CASCADE
)
