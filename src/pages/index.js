import styles from "../scss/Home.module.scss";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { InfoHead } from "../components/infoHead";
import { StarBackgroud } from "../components/starBackgroud";
import { Welcome } from "../components/welcome";

export default function Home() {
	return (
		<div className={styles.container}>
			<InfoHead
				title="Template Next.js!"
				meta_name="Template Next.js!"
				meta_content="Template Next.js!"
			/>
			<Header />
			<StarBackgroud />
			<div className={styles.space} />
			<Welcome />
			<Footer />
		</div>
	);
}
