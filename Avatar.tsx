'use client'

import Image, { StaticImageData } from "next/image"
import { CSSProperties } from "react"



export default function Avatar({urlAvatar, userName, size=100, radius=50, style, defaultMg=true}: {urlAvatar: string | undefined | StaticImageData, userName: string | undefined, size?: number, radius?: number, style?: CSSProperties, defaultMg?: boolean}) {


	return (
		<>
			
				 <div style={{ 
						width: `${size}px`, 
						height:`${size}px`, 
						overflow: 'hidden', 
						borderRadius: `${radius}%`,
						marginBlockStart: defaultMg ? '20px': '', marginLeft:defaultMg ? '20px' : '', ...style

					}} className={'flex justify-center items-center'}>
						<Image alt="Фото профиля" width={size} height={size}  src={urlAvatar!} />
						<div ></div>
					</div>
				
		</>
	)
}