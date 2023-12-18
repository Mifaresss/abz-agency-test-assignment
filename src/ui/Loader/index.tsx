import { getClsNames } from '@/utils/getClsNames'
import s from './index.module.css'

interface Props {}

export function Loader({}: Props) {
	return (
		<div className={getClsNames(s.loader)}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}
