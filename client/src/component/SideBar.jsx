import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

export default function SideBar(props) {
  const [expand, setExpand] = useState({});
  const handleClick = (e) => {
    console.log(e.target.key)
  }
  return (
    <div style={{margin: "15px"}}>
      <h1>Projects</h1>
      {props.data.map((project, index) => {
        return (
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={2}
            key={project.title}
          >
            <Grid className="primary-color">
              <i className="fa fa-thumb-tack fa-lg" aria-hidden="true"></i>
            </Grid>
            <Grid onClick={(e)=>{handleClick(e)}} >{project.project}</Grid>
          </Grid>
        );
      })}
    </div>
  );
}
