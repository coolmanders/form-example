import { TextField, Button, Select, MenuItem, darken } from "@mui/material";
import { styled } from "@mui/system";

const primaryColor = "#8B0000"; // tmavě červená

export const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StyledTextField = styled(TextField)`
  & .MuiInputBase-input {
    font-size: 14px;
  }
`;

export const StyledButton = styled(Button)`
  & .MuiButton-label {
    font-size: 14px;
  }
  background-color: ${primaryColor};
  color: white;
  &:hover {
    background-color: ${darken(primaryColor, 0.2)};
  }
  align-self: flex-end;
  margin-top: auto;
`;

export const StyledSelect = styled(Select)`
  & .MuiSelect-select {
    font-size: 14px;
  }
`;

export const StyledSelectLabel = styled(MenuItem)`
  & .MuiTypography-body1 {
    font-size: 14px;
  }
`;
