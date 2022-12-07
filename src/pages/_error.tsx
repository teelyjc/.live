import Layout from "@/components/layout/Layout";
import type { NextApiResponse } from "next";

export interface ErrorType {
	statusCode: number;
}

export interface ErrorStatus {
	res: NextApiResponse;
	err: any;
}

function Error({ statusCode }: ErrorType) {
  return (
    <Layout>
			<p>
				{statusCode
					? `An error ${statusCode} occurred on server`
					: 'An error occurred on client'}
    	</p>
		</Layout>
  )
}

Error.getInitialProps = ({ res, err }: ErrorStatus) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
