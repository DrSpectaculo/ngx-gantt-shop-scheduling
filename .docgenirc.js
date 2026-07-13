module.exports = {
    mode: 'full',
    title: 'NgxGantt',
    siteProjectName: 'example',
    outputDir: 'dist/site',
    logoUrl: 'assets/imgs/logo.png',
    locales: [{ key: 'en-us', name: 'English' }],
    defaultLocale: 'en-us',
    navs: [
        {
            title: 'Examples',
            path: 'examples',
            locales: {
                'en-us': {
                    title: 'Examples'
                }
            }
        }
    ],
    libs: [
        {
            name: 'ngx-gantt',
            rootDir: './example/src/app/apis',
            exclude: [],
            categories: [
                {
                    id: 'core',
                    title: '核心组件',
                    locales: {
                        'en-us': {
                            title: 'Core Components'
                        }
                    }
                },
                {
                    id: 'feature',
                    title: '功能组件',
                    locales: {
                        'en-us': {
                            title: 'Feature Components'
                        }
                    }
                }
            ]
        }
    ]
};
