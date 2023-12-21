import { User } from '@/types/User'
import { UserPhoto } from '@/ui/UserPhoto'
import { getClsNames } from '@/utils/getClsNames'
import s from './index.module.css'

type Props = User

export function Card({
	name,
	photo,
	email,
	phone,
	position,
	registration_timestamp,
}: Props) {
	return (
		<li className={getClsNames(s.card)}>
			<UserPhoto src={photo} />
			<p className={getClsNames(s.userName)}>{name}</p>
			<div className={getClsNames(s.info)}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
					<p>
						Дата создания: {new Date(registration_timestamp).toLocaleDateString()}
					</p>
					<p>
						Время создания: {new Date(registration_timestamp).toLocaleTimeString()}
					</p>
				</div>
				<p>{position}</p>
				<p>{email}</p>
				<p>{phone}</p>
			</div>
		</li>
	)
}
