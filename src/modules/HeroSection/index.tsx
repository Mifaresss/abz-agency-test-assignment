import { Button } from '@/ui/Button'
import { Title } from '@/ui/Title'
import { getClsNames } from '@/utils/getClsNames'
import s from './index.module.css'

interface Props {}

export function HeroSection({}: Props) {
	return (
		<section className={getClsNames(s.heroSection)}>
			<div className={getClsNames(s.content)}>
				<Title
					className={getClsNames(s.title)}
					label='Test assignment for front-end developer'
				/>
				<p className={getClsNames(s.text)}>
					What defines a good front-end developer is one that has skilled knowledge
					of HTML, CSS, JS with a vast understanding of User design thinking as
					they&apos;ll be building web interfaces with accessibility in mind. They
					should also be excited to learn, as the world of Front-End Development
					keeps evolving.
				</p>
				<Button className={getClsNames(s.button)} label='Sign up' />
			</div>
		</section>
	)
}
