'use client'
import { Form } from '@/components/Form'
import { Title } from '@/ui/Title'
import { getClsNames } from '@/utils/getClsNames'
import s from './index.module.css'

interface Props {}

export function PostRequest({}: Props) {
	return (
		<section className={getClsNames(s.postRequest)} id='sign-up'>
			<Title className={getClsNames(s.title)} label='Working with POST request' />
			<Form />
		</section>
	)
}
