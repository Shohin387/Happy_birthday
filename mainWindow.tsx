import { Data } from "../data/data"
import { DataI } from "../types/DataI"
import Card from "./cards"
import './card.css'
import Link from "next/link"

export default function Cards() {
	return (
		<main className="mainCardWin">
			{Data.map((el: DataI) => (
				<article className="card" key={el.id}>
					<Link href={'/user/' + el.id}>
						<Card data={el} />
					</Link>
					
				</article>
			))}
		</main>
	)
}