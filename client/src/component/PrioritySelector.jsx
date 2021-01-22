import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function PrioritySelector() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Priority</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="1">
        <FormControlLabel
          value="1"
          control={<Radio color="red" />}
          label="Do Now"
          labelPlacement="top"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="yellow" />}
          label="Do Next"
          labelPlacement="top"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="green" />}
          label="Do Later"
          labelPlacement="top"
        />
      </RadioGroup>
    </FormControl>
  );
}