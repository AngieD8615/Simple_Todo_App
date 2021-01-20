DROP DATABASE IF EXISTS projectsdb;

CREATE DATABASE projectsdb;
USE projectsdb;

CREATE TABLE projects (
  project_id INT AUTO_INCREMENT PRIMARY KEY,
  project VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
  task_id INT AUTO_INCREMENT PRIMARY KEY,
  project_id INT,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(1000),
  priority INT,
  deadline DATE,
  is_complete BOOLEAN,
  hours_remaining INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (project_id)
    REFERENCES projects (project_id)
    ON UPDATE RESTRICT ON DELETE CASCADE
);
