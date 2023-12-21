import { HeroSection } from '@/modules/HeroSection'
import { UserCreation } from '@/modules/UserCreation'
import { Users } from '@/modules/Users'
import s from './page.module.css'

export default function Home() {
	return (
		<main className={s.main}>
			<HeroSection />
			<Users />
			<UserCreation />
		</main>
	)
}
