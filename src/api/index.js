const request = require("../helper/request");
const {sendGet} = require("../helper/request");

const query = async (req, res) => {
    let filenames = [
        "Sex.Education.S01E05.mp4",
        "Sex.Education.S01E04.mp4",
        "Sex.Education.S01E01.mp4",
        "Sex.Education.S01E03.mp4",
        "Sex.Education.S01E02.mp4",
        "Sex.Education.S01E06.mp4",
        "Sex.Education.S01E07.mp4",
        "Sex.Education.S01E08.mp4",
        "Sex.Education.S02E01.mp4",
        "Sex.Education.S02E02.mp4",
        "Sex.Education.S02E03.mp4",
        "Sex.Education.S02E04.mp4",
        "Sex.Education.S02E05.mp4",
        "Sex.Education.S02E07.mp4",
        "Sex.Education.S02E06.mp4",
        "Sex.Education.S02E08.mp4",
        "Sex.Education.S03E01.mp4",
        "Sex.Education.S03E03.mp4",
        "Sex.Education.S03E04.mp4",
        "Sex.Education.S03E02.mp4",
        "Sex.Education.S03E05.mp4",
        "Sex.Education.S03E06.mp4",
        "Sex.Education.S03E07.mp4",
        "Sex.Education.S03E08.mp4",
        "Sex.Education.S04E01.mp4",
        "Sex.Education.S04E02.mp4",
        "Sex.Education.S04E03.mp4",
        "Sex.Education.S04E04.mp4",
        "Sex.Education.S04E05.mp4",
        "Sex.Education.S04E06.mp4",
        "Sex.Education.S04E07.mp4",
        "Sex.Education.S04E08.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E01.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E08.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E11.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E04.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E20.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E18.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E12.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E03.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E10.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E15.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E22.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E14.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E02.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E07.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E05.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E13.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E09.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E19.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E16.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E06.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E17.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2017.S05E21.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E05.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E06.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E04.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E07.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E09.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E19.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E22.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E10.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E11.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E12.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E20.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E03.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E02.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E17.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E08.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E01.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E14.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E18.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E21.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E15.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E16.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2013.S01E13.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2019.S06E10.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2019.S06E05.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2019.S06E08.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2019.S06E07.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2019.S06E09.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2019.S06E11.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2019.S06E03.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2019.S06E02.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2019.S06E01.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2019.S06E06.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2019.S06E04.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2019.S06E13.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2019.S06E12.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E05.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E11.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E14.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E06.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E10.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E02.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E12.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E08.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E20.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E03.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E01.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E04.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E16.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E19.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E13.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E09.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E18.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E21.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E07.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E22.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E17.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2014.S02E15.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2020.S07E10.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2020.S07E02.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2020.S07E11.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2020.S07E08.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2020.S07E04.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2020.S07E09.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2020.S07E03.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2020.S07E01.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2020.S07E13.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2020.S07E12.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2020.S07E06.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2020.S07E07.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2020.S07E05.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E02.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E20.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E11.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E14.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E19.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E01.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E09.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E16.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E08.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E07.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E06.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E03.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E05.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E13.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E17.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E12.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E10.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E04.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E18.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E15.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E21.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2015.S03E22.Summer.mp4",
        "Loki.S02E05.2023.2160p.DSNP.WEB-DL.DDP5.1.Atmos.DV.H.265-FLUX.mkv",
        "Loki.S02E01.2023.DSNP.WEB-DL.2160p.HEVC.DV.DDP5.1.Atmos-MarryTV.mp4",
        "Loki.S02E04.2023.2160p.DSNP.WEB-DL.DDP5.1.Atmos.DV.H.265-FLUX.mkv",
        "Loki.S02E02.2023.DSNP.WEB-DL.2160p.HEVC.DV.DDP5.1.Atmos-MarryTV.mp4",
        "Loki.S02E03.2023.DSNP.WEB-DL.2160p.HEVC.DV.DDP5.1.Atmos-MarryTV.mp4",
        "Loki.S02E06.2021.2160p.DSNP.WEB-DL.DDP5.1.Atmos.DV.H.265-FLUX.mkv",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E20.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E17.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E22.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E14.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E12.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E19.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E13.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E18.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E11.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E15.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E04.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E02.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E03.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E07.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E10.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E21.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E08.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E09.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E01.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E16.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E05.Summer.mp4",
        "神盾局特工.Agents of S.H.I.E.L.D.2016.S04E06.Summer.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E05.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E01.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E02.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E03.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E04.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E06.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E07.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E08.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E09.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E10.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E11.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E13.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E12.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E14.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E15.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E16.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E17.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E18.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E19.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E20.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E21.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "宝宝巴士之奇妙汉字.Bao.Bao.Ba.Shi.Qi.Miao.Han.Zi.2016.S01E22.2160p.WEB-DL.H265.AAC-Huawei.mp4",
        "Halo.S01E05.2160p.HDR.H265.mp4",
        "Halo.S01E06.2160p.HDR.H265.mp4",
        "Halo.S01E08.2160p.HDR.H265.mp4",
        "Halo.S01E09.2160p.HDR.H265.mp4",
        "Halo.S01E07.2160p.HDR.H265.mp4",
        "Halo.S01E02.2160p.HDR.H265.mp4",
        "Halo.S01E03.2160p.HDR.H265.mp4",
        "Halo.S01E04.2160p.HDR.H265.mp4",
        "Halo.S01E01.2160p.HDR.H265.mp4",
        "Loki.S01E03.Lamentis.REPACK.2160p.WEB-DL.DDP.5.1.Atmos.HDR.H.265-FLUX.mkv",
        "Loki.S01E06.For.All.Time.Always.REPACK.2160p.WEB-DL.DDP.5.1.Atmos.HDR.H.265-FLUX.mkv",
        "Loki.S01E04.The.Nexus.Event.REPACK.2160p.WEB-DL.DDP.5.1.Atmos.HDR.H.265-FLUX.mkv",
        "Loki.S01E05.Journey.Into.Mystery.REPACK.2160p.WEB-DL.DDP.5.1.Atmos.HDR.H.265-FLUX.mkv",
        "Loki.S01E01.Glorious.Purpose.REPACK.2160p.WEB-DL.DDP.5.1.Atmos.HDR.H.265-FLUX.mkv",
        "Loki.S01E02.The.Variant.REPACK.2160p.WEB-DL.DDP.5.1.Atmos.HDR.H.265-FLUX.mkv",
        "The.Last.of.Us.S01E04.Please.Hold.to.My.Hand.1080p.AMZN.WEB-DL.DDP.5.1.H.264-BlackTV.mkv",
        "The.Last.of.Us.S01E02.Infected.1080p.AMZN.WEB-DL.DDP.5.1.H.264-BlackTV.mkv",
        "The.Last.of.Us.S01E05.Endure.and.Survive.1080p.AMZN.WEB-DL.DDP.5.1.H.264-BlackTV.mkv",
        "The.Last.of.Us.S01E03.Long.Long.Time.1080p.AMZN.WEB-DL.DDP.5.1.H.264-BlackTV.mkv",
        "The.Last.of.Us.S01E01.When.Youre.Lost.in.the.Darkness.1080p.AMZN.WEB-DL.DDP.5.1.H.264-BlackTV.mkv",
        "The.Last.of.Us.S01E06.Kin.1080p.AMZN.WEB-DL.DDP.5.1.H.264-BlackTV.mkv",
        "The.Last.of.Us.S01E07.Left.Behind.1080p.AMZN.WEB-DL.DDP.5.1.H.264-BlackTV.mkv",
        "The.Last.of.Us.S01E08.When.We.Are.in.Need.1080p.AMZN.WEB-DL.DDP.5.1.H.264-BlackTV.mkv",
        "The.Last.of.Us.S01E09.Look.for.the.Light.1080p.AMZN.WEB-DL.DDP.5.1.H.264-BlackTV.mkv",
        "东城梦魇.Mare.of.Easttown.S01E04.mp4",
        "东城梦魇.Mare.of.Easttown.S01E01.mp4",
        "东城梦魇.Mare.of.Easttown.S01E02.mp4",
        "东城梦魇.Mare.of.Easttown.S01E05.mp4",
        "东城梦魇.Mare.of.Easttown.S01E03.mp4",
        "东城梦魇.Mare.of.Easttown.S01E07.mp4",
        "东城梦魇.Mare.of.Easttown.S01E06.mp4",
        "The.Falcon.and.The.Winter.Soldier.S01E01.2021.DSNP.WEB-DL.4k.HEVC.HDR.DDP-Xiaomi.mkv",
        "The.Falcon.and.The.Winter.Soldier.S01E02.2021.DSNP.WEB-DL.4k.HEVC.HDR.DDP-Xiaomi.mkv",
        "The.Falcon.and.The.Winter.Soldier.S01E03.2021.DSNP.WEB-DL.4k.HEVC.HDR.DDP-Xiaomi.mkv",
        "The.Falcon.and.The.Winter.Soldier.S01E04.2021.DSNP.WEB-DL.4k.HEVC.HDR.DDP-Xiaomi.mkv",
        "The.Falcon.and.The.Winter.Soldier.S01E05.2021.DSNP.WEB-DL.4k.HEVC.HDR.DDP-Xiaomi.mkv",
        "The.Falcon.and.The.Winter.Soldier.S01E06.2021.DSNP.WEB-DL.4k.HEVC.HDR.DDP-Xiaomi.mkv",
        "异人族.Marvels.Inhumans.S01E01.HD720P.x264.AAC.English.CHS-ENG.mp4",
        "异人族.Marvels.Inhumans.S01E02.HD720P.x264.AAC.English.CHS-ENG.mp4",
        "异人族.Marvels.Inhumans.S01E04.HD720P.x264.AAC.English.CHS-ENG.mp4",
        "异人族.Marvels.Inhumans.S01E05.HD720P.x264.AAC.English.CHS-ENG.mp4",
        "异人族.Marvels.Inhumans.S01E03.HD720P.x264.AAC.English.CHS-ENG.mp4",
        "异人族.Marvels.Inhumans.S01E08.HD720P.x264.AAC.English.CHS-ENG.mp4",
        "异人族.Marvels.Inhumans.S01E06.HD720P.x264.AAC.English.CHS-ENG.mp4",
        "异人族.Marvels.Inhumans.S01E07.HD720P.x264.AAC.English.CHS-ENG.mp4",
        "叠影狙击.Dead.Ringer.S01E22.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E16.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E13.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E07.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E08.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E01.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E06.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E21.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E23.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E12.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E03.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E19.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E02.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E17.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E05.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E10.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E18.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E09.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E04.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E20.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E14.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E11.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E15.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "叠影狙击.Dead.Ringer.S01E24.2023.2160p.WEB-DL.H265.AAC-DDHDTV.mkv",
        "死期将至.S1.E1.mkv",
        "死期将至.S1.E2.mkv",
        "死期将至.S1.E5.mkv",
        "死期将至.S1.E4.mkv",
        "死期将至.S1.E3.mkv",
        "死期将至.S1.E8.mkv",
        "死期将至.S1.E7.mkv",
        "死期将至.S1.E6.mkv",
        "Long.time.no.sex.S01E03.2024.1080p.friDay.WEB-DL.H264.AAC-yiiha.mkv",
        "Long.time.no.sex.S01E05.2024.1080p.friDay.WEB-DL.H264.AAC-yiiha.mkv",
        "Long.time.no.sex.S01E02.2024.1080p.friDay.WEB-DL.H264.AAC-yiiha.mkv",
        "Long.time.no.sex.S01E01.2024.1080p.friDay.WEB-DL.H264.AAC-yiiha.mkv",
        "Long.time.no.sex.S01E04.2024.1080p.friDay.WEB-DL.H264.AAC-yiiha.mkv",
        "Long.time.no.sex.S01E06.2024.1080p.friDay.WEB-DL.H264.AAC-yiiha.mkv",
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
        "Detective.Chinatown - S02E07 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "Detective.Chinatown - S02E12 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "Detective.Chinatown - S02E10 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "Detective.Chinatown - S02E05 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "Detective.Chinatown - S02E13 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "Detective.Chinatown - S02E08 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "Detective.Chinatown - S02E16 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "Detective.Chinatown - S02E02 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "Detective.Chinatown - S02E01 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "Detective.Chinatown - S02E14 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "Detective.Chinatown - S02E03 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "Detective.Chinatown - S02E11 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "Detective.Chinatown - S02E09 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "Detective.Chinatown - S02E04 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "Detective.Chinatown - S02E06 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "Detective.Chinatown - S02E15 - 2160p.WEB-DL.DDP 5.1.H.265.mkv",
        "小日子.S1E18.mp4",
        "小日子.S1E19.mp4",
        "小日子.S1E2.mp4",
        "小日子.S1E3.mp4",
        "小日子.S1E1.mp4",
        "小日子.S1E4.mp4",
        "小日子.S1E6.mp4",
        "小日子.S1E8.mp4",
        "小日子.S1E5.mp4",
        "小日子.S1E7.mp4",
        "小日子.S1E9.mp4",
        "小日子.S1E10.mp4",
        "小日子.S1E12.mp4",
        "小日子.S1E11.mp4",
        "小日子.S1E13.mp4",
        "小日子.S1E15.mp4",
        "小日子.S1E14.mp4",
        "小日子.S1E17.mp4",
        "小日子.S1E16.mp4",
        "婚后事S01E01.mp4",
        "婚后事S01E02.mp4",
        "婚后事S01E03.mp4",
        "婚后事S01E04.mp4",
        "婚后事S01E05.mp4",
        "婚后事S01E06.mp4",
        "婚后事S01E07.mp4",
        "婚后事S01E08.mp4",
        "婚后事S01E09.mp4",
        "婚后事S01E10.mp4",
        "婚后事S01E11.mp4",
        "婚后事S01E12.mp4",
        "婚后事S01E13.mp4",
        "婚后事S01E14.mp4",
        "婚后事S01E15.mp4",
        "婚后事S01E16.mp4",
        "婚后事S01E17.mp4",
        "武媚娘传奇.S1E3.mp4",
        "武媚娘传奇.S1E5.mp4",
        "武媚娘传奇.S1E4.mp4",
        "武媚娘传奇.S1E2.mp4",
        "武媚娘传奇.S1E1.mp4",
        "武媚娘传奇.S1E7.mp4",
        "武媚娘传奇.S1E8.mp4",
        "武媚娘传奇.S1E10.mp4",
        "武媚娘传奇.S1E6.mp4",
        "武媚娘传奇.S1E11.mp4",
        "武媚娘传奇.S1E13.mp4",
        "武媚娘传奇.S1E14.mp4",
        "武媚娘传奇.S1E12.mp4",
        "武媚娘传奇.S1E15.mp4",
        "武媚娘传奇.S1E16.mp4",
        "武媚娘传奇.S1E17.mp4",
        "武媚娘传奇.S1E18.mp4",
        "武媚娘传奇.S1E20.mp4",
        "武媚娘传奇.S1E19.mp4",
        "武媚娘传奇.S1E21.mp4",
        "武媚娘传奇.S1E22.mp4",
        "武媚娘传奇.S1E25.mp4",
        "武媚娘传奇.S1E23.mp4",
        "武媚娘传奇.S1E24.mp4",
        "武媚娘传奇.S1E26.mp4",
        "武媚娘传奇.S1E27.mp4",
        "武媚娘传奇.S1E29.mp4",
        "武媚娘传奇.S1E28.mp4",
        "武媚娘传奇.S1E30.mp4",
        "武媚娘传奇.S1E31.mp4",
        "武媚娘传奇.S1E32.mp4",
        "武媚娘传奇.S1E33.mp4",
        "武媚娘传奇.S1E35.mp4",
        "武媚娘传奇.S1E34.mp4",
        "武媚娘传奇.S1E36.mp4",
        "武媚娘传奇.S1E38.mp4",
        "武媚娘传奇.S1E37.mp4",
        "武媚娘传奇.S1E40.mp4",
        "武媚娘传奇.S1E39.mp4",
        "武媚娘传奇.S1E41.mp4",
        "武媚娘传奇.S1E42.mp4",
        "武媚娘传奇.S1E43.mp4",
        "武媚娘传奇.S1E45.mp4",
        "武媚娘传奇.S1E44.mp4",
        "武媚娘传奇.S1E46.mp4",
        "武媚娘传奇.S1E47.mp4",
        "武媚娘传奇.S1E48.mp4",
        "武媚娘传奇.S1E49.mp4",
        "武媚娘传奇.S1E50.mp4",
        "武媚娘传奇.S1E51.mp4",
        "武媚娘传奇.S1E52.mp4",
        "武媚娘传奇.S1E53.mp4",
        "武媚娘传奇.S1E54.mp4",
        "武媚娘传奇.S1E55.mp4",
        "武媚娘传奇.S1E56.mp4",
        "武媚娘传奇.S1E58.mp4",
        "武媚娘传奇.S1E57.mp4",
        "武媚娘传奇.S1E59.mp4",
        "武媚娘传奇.S1E60.mp4",
        "武媚娘传奇.S1E61.mp4",
        "武媚娘传奇.S1E62.mp4",
        "武媚娘传奇.S1E63.mp4",
        "武媚娘传奇.S1E64.mp4",
        "武媚娘传奇.S1E65.mp4",
        "武媚娘传奇.S1E66.mp4",
        "武媚娘传奇.S1E67.mp4",
        "武媚娘传奇.S1E68.mp4",
        "武媚娘传奇.S1E69.mp4",
        "武媚娘传奇.S1E70.mp4",
        "武媚娘传奇.S1E71.mp4",
        "武媚娘传奇.S1E73.mp4",
        "武媚娘传奇.S1E72.mp4",
        "武媚娘传奇.S1E74.mp4",
        "武媚娘传奇.S1E75.mp4",
        "武媚娘传奇.S1E76.mp4",
        "武媚娘传奇.S1E77.mp4",
        "武媚娘传奇.S1E78.mp4",
        "武媚娘传奇.S1E79.mp4",
        "武媚娘传奇.S1E80.mp4",
        "武媚娘传奇.S1E81.mp4",
        "武媚娘传奇.S1E82.mp4",
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
        "The.Fast.and.the.Furious.2001.BluRay.2160p.x265.10bit.HDR.3Audio.mUHD-FRDS.mkv",
        "Fast.and.Furious.6.2013.Extended.Cut.BluRay.2160p.x265.10bit.HDR.3Audio.mUHD-FRDS.mkv",
        "Fast.Five.2011.BluRay.2160p.x265.10bit.HDR.3Audios.mUHD-FRDS.mkv",
        "Fast.and.Furious.7.2015.EXTENDED.BluRay.2160p.x265.10bit.HDR.4Audio.mUHD-FRDS.mkv",
        "The.Fast.and.the.Furious.Tokyo.Drift.2006.2160p.UHD.BluRay.X265.10bit.HDR.DTS-X.7.1-TERMiNAL.mkv",
        "Fast.And.Furious.2009.BluRay.2160p.x265.10bit.HDR.4Audios.mUHD-FRDS.mkv",
        "Fast.X.2023.2160p.MA.WEB-DL.DDP5.1.Atmos.HDR.DV.HEVC-yiiha.mkv",
        "The.Fate.of.the.Furious.2017.BluRay.2160p.x265.10bit.HDR.4Audio.mUHD-FRDS.mkv",
        "Fast.and.Furious.Presents.Hobbs.and.Shaw.2019.HDR10Plus.2160p.UHD.BluRay.x265.mkv",
        "2.Fast.2.Furious.2003.BluRay.2160p.x265.10bit.HDR.2Audio.mUHD-FRDS.mkv",
        "Fast.and.Furious.F9.The.Fast.Saga.2021.DC.2160p.UHD.BluRay.x265.10bit.HDR.TrueHD.7.1.Atmos-BLOW.mkv",
        "黑客帝国3.120帧.中英双字.2003.4K.H265.AAC-YYDS.mp4",
        "黑客帝国2.120帧.中英双字.2003.4K.H265.AAC-YYDS.mp4",
        "黑客帝国4.4k.mkv",
        "黑客帝国.60帧.中英双字.1999.4K.H265.AAC-YYDS.mp4",
        "Welcome.Home.Franklin.2024.2160p.ATVP.WEB-DL.H265.HDR.DDP5.1.Atmos-SONYHD.mkv",
        "马达加斯加.1080p.国粤英三语.BD中英双字.mp4",
        "马达加斯加2：逃往非洲.1080p.国粤英台四语.BD中英双字.mp4",
        "马达加斯加3.1080p.国粤英三语.BD中英双字.mp4",
        "New.Dimension.Crayon.Shinchan.the.Movie.Battle.of.Supernatural.Powers.~Flying.Sushi~.2023.MULTi.1080p.WEB-DL.AAC2.0.H.264-DreamHD.mkv",
        "Backkom.Bear.3.Mars.Mission.2023.2160p.HQ.WEB-DL.H265.60fps.DDP5.1-CHDWEB.mkv",
        "The.Goldfinger.2023.1080p.WEB-DL.H264.AAC.2Audio-yiiha.mkv",
        "Despicable.Me.2.神偷奶爸2.2013.BDRip.1080p.60fps.中英双语(邓超cindy配音版).KLWNH.mkv",
        "Despicable.Me.3.神偷奶爸.3.2010.BDRip.1080p.60fps.中英双语(大陆版国语).KLWNH.mkv",
        "Despicable.Me.1.神偷奶爸1.2010.BDRip.1080p.60fps.中英双语(大陆版国语).KLWNH.mkv",
        "[生化危机2：启示录]Resident.Evil.Apocalypse.2004.BluRay.1080p.HEVC.10bit.2Audio.mkv",
        "[生化危机4：战神再生]Resident.Evil.Afterlife.2010.BluRay.1080p.x265.10bit.2Audio.mkv",
        "[生化危机5：惩罚]Resident.Evil.Retribution.2012.BluRay.1080p.x265.10bit.2Audio.mkv",
        "[生化危机3：灭绝]Resident.Evil.Extinction.2007.BluRay.1080p.x265.10bit.2Audio.mkv",
        "[生化危机]Resident.Evil.2002.BluRay.1080p.HEVC.10bit.2Audio.mkv",
        "[生化危机：终章]Resident.Evil.The.Final.Chapter.2016.BluRay.1080p.x265.10bit.2Audio.mkv",
        "[复仇者联盟4：终局之战][1080P][BDRip][HEVC-10bit][FLAC].mkv",
        "[复仇者联盟2].Avengers.Age.of.Ultron.2015.BD.1080P.x265.10bit.AAC.英国双语.内封特效中英双字-FFansBD.mkv",
        "[奇异博士].Doctor.Strange.2016.BD.1080P.x265.10bit.DD5.1.英国双语.内封特效简英双字-FFansBD.mkv",
        "[复仇者联盟][IMAX版].The.Avengers.2012.BD.1080P.x265.10bit.AAC.英国双语.内封特效中英双字-FFansBD.mkv",
        "[奇异博士2].Doctor.Strange.in.the.Multiverse.of.Madness.2022.2160p.UHD.BDRIP.x264.AAC-AOC.mkv",
        "[美国队长2].Captain.America.2.BD.1080P.x265.10bit.DD5.1.英国双语.内封特效中英双字-FFansBD.mkv",
        "[无敌浩克].The.Incredible.Hulk.2008.BD.1080P.x265.10bit.DD5.1.英国双语.内封特效中英双字-FFansBD.mkv",
        "[美国队长].Captain.America.BD.1080P.x265.10bit.DD5.1.英国双语.内封特效中英双字-FFansBD.mkv",
        "[美国队长3.内战][IMAX版].Captain.America.3.2016.BD.1080P.x265.10bit.DD5.1.英国双语.内封特效中英双字-FFansBD.mkv",
        "[雷神2].Thor.The.Dark.World.2013.BD.1080P.x265.10bit.AAC.英国双语.内封特效中英双字-FFansBD.mkv",
        "[雷神3.诸神黄昏].Thor.Ragnarok.2017.BD.1080P.x265.10bit.AAC.英国导.3Audio.内封特效中英双字-FFansBD.mkv",
        "[银河护卫队].Guardians.of.the.Galaxy.2014.BD.1080P.x265.10bit.DD5.1.英国双语.内封特效中英双字-FFansBD.mkv",
        "[雷神].Thor.2011.BD.1080P.x265.10bit.AAC.英国双语.内封特效中英双字-FFansBD.mkv",
        "[钢铁侠3].Iron.Man.3.2013.BD.1080P.x265.10bit.AAC.英国双语.内封特效中英双字-FFansBD.mkv",
        "[钢铁侠2].Iron.Man.2.2010.BD.1080P.x265.10bit.DD5.1.英国双语.内封特效中英双字-FFansBD.mkv",
        "[蜘蛛侠.英雄归来].Spider-Man.Homecoming.2017.BD.1080P.x265.10bit.DD5.1.英国双语.内封特效中英双字-FFansBD.mkv",
        "[蚁人][IMAX版].Ant-Man.2015.BD.1080P.x265.10bit.DD5.1.英国双语.内封特效中英双字-FFansBD.mkv",
        "复仇者联盟3.无限战争.Avengers.Infinity.War.2018.mp4",
        "[钢铁侠].Iron.Man.2008.BD.1080P.x265.10bit.AAC.英国双语.内封特效中英双字-FFansBD.mkv",
        "[黑豹].Black.Panther.2018.BD.1080P.x265.10bit.DD5.1.英国双语.内封特效中英双字-FFansBD.mkv",
        "[银河护卫队2].Guardians.of.the.Galaxy.2.2017.BD.1080P.x265.10bit.DD5.1.英国双语.内封特效中英双字-FFansBD.mkv",
        "[惊奇队长].Captain Marvel 1 2019 IMAX BR OPUS VFF71 VFQ51 ENG71 1080p x265 10Bits T0M.mkv",
        "[黑寡妇].Black.widow[2160P][BDRip][HEVC-10bit][FLAC].mkv",
        "金刚狼3：殊死一战黑白版.Logan.2017.Noir.Edition.EUR.BD-1080p.X265.10bit.AAC5.1.2AUDIOS.CHS.ENG-D2Mp4.mp4",
        "金刚狼.X-Men.Origins.Wolverine.2009.BD-1080p.X265.10bit.AAC5.1.2AUDIOS.CHS.ENG-D2Mp4.mp4",
        "金刚狼.X-Men.Origins.Wolverine.2009.BD-1080p.X265.10bit.AAC5.1.2AUDIOS.CHS.ENG-D2Mp4(1).mp4",
        "金刚狼2.The Wolverine 2013.BD-1080p.X265.10bit.AAC5.1.2AUDIOS.CHS.ENG-D2Mp4.mp4",
        "你的名字.mkv",
        "黑衣人3.2012.BD1080P.AAC.H264.CHS-ENG.mp4",
        "黑衣人2.2002.BD1080P.AAC.H264.CHS-ENG.mp4",
        "黑衣人.1997.BD1080P.AAC.H264.CHS-ENG.mp4",
        "黑衣人：全球追缉.2019.BD1080P.AAC.H264.CHS-ENG.mp4",
        "釜山行.2016.1080P.Bluray.DTS.中韩特效字幕.mp4",
        "釜山行：半岛.mp4",
        "4K.HDR-60FPS.mp4",
        "功夫熊猫.国语.720p.mkv",
        "功夫熊猫2.国语.720p.mkv",
        "功夫熊猫3.国语.720p.mkv",
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

    //测试
    /*for (const value of filenames) {
        const tvSearchUrl = '/search/tv';
        const movieSearchUrl = '/search/movie';
        let result = {};

        let filename = value;
        let language = 'zh-CN';
        //分类
        const typePattern = /s\d+e\d+/gi;
        const isTv = typePattern.test(filename);



        const clearFilename = clearAudioName(filename);
        const queryUrl = isTv ? tvSearchUrl : movieSearchUrl;

        const audioResult = await  sendGet(queryUrl, {
            query: clearFilename,
            language: language
        })

        //解析开始
        if (audioResult.total_results === 0) {
            console.error('刮削失败：' + filename);
            res.json(
                {
                    success: true
                }
            )
        }
    }*/
    // return


    const tvSearchUrl = '/search/tv';
    const movieSearchUrl = '/search/movie';
    let result = {};

    let filename = String(req.query.filename);
    let language = String(req.query.language !== undefined ? req.query.language : 'zh-CN');
    //分类
    const typePattern = /s\d+\.?e\d+/gi;
    const isTv = typePattern.test(filename);



    const clearFilename = clearAudioName(filename);
    const queryUrl = isTv ? tvSearchUrl : movieSearchUrl;

    const audioResult = await queryData(queryUrl, {
        query: clearFilename,
        language: language
    })

    //解析开始
    console.log(audioResult);
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

        const tvMatch = filename.match(/(s\d+)|(e\d+)/gi);
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
    let audioNamePattern = /([a-z]|[\u4e00-\u9fa5]|\uff1a|\.|\s|\')+\d*/gi
    let regExpMatchArray = filename.match(audioNamePattern);
    if (regExpMatchArray !== null) {
        filename = regExpMatchArray[0];
        //最后清理
        let yearPattern = /(\.\d{2,})|(\s\d{2,})|(s\d+)|(e\d+)|(\.[\u4e00-\u9fa5]+)/gi
        filename = filename.replaceAll(yearPattern, '');
        //去除分隔符
        let clearPattern = /(\.)/gi
        filename = filename.replaceAll(clearPattern, ' ')
        // console.log(filename);
        return filename;
    } else {
        console.error('未匹配到结果')
        return null;
    }
}

module.exports = {
    query
}