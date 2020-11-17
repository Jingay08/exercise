class ElsPort {
    constructor() {
        const module = ['Index','Operation']
        module.forEach(x=>{this.init(x)})
    }
    init(name){
        const OperationAllPort =  $More.axios({   // 接口模块实例化
            name:name,                   // 接口模块名称
            methods:(res)=>{                    // 接口模块默认回调
                return res.data
            }
        });
        const obj = OperationAllPort.troop
        for(let i in obj){
            for(let j in obj[i]){
                this[`$${j}`] = (data,success)=>{
                    OperationAllPort.use(j,{data,custom:(res) => {
                        return success(res)
                    }});
                };
            };
        };
    };
}
export default ElsPort;