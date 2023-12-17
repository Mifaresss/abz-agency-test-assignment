import { GETRequest } from '@/modules/GETRequest'
import { HeroSection } from '@/modules/HeroSection'
import s from './page.module.css'

export default function Home() {
	return (
		<main className={s.main}>
			<HeroSection />
			<GETRequest />
			<div style={{ gridColumn: 'content' }}>footer</div>
		</main>
	)
}
