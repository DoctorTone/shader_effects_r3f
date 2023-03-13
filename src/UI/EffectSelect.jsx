import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import useStore from "../state/store.js";

const EffectSelect = () => {
  const setActiveEffect = useStore((state) => state.setActiveEffect);
  const activeEffect = useStore((state) => state.activeEffect);

  const changeEffect = (event) => {
    setActiveEffect(event.target.value);
  };

  return (
    <div id="effect" className="panel">
      <FormControl fullWidth color="warning">
        <InputLabel id="effectLabel" sx={{ color: "lightgrey" }}>
          Effect
        </InputLabel>
        <Select
          variant="outlined"
          labelId="effectLabel"
          id="effectControl"
          value={activeEffect}
          label="Effect"
          onChange={changeEffect}
          sx={{ color: "white" }}>
          <MenuItem value={"block"}>Block</MenuItem>
          <MenuItem value={"pattern"}>Pattern</MenuItem>
          <MenuItem value={"flip"}>Flip</MenuItem>
          <MenuItem value={"rings"}>Rings</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default EffectSelect;
