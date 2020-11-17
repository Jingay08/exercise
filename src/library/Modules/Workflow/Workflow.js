import Condition from '../Condition/Condition'


class Workflow{
    constructor(){
        console.log('这是一个工作流模块！')
    }

    CONFINE = {
        add(...data){
            this.a()
            this.b()
            console.log(...data,'这是一个约定！')
        },
        condition(...data){
            let instance = new Condition(...data)
            $More.bind(instance)
            return instance
        }
    }
    a(){
        console.log('a____第一个')
    }

    b(){
        console.log('b_____第二个')
    }
}

export default Workflow