'use client'
import { Card } from '@/components/Card'
import { useUsersStore, usersDataFromResponse } from '@/store/users'
import { Button } from '@/ui/Button'
import { Error } from '@/ui/Error'
import { Loader } from '@/ui/Loader'
import { Title } from '@/ui/Title'
import { getClsNames } from '@/utils/getClsNames'
import { useEffect, useState } from 'react'
import s from './index.module.css'

interface Props {}

export function Users({}: Props) {
	const { error, isLoading, users, fetchUsers, links, setState } = useUsersStore(s => s)
	const [internalIsLoading, setInternalIsLoading] = useState(false)

	useEffect(() => {
		fetchUsers()
	}, [fetchUsers])

	async function handleClick() {
		if (links.nextUrl) {
			setInternalIsLoading(true)

			try {
				const res = await fetch(links.nextUrl)
				const data = await res.json()
				const mergedData = usersDataFromResponse({
					...data,
					users: [...users, ...data.users],
				})
				setState(mergedData)
			} catch (error) {
				setState({ error: error as Error })
			} finally {
				setInternalIsLoading(false)
			}
		}
	}

	return (
		<section className={getClsNames(s.usersSection)} id='users'>
			<Title className={getClsNames(s.title)} label='Working with GET request' />
			{isLoading ? (
				<Loader />
			) : error ? (
				<Error error={error.message} />
			) : (
				<>
					<ul className={getClsNames(s.users)}>
						{users.map(user => (
							<Card key={user.id} {...user} />
						))}
					</ul>
					{links.nextUrl &&
						(internalIsLoading ? (
							<Loader />
						) : (
							<Button
								onClick={handleClick}
								className={getClsNames(s.button)}
								label='Show more'
							/>
						))}
				</>
			)}
		</section>
	)
}
