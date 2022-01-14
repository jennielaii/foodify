import React from "react";
import { MenuItem, TextField } from "@material-ui/core";
import { convertToArray } from "../../utils/convertToArray";
import { mealTypes } from "../../constants/mealTypes";

export const InputField = ({
  label,
  search,
  type,
  error,
  onChange,
  value,
  color,
  className,
  InputProps,
  min,
  onBlur,
  ...otherProps
}) => {
  return (
    <TextField
      className={className}
      label={label}
      id={search}
      type={type}
      color={color}
      error={error}
      variant="filled"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      InputProps={InputProps}
      min={min}
      InputLabelProps={{ style: { fontSize: 14, height: 20 } }}
      {...otherProps}
    />
  );
};

export const MealTypesForm = ({
  id,
  label,
  value,
  onChange,
  color,
  onBlur,
  className,
  ...otherProps
}) => {
  return (
    <TextField
      className={className}
      id={id}
      select
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      variant="filled"
      color={color}
      InputLabelProps={{ style: { fontSize: 16, height: 20 } }}
      {...otherProps}
    >
      {convertToArray(mealTypes).map((option) => (
        <MenuItem key={option.name} value={option.name}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
};
