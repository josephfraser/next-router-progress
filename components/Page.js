import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';

Router.onRouteChangeStart = () => {
    NProgress.start();
};
Router.onRouteChangeComplete = () => {
    NProgress.done();
};

Router.onRouteChangeError = () => {
    NProgress.done();
};

export default function Page({ children }) {
    return (
        <div className="page">
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
            </nav>

            <section>
                {children}
            </section>

        </div>
    )
}