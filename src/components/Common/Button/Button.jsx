import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import ButtonStyles from "./button.module.scss";

let cx = classNames.bind(ButtonStyles);

const Button = ({
    children, className, active, disabled, onClick, ...rest
}) => {
    const Classes = cx(
        ButtonStyles.btn,
        className,
        {[ButtonStyles.selected]: active}
    )

    const onClickAction = e => {
        if (disabled) {
            e.preventDefault();
        } else {
            return onClick(e);
        }
    };

    return (
        <>
            <button
                className={Classes}
                disabled={disabled}
                onClick={onClickAction}
                {...rest}
            >{children}</button>
        </>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

Button.defaultProps = {
    children: 'Submit',
    className: '',
    active: false,
    disabled: false,
    onClick: () => {}
}

export default Button;