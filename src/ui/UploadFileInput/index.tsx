import { getClsNames } from '@/utils/getClsNames'
import { ChangeEvent, InputHTMLAttributes, forwardRef, useId, useState } from 'react'
import s from './index.module.css'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	label?: string
	error?: string | boolean
}

export const UploadFileInput = forwardRef<HTMLInputElement, Props>(
	({ label, error, id, className, onChange, ...props }: Props, ref) => {
		const innerId = useId()

		const [fileName, setFileName] = useState('')

		function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
			if (e.target.files && e.target.files.length > 0) {
				setFileName(e.target.files[0].name)
			} else {
				setFileName('')
			}
		}

		return (
			<label
				className={getClsNames(s.label, [className], { [s.error]: !!error })}
				htmlFor={id ?? innerId}
			>
				<span className={getClsNames(s.labelText)}>
					{fileName || (label ?? 'Upload file')}
				</span>
				<input
					className={getClsNames(s.input)}
					id={id ?? innerId}
					type='file'
					ref={ref}
					onChange={handleFileChange}
					{...props}
				/>
				<span className={getClsNames(s.errorText)}>{error}</span>
			</label>
		)
	},
)
UploadFileInput.displayName = 'UploadFileInput'
