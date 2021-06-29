import React from 'react';
import FormControlStyles from './FormControls.module.scss';
import {Field} from "redux-form";

const FormControl = ({
     input, meta: {touched, error}, ...props
}) => {
    const hasError = error && touched;
    return <div>
        <div className={hasError && FormControlStyles.error}>
            {props.children}
        </div>
        <div className={FormControlStyles.error}>
            {hasError && <span>{error}</span>}
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

export const createField = (name, placeholder = '', text, validators = [], component, props) => {
    return <div>
        <label htmlFor={name}>{text}</label>
        <Field id={name} validate={validators} placeholder={placeholder} name={name} component={component} {...props}/>
    </div>
}