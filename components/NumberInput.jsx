import { Box, OutlinedInput, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
const StyledInput = styled(OutlinedInput)`
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    display: none;
  }
`;
export default function NumberInput({
  label,
  sx,
  required,
  max = 500,
  inputWidth = "100%",
  disabled,
  inputHeight = "auto",
  defaultValue,
  onChangeHandler,
  readOnly,
}) {
  const [value, setValue] = useState(defaultValue);
  const [helper, setHelper] = useState("");
  useEffect(() => {
    changeHandler(defaultValue);
  }, [defaultValue]);
  function changeHandler(value) {
    const newValue = Number(value);
    if (newValue > max) {
      setHelper(`maximum quantity is ${max}`);
      return;
    }
    onChangeHandler(newValue);
    setValue(newValue);
    setHelper("");
  }
  return (
    <Box>
      {label && (
        <Typography
          height="2rem"
          color={"#6C748B"}
          sx={{ pl: "1rem", mb: "0.25rem", fontSize: "0.95rem !important" }}
        >
          {label} {required && "*"}
        </Typography>
      )}
      <StyledInput
        onKeyDown={(e) => {
          ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();
        }}
        onwheel={() => false}
        readOnly={readOnly}
        type="number"
        value={value}
        disabled={disabled}
        onChange={(e) => changeHandler(e.target.value)}
        sx={{ width: inputWidth, height: inputHeight, textAlign: "center" }}
      />
      <Typography sx={{ color: "tomato", fontSize: "13px" }}>
        {helper}
      </Typography>
    </Box>
  );
}
