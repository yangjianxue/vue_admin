<template>
    <div>
        <h3>qqq</h3>
        <h2>{{$store.state.counte}}</h2>
        <button @click='add(5)'>+5</button>
        <button @click='add1(5)'>add1 - +5</button>
        <h2>{{$store.state.info}}</h2>
        <h2>{{$store.state.students}}</h2>
        <button @click='updata1'>修改对象的某个属性</button>
        <button @click='dele1'>删除对象的某个属性</button>
        <button @click='addProp'>给对象新增一个属性</button>
        <button @click='updata2'>修改数组的某项的某个属性</button>

        <button @click='changeInfoName'>异步修改info 的name</button>
        <h1>以下是vuex 组件相关测试</h1>
        <h2>{{$store.state.moduleA.name}}</h2>
        <h3>访问moduleA 中的mutation :
            <button @click='updateModuleAName'>修改moduleA中的name</button>
        </h3>
        <h3>访问moduleA 中的getter :{{$store.getters.showModuleAName}}</h3>
        <button @click='asyncChangeName'>异步修改name</button>
    </div>
</template>
<script>
    export default{
        name:'LearnVuex',
        data(){
            return{

            }
        },
        methods:{
            updateModuleAName(){
                this.$store.commit('updateModuleANAME')
            },
            asyncChangeName(){
                this.$store
                    .dispatch('AupdateModuleAName')
                    .then((data) =>{
                        console.log(data)
                    })
            },
            add(count){
                this.$store.commit('increment',count)
            },
            add1(count){
                this.$store.commit({
                    type:'increment1',
                    count
                })
            },
            updata1(){
                this.$store.commit('updata1')
            },
            dele1(){
                this.$store.commit('dele1')
            },
            addProp(){
                this.$store.commit('addProp')
            },
            updata2(){
                this.$store.commit('updata2')
            },
            changeInfoName(){
                return this.$store
                            .dispatch('AchangeInfoName')
                            .then((data)=>{
                                console.log('我是修改状态成功后返回的数据',data)
                            })
            }
        }
    }
</script>
<style scope>
</style>