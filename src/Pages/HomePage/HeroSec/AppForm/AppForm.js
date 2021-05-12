import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import styles from "./AppForm.module.scss";

function AppForm() {
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  return (
    <form action="" className={styles.form}>
      <h2>Book An Appointment Now</h2>
      <TextField id="name" label="Patient  Name" variant="outlined" />
      <FormControl>
        <InputLabel id="dept-select-label">Select Department</InputLabel>
        <Select
          labelId="dept-select-label"
          id="deptSelect"
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
          }}
        >
          <MenuItem value={10}>Dept1</MenuItem>
          <MenuItem value={20}>Dept2</MenuItem>
          <MenuItem value={30}>Dept3</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="doc-select-label">Select Doctor</InputLabel>
        <Select
          labelId="doc-select-label"
          id="docSelect"
          value={doctor}
          onChange={(e) => {
            setDoctor(e.target.value);
          }}
        >
          <MenuItem value={10}>Doc1</MenuItem>
          <MenuItem value={20}>Doc2</MenuItem>
          <MenuItem value={30}>Doc3</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="date"
        label="Appointment Date"
        type="date"
        defaultValue="2021-05-12"
        className={""}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <TextField
        id="time"
        label="Appointment Time"
        type="time"
        defaultValue="07:30"
        className={""}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
      <input type="submit" value="Book" id={styles.bookBtn} />
    </form>
  );
}

export default AppForm;
