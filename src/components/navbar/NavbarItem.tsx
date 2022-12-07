import Link from "next/link";

export interface NavbarItemType {
	href: string;
	title: string;
}

export default function NavbarItem({ href, title }: NavbarItemType ) {
	return (
		<Link href={ href } className="text-white hover:text-blue-500 text-lg">
			{ title }
		</Link>
	)
}
