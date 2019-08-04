import Vue from 'vue'
import Vuex from 'vuex'
import shoppingcart from './modules/shoppingcart'
import underw from '../../../views/home/store/modules/underw';

Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        shoppingcart,
        underw,
       
    }
})

