import { GetRequest } from '@/modules/GetRequest'
import { HeroSection } from '@/modules/HeroSection'
import s from './page.module.css'
import { PostRequest } from '@/modules/PostRequest'
import { Loader } from '@/ui/Loader'

export default function Home() {
	return (
		<main className={s.main}>
			<HeroSection />
			<GetRequest />
			<PostRequest />
		</main>
	)
}
