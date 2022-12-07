export interface NavbarNavType {
	children: React.ReactNode
}

export default function NavbarNav({ children }: NavbarNavType) {
	return (
		<div className="flex flex-row justify-between bg-black px-24 py-6 w-full">
				<h1 className="text-white text-xl">Tannatee Juchan</h1>
				<ul className="flex flex-row space-x-4">
					{ children }
				</ul>
			</div>
	)
}
