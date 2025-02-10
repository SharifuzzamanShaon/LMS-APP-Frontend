"use client";
import React, { useState } from "react";
import { TextField, Autocomplete, MenuItem, FormControl } from "@mui/material";
import { FiCheck } from "react-icons/fi";
const names = [
  "Programming",
  "JavaScript",
  "Node js",
  "C++",
  "Web Server",
  "GitHub",
  "Git",
  "Docker",
  "Frotend",
  "Backend",
];

export default function GetCourseTags({formik, values}) {
  return (
    <>
      <FormControl
        fullWidth
        variant="outlined"
        className="dark:text-white"
      >
        <Autocomplete 
          sx={{ m: 1, width: 500 }}
          multiple
          className="dark:text-white"
          options={names}
          getOptionLabel={(option) => option}
          disableCloseOnSelect
          value={values.stags}
          onChange={(event, newValue) => formik.setFieldValue("tags", newValue)}
          renderInput={(params) => (
            <TextField
              className="dark:text-white"
              {...params}
              variant="outlined"
              label="Course tags"
              placeholder="Course tags"
            />
          )}
          renderOption={(props, option, { selected }) => (
            <MenuItem
              className="dark:text-white text-black"
              {...props}
              key={option}
              value={option}
              sx={{ justifyContent: "space-between" }}
            >
              {option}
              {selected ? <FiCheck /> : null}
            </MenuItem>
          )}
        />

      </FormControl>
    </>
  );
}
