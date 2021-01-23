import React from "react";
import TaskTile from "./TaskTile.jsx";
import "../style.css";
import CompletionBar from "./CompletionBar.jsx";
import AddTaskDialogBox from "./AddTaskDialogBox.jsx";

export default function ProjectTile(props) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="project-tile">
        <div className="project-name">
          <b>{props.project.project}</b>
        </div>
        <CompletionBar className="completion" data={props.project.tasks} />
        <div>
          <AddTaskDialogBox project={props.project} />
        </div>
        <div onClick={handleExpand}>
          {expanded ? (
            <i class="fa fa-chevron-circle-up" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
          )}
        </div>
      </div>
      {expanded ? (
        <div className="tile-container">
          {props.project.tasks.map((task) => {
            return (
              <div className="task-container">
                <TaskTile task={task} />
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
