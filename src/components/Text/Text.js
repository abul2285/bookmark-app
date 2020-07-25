import React from "react";
import TextStc from "./Text.stc";
import PropTypes from "prop-types";

function Text(props) {
    const { children, component, message, ...restOfProps } = props;
    return <TextStc {...restOfProps}>{children || message}</TextStc>;
}

Text.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string,
    component: PropTypes.string
};

export default Text;
