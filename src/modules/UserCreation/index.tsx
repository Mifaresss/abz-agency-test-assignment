'use client'
import { Form } from '@/components/Form'
import { Title } from '@/ui/Title'
import { getClsNames } from '@/utils/getClsNames'
import successUserCreation from '@images/success-image.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import s from './index.module.css'

export function UserCreation() {
	const [creationResult, setCreationResult] = useState('')

	useEffect(() => {
		if (creationResult) {
			const timeoutFn = setTimeout(() => {
				setCreationResult('')
			}, 5000)

			return () => {
				clearTimeout(timeoutFn)
			}
		}
	}, [creationResult])

	return (
		<section className={getClsNames(s.userCreation)} id='sign-up'>
			<Title
				className={getClsNames(s.title)}
				label={creationResult || 'Working with POST request'}
			/>
			{creationResult ? (
				<Image
					loading='eager'
					className={getClsNames(s.successImg)}
					src={successUserCreation}
					alt='Success user creation'
				/>
			) : (
				<Form setCreationResult={setCreationResult} />
			)}
		</section>
	)
}
