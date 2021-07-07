import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./Image.css"

const Image = ({
    src, alt, className, width, height, circle, ...rest
}) => {
    if(!src) {
        src = `http://via.placeholder.com/${width}x${height}`;
    }

    const classes = classnames(
        'img',
        className,
        { circle }
    )

    return (
        <img
            src={src}
            alt={alt}
            className={classes}
            width={width}
            height={height}
            {...rest}
        />
    )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    circle: PropTypes.bool
}

Image.defaultProp = {
    src: '',
    alt: '',
    className: '',
    width: 100,
    height: 100,
    circle: false
}

export default Image;