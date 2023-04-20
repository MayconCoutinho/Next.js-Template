import styles from "./Welcome.module.scss";
import Image from "next/image";
import { useContext } from "react";
import { GlobalContext } from "../../global/context/useContext.js";

export const Welcome = () => {
	const { boasVindas } = useContext(GlobalContext);
	return (
		<>
			<Image
				alt=""
				src={"/assets/perfil/perfil.png"}
				className={styles.perfil}
				width={200}
				height={200}
			/>
			<h1 className={styles.title}> Template Next.js! </h1>
			<h1 className={styles.descricao}> {boasVindas}</h1>
			<br />
			<a href="https://github.com/MayconCoutinho/Next.js-Template" target="_blank">
				<Image
					alt=""
					src={"/assets/welcome/github.png"}
					className={styles.welcome}
					width={80}
					height={80}
				/>
			</a>
		</>
	);
};
