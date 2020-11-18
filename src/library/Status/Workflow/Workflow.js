/**
 * 工作流编辑状态管理模块
 * @class Workflow
 */
class Workflow{
    constructor(){
        this.tmp = {}       // 模板条件
        this.draw = {}      // 绘图区间
        this.set = {}       // 条件设置
        this.init()         // 初始化操作
    }
    init(){
        this.tmp = {
            style:'',
            panelShow:true,
            child:[
                // {name:'简单流程',intro:'所有人的审批人都一样',image:require('@/assets/charge/one.png')},
                // {name:'简单流程',intro:'所有人的审批人都一样',image:require('@/assets/charge/one.png')},
                // {name:'简单流程',intro:'所有人的审批人都一样',image:require('@/assets/charge/one.png')},
            ]
        }
    }
    CONFINE = {
        shrink(res){
            this.tmp.panelShow = !this.tmp.panelShow
            this.tmp.style = $More.toString(this.handleTmpClick(this.tmp.panelShow.toString()))
            return this.tmp
        }
    }
    handleTmpClick(res){
        let obj = {
            'true':{},
            'false':{ 
                height:'50px;',
                width:'200px;',
                'border-radius':'0px 50px 50px 0px;',
            }
        }
        return obj[res]
    }
    
}
export default Workflow 