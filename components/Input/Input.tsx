import { twMerge } from "tailwind-merge";


type InputOrTextArea = (React.InputHTMLAttributes<HTMLInputElement> |
    React.TextareaHTMLAttributes<HTMLTextAreaElement>);

export type  InputProps ={
    label?: string,
    multiline?: boolean,
    disabled?: boolean,
} & InputOrTextArea

function InputOrTextArea (props: InputProps) {
    if (props.multiline) {
        return <textarea {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} />
    }
    return <input {...props as React.InputHTMLAttributes<HTMLInputElement> } />
}
export function Input({label, disabled, className, ...rest}: InputProps) {
    return (
    <div className='relative'>
        {label && <label className="absolute pt-1 pl-3 text-xs">{label}</label>}
        <InputOrTextArea 
        disabled={disabled}
        className={twMerge(
            `bg-dark text-gray-primary rounded-md p-3
             disabled:bg-disabled disabled:border-2 disabled:border-disabled
             ${label && 'pt-5'}
            `
            , className
        )} 
        {...rest}
        />
    </div>)
}
