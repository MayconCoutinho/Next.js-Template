import styles from "./Footer.module.scss";

export function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.container_name}>
				<h1 className={styles.LogoNome}> Maycon</h1>
				<h1 className={styles.LogoSobreNome}> Coutinho</h1>
			</div>
			<div className={styles.social_icons_container}>
				<a
					href="https://www.linkedin.com/in/maycon-coutinho/"
					target="_blank"
					className={styles.social_icon}
					rel="noreferrer"
				/>
				<a
					onClick={() => {
						alert("mayconcoutinhoart@gmail.com");
					}}
					target="_blank"
					className={styles.social_icon}
				/>
				<a
					href="https://api.whatsapp.com/send/?text=Ol%C3%A1%20meu%20nome%20%C3%A9%20Maycon%20Coutinho,%20%20sou%20Desenvolvedor%20Full%20Stack%20e%20esse%20%C3%A9%20o%20meu%20WhatsApp&phone=5528999287132"
					target="_blank"
					className={styles.social_icon}
					rel="noreferrer"
				/>
			</div>
			<ul className={styles.footer_menu_container}>
				<li onClick={() => alert("Legal")} className={styles.menu_item}>
					Legal
				</li>
				<li onClick={() => alert("Cookies")} className={styles.menu_item}>
					Cookies
				</li>
				<li onClick={() => alert("Privacy")} className={styles.menu_item}>
					Privacy
				</li>
				<li onClick={() => alert("Shipping")} className={styles.menu_item}>
					Shipping
				</li>
				<li onClick={() => alert("Refounds")} className={styles.menu_item}>
					Refounds
				</li>
			</ul>
			<span className={styles.copyright}>
				&copy;2023, Template Next.js Maycon Coutinho. All rights reserved.
			</span>
		</div>
	);
}
