var config = {
    style: 'mapbox://styles/davidviry/cjkwsa3sq28i22robvnbc3mz3', // stylesheet location
    accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'Lifetrack',
            title: 'Lifetrack',
            image: 'src/1.jpg',
            description: 'Zheran Xu (徐哲然) was Born in 1994, the year when Sir Tim Berners-Lee founded W3C and started Internet era. Xu spent his childhood and finished high school in Zhoushan, an Island on the east of China.',
            location: {
                center: [122.18669, 30.07747],
                zoom: 9.74,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    //layer: 'phl-city-limits',
                    //opacity: .45
                }
            ],
            onChapterExit: [
                {
                    //layer: 'phl-city-limits',
                    //opacity: 0
                }
            ]
        },
        {
            id: 'bike-lanes',
            title: 'Tongji University',
            image: 'src/2.jpg',
            description: 'In 2013, He was honorably admitted to Tongji University, a tier-one University in China, and studied in Computer Science. In July of 2017, He graduated with Bachelor degree.',
            location: {
                center: [121.49978, 31.28536],
                zoom: 14.38,
                pitch: 60.00,
                bearing: -63.20
            },
            onChapterEnter: [
                {
                    //layer: 'phl-bike-network',
                    //opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'University of Nottingham',
            title: 'University of Nottingham',
            image: 'src/3.jpg',
            description: 'On September, 2017, a new journey started. Xu continued his acadamic life in University of Nottingham, and focused on the field of Human Computer Interaction.',
            location: {
                center: [-1.18591, 52.95143],
                zoom: 14.21,
                pitch: 60.00,
                bearing: -20.00
            },
            onChapterEnter: [
                {
                    //layer: 'indego-stations',
                    //opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    //layer: 'indego-stations',
                    //opacity: 0
                }
            ]
        },
        {
            id: 'London',
            title: 'London',
            image: 'src/4.jpg',
            description: 'In the last days of UK life, his three months London experience made a indelible difference.',
            location: {
                center: [-0.14027, 51.51384],
                zoom: 14.35,
                pitch: 23.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    //layer: 'belmont',
                    //opacity: 1
                }
            ],
            onChapterExit: [
                {
                    //layer: 'belmont',
                    //opacity: 0
                }
            ]
        },
        {
            id: 'Lujiazui',
            title: 'Shanghai Six Degree Consulting',
            image: 'src/5.jpg',
            description: 'In 2019, He returned and joined a startup in Lujiazui, as a data enginneer.',
            location: {
                center: [121.49838, 31.23632],
                zoom: 14.70,
                pitch: 1.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    //layer: 'wissahickon',
                    //opacity: 1
                }
            ],
            onChapterExit: [
                {
                    //layer: 'wissahickon',
                    //opacity: 0
                }
            ]
        },
        {
            id: 'TJDI',
            title: 'Tongji Design and Innovation College',
            image: 'src/6.jpg',
            description: 'In July, he worked as research intern in Tongji D&I, collaborated with Center of Digital Innovation and City Science Lab',
            location: {
                center: [121.50313, 31.28180],
                zoom: 15.73,
                pitch: 55.00,
                bearing: -64.00
            },
            onChapterEnter: [
                {
                    //layer: 'pennypack',
                    //opacity: 1
                }
            ],
            onChapterExit: [
                {
                    //layer: 'pennypack',
                    //opacity: 0
                }
            ]
        },
        {
            id: 'SSME',
            title: 'Siemens Healthineers',
            image: '',
            description: 'In 2020, he joined Siemens Healthineers as an enginneer.',
            location: {
                center: [121.61094, 31.10497],
                zoom: 16.45,
                pitch: 41.00,
                bearing: -0.54
            },
            onChapterEnter: [
                {
                    //layer: 'pennypack',
                    //opacity: 1
                }
            ],
            onChapterExit: [
                {
                    //layer: 'pennypack',
                    //opacity: 0
                }
            ]
        }
    ]
};