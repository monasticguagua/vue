#项目总结

这是一个使用vue开发的后台管理项目。

#前期准备

1.安装环境以及各种包，由于用npm从官网下载不稳定，一般先安装淘宝镜像：

npm install -g cnpm --registry=https://registry.npm.taobao.org

2.脚手架

cnpm install @vue/cli -g  //下包
Vue create vue-study  //创建一个项目‘vue-webapp’
cd vue-webapp   //进入项目

npm run serve  //启动开发环境，
一般使用npm start代替，具体操作：
在package.js里，在script里： "start": "npm run serve"

当项目跑不起来时，你可以试着把node_modules包删干净，重装：
cnpm install

3.路由
   安装路由
    cnpm install vue-router -S  //下载相关包
    在src根目录下新建一个router.js的文件，在里面写如下代码
    imporrt Vue from 'vue'
    import VueRouter from 'vue-router'  //引入
    Vue.use(VueRouter)   //路由注册，即可得到相关方法
    export default new Vuerouter({  
        routes:[]     
    })                    //抛出

    在main.js入口文件中，把路由系统挂载到Vue系统中
    import router from './router.js'
    new Vue({
        router
    })

4. 状态管理
    状态管理工具在Vue项目架构中是可选的。但是，从项目发展角度看，最好还安装、集成一下。
    Vuex，它是Vue全家桶中最流利使用的状态工具。
    主要作用：
    * 组件之间数据共享
    * 实现数据缓存

    DevTools安装
    下载地址：https://github.com/arcliang/Vue-Devtools-

    Vuex安装
    cnpm install vuex -S

    在src根目录，创建 /store/index.js 文件，代码如下：
    ```
    import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex)

    export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {}
    })
    ```
    在 main.js 中挂载：
    ```
    import store from './store/index.js'
    new Vue({
    store
    }).$mount('#app')
    ```
    在组件中如何使用Vuex中的数据呢？
    ```
    this.$store.state.msg
    ```
    在组件中如何更新Vuex中的数据呢？
    ```
    this.$store.commit('mutationFn', payload)
    ```

    如何优雅地使用Vuex来管理应用程序中的外部数据？

    把外部数据定义在Vuex的state中，页面中就可以通过 $store.state来使用了。
    封装api接口（参考utils/api.js）
    在Vuex导入api方法，在actions中定义与后端交互的逻辑，把处理完成的数据通过mutations方法提交到state
    在mutations中定义 更新state的方法。当state变化时，页面自动更新
    那么actions在哪里被触发呢？在页面逻辑中触发它。

    【温馨提示】：建议在组件使用 map* 系列方法来使用Vuex中的数据和函数
    mapState 和 mapGetters 在写在 computed 中
    mapActions 和 mapMutations 写在 methods 中

5. axios

    它是一个HTTP工具，用于与后端进行数据交互。
    特点：
    1、基于Promise封装的库
    2、在客户端、Node端都可以使用

    在项目中怎么使用呢？
    1、cnpm install axios -S
    2、一定要封装请求拦截器和响应拦截器。参考 utils/axios.js
    3、最好把所有api统一封装可以复用的方法。参考 utils/api.js    

# 主要用到的技术栈有
1. vue  
渐进式JavaScript 框架
2. vue-router   
Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌
3. vuex  
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension (opens new window)，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。
Vuex中的五大概念
* state
* getters
* mutations
* actions
* mudules
Vuex一般适用于中大型的项目，如果项目够简单，不建议使用，vuex反而会冗余
4. sass
使用sass来控制样式，相比于css更加简洁，控制更加精准，结构一目了然
5. 使用到的UI框架
主要是使用到 element-ui
具体操作：
(1)  #安装插件 :cnpm install element-ui -S
(2)  在main.js 中引入注册
```
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
```

* 这个项目中，我用的比较多的组件有：
(1) 布局方面用到了栅格系统，Layout 提供了 row 和 col 两个组件来进行行列布局
(2) 通过Icon组件大量用到了一些icon小图标
(3) Button组件
(4) Checkbox  复选框组件
(5) Form 表单组件
(6) Select 选择器
(7) Switch 开关
(8) Table 表格
(9) Pagination 分页器
(10) Upload 上传
用法大都都是引入后即可使用。有一些多页面频繁使用的可以采用二次封装组件，例如Select 选择器，我就采用了二次封装，使用更加方便简洁，减少代码量。

#  团队组成
 前端1人，后端1人，项目开发周期3个月

# 功能模块
主要有：
商品列表展示模块，增加商品模块

# 项目亮点
作为一个后台管理系统，界面简洁，操作简单易懂，全程采用单页面组件化开发，代码分工明确，易于管理。

# 项目难点
数据处理业务较为复杂，频繁的使用到表单，对数据的准确性把控高。

# 一些主要技术问题
如何改变URL?
声明式路由导航：建议使用vue-router内置 <router-link> 组件来实现。
编程式路由导航：使用 路由api【$router.push()/replace()/back()】来实现页面跳转。

视图命名：当<router-view></router-view>加了name属性时，在路由匹配规则定义时要使用 components 字段。
路由别名：给路由匹配规则中的复杂path，取一个容易记忆的小名。
路由命名：给路由匹配规则取一个名字。

Vue-router 中hash模式和history模式的关系：
最直观的区别就是在url中 hash 带了一个很丑的 # 而history是没有#的
hash 模式下，仅 hash 符号之前的内容会被包含在请求中
history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致