import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let moduleA = {
  state:{
      name:'我是moduleA的新name'
  },
  getters:{
    showModuleAName(state){
       return state.name + '111'
    }
  },
  mutations:{
    updateModuleANAME(state){
        state.name='我是被修改了moduleA的name'
    }
  },
  actions:{
    AupdateModuleAName(context){
      return new Promise((resolve,reject) => {
        setTimeout(() =>{
          context.commit('updateModuleANAME')
          resolve('我是模块A actions 成功后的回调')
        },2000)
      })
    }
  }
}

export default new Vuex.Store({
  state: {
    counte:100,
    students:[
      {name:'张三',age:25,height:1.88},
      {name:'李四',age:12,height:1.98},
      {name:'王五',age:30,height:1.78}
     ],
     info:{
         name:"lilei",
         age:26,
         height:1.9
     }
  },
  mutations: {
    increment(state,count){
      state.counte += count
    },
    increment1(state,payload){
      console.log(payload.count)
      state.counte += payload.count
    },
    updata1(state){
      state.info.age = 20
    },
    dele1(state){
        // delete state.info.height
        Vue.delete(state.info ,'height')
    },
    addProp(state){
      // state.info['address'] = '洛杉矶'
      Vue.set(state.info ,'addresss','洛杉矶')
    },
    updata2(state){
      state.students[0].address = '洛杉矶'
      // Vue.set(state.students[0] ,'addresss','洛杉矶')
    },
    changeInfoName(state){
      state.info.name = '异步名字'
    }
  },
  getters:{
    // <!--获取当前学生数据中年龄大于等于 20 的学生信息-->
     more20Sts(state){
         return state.students.filter( s => s.age >= 20)
     },
    //  <!--获取当前学生数据中年龄大于等于 20 的学生的数量-->
     more20StsLen(state,getters){
         return getters.more20Sts.length
     },
    //  获取当前调用者指定的年龄大于等于 age 的学生信息
     moreAgeSts(state,getters){
         return (age) =>{
             return state.students.filter( s => s.age >= age)
         }
     }
 },
  actions: {
    AchangeInfoName(context){
      return new Promise((resolve,reject) =>{
          setTimeout(()=>{
             context.commit('changeInfoName')
              //回调结果
              resolve('11111')
          },1000)
      })
    }
  },
  modules: {
    moduleA
  }
})
