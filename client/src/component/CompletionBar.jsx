import React from "react";
import "../style.css";

export default function CompletionBar(props) {
  console.log("compl bar props", props.data);

  let tasksComplete = props.data.reduce(
    (accumulator, currentValue) =>
      currentValue.is_complete ? accumulator + 1 : accumulator,
    0
  );
  let totalTasks = props.data.length;

  return (
    <div className="total">
      <div
        className="complete"
        style={{ width: `${(tasksComplete / totalTasks) * 100}%` }}
      ></div>
    </div>
  );
}
