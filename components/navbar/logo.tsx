import React from "react";
import { ThemeContext } from "theme/context";
import { Icon } from "@chakra-ui/react";

const Logo = () => {
  return (
    <ThemeContext.Consumer>
      {({ brand, presets }) => (
        <Icon
          width="4em"
          height="4em"
          viewBox="0 0 171 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.34 42.141h67.236l9.53-11.573H25.15l-9.81 11.573zM110.107 8.71H43.682l-9.81 11.572h66.704l9.531-11.573z"
            fill={presets(brand)[600]}
          />
          <path
            d="M53.722 0h64.934a2.76 2.76 0 012.103.974l24.792 29.241 24.789 29.241a2.752 2.752 0 01.403 2.938 2.77 2.77 0 01-1.02 1.166 2.791 2.791 0 01-1.49.44h-60.51a2.756 2.756 0 01-2.128-1.005L53.722 0zM.66 59.456a2.751 2.751 0 00-.417 2.95c.221.48.577.887 1.024 1.172.448.285.968.437 1.5.438h60.51a2.76 2.76 0 002.129-1.006l8.703-10.567H6.619L.66 59.457z"
            fill={presets(brand)[400]}
          />
        </Icon>
      )}
    </ThemeContext.Consumer>
  );
};

export default Logo;
