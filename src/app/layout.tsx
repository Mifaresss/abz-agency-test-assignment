import { Header } from '@/components/Header'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './styles/reset.css'
import './styles/globals.css'

const nunito = Nunito({
	weight: '400',
	style: 'normal',
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Test assignment for front-end developer',
	description: 'Test assignment for front-end developer | Mifaresss',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={nunito.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
