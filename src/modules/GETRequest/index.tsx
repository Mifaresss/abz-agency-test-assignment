'use client'
import { Card } from '@/components/Card'
import { useUsersStore } from '@/store/users'
import { Title } from '@/ui/Title'
import { getClsNames } from '@/utils/getClsNames'
import { useEffect } from 'react'
import s from './index.module.css'

interface Props {}

export function GETRequest({}: Props) {
	const users = useUsersStore(s => s.users)
	const getUsers = useUsersStore(s => s.getUsers)

	useEffect(() => {
		getUsers()
	}, [getUsers])

	useEffect(() => {
		console.log(users)
	}, [users])

	return (
		<section className={getClsNames(s.getRequest)}>
			<Title className={getClsNames(s.title)} label='Working with GET request' />
			<ul className={getClsNames(s.users)}>
				{users.map(user => (
					<Card key={user.id} {...user} />
				))}
			</ul>
		</section>
	)
}
