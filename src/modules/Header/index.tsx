import { Button } from '@/ui/Button'
import { getClsNames } from '@/utils/getClsNames'
import logo from '@images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { HTMLAttributes } from 'react'
import s from './index.module.css'

interface Props extends HTMLAttributes<HTMLElement> {}

export function Header({ children, className, ...props }: Props) {
	return (
		<header className={getClsNames(s.header, [className])} {...props}>
			<div className={getClsNames(s.container)}>
				<Link href='/'>
					<Image src={logo} alt='logo' />
				</Link>
				<div className={getClsNames(s.wrapperButtons)}>
					<Link href='#users'>
						<Button label='Users' />
					</Link>
					<Link href='#sign-up'>
						<Button label='Sign up' />
					</Link>
				</div>
			</div>
		</header>
	)
}
