import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = () => {
    NProgress.start();
};
Router.onRouteChangeComplete = () => {
    NProgress.done();
};

Router.onRouteChangeError = () => {
    NProgress.done();
};

const HomePage = () => (
    <div className="center">
        <h1>Home</h1>
    </div>
)

export default HomePage;