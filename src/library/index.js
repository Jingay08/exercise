import Single from './Main/More';
import Els from './Els';
import ElsPort from './ElsPort';
import JayWord from './JayWord';
export default {
    install(Vue,option){
        // 模块对象入口初始化
        Object.assign($More,Single,{
            request:{
                success:(config)=>{
                    let url = config.url;
                    const userId = sessionStorage.userId;
                    const acctIdKey = sessionStorage.acctIdKey;
                    if(config.method == "get") {
                        Object.assign(config.params, {
                            userId:userId,
                            acctIdKey:acctIdKey
                        })
                        if(config.params) {
                            url += '?'
                            let keys = Object.keys(config.params)
                            for (let key of keys) {
                                url += `${key}=${encodeURIComponent(config.params[key])}&`
                            }
                            url = url.substring(0, url.length - 1)
                            config.params = {}
                        }
                    } else if(config.method == "post"){
                        Object.assign(config.data, {
                            userId:userId,
                            acctIdKey:acctIdKey
                        })
                    }
                    config.url = url
                    return config
                },
                error:(error)=>{
                    return Promise.reject(error)
                }
            },
            response:{
                success:(response)=>{
                    if(response.status != "200") return;
                    return response
                },
                error:(error)=>{
                    return Promise.reject(error)
                }
            }
        })
        
        // 事件触发数据回收
        window.onbeforeunload = function(){
            $More._ = {}
        }

        // 实例内操作方法
        Vue.mixin({
            methods:{
                $Get(key){
                    return this[key] ? $More._[this[key]] : $More._[key]
                }
            },
        })

        Vue.prototype.$Bus = new Vue();
        Vue.prototype.$Els = new Els();
        Vue.prototype.$ElsPort = new ElsPort();
        Vue.prototype.$JayWord = new JayWord();
        Vue.prototype.$Bus = new Vue();

        class CommonLibrary extends Vue {
            constructor(arg,...params) {
                super(arg);
                this.lodingArr = [];
            }
            loadingAlone(domName) {
                let result = this.lodingArr.indexOf(domName);
                if(result != "-1") return;
                this.lodingArr.push(domName); 
                return this.$loading({
                    target: document.querySelector(domName)
                })
            }
            aloneClose(vueNode) {
                let result = this.lodingArr.indexOf('.' + vueNode.target.classList[0]);
                setTimeout(() => {
                    vueNode.close();
                },1000)
                this.lodingArr.splice(result);
            }
        }
        Vue.prototype.$Common = new CommonLibrary()
        // 模块级声明
        // let a = $More.axios({                                   // 接口模块实例化
        //     name:'flow',                                        // 接口模块名称
        //     data:{ name:'这是个模块' },                          // 接口模块默认参数
        //     methods:(res)=>{                                    // 接口模块默认回调
        //         console.log(res,'____我是模块函数')
        //         return res.data.data
        //     }
        // })
        
        // // 接口块声明
        // a.scope('before:flow',{                                 // 接口块声明
        //     name:[ 'GetAllFinanceType', 'Postname2'],           // 接口块声明接口区间
        //     data:{ age:'24' },                                  // 接口块声明默认参数
        //     custom:(res)=>{                                     // 接口块声明钩子函数
        //         console.log(res,'____我是块级方法')
        //         return res
        //     }
        // })

        // // 私有化方法声明
        // a.use('GetAllFinanceType',{                             // 接口调用
        //     data:{custom:'自定义属性',num:()=>this.a+this.b},                          // 接口参数
        //     custom:(res)=>{                                     // 接口回调
        //         console.log(this,'___this指向')
        //         return res
        //     }
        // })

        // // 数组序列调用
        // a.use([                                                 // 同步序列化回调
        //     {
        //         name:'GetAllFinanceType',                       // 序列化回调名称
        //         data:{custom:'自定义属性'},                      // 序列化回调参数
        //         custom:(res)=>{                                 // 序列化回调函数
        //             console.log(this,'___this指向')
        //             return res
        //         }
        //     },
        //     {
        //         name:'GetAllFinanceType',
        //         data:{custom:'第二份数据'},
        //         custom:(res)=>{
        //             console.time()
        //             this.red = res
        //             console.timeEnd()
        //             console.log(this,'___this指向第第二级别')
        //             return res
        //         }
        //     },
        //     {
        //         name:'GetAllFinanceType',
        //         data:{
        //             custom:()=>this.red                         // 函数式传参
        //         },
        //         custom:(res)=>{
        //             console.log(this,this.red,'___this指向')
        //             return res
        //         }
        //     }
        // ])


        // let add = (res)=>{
        //     this.num = this.num ? this.num+res : res
        //     return add
        // }

        // add.toString = ()=>{
        //     return this.num
        // }
        // console.log(add(1)(2)(3),'_______this.num')
    }
}