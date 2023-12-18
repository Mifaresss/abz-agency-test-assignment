'use client'
import { Title } from '@/ui/Title'
import { getClsNames } from '@/utils/getClsNames'
import s from './index.module.css'
import { RadioButton } from '@/ui/RadioButton'
import { TextInput } from '@/ui/TextInput'
import { Form } from '@/components/Form'

interface Props {}

export function PostRequest({}: Props) {
	return (
		<section className={getClsNames(s.postRequest)}>
			<Title className={getClsNames(s.title)} label='Working with POST request' />
			<Form />
		</section>
	)
}
