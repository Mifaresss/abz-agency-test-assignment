import { getClsNames } from '@/utils/getClsNames'
import { HTMLAttributes } from 'react'
import s from './index.module.css'

interface Props extends HTMLAttributes<HTMLButtonElement> {
	label: string
}

export function Button({ label, className, ...props }: Props) {
	return (
		<button className={getClsNames(s.button, [className])} {...props}>
			{label}
		</button>
	)
}
