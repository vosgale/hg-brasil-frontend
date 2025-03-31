import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";
import { forwardRef, useState } from "react";

const PasswordInput = forwardRef<HTMLInputElement, TextFieldProps>(({ ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      {...props}
      inputRef={ref}
      type={showPassword ? "text" : "password"}
      InputProps={{
        ...props.InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword((prev) => !prev)}
              edge="end"
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? (
                <VisibilityOff fontSize="small" color="primary" />
              ) : (
                <Visibility fontSize="small" color="primary" />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
});

export default PasswordInput;
