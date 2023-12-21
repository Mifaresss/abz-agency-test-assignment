import { GetRequest } from '@/modules/GetRequest'
import { HeroSection } from '@/modules/HeroSection'
import { PostRequest } from '@/modules/PostRequest'
import s from './page.module.css'

export default function Home() {
	return (
		<main className={s.main}>
			<HeroSection />
			<GetRequest />
			<PostRequest />
		</main>
	)
}
