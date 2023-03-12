import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">
                {props.title}
            </label>
            <input
                type={props.type}
                className={props.className}
                ref={ref}
                id={props.name}
                name={props.name}
                onChange={props.onChange}
                autoComplete={props.autoComplete}
                value={props.value}
            />
            <div className={props.errorDiv}>{props.errorMsg}</div>
        </div>
    )
})

export default Input;