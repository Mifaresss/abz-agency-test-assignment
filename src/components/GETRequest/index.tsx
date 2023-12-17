import { getClsNames } from '@/utils/getClsNames'
import s from './index.module.css'

interface Props {}

export function GETRequest({}: Props) {
	return <section className={getClsNames(s.getRequest)}></section>
}
