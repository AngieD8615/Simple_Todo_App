import React from "react";
import Grid from "@material-ui/core/Grid";
import "../style.css";

export default function TaskTile(props) {
  return (
    <Grid container className="task-tile" spacing={1}>
      <Grid container item md={9} className="task-front">
        <Grid item className="task-title">
          <b>{props.task.title}</b> {props.task.createdAt}
        </Grid>
        <Grid item className="task-description">
          {props.task.description}
        </Grid>
      </Grid>
      <Grid container item md={3} className="task-end">
        <Grid>Deadline: {props.task.deadline}</Grid>
        <Grid>Time remaining: {props.task.hoursNeeded}hrs</Grid>
        <Grid container>
          <i class="fa fa-trash" aria-hidden="true"></i>
          <i class="fa fa-pencil" aria-hidden="true"></i>
          {props.task.isComplete ? (
            <i
              className="fa fa-check-square-o primary-color"
              aria-hidden="true"
            ></i>
          ) : (
            <i
              className={`fa fa-square ${props.task.priority}`}
              aria-hidden="true"
            ></i>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
