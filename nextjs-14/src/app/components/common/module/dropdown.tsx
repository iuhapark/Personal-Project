"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

function DropdownMenu() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <FormControl className="w-full">
      <InputLabel id="name-label">이름</InputLabel>
      <Select
        labelId="name-label"
        id="name-select"
        value={name}
        label="name"
        onChange={handleChange}
      >
        <MenuItem value="김시온">김시온</MenuItem>
        <MenuItem value="김호주">김호주</MenuItem>
        <MenuItem value="김호현">김호현</MenuItem>
        <MenuItem value="박주하">박주하</MenuItem>
        <MenuItem value="양동규">양동규</MenuItem>
      </Select>
    </FormControl>
  );
}

export default DropdownMenu;