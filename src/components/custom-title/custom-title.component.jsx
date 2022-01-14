import { Typography } from "@material-ui/core";
import React from "react";

const CustomTitle = ({
  variant,
  component,
  color,
  align,
  children,
  className,
  ...otherProps
}) => {
  return (
    <Typography
      className={className}
      color={color}
      align={align}
      variant={variant}
      component={component}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default CustomTitle;
