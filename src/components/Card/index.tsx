import { User } from '@/types/User'
import { UserPhoto } from '@/ui/UserPhoto'
import { getClsNames } from '@/utils/getClsNames'
import s from './index.module.css'

type Props = User

export function Card({ name, photo, email, phone, position }: Props) {
	return (
		<li className={getClsNames(s.card)}>
			<UserPhoto src={photo} />
			<p className={getClsNames(s.userName)}>{name}</p>
			<div className={getClsNames(s.info)}>
				<p>{position}</p>
				<p>{email}</p>
				<p>{phone}</p>
			</div>
		</li>
	)
}
