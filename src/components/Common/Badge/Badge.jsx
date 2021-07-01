import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./Badge.css";

const Badge = ({
    value, className, inline, circle, ...rest
}) => {
    const text = typeof value === 'string' || value instanceof String;

    const classes = classnames(
        'Badge',
        className,
        {inline},
        {circle},
        {text}
    )

    return <span className={classes} {...rest}>{value}</span>
}

Badge.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    className: PropTypes.string,
    inline: PropTypes.bool,
    circle: PropTypes.bool
}

Badge.defaultProps = {
    value: '',
    className: '',
    inline: false,
    circle: false
}

export default Badge;