import React from "react";
import "../style.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
          className="projectHeader"
          id="panel1bh-header"

        >
          <Typography className="project-heading">Project Name</Typography>
          <Typography className="completion">
            completion bar goes here
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Task a, b, c, d...</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
