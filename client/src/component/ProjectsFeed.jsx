import React from 'react';
import ProjectTile from './ProjectTile.jsx';
import "../style.css";


export default function ProjectFeed(props) {
  return (
    <>
      <h1>To Do List</h1>
      <h3>Search for a project</h3>
      <ProjectTile />
    </>
  );
}
