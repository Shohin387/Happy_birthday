'use client'

import Carusel from "@/components/pp/carusel"
import Avatar from "@/components/ui/Avatar"
import { Data } from "@/data/data"
import { DataI } from "@/types/DataI"
import { useParams } from "next/navigation"
import './carusel.css'

export default function MainBlock() {
	const {id} = useParams()
	const userData: DataI = Data.filter((el: DataI) => el.id == Number(id))[0]
	console.log(userData)
	return(
		<>
		<main className="grid gap-10 items-center justify-center" style={{marginTop: '20px'}}>
			<article className="w-max rounded-xl" style={{backgroundColor:" rgba(244, 244, 244, 0.386)", backdropFilter: 'blur(8px)', width: '630px'}}> 
				<div className="grid gap-10 grid-cols-7 justify-center h-1/12 items-center">
					<Avatar size={70} urlAvatar={userData.photo} userName={userData.UName}/>
					<h1  className="ml-10 text-xl font-600">{userData.UName}</h1>
				</div>
			</article>
			
		</main>
		
		<article >
			<Carusel items={[{src: userData.video, type: "video"}, {src: userData.photo, type: "photo"}]}/>
		</article>
		<article className="z-10 grid justify-center items-center p-9 " >
			<div className="border-t-2 border-t-fuchsia-100 overflow-y-scroll max-h-22 " style={{backgroundColor:" rgba(244, 244, 244, 0.386)", backdropFilter: 'blur(8px)', width: '630px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', scrollbarWidth: 'unset'}}>
				<h2>Вот его поздравление: {userData.text}</h2>
			</div>
			
		</article>
		
		</>
		
		
	)
}