import styles from "./Header.module.scss";

export const Header = () => {
	return (
		<div className={styles.header}>
			<h1 className={styles.LogoNome}> Maycon </h1>
			<h1 className={styles.LogoSobreNome}> Coutinho</h1>
		</div>
	);
};
