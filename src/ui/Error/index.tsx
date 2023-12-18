import { getClsNames } from '@/utils/getClsNames'
import s from './index.module.css'

interface Props {
	error: string
}

export function Error({ error }: Props) {
	return (
		<div className={getClsNames(s.error)}>
			<div>Something went wrong:</div>
			<div>{error}</div>
		</div>
	)
}
