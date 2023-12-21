import { GETRequest } from '@/modules/GETRequest'
import { HeroSection } from '@/modules/HeroSection'
import { POSTRequest } from '@/modules/POSTRequest'
import s from './page.module.css'

export default function Home() {
	return (
		<main className={s.main}>
			<HeroSection />
			<GETRequest />
			<POSTRequest />
		</main>
	)
}
