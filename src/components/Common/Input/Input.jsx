import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./Input.css";

const Input = ({
    id, className, label, error, ...attrs
}) => {
    const classes = classnames(
        'input',
        className,
        { error }
    )

    return (
        <div className="inputWrapper">
            <div className="labelsWrapper">
                {label
                && <label className="inputLabel" htmlFor={id}>{label}</label>
                }
                {attrs.required
                && <span className="inputRequired">Required</span>
                }
            </div>
            <input
                name={id}
                id={id}
                className={classes}
                {...attrs}
            />
            {error
            && <span className="inputError">{error}</span>
            }
        </div>
    );
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string
}

Input.defaultProps = {
    id: null,
    className: '',
    label: '',
    error: ''
}

export default Input;