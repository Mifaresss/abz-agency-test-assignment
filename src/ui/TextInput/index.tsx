import { getClsNames } from '@/utils/getClsNames'
import { InputHTMLAttributes, forwardRef, useId } from 'react'
import s from './index.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: string | boolean
	additionalField?: string
}

export const TextInput = forwardRef<HTMLInputElement, Props>(
	({ label, error, additionalField, id, type, placeholder, ...props }: Props, ref) => {
		const innerId = useId()

		return (
			<div className={getClsNames(s.wrapper, [], { [s.error]: !!error })}>
				<input
					placeholder={placeholder ?? ''}
					ref={ref}
					id={id ?? innerId}
					className={getClsNames(s.input)}
					type={type ?? 'text'}
					{...props}
				/>
				<label htmlFor={id ?? innerId} className={getClsNames(s.label)}>
					{label}
				</label>
				<span className={getClsNames(s.additionalField)}>
					{error ?? additionalField}
				</span>
			</div>
		)
	},
)
TextInput.displayName = 'TextInput'
