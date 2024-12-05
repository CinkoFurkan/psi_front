import classnames from "classnames";
import { createElement } from "react";

const Button = ({
  children,
  as,
  variant = "primary",
  size = "normal",
  ...props
}) => {
  return createElement(as, {
    ...props,
    className: classnames(
      "shadow-lg flex justify-center items-center cursor-pointer",
      {
        "bg-primary text-sm text-white": variant === "primary",
        "px-4 py-2": size === "normal",
      },
    ),
    children,
  });
};

export default Button;
