class Condition{
    constructor(){
        console.log('预览的参数')
    }
   
    CONFINE = {
        add(...data){
           console.log(...data,'这是一个Condition的约定！')
           this.query()
        },
        condition(){
            return '我是confine中的条件方法'
        }
    }

    query(){
        return '333'
    }
}

export default Condition