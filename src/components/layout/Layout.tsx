import NavbarItem from "@/components/navbar/NavbarItem";
import NavbarNav from "@/components/navbar/NavbarNav";
import Head from "next/head";

export interface LayoutType {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutType) {
	return (
		<main className="my-5">
			<Head>
				<title>teelyyy.k&apos;s space</title>
			</Head>

			{ children }
		</main>
	)
}
