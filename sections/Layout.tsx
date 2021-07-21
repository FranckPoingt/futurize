import { useRouter } from 'next/router';
import Head from 'next/head';
import Footer from "./Footer";
import Header from "./Header";


import styles from '../styles/Layout.module.css'

const Layout = ({ children, pageMeta }) => {
    const router = useRouter();

    const meta = {
        title: 'The future of this world matters to us. We know it does to you, too.',
        description: 'Futurize.io is here to give power to people like you, the sustainability advocates of this world.',
        type: 'website',
        ...pageMeta,
    };
    return (
        <>
        <Head>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:url" content={`http://localhost:3000${router.asPath}`} />
            <meta property="og:site_name" content="Futurize.io" />
            <meta property="og:type" content={meta.type} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            {meta.date && (
                <meta property="article:published_time" content={meta.date} />
            )}
        </Head>
        <div className={styles.container}>
            <Header /> 
                <main className={styles.name}>{children}</main>
            <Footer />
        </div>
        </>
    )
}

export default Layout;