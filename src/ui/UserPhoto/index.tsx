import { getClsNames } from '@/utils/getClsNames'
import Image from 'next/image'
import s from './index.module.css'

interface Props {
	className?: string
	src: string
	width?: number
	height?: number
	alt?: string
}

export function UserPhoto({ className, src, width = 70, height = 70, alt = '' }: Props) {
	return (
		<Image
			className={getClsNames(s.userPhoto, [className])}
			src={src}
			width={width}
			height={height}
			alt={alt}
		/>
	)
}
