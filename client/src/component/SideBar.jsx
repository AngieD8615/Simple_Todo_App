import React from 'react';

export default function SideBar(props) {
  return (
    <>
      <h1>Projects</h1>
      {props.data.map((project) => {
        return (
          <div> 
            {project.project}
          </div>
        )
      })}
    </>
  );
};
