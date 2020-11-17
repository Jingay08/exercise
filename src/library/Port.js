import PortIndex from './Public/PortPublic'
import axios from 'axios'; // 引入axios
// 每实例化一个接口则是基于一个模块

class Port {
    constructor(params,methods=()=>{}){
        // 生成实例名称
        this.name = params.name
        
        // 生成系统集群
        this.troop = PortIndex[`__${params.name.trim().toUpperCase()}`]

        // 模块data数据
        this.data = params.data ? params.data : {}
        
        this.custom = {} // 自定义区域执行
        this.before = {}
        this.axios = axios
        this.methods = (...res)=>{
            return params.methods(...res)
        }
    }

    // 数据集群注册
    scope(name,params,...data){
        if(typeof name !== 'string' || Array.isArray(params) || typeof params !== 'object' ) throw new Error(`参数不正确！`)
        let arr = name.split(':')
        if(arr[0] === 'before'){ Object.assign(this.before,{
            [name]:{ name:params.name,data:params.data || {} ,success:params.custom } 
        }) }
        Object.assign(this.custom,{ [name]:params })
        return this.custom
    }

    // 激活注册的数据集群
    action(name){
        let arr = name.split(':')
        if(arr.length !== 2 || !this[`${arr[0]}Use`]) throw new Error('未识别可执行函数规范！')
        if(arr[0] !== 'before' && arr[0] !== 'after'){
           return this.custom[name] ? 
                this[`${arr[0]}Use`](this.custom[name]) : 
                (()=>{throw new Error(`未定义执行模块！`)})()
        }else{
            throw new Error(`before,after非主动执行函数规范！`)
        }
    }

    // 异步集群调用机制
    asyncUse(params){
        console.log(params)
    }

    // 同步集群调用机制
    notAsyncUse(params){
        
    }

    // 前置集群调用机制
    beforeUse(params){ 
        
    }

    // axios 调试实例
    interceptors(example){
        const interceptors = {

            //发送请求之前拦截
            request:()=>{
                example.interceptors.request.use($More.request.success, $More.request.error)
                return this
            },

            //返回响应之后拦截
            response:()=>{
         
                example.interceptors.response.use($More.response.success, $More.response.error)
                return this
            },

            removeRequest:() => {
                example.interceptors.request.eject(this.interceptors().request)
                return this
            },
            
            removeResponse:() => {
                example.interceptors.response.eject(this.interceptors().response)
                return this
            }
        }
        return interceptors
    }

    merge(params,data){
        for(let i in data){
            // console.log(data[i],typeof data[i],data,'___data[i')
            if(typeof data[i] !== 'function'){
                Object.assign(params,{[i]:data[i]})
            }else{
                // console.log(data[i](),'_____data[i]()')
                Object.assign(params,{[i]:data[i]()})
            }
        }
        return params
    }

    status(name,params={},type = ''){
        // 模块数据合并
        params = this.merge(params,this.data)
        let msg = { name:name }
        for(let i in this.troop){
            if(this.troop[i][name]){
                Object.assign(msg,{type:i,url:this.troop[i][name]})
            }
        }
        // console.log(msg,'____msg')
        let data = Object.assign({
            // `url` 是用于请求的服务器 URL
            url: `${msg.url}`,
            // `method` 是创建请求时使用的方法
            method: msg.type.toLowerCase() // 默认是 get
        })
        switch(msg.type.toUpperCase()){
            case 'GET':
                Object.assign(data,{params: params,})
                break;
            case 'POST':
                Object.assign(data,{data: params,})
                break;
            default:
                Object.assign(data,{data: params,method: 'post'})
        }
        let libAxios = axios.create({
            baseURL: global.baseUrl,
            // baseURL: 'http://192.168.10.255:8080/',
           

            responseType: type 
            // baseURL: 'http://192.168.10.127:8080',            
            // headers: { 'content-type': 'application/x-www-form-urlencoded' }
            // withCredentials: true,
        })
        // 
        this.interceptors(libAxios).request()
        this.interceptors(libAxios).response()
		return {
            instance:libAxios,
            data:data,
            methods:(res)=>{
                console.log(res)
            }
        }
    }
    
    // 接口调用
    use(name,params){
        let payout = {
            string(){
                let communica = this.status(name,params.data,params.type)
                Object.assign(communica,{custom:params.custom})
                for(let i in this.before){
                    if(this.before[i].name.indexOf(name) !== -1){
                        Object.assign(communica.data.data ? communica.data.data : communica.data.params,this.before[i].data)
                        return this.send(communica,this.before[i].success)
                    }
                }
                return this.send(communica)
            },
            array(){
                let message = name.map(res=>{
                    let communica = this.status(res.name,res.data)
                    for(let i in this.before){
                        if(this.before[i].name.indexOf(res.name) !== -1){
                            Object.assign(communica,{before:this.before[i].success,custom:res.custom})
                            if(communica.data.data){
                                communica.data.data = this.merge(communica.data.data,this.before[i].data)
                            }else{
                                communica.data.params = this.merge(communica.data.params,this.before[i].data)
                            }
                        }
                    }
                    return communica
                })
                this.send(message)
            }
        }
        
        typeof name === 'string' ? payout.string.call(this) : Array.isArray(name) ? payout.array.call(this) : undefined // 判断name的值为字符串还是数组，分别执行不同的方法
    }

    // 发起请求
    send(msg,func){
        let instant = Array.isArray(msg) ? msg.shift() : msg
        if(instant.data.data){
            instant.data.data = this.merge(instant.data.data,instant.data.data)
        }else{
            instant.data.params = this.merge(instant.data.params,instant.data.params)
        }

        // console.log(instant.data,instant,'____instant')

        instant.instance(instant.data).then((...res) => {
            // console.log('zhelschenggong',...res)
            let ModuleStart = typeof this.methods === 'function' ? this.methods(...res) : undefined // 模块方法

            let BlockStart = func ? func(ModuleStart,...res) : instant.before ? instant.before(ModuleStart,...res) : undefined // 接口块方法

            typeof instant.custom ==='function' ? instant.custom(BlockStart || ModuleStart ,...res) : undefined // 单接口方法

            Array.isArray(msg) && msg.length > 0 ? this.send(msg,func) : undefined // 若msg为数组则递归回执

        }).catch(err => {
            console.log(err)
            throw new Error(err)
        })
    }
}

export default Port