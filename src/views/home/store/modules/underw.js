import Mock from 'mockjs'
const Random = Mock.Random;
var comment=[];

    for(var i=0;i<1;i++){
        comment.push({
            id1:1,
            id:Random.guid(),
            count1:1,
            inStock:10,//库存
            avatar:Random.image('42x42',Random.color(),Random.cword(1)),//头像
            username:Random.last(),
            price:Random.integer(60, 400),//价格
            comments:Random.csentence(5, 8),//评论内容
        })
    }
   

var state={  //state的方法用于保存需要共享的数据 ps:state不能直接修改数据内容的值
    comment:comment
}
var mutations={ //mutations的方法用于修改state的值(mutations的方法都有state的回调对象) (这里是同步修改)
    minus(state,id){
        console.log("==>",id)
        var item =state.comment.find(item=>item.id1==id);
        if( item.count1>1){
            item.count1--
        }
    },
    quantityPlus(state,id){
        var item =state.comment.find(item=>item.id1==id);
        if( item.count1<item.inStock){
            item.count1++
        }
    }
}


var getters={ //vuex的计算属性
 
}
var actions={ //用于处理异步操作的 可以调用 mutations 中的方法 来修改state里面的值
      
  
} 


export default {
    namespaced: true, //  namespaced: true命名空间用于区分同名不同的数据
    state,
    mutations,
    getters,
    actions
}