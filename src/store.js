import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //要设置的全局访问的state对象
  /*
  可以用this.$store.state.count在任何一个组件里面获取showfooter和changebleNum定义的值了，
  但这不是理想的获取方式；vuex官方API提供了一个getters，和vue计算属性computed一样，来实时监听state值的变化(最新状态)，
  并把它也仍进Vuex.Store里面
   */
  state: {
    count: 0,
  },

  //实时监听state值的变化(最新状态)
  getter: {

  },

  /*
  mutattions也是一个对象，这个对象里面可以放改变state的初始值的方法，具体的用法就是给里面的方法传入参数state或额外的参数,
  然后利用vue的双向数据驱动进行值的改变，同样的定义好之后也把这个mutations扔进Vuex.Store里面
  这时候你完全可以用 this.$store.commit('increment') 在别的组件里面进行改变 count 的值了，
  但这不是理想的改变值的方式；因为在 Vuex 中，mutations里面的方法 都是同步事务，
  意思就是说：比如这里的一个this.$store.commit('newNum',sum)方法,两个组件里用执行得到的值，
  每次都是一样的，这样肯定不是理想的需求
  */
  mutations: {
    increment(state){
      state.count += 1;
    },
    decrement(state){
      state.sount -= 1;
    }
  },

  /*
  好在vuex官方API还提供了一个actions，这个actions也是个对象变量，最大的作用就是里面的Action方法 可以包含任意异步操作，
  这里面的方法是用来异步触发mutations里面的方法，actions里面自定义的函数接收一个context参数和要变化的形参，
  context与store实例具有相同的方法和属性，所以它可以执行context.commit(' '),然后也不要忘了把它也扔进Vuex.Store里面：
   */
  /*
  而在外部组件里进行全局执行actions里面方法的时候，你只需要用执行
  this.$store.dispatch('')

  * */
  actions: {

  }
})
