import { getClsNames } from '@/utils/getClsNames'
import { InputHTMLAttributes, useId } from 'react'
import s from './index.module.css'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	label?: string
}

export function RadioButton({ className, label, id, ...props }: Props) {
	const innerId = useId()

	return (
		<label htmlFor={id ?? innerId} className={getClsNames(s.label, [className])}>
			<svg className={s.icon} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'>
				<circle cx='10' cy='10' r='9.5' className={s.external} />
				<circle cx='10' cy='10' r='5' className={s.internal} />
			</svg>
			{label}
			<input id={id ?? innerId} className={getClsNames(s.input)} type='radio' {...props} />
		</label>
	)
}
