import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";

const EffectSelect = () => {
  const [effect, setEffect] = useState("block");

  const changeEffect = (event) => {
    setEffect(event.target.value);
  };

  return (
    <div id="effect" className="panel">
      <FormControl fullWidth>
        <InputLabel id="effectLabel">Effect</InputLabel>
        <Select
          labelId="effectLabel"
          id="effectControl"
          value={effect}
          label="Effect"
          onChange={changeEffect}>
          <MenuItem value={"block"}>Block</MenuItem>
          <MenuItem value={"pattern"}>Pattern</MenuItem>
          <MenuItem value={"flip"}>Flip</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default EffectSelect;
