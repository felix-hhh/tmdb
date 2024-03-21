import express from 'express'

const app: express.Application = express();

app.get('/', (req, res) => {
    res.json(
        {
            success: false,
            data:{
                "runtime": 115, 
                "status": "Released", 
                "backdrop_path": "/2FYzxgLNuNVwncilzUeCGbOQzP7.jpg", 
                "overview": "特工M 和特工H 只是普通的地球人，却有着不同一般人类的身份，二人都是MIB的秘密探员，负责监管在地球上生活的外星人。这次他们同样要面对一场危及地球的阴谋，因此二人组成了临时搭档，准备携手面对致命外星蜂兽的侵略和组织内部出现内奸的双重危机。他们所遭遇的蜂兽，被称为宇宙最强威胁，不仅可以伪装成任意形态，更有震动大地的神奇力量，这股邪恶势力已经开始在地球上兴风作浪。面临着外星人秘密潜入地球并妄图破坏的巨大危机，一场前所未有的挑战正等着黑衣人特工前去化解……", 
                "title": "黑衣人：全球追缉", 
                "vote_count": 4629, 
                "tagline": "", 
                "belongs_to_collection": null, 
                "original_title": "Men in Black: International", 
                "original_language": "en", 
                "poster_path": "/dbErNLi3OfYBvtMIBdboyyCNJnV.jpg", 
                "production_countries": [
                    {
                        "name": "China", 
                        "iso_3166_1": "CN"
                    }, 
                    {
                        "name": "United States of America", 
                        "iso_3166_1": "US"
                    }
                ], 
                "revenue": 253890701, 
                "homepage": "", 
                "video": false, 
                "imdb_id": "tt2283336", 
                "id": 479455, 
                "release_date": "2019-06-12", 
                "budget": 110000000, 
                "popularity": 46.712, 
                "genres": [
                    {
                        "id": 35, 
                        "name": "喜剧"
                    }, 
                    {
                        "id": 878, 
                        "name": "科幻"
                    }, 
                    {
                        "id": 28, 
                        "name": "动作"
                    }
                ], 
                "production_companies": [
                    {
                        "logo_path": "/cEaxANEisCqeEoRvODv2dO1I0iI.png", 
                        "id": 56, 
                        "origin_country": "US", 
                        "name": "Amblin Entertainment"
                    }, 
                    {
                        "logo_path": "/R05WCoCJcPWGSDaKaYgx3AeVuR.png", 
                        "id": 49325, 
                        "origin_country": "US", 
                        "name": "Parkes+MacDonald Image Nation"
                    }, 
                    {
                        "logo_path": "/71BqEFAF4V3qjjMPCpLuyJFB9A.png", 
                        "id": 5, 
                        "origin_country": "US", 
                        "name": "Columbia Pictures"
                    }, 
                    {
                        "logo_path": "/gNp4dfuBOXmVWdGKb63NfbFNbFi.png", 
                        "id": 81620, 
                        "origin_country": "CN", 
                        "name": "Tencent Pictures"
                    }
                ], 
                "adult": false, 
                "spoken_languages": [
                    {
                        "english_name": "French", 
                        "name": "Français", 
                        "iso_639_1": "fr"
                    }, 
                    {
                        "english_name": "English", 
                        "name": "English", 
                        "iso_639_1": "en"
                    }
                ], 
                "vote_average": 5.92
            }
        }
    );
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})
