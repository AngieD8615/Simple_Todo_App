import React from "react";
import 'date-fns';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import PrioritySelector from "./PrioritySelector.jsx";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import Axios from "axios";


export default function AddTaskDialogBox(props) {
  const [openForm, setOpenForm] = React.useState(false);
  
  const [formData, setFormData] = React.useState({
    title: "What do you need to do?",
    description: "Details?",
    deadline: new Date,
    time_remaining: 1,
    priority: 1,
    project: props.project.project,
    project_id: props.project.project_id

  });

  const handleClickOpenForm = (e) => {
    setOpenForm(true);
    console.log("find current project_id: ", props)
  };

  const handleClose = (e) => {
    setOpenForm(false);
  };

  const handleSubmit = (e) => {
    Axios.
    setOpenForm(false);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const newVal = e.target.value;
    let newData = formData;
    newData[name] = newVal;
    setFormData(newData);
    console.log(formData)
  };

  return (
    <div>
      <i
        class="fa fa-plus-square"
        aria-hidden="true"
        onClick={(e) => handleClickOpenForm(e)}
      ></i>
      <Dialog
        open={openForm}
        onClose={(e) => handleClose(e)}
        aria-labelledby="form-dialog-title"
        disableBackdropClick={true}
      >
        <DialogTitle id="form-dialog-title">
          Add a task to {props.project.project}
        </DialogTitle>
        <DialogContent>
           <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Task Title"
            defaultValue={formData.title}
            onChange={handleChange}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            defaultValue={formData.description}
            onChange={handleChange}
            type="text"
            fullWidth
          />

          {/* <PrioritySelector />
          <br/> */}
          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              name="deadline"
              label="Deadline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider> */}
          <TextField
            margin="dense"
            name="time_remaining"
            label="Time to complete (hrs)"
            defaultValue={formData.time_remaining}
            onChange={handleChange}
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Add Task
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
