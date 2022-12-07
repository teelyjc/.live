import Info from "@/components/about/Info";
import Banner from "@/components/banner/Banner";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
		<Layout>
			<Banner />
			<div className="mx-24 my-5">
				<hr />
			</div>
			<Info />
		</Layout>
  )
}
