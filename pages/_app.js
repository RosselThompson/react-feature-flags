import "../styles/globals.css";
import { KHFlagProvider, defaultFlags } from '../providers/KHFlagProvider';

function MyApp({ Component, pageProps }) {
	return <KHFlagProvider defaults={defaultFlags}>
		<Component {...pageProps} />;
	</KHFlagProvider>
}

export default MyApp;
