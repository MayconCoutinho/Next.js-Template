import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export function GlobalProvider({ children }) {
	const [boasVindas, setBoasVindas] = useState(
		"Bem-vindo 👋 ao meu template Next.js! Este é um modelo básico que pode ser usado como ponto de partida para construir aplicativos web modernos e escaláveis. Com Next.js, você pode criar páginas estáticas ou dinâmicas com facilidade, aproveitando o poder do React e do Node.js. Sinta-se à vontade para explorar 🕵️‍♀️ e personalizar este modelo para atender às suas necessidades específicas. 👨‍💻🚀"
	);

	return (
		<GlobalContext.Provider value={{ boasVindas, setBoasVindas }}>
			{children}
		</GlobalContext.Provider>
	);
}
