import { usePositionsStore } from '@/store/positions'
import { useTokenStore } from '@/store/token'
import { useUsersStore } from '@/store/users'
import { Button } from '@/ui/Button'
import { Error } from '@/ui/Error'
import { Loader } from '@/ui/Loader'
import { RadioButton } from '@/ui/RadioButton'
import { TextInput } from '@/ui/TextInput'
import { UploadFileInput } from '@/ui/UploadFileInput'
import { getClsNames } from '@/utils/getClsNames'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useId } from 'react'
import { useForm } from 'react-hook-form'
import s from './index.module.css'
import { FormState, validationShema } from './validation'

export function Form() {
	const formId = useId()
	const { isLoading, error, positions, fetchPositions } = usePositionsStore(s => s)
	const { fetchToken } = useTokenStore(s => s)
	const createUser = useUsersStore(s => s.createUser)

	useEffect(() => {
		fetchPositions()
	}, [fetchPositions])

	const {
		register,
		handleSubmit,
		formState: { errors, touchedFields },
		reset,
	} = useForm<FormState>({
		resolver: yupResolver(validationShema),
	})

	async function onSubmit(data: FormState) {
		const token = await fetchToken()

		const dataToRequest = {
			name: data.name,
			email: data.email,
			phone: data.phone,
			position_id: data.position,
			photo: data.photo[0],
		}

		createUser(token, dataToRequest)
	}

	return (
		<form
			className={getClsNames(s.form)}
			method='post'
			onSubmit={handleSubmit(onSubmit)}
			id={formId}
		>
			<TextInput
				{...register('name')}
				label='Your name'
				error={errors.name?.message}
			/>
			<TextInput
				{...register('email')}
				label='Email'
				type='email'
				error={errors.email?.message}
			/>
			<TextInput
				{...register('phone')}
				label='Phone'
				type='tel'
				error={errors.phone?.message}
				additionalField='+38 (XXX) XXX - XX - XX'
			/>
			<fieldset className={s.radioButtons}>
				<legend className={s.radioButtonsTitle}>Select your posittion</legend>
				{isLoading ? (
					<Loader />
				) : error ? (
					<Error error={error.message} />
				) : (
					<div className={s.buttonsWrapper}>
						{positions.map(position => (
							<RadioButton
								{...register('position')}
								key={position.id}
								value={position.id}
								label={position.name}
							/>
						))}
					</div>
				)}
				{errors.position && (
					<span className={s.positionError}>{errors.position.message}</span>
				)}
			</fieldset>
			<UploadFileInput
				{...register('photo')}
				error={errors.photo?.message}
				className={s.fileUpload}
				label='Upload your photo'
				accept='image/jpeg'
			/>
			<Button
				className={s.signUpButton}
				onClick={() => {
					console.log('errors:', errors)
				}}
				disabled={!Object.keys(touchedFields).length}
				label='Sign up'
			/>
		</form>
	)
}
