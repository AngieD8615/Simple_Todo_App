import React from "react";

export default function AddTaskForm(props) {
  const [formData, setFormData] = React.useState({
    title: null,
    description: null,
    deadline: null,
    time_remaining: null,
    priority: null,
  });

  const handleSubmit = () => {

  }
  
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        autoFocus
        margin="dense"
        name="title"
        label="Task Title"
        type="text"
        fullWidth
      />
      <TextField
        margin="dense"
        name="description"
        label="Description"
        type="text"
        fullWidth
      />

      <PrioritySelector />
      <br />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
      </MuiPickersUtilsProvider>
      <TextField
        margin="dense"
        name="time_remaining"
        label="Time to complete (hrs)"
        type="number"
        fullWidth
      />
      <Button onClick={handleSubmit} color="primary">
        Add Task
      </Button>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
    </form>
  );
}
