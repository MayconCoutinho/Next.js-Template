import Head from "next/head";

export const InfoHead = ({ title, meta_name, meta_content }) => {
	return (
		<Head>
			<title> {title} </title>
			<meta name={meta_name} content={meta_content} />
			{/* <link rel="icon" href="/favicon.ico" />  */}
		</Head>
	);
};
