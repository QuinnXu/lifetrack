var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'pk.eyJ1IjoieHpyYW5ubm4iLCJhIjoiY2pmaXZxbjIxMGEzaDJ3cThnaTc1a25tNCJ9.Ny6q1ACtjLDEANDbJEIIRw',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: '图说千岛——纪念舟山解放70周年',
    subtitle: '- 海上花园 | 焕彩夺目 -',
    byline: ' Mapbox ',
    footer: '出自 舟山网 - 浙江舟山群岛新区唯一以新闻宣传为主的市级综合性门户网站',
    chapters: [
        {
            id: 'main',
            title: '俯瞰新城，楼宇林立，道路宽阔，绿意盎然',
            image: './src/1-XinCheng.jpg',
            // image: './path/to/image/source.png',
            description: '高楼大厦，刷新城市面貌；璀璨灯火，扮靓城市夜景；全域增绿，串起生态绿脉；提质提速，畅通城市道路。 时下，一座品质高端、充满活力、独具韵味的海上花园城正绽放光华。 几十年来，舟山在“八八战略”引领下，紧紧围绕“五大会战”“四个舟山”建设，以新型城市化为方向，加快推进海上花园城建设，全面实施十大攻坚行动，城市功能、品质和形象提升明显。 枕海而居，踏浪而歌。今日之海上花园城建设，精准发力、锐意创新，正从“规模、速度”向“品质、内涵”转变，推动全面建成小康社会和“十三五”规划圆满收官。 “宜居、宜业、宜游”的新时代海上花园城画卷，愈绘愈美。',
            location: {
                center: [122.20323, 29.98760],
                zoom: 15.67,
                pitch: 0.00,
                bearing: 21.78,
            },
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        },
        {
            id: 'page01',
            title: '1959年',
            image: './src/1959.jpg',
            // image: './path/to/image/source.png',
            description: '建成投产的位于普陀县勾山乡的舟山电厂',
            location: {
                center: [122.24001, 29.98254],
                zoom: 18.42,
                pitch: 22.00,
                bearing: 12.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'page02',
            title: '1973年',
            image: './src/1973-shenjiamen.jpg',
            // image: './path/to/image/source.png',
            description: '帆桅林立的沈家门渔港（叶文清 沈有才 摄）',
            location: {
                center: [122.29503, 29.94540],
                zoom: 16.74,
                pitch: 44.50,
                bearing: -177.60
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'page03',
            title: '1981年',
            image: './src/1981-daishan.jpg',
            description: '岱山街景（叶文清 沈有才 摄）',
            location: {
                center: [122.20204, 30.24658],
                zoom: 17.43,
                pitch: 19.50,
                bearing: 7.08
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'page04',
            title: '1983年9月',
            image: './src/1983.jpg',
            description: '建设中的鸭蛋山码头',
            location: {
                center: [122.05445, 30.00673],
                zoom: 17.34,
                pitch: 42.50,
                bearing: -176.62
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'page05',
            title: '1985年',
            image: './src/1985.jpg',
            description: '舟山船厂建造2000吨船舶',
            location: {
                center: [122.28460, 29.94285],
                zoom: 16.66,
                pitch: 39.50,
                bearing: 8.98
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'page06',
            title: '1986年',
            image: './src/1986-dinghai.jpg',
            description: '庆祝新春的定海街头（叶文清 沈有才 摄）',
            location: {
                center: [122.10315, 30.01796],
                zoom: 17.30,
                pitch: 43.00,
                bearing: -38.73
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'page07',
            title: '1991年10月22日',
            image: './src/1991.jpg',
            description: '江泽民同志为舟山挥毫题词：开发海洋，振兴舟山。',
            location: {
                center: [122.13607, 30.03531],
                zoom: 8.34,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'page08',
            title: '1995年',
            image: './src/1995.jpg',
            description: '建设中的普陀东港开发区',
            location: {
                center: [122.31363, 29.95841],
                zoom: 14.33,
                pitch: 59.00,
                bearing: 15.20
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'page09',
            title: '1996年10月15日',
            image: './src/1996.jpg',
            description: '舟山发电厂进入全面安装阶段',
            location: {
                center: [122.15763, 29.99476],
                zoom: 15.57,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'page10',
            title: '1997年10月30日',
            image: './src/1997.jpg',
            description: '“海天佛国”标志性建筑——普陀山南海观音桐乡建成并举行佛像开光法会。',
            location: {
                center: [122.38948, 29.97632],
                zoom: 16.30,
                pitch: 25.50,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'page11',
            title: '2001年9月10日',
            image: './src/2001.jpg',
            description: '南海实验学校成立',
            location: {
                center: [122.18159, 29.99352],
                zoom: 15.82,
                pitch: 33.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'page12',
            title: '2009年12月25日23时58分',
            image: './src/2009.jpg',
            description: '历经十年建设、全长近50公里的我国最大的岛陆联结工程——舟山跨海大桥正式通车。',
            location: {
                center: [121.76766, 30.05548],
                zoom: 11.58,
                pitch: 60.00,
                bearing: -99.20
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'page13',
            title: '2015年5月25日',
            image: './src/2015-xi.jpg',
            description: '习近平总书记舟山行：美丽中国要靠美丽乡村打基础',
            location: {
                center: [122.13607, 30.03531],
                zoom: 8.34,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'page14',
            title: '2019年',
            image: './src/2019-lujiazhi.jpg',
            description: '鲁家峙岛位于沈家门渔港南部，与沈家门城区隔港相望，现由鲁家峙大桥连接。该岛东至后泥山咀，西至鲁家峙大桥，南至南岙山，北至沈家门渔港。陆地面积约3.85平方公里。现有常住人口2万余人，8000余户，流动人口4300人左右。岛内现有11个小区。 　　据1924年 《定海县志》记载：卢家屿亦称鲁家屿。最先定居岛上的人家姓鲁，住今东山脚下，岛名由此形成。未开发前，村民散居在红山、门峡里、泥涂里、涨道门、蚂蚁山、丁家、胡家、俞家、应家岙10个自然村。多数村民以捕鱼为业，是个渔村小岛。',
            location: {
                center: [122.28404, 29.93987],
                zoom: 15.81,
                pitch: 39.00,
                bearing: 121.60
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
    ]
};
