import Image from "next/image";
import axios from "axios";

import { useState, useEffect } from "react";

import MyIco from "@/components/banner/MyIco";

import ProfilePicture from "@/public/images/me.jpg";
import LoadingIco from "@/public/icons/loading-icon.svg";
import EmailIco from "@/public/icons/email-icon.svg";
import FacebookIco from "@/public/icons/facebook-icon.svg";
import InstagramIco from "@/public/icons/instagram-icon.svg";
import GithubIco from "@/public/icons/github-icon.svg";
import DiscordIco from "@/public/icons/discord-icon.svg";

export default function Banner() {
	const [discordData, setDiscordData] = useState<any>([]);

	useEffect(() => {
		const discordData = async () => {
			const { data } = await axios.get("https://discord.com/api/guilds/953724179520299018/widget.json");
			setDiscordData(data);
		}

		discordData();
	}, []);

	return (
		<div className="flex flex-row justify-center justify-self-between lg:space-x-14 space-x-5 mx-2">
				<Image
					src={ ProfilePicture }
					alt="author profile picture"
					className="rounded-full shadow-2xl saturate-150 w-[140px] h-[185px] md:w-[210px] md:h-[270px] lg:w-[300px] lg:h-[390px]"
				/>
				<div className="my-auto">
					<h1 className="lg:text-7xl md:text-5xl text-2xl font-bold">Hi, I&apos;m{" "}
					<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
						TeeLy!
					</span>
					</h1>
					<p className="lg:text-2xl text-sm font-semibold">Student@Developer</p>
					<div className="flex flex-row space-x-2 mt-5">
						{
							discordData.instant_invite
								? (
								<>
									<MyIco images={ FacebookIco } href="https://web.facebook.com/teelyjc/" alt="facebook icon" />
									<MyIco images={ InstagramIco } href="https://www.instagram.com/teelyyy.k/" alt="instagram icon" />
									<MyIco images={ GithubIco } href="https://github.com/teelyjc" alt="github icon" />
									<MyIco images={ EmailIco } href="mailto:ju.tannatee2543@gmail.com" alt="email icon" />
									<MyIco images={ DiscordIco } href={ discordData.instant_invite } alt="discord icon" />
								</>
								)
								: (
								<Image src={ LoadingIco } alt="loading icon" className="animate-spin mx-auto" />
							)
						}
					</div>
				</div>
			</div>
	)
}
