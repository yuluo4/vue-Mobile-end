import Mock from 'mockjs'
const Random = Mock.Random;
var comment=[];
function underwearcomment(){
    for(var i=0;i<15;i++){
        comment.push({
            id1:1,
            id:Random.guid(),
            avatar:Random.image('42x42',Random.color(),Random.cword(1)),//头像
            username:Random.last(),//用户名
            commentTime:Random.now(),//评论时间
            comments:Random.cparagraph()//评论内容
        })
    }
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(comment);
        },200)
    });
    return promise;
}




export default {
    underwearcomment,
   
}










