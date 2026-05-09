import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Particles, {initParticlesEngine} from '@tsparticles/react';
import {loadFull} from 'tsparticles';
import {useEffect, useState} from 'react';
import Logo from '@site/static/img/logo-colored.svg';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    const [init, setInit] = useState(false);
    const imgUrl = useBaseUrl('img/sloth.jpg');

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => setInit(true));
    }, []);

    return (
        <header className={clsx('hero hero--primary invert', styles.heroBanner)}
                style={{position: 'relative', overflow: 'hidden', background: '#ff0077'}}>
            {init && (
                <Particles
                    id="tsparticles"
                    options={{
                        fullScreen: {enable: false},
                        fpsLimit: 120,
                        background: {
                            color: {value: '#ff0077'},
                            image: `url('${imgUrl}')`,
                            position: '50% 50%',
                            repeat: 'no-repeat',
                            size: 'cover',
                            opacity: 1,
                        },
                        backgroundMask: {
                            enable: true,
                            cover: {
                                color: {value: '#ff0077'},
                                opacity: 1,
                            },
                        },
                        particles: {
                            number: {value: 120},
                            color: {value: '#ffffff'},
                            opacity: {value: 1},
                            size: {value: {min: 2, max: 4}},
                            move: {enable: true, speed: 0.75},
                            links: {
                                enable: true,
                                color: '#ffffff',
                                opacity: 0.3,
                                distance: 150,
                            },
                        },
                        interactivity: {
                            events: {
                                onHover: {enable: true, mode: 'bubble'},
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    size: 100,
                                    duration: 2,
                                    opacity: 1,
                                },
                            },
                        },
                    }}
                />
            )}
            <div className="container" style={{position: 'relative', zIndex: 1}}>
                <Heading as="h1" className="hero__title">
                    <Logo style={{width: '50%'}}/>
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/introduction">
                        Get started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
