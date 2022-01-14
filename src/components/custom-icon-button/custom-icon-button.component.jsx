import { IconButton } from "@material-ui/core";
import React from "react";

const CustomIconButton = ({
  children,
  type,
  variant,
  color,
  ariaLabel,
  onClick,
  ...otherProps
}) => {
  return (
    <IconButton
      aria-label={ariaLabel}
      variant={variant}
      color={color}
      type={type}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </IconButton>
  );
};

export default CustomIconButton;
