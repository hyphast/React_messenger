import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';
import "./Icon.css"

const Icon = ({
  name, clr, className, onClick, ...attrs
}) => {
    const classes = classNames(
        className,
        {func: onClick}
    );

    const color = clr ? {color: clr} : null;

    return (
        <FontAwesomeIcon
            {...attrs}
            className={classes}
            style={color}
            onClick={onClick}
            icon={name}
        />
    );
};

Icon.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    clr: PropTypes.string,
    onClick: PropTypes.func,
};

Icon.defaultProps = {
    name: '',
    className: '',
    clr: '',
    onClick: null
};

export default Icon;
