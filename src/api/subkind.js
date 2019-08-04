import Mock from 'mockjs'
const Random = Mock.Random
function underwearData(){
    var imgs=[];
    imgs.push({
        id:Random.guid(),
        price:Random.integer(60, 400),
        brand:Random.first(),
        ntroduction:Random.csentence(5, 8),
        details:Random.csentence(),
        img:require('@/assets/imgs/kind/underwear/Underweargallery/detail1.png'),
        //-------//
        id1:1,
        detailsImg:require('@/assets/imgs/kind/productDetailsimg/wares1.png'),
        title:"NEIWAI",
        detailscontent1:"Cozy女士家居系列",
        detailscontent2:" 舒 适 居 家 安 心 睡 眠 ",
        detailscontent3:"7PM至7AM  有TA陪伴你",
        detailscontent4:"一次下厨 一部沙发电影",
        detailscontent5:"一个赖床3分钟的清晨",
        detailscontent6:"不必紧绷神经  不用束缚身体",

    })
    imgs.push({
        id:Random.guid(),
        price:Random.integer(60, 400),
        brand:Random.first(),
        ntroduction: Random.csentence(5, 8),
        details:Random.csentence(),
        img:require('@/assets/imgs/kind/underwear/Underweargallery/detail2.png')
    })
    imgs.push({
        id:Random.guid(), //id
        price:Random.integer(60, 400), //价格
        brand:Random.first(), //品牌
        ntroduction: Random.csentence(5, 8),//介绍
        details:Random.csentence(), //详情
        img:require('@/assets/imgs/kind/underwear/Underweargallery/detail3.png')
    })
    imgs.push({
        id:Random.guid(),
        price:Random.integer(60, 400),
        brand:Random.first(),
        ntroduction: Random.csentence(5, 8),
        details:Random.csentence(),
        img:require('@/assets/imgs/kind/underwear/Underweargallery/detail4.png')
    })
    imgs.push({
        id:Random.guid(),
        price:Random.integer(60, 400),
        brand:Random.first(),
        ntroduction: Random.csentence(5, 8),
        details:Random.csentence(),
        img:require('@/assets/imgs/kind/underwear/Underweargallery/detail5.png')
    })
    imgs.push({
        id:Random.guid(),
        price:Random.integer(60, 400),
        brand:Random.first(),
        ntroduction: Random.csentence(5, 8),
        img:require('@/assets/imgs/kind/underwear/Underweargallery/detail6.png')
    })
    
    for(var i=0;i<10;i++){
        imgs.push({
            id:Random.guid(),
            price:Random.integer(100, 800),
            brand:Random.first(),
            ntroduction: Random.csentence(5, 8),
            img:Random.image('120x120',Random.color()),
        })
    }
    
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(imgs);
        },200)
    });

    return promise;
}
export default {
    underwearData
}
