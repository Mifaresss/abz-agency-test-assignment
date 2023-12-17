import { getClsNames } from '@/utils/getClsNames'
import { HTMLAttributes } from 'react'
import s from './index.module.css'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
	label: string
}

export function Title({ label, className, ...props }: Props) {
	return (
		<h1 className={getClsNames(s.title, [className])} {...props}>
			{label}
		</h1>
	)
}
