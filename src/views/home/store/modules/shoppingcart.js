
// ocalStorage.setItem(state.buy);
 var state={  //state的方法用于保存需要共享的数据 ps:state不能直接修改数据内容的值
   buy:[]
  }
  var mutations={ //mutations的方法用于修改state的值(mutations的方法都有state的回调对象) (这里是同步修改)
    adduy(state,id){
        if(!state.buy.some(liem=>liem.id==id)){
            state.buy.push({
                id,
                count:1
            })
            // console.log(state.buy)
        }else{
            var item=state.buy.find(liem=>liem.id==id)
            item.count++
        }
    },
    minus(state,id){
        var item=state.buy.find(liem=>liem.id==id)
        if(item.count>1){
            item.count--
        }else{
            state.buy=[]
        }
        
    },
    gaga(state,id){
       
            var item=state.buy.find(liem=>liem.id==id)
            item.count++
    }

  }
  

  var getters={ //vuex的计算属性
    buylist(state, getters, rootState){
        // console.log(state,rootState.underw.comment)
          
        return state.buy.map(item=>{
            var pitem=rootState.underw.comment.find(obj=>obj.id1==item.id);
            var rsObj = Object.assign({},item,pitem); 
            console.log('rsObj',rsObj)
            rsObj.total=rsObj.count*rsObj.price
            return rsObj;
            
        })
    },
   
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