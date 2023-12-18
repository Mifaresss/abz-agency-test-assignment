import { getClsNames } from '@/utils/getClsNames'
import { InputHTMLAttributes, useId } from 'react'
import s from './index.module.css'
import { UseFormRegister } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: string | boolean
	additionalField?: string
	register: UseFormRegister<any>
	name: string
}

export function TextInput({
	label,
	error,
	additionalField,
	id,
	required = true,
	type,
	register,
	name,
	...props
}: Props) {
	const innerId = useId()

	return (
		<div className={getClsNames(s.wrapper, [], { [s.error]: !!error })}>
			<input
				{...register(name)}
				id={id ?? innerId}
				className={getClsNames(s.input)}
				required={required}
				type={type ?? 'text'}
				{...props}
			/>
			<label htmlFor={id ?? innerId} className={getClsNames(s.label)}>
				{label}
			</label>
			<span className={getClsNames(s.additionalField)}>{error ?? additionalField}</span>
		</div>
	)
}
