export default function Info() {
	return (
		<div className="flex flex-col mx-12 lg:mx-44">
			<h1 className="text-3xl lg:text-5xl font-semibold">Infomation:</h1>
			<p className="text-xl lg:text-2xl font-medium indent-5">Tannatee Juchan (TeeLy)</p>
			<p className="text-lg lg:text-xl font-medium">Thamaka, Kanchanaburi.</p>
			<h1 className="text-xl lg:text-3xl font-medium mt-5">Technologies and Languages:</h1>
			<ul className="list-disc indent-5 space-y-1.5">
				<li className="text-lg lg:text-2xl">Languages: JavaScript, TypeScript, C, Python, Java, PHP</li>
				<li className="text-lg lg:text-2xl">Frameworks: ReactJS, NextJS, Svelte, VueJS, TailwindCSS, Bootstrap</li>
				<li className="text-lg lg:text-2xl">DB: MySQL, MongoDB</li>
				<li className="text-lg lg:text-2xl">Tools: Git, Docker, VSCode, Steam?</li>
			</ul>
			<h1 className="text-xl lg:text-3xl font-medium mt-5">Education:</h1>
			<ul className="list-disc indent-5 space-y-1.5">
				<li className="text-lg lg:text-2xl">Electrician - DonBosco Technological College (Vocational Certificate) - GPA: 2.05</li>
				<li className="text-lg lg:text-2xl">Computer Hardware - Ratchaburi Technological College (Diploma) - GPA: 2.92</li>
				<li className="text-lg lg:text-2xl">
					<span className="text-green-400">Currently </span>
					: Computer Science Rajabhat Nakorn Pathom University (Bachelor&apos;s degree)
				</li>
			</ul>
			<h1 className="text-xl lg:text-3xl font-medium mt-5">Experiences:</h1>
			<ul className="list-disc indent-5 space-y-1.5">
				<li className="text-lg lg:text-2xl text-red-500">Nothing</li>
			</ul>
			<h1 className="text-xl lg:text-3xl font-medium mt-5">Interested:</h1>
			<ul className="list-disc indent-5 space-y-1 5">
				<li className="text-lg lg:text-2xl">Software development, Photographer</li>
				<li className="text-lg lg:text-2xl">Amatuer Radio : E24VUY</li>
				<li className="text-lg lg:text-2xl">Musical Instrumental : Guitar, Drums</li>
			</ul>
		</div>
	)
}
