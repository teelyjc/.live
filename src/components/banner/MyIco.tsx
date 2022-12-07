import Link from "next/link"
import Image from "next/image";

export interface IcoInfo {
	images: string;
	href: string;
	alt: string;
}

export default function MyIco({ images, href, alt }: IcoInfo) {
	return (
		<Link href={ href } target="_blank">
			<Image src={ images } alt={ alt } className="hover:scale-110 transition delay-150 duration-300 ease-in-out" />
		</Link>
	)
}
