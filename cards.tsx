import { DataI } from "../types/DataI";
import Shohin from '../../public/Shohin.jpg'
import Image from "next/image";
import { truncateText } from "../utils/utils";
import './card.css'

export default function Card ({data}:{data: DataI}) {
	return (
		<>
			<h1 className="UserName text-2xl">{data.UName}</h1>
			<div className="cntImg">
				<Image className="ImgUser" alt="shohin" width={200} height={200} src={data.photo}/>
			</div>
			<p className="textUser">{truncateText(data.text, 10) }</p>
		</>
	)
}