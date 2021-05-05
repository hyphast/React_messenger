import React from 'react';
import FormControlCss from './FormControls.module.css';

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return <div>
        <div className={hasError && FormControlCss.error}>
            {props.children}
        </div>
        <div className={FormControlCss.error}>
            {hasError && <span>{meta.error}</span>}
        </div>
    </div>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}