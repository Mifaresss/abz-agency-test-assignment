import { Button } from '@/ui/Button'
import { getClsNames } from '@/utils/getClsNames'
import logo from '@images/logo.svg'
import Image from 'next/image'
import { HTMLAttributes } from 'react'
import s from './index.module.css'

interface Props extends HTMLAttributes<HTMLElement> {}

export function Header({ children, className, ...props }: Props) {
	return (
		<header className={getClsNames(s.header, [className])} {...props}>
			<div className={getClsNames(s.container)}>
				<Image src={logo} alt='logo' />
				<div className={getClsNames(s.wrapperButtons)}>
					<Button label='Users' />
					<Button label='Sign up' />
				</div>
			</div>
		</header>
	)
}
