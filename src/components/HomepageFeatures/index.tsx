import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Laravel Feel in WordPress',
        Svg: require('@site/static/img/wordpress.svg').default,
        description: (
            <>
                <strong>Write WordPress like Laravel.</strong><br />
                Dependency Injection, Service Providers, Facades, Eloquent — everything Laravel developers love, directly in WordPress. No context switching, no compromises.
            </>
        ),
    },
    {
        title: 'Beyond Template Hierarchy',
        Svg: require('@site/static/img/routing.svg').default,
        description: (
            <>
                <strong>Your URLs, your rules.</strong><br />
                Define custom routes with <code>Route::get()</code>, return <code>Response::json()</code>, <code>Response::redirect()</code> — for CSS endpoints, sitemaps, custom APIs. WordPress handles the rest.
            </>
        ),
    },
    {
        title: 'Convention Over Configuration',
        Svg: require('@site/static/img/sloth.svg').default,
        description: (
            <>
                <strong>Drop a class, it just works.</strong><br />
                Models, Taxonomies, API Controllers, Service Providers — put a class in the right directory and Sloth discovers it automatically. No registration, no boilerplate.
            </>
        ),
    },
    {
        title: 'Actually Testable Themes',
        Svg: require('@site/static/img/testing.svg').default,
        description: (
            <>
                <strong>Your theme deserves real tests.</strong><br />
                Write unit tests for your theme code with Pest and Brain\Monkey. No running WordPress required. Because quality WordPress development deserves proper tooling.
            </>
        ),
    },
    {
        title: 'Built in the Wild',
        Svg: require('@site/static/img/built.svg').default,
        description: (
            <>
                <strong>By agency developers, for agency developers.</strong><br />
                Sloth was born from years of real-world WordPress projects — tight deadlines, legacy codebases, client demands, plugin conflicts. Every abstraction, every convention exists because we needed it ourselves.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={styles.feature}>
            <div className="text--center invert">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.featureList}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
