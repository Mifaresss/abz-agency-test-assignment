import { getClsNames } from '@/utils/getClsNames'
import s from './index.module.css'
import { TextInput } from '@/ui/TextInput'
import { useId } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { authValidationSchema } from './validation'
import { Button } from '@/ui/Button'

interface Props {}

export function Form({}: Props) {
	const formId = useId()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(authValidationSchema) })

	async function onSubmit(e: any) {
		console.log('onSubmit:', e)
	}

	return (
		<form
			className={getClsNames(s.form)}
			method='post'
			onSubmit={handleSubmit(onSubmit)}
			id={formId}
		>
			{/* <input style={{ border: '1px solid black' }} type='text' {...register('name')} />
			<input style={{ border: '1px solid black' }} type='email' {...register('email')} />
			<input style={{ border: '1px solid black' }} type='tel' {...register('phone')} /> */}
			<TextInput
				label='Your name'
				name='name'
				register={register}
				error={errors.name?.message}
			/>
			<TextInput
				name='email'
				register={register}
				label='Email'
				type='email'
				error={errors.email?.message}
			/>
			<TextInput
				name='phone'
				register={register}
				label='Phone'
				type='tel'
				error={errors.phone?.message}
				additionalField='+38 (XXX) XXX - XX - XX'
			/>
			<Button
				onClick={() => {
					console.log('errors:', errors)
				}}
				label='Submit'
			/>
		</form>
	)
}
