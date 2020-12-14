import React from "react";
import TaskTile from "./TaskTile.jsx";
import "../style.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CompletionBar from "./CompletionBar.jsx";

export default function ProjectTile(props) {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="project-tile">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="project-name">
            <b>{props.project.project}</b>
          </div>
          <CompletionBar className="completion" data={props.project.tasks} />
          <div>
            <i class="fa fa-plus-square" aria-hidden="true"></i>
          </div>
        </AccordionSummary>
        <AccordionDetails style={{ background: "rgb(235, 234, 234)" }}>
          <div className="tile-container">
            {props.project.tasks.map((task) => {
              return (
                <div className="task-container">
                  <TaskTile task={task} />
                </div>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
