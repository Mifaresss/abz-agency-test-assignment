import { HeroSection } from '@/components/HeroSection'
import s from './page.module.css'

export default function Home() {
	return (
		<main className={s.main}>
			<HeroSection />
		</main>
	)
}
