import Page from '../components/Page';
import '../styles.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <Page>
            <Component {...pageProps} />
        </Page>
    )
}