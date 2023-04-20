import "../styles/globals.css";
import { GlobalProvider } from "../global/context/useContext.js";

function MyApp({ Component, pageProps }) {
	return (
		<GlobalProvider>
			<Component {...pageProps} />
		</GlobalProvider>
	);
}
export default MyApp;
