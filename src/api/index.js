const request = require("../helper/request");

const query = async (req, res) => {
    let filenames = [
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E5.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E3.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E4.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E2.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E1.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E8.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E7.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E6.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E9.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E10.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E11.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E13.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E12.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E14.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E15.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E17.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E16.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E18.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E19.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E20.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E22.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E21.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E23.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E24.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E25.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E27.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E26.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E28.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E29.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E30.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E32.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E31.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E33.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E34.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E35.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E36.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E37.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E38.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E39.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E40.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E41.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E42.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E43.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E44.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E45.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E46.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E47.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E48.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E49.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E50.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E51.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E52.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E53.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E54.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E55.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E56.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E57.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E58.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E59.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E60.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E61.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E62.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E63.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E64.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E65.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E66.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E68.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E67.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E69.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E70.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E73.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E72.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E74.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E71.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E75.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E77.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E76.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E78.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E79.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E80.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E82.mp4",
        "The.Empress.of.China.2014.HD1080P.X264.AAC.Mandarin.CHS.S01E81.mp4",
        "Judge.Di's.Mystery.S01E01.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E02.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E03.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E04.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E05.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E06.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E07.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E08.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E09.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E10.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E11.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E12.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E13.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E14.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E15.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E16.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E17.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E18.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E19.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E20.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E21.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E22.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E23.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E24.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E25.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E26.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E27.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E28.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E29.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E30.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E32.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "Judge.Di's.Mystery.S01E31.2024.2160p.WEB-DL.H265.HQ.60fps.AAC.mp4",
        "小日子.S01E01.mp4",
        "小日子.S01E02.mp4",
        "小日子.S01E03.mp4",
        "小日子.S01E04.mp4",
        "小日子.S01E05.mp4",
        "小日子.S01E06.mp4",
        "小日子.S01E07.mp4",
        "小日子.S01E08.mp4",
        "小日子.S01E09.mp4",
        "小日子.S01E10.mp4",
        "小日子.S01E11.mp4",
        "小日子.S01E14.mp4",
        "小日子.S01E13.mp4",
        "小日子.S01E12.mp4",
        "帝王计划：怪兽遗产.S01E02.2160p.HDR.H265-MapoTofu.mp4",
        "帝王计划：怪兽遗产.S01E07.2160p.HDR.H265-MapoTofu.mp4",
        "帝王计划：怪兽遗产.S01E03.2160p.HDR.H265-MapoTofu.mp4",
        "帝王计划：怪兽遗产.S01E010.2160p.HDR.H265-MapoTofu.mp4",
        "帝王计划：怪兽遗产.S01E04.2160p.HDR.H265-MapoTofu.mp4",
        "帝王计划：怪兽遗产.S01E01.2160p.HDR.H265-MapoTofu.mp4",
        "帝王计划：怪兽遗产.S01E09.2160p.HDR.H265-MapoTofu.mp4",
        "帝王计划：怪兽遗产.S01E05.2160p.HDR.H265-MapoTofu.mp4",
        "帝王计划：怪兽遗产.S01E08.2160p.HDR.H265-MapoTofu.mp4",
        "帝王计划：怪兽遗产.S01E06.2160p.HDR.H265-MapoTofu.mp4",
        "金刚狼3：殊死一战黑白版.Logan.2017.Noir.Edition.EUR.BD-1080p.X265.10bit.AAC5.1.2AUDIOS.CHS.ENG-D2Mp4.mp4",
        "金刚狼.X-Men.Origins.Wolverine.2009.BD-1080p.X265.10bit.AAC5.1.2AUDIOS.CHS.ENG-D2Mp4.mp4",
        "金刚狼.X-Men.Origins.Wolverine.2009.BD-1080p.X265.10bit.AAC5.1.2AUDIOS.CHS.ENG-D2Mp4(1).mp4",
        "金刚狼2.The Wolverine 2013.BD-1080p.X265.10bit.AAC5.1.2AUDIOS.CHS.ENG-D2Mp4.mp4",
        "4K.HDR-60FPS.mp4",
        "黑衣人3.2012.BD1080P.AAC.H264.CHS-ENG.mp4",
        "黑衣人2.2002.BD1080P.AAC.H264.CHS-ENG.mp4",
        "黑衣人.1997.BD1080P.AAC.H264.CHS-ENG.mp4",
        "黑衣人：全球追缉.2019.BD1080P.AAC.H264.CHS-ENG.mp4",
        "飞屋环游记.Up.2009.BluRay.1080p.x265.10bit.4Audio.MNHD-FRDS.mkv",
        "爆裂点.2023.2160p.60fps.SDR.WEB-DL.10bit.H265.DTS5.1.mkv",
        "The.Beekeeper.2024.2160p.iTunes.WEB-DL.DDP.5.1.Atmos.HDR10+.H.265-DreamHD.mkv",
        "No More Bets.2023.1080p.mp4",
        "Where The Wind Blows 2022 1080p Chinese BluRay HEVC x265 5.1 BONE.mkv",
        "The.Wandering.Earth.II.2023.1080p.WEB-DL.H265.DDP5.1.Atmos-TAGWEB.mkv",
        "The.Monkey.King.2023.1080p.NF.WEB-DL.H265.HDR.DDP5.1.Atmos-MOMOWEB.mkv",
        "The.Predator.2018.BluRay.1080p.x265.10bit-MiniHD.mkv",
        "Teenage.Mutant.Ninja.Turtles.Mutant.Mayhem.2023.1080p.WEBRip.x265-KONTRAST.mp4",
        "The.Kings.Man.2021.1080p.DSNP.WEB-DL.H264.DDP5.1-TAGWEB.mkv",
        "The.Day.After.Tomorrow.2004.BluRay.1080p.x265.10bit.2Audio-MiniHD.mkv",
        "Oh.My.School.2023.1080p.WEB-DL.H265.DDP5.1-DreamHD.mkv",
        "Past.Lives.mp4",
        "The.Little.Mermaid.2023.1080p.WEB.h264-ETHEL.mkv",
        "Meg.2.The.Trench.2023.1080p.AMZN.WEBRip.DDP5.1.x265.10bit-GalaxyRG265.mkv",
        "Love.Never.Ends.2023.1080p.WEB-DL.H265.DDP5.1-DreamHD.mkv",
        "Just.For.Meeting.You.2023.1080p.WEB-DL.H265.DDP5.1-DreamHD.mkv",
        "Kingsman.The.Secret.Service.2014.BluRay.1080p.x265.10bit.2Audio-MiniHD.mkv",
        "Hidden.Strike.2021.1080p.NF.WEB-DL.DDP.5.1.H.264-DreamHD.mkv",
        "Gran.Turismo.2023.2160p.4K.WEB.x265.10bit.AAC5.1-[YTS.MX].mkv",
        "Godspeed.2023.1080p.IQY.WEB-DL.H265.DDP5.1-DreamHD.mkv",
        "Fall.2022.BluRay.1080p.AAC.x264-DreamHD.mp4",
        "Full.River.Red.2023.1080p.IQY.WEB-DL.H265.DTS5.1-DreamHD.mkv",
        "Edge.of.Tomorrow.2014.BluRay.1080p.x265.2Audio-MiniHD.mkv",
        "Arrival.2016.BluRay.1080p.x265.10bit-MiniHD.mkv",
        "Detective.Conan.The.Fist.of.Blue.Sapphire.2019.JAPANESE.1080p.BluRay.H264.AAC-VXT.mp4",
        "Doom.2005.Unrated.Extended.Cut.BluRay.720p.DTS.x264-beAst.mkv",
        "Deadpool.2016.BluRay.1080p.x265.10bit-MiniHD.mkv",
        "侏罗纪世界3.mp4",
        "银河护卫队3.mkv",
        "永恒族.mp4",
        "终结者2018.mkv",
        "蚁人与黄蜂女.mp4",
        "星际穿越.mp4",
        "星际迷航2：暗黑无界.2013.BD1080P.AAC.H264.CHS-ENG.mp4",
        "新铁血战士.2010.BD1080P.AAC.H264.CHS-ENG.BT.mp4",
        "El.Camino.A.Breaking.Bad.Movie.2019.2160p.NF.WEB-DL.DDP5.1.Atmos.DV.HDR10.H.265-SMURF.mkv",
        "新蝙蝠侠.MP4",
        "kingsman.the.golden.circle.2017.无删减版.BD1080P.国英双语.高清特效中英字幕.mp4",
        "I.Robot.2004.BD1080P.X264.AAC.English.CHS-ENG.BDYS.mp4",
        "想见你.Someday.or.One.Day.The.Movie.2022.1080p.WEB-DL.H264.AAC-Youtube.mp4",
        "Independence.Day.Resurgence.2016.BluRay.1080p.x265.10bit.2Audio-MiniHD.mkv",
        "铁血战士-猎物.mp4",
        "世界末日.mp4",
        "死侍2.Deadpool2.CUT.2018.BD1080P.x264.英语官方中文字幕.Eng.mp4",
        "Restless.2022.2160p.NF.WEB-DL.DDP.5.1.DoVi.HDR.HEVC-SiC.mkv",
        "史酷比与超狗小氪：英雄冒险.1080p.BD中英双字.mp4",
        "meg.2.the.trench.2023.hdr.2160p.web.h265-huzzah.mkv",
        "铃芽之旅.2022.HD1080P.AAC.H264.CHS.mp4",
        "控制.mp4",
        "猎屠.MP4",
        "疾速追杀4.2023.BD.1080P.中英双字.mkv",
        "光年正传(中英双字).Lightyear.2022.WEB-1080p.X264.AAC5.1.CHS.mp4",
        "羔羊游戏.MP4",
        "极品飞车.2014.BD1080p.中英双字.mp4",
        "放飞的奶爸.mp4",
        "哆啦A梦：大雄与天空的理想乡.1080p.BD中日双字.mp4",
        "毒液2.Venom.Let.There.Be.Carnage.2021.BD-1080p.X265.10bit.AAC5.1.CHS.ENG-D2Mp4.mp4",
        "毒舌律师.mkv",
        "速度与激情10.mp4",
        "仿生人.mp4",
        "来自未来的访客.mp4",
        "The.Pig.the.Snake.and.the.Pigeon.2023.1080p.NF.WEB-DL.DDP5.1.H264.mkv",
        "After.School.2023.1080p.HamiVideo.WEBRip.x264.AAC-ZS.mkv"
    ];

    const tvSearchUrl = '/search/tv';
    const movieSearchUrl = '/search/movie';
    let result = {};

    let filename = String(req.query.filename);
    let language = String(req.query.language !== undefined ? req.query.language : 'zh-CN');
    //分类
    const typePattern = /(s\d+)|(e\d+)/gi;
    const isTv = typePattern.test(filename);
    const tvMatch = filename.match(typePattern);

    const clearFilename = clearAudioName(filename);
    const queryUrl = isTv ? tvSearchUrl : movieSearchUrl;

    const audioResult = await queryData(queryUrl, {
        query: clearFilename,
        language: language
    })

    //解析开始
    // console.log(audioResult);
    if (audioResult.total_results === 0) {
        res.json(
            {
                success: true
            }
        )
        return;
    }
    let audioId = audioResult.results[0].id;
    const audioDetailResult = await queryData(isTv ? `/tv/${audioId}` : `/movie/${audioId}`, {
        language: language
    })

    const audioCreditsResult = await queryData(isTv ? `/tv/${audioId}/credits` : `/movie/${audioId}/credits`, {
        language: language
    })

    console.log('影片详情----------');
    console.log(audioDetailResult);

    result.query_name = filename;
    result.query_language = language
    result.backdrop_path = audioDetailResult.backdrop_path;
    result.poster_path = audioDetailResult.poster_path;
    result.id = audioDetailResult.id;
    if (isTv) {
        result.first_air_date = audioDetailResult.first_air_date;
        result.last_air_date = audioDetailResult.last_air_date;
        result.origin_country = audioDetailResult.origin_country;
        result.last_episode_to_air = audioDetailResult.last_episode_to_air;
        result.title = audioDetailResult.name;
        result.original_title = audioDetailResult.original_name;
        result.case = 'tv';

        const seasonNumber = parseInt(tvMatch[0].match(/\d+/g));
        const episodeNumber = parseInt(tvMatch[1].match(/\d+/g));
        const tvDetail = await queryData(`/tv/${audioId}/season/${seasonNumber}/episode/${episodeNumber}`, {
            language: language
        })
        result.episode_detail = tvDetail;

        // console.log(tvDetail);
    } else {
        result.release_date = audioDetailResult.release_date;
        result.title = audioDetailResult.title;
        result.original_title = audioDetailResult.original_title;
        result.tagline = audioDetailResult.tagline;
        result.belongs_to_collection = audioDetailResult.belongs_to_collection;
        result.case = 'movie';
    }
    result.genres = audioDetailResult.genres;
    result.runtime = audioDetailResult.runtime;
    result.spoken_languages = audioDetailResult.spoken_languages;
    result.languages = audioDetailResult.languages;
    result.original_language = audioDetailResult.original_language;
    result.overview = audioDetailResult.overview;
    result.vote_average = audioDetailResult.vote_average;
    result.vote_count = audioDetailResult.vote_count;
    result.status = audioDetailResult.status;
    result.popularity = audioDetailResult.popularity;
    result.credits = audioCreditsResult.cast;

    console.log(result);


    //文件名
    // let filename = String(req.query.filename);

    //去除后缀
    // let suffixPattern = /(\.mp4|\.mkv)/gi;
    // filename = filename.replaceAll(yearPattern,'')
    // //提取片名
    // let audioNamePattern = /([a-z|\.\'|\u4e00-\u9fa5]+\d{1})/gi;
    //
    // //去除年份
    // let yearPattern = /(19\d{2}|20\d{2}\.)/gi;
    // filename = filename.replaceAll(yearPattern,'')
    //
    // //去除清晰度
    // let definitionPattern = /(2160p|1080p|720p)\./gi;
    // filename = filename.replaceAll()
    // let matchResult = typePattern.test(filename);
    // console.log(matchResult)
    // let pattern = /([a-z|\.\'|\u4e00-\u9fa5]+\d{1}).+(19\d{2}|20\d{2}).+(2160p|1080p|720p)(.+)(x264|x265)/gi
    // let matchArray = pattern.exec(filename);

    /*request.sendGet('/search/movie',
        {
            query: '.Guardians.of.the.Galaxy.2',
            language:'zh-CN'
        }
    )
        .then(r => {
            console.log(r);
        })*/
    res.json(
        {
            success: true,
            data: result
        }
    )
};

const queryData = (url, params) => {
    return request.sendGet(url, params);
}

/**
 * 取回文件名
 * @param filename
 */
const clearAudioName = (filename) => {
//移除后缀
    let suffixPattern = /(\.mp4|\.mkv)/gi;
    filename = filename.replaceAll(suffixPattern, '');
    //取回电影名
    let audioNamePattern = /([a-z]|[\u4e00-\u9fa5]|\uff1a|\.|\s|\'|\-)+\d*/gi
    let regExpMatchArray = filename.match(audioNamePattern);
    if (regExpMatchArray !== null) {
        filename = regExpMatchArray[0];
        //最后清理
        let yearPattern = /\.(\d{4}|s\d+|e\d+)/gi
        filename = filename.replaceAll(yearPattern, '');
        //去除分隔符
        let clearPattern = /(\.)/gi
        filename = filename.replaceAll(clearPattern, ' ')
        console.log(filename);
        return filename;
    } else {
        console.error('未匹配到结果')
        return null;
    }
}

module.exports = {
    query
}