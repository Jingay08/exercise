import Manage from '../Store/Manage'
import Port from '../Port'
const METHODS = {
    ref:{name:'Model',module:Manage,fn:'read'},
    status:{name:'Work',module:Store,fn:'read'},
    refReset:{name:'Model',module:Manage,fn:'reset'},
    statusReset:{name:'Work',module:Store,fn:'reset'},
}

/**
 * 主实例属性，方法绑定 
 **/
export default {
    _:{}, // working area
    // 实例绑定
    bind:(instance)=>{   
        Object.assign(instance,{
            confine(name,...params){
                if(this.CONFINE && this.CONFINE[name]){
                    return this.CONFINE[name].call(this,...params)
                }
                throw new Error(`不存在该约定`)
            }
        })
        return instance
    },

    // 接口请求
    axios:(params,methods,...data)=>{
        return new Port(params,methods,...data)
    },
    // working area与实例回调方法
    workArea(name,key,...params){
        let Model = METHODS[name]
        let data = Symbol(Model.name)
        $More._[data] = $More.bind(Model.module[Model.fn](key,...params))
        return { key:data,value:$More._[data] }
    },
    // 模块引用
    ref(key,...params){
        return $More.workArea('ref',key,...params)
    },
    // 模块重置化
    refReset(key,...params){
        return $More.workArea('refReset',key,...params)
    },
    // 状态模块引用
    status(key,...params){
        return $More.workArea('status',key,...params)
    },

    // 状态模块重置化引用
    statusReset(key,...params){
        return $More.workArea('statusReset',key,...params)
    },
    /**
     * 对象解构赋值
     * @param {*} main 主对象
     * @param {*} arr 复制键集群
     * @param {*} object 复制源
     * @returns
     */
    copy(main,arr,object){
        let func = {
            string(res){
                if(object[res]){
                    main[res] = object[res] 
                    return false
                }
                return true
            },
            object(res){
                for(let i in res){
                    if(typeof res[i] === 'function'){
                        main[i] = res[i](object)
                    }else{
                        return true
                    }
                }
                return false
            }
        }
        let nothing = arr.filter(res=>{
            let item = func[typeof res](res)
            return item.length > 0 
        })
        return nothing
    },
    /**
     * 将对象转换为字符串
     * @param {*} obj 对象toString方法 
     */
    toString(obj){
        let str = ``
        for(let i in obj){ 
            str += `${i}:${obj[i].toString()}`
        }
        return str
    }
}