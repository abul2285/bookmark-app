// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";
import React from "react";

import ButtonStc from "./Button.stc";

function Button(props) {
  const {
    icon,
    children,
    type: btnType,
    htmlType = "button",
    ...restOfProps
  } = props;
  return (
    <ButtonStc type={htmlType} btnType={btnType} {...restOfProps}>
      {/* {icon && <FontAwesomeIcon fixedWidth icon={icon} />}  */}
      {children}
    </ButtonStc>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["1x", "2x", "3x"]),
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default Button;
