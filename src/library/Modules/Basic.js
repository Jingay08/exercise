class Basic{
    constructor(){
        this.name = '名称'
        this.obj = {
            key1:'val1',
            key2:'val2', 
            key3:'val3',
            key4:'val4',
        }
        this.dir={ 
            app:'为Basic实例添加一个数据'
        }
        Object.freeze(this.CONFINE)
    }
    
    CONFINE = {
        add(...data){
            console.log(this)
            this.append(...data)
            this.a()
            this.b()
            console.log(this.obj,this,'___this.obj')
        }
    }

    confine(name,...params){
        return this.CONFINE[name].call(this,...params)
    }

    append(params){
        Object.assign(this.obj,params)
        return this.obj
    }

    a(){
        console.log('a')
    }

    b(){
        console.log('b')
    }
}

export default Basic 