class Condition{
    constructor(){
   
    }
    CONFINE = {
        condition(...data){
          console.log(data, 1)
          let params = this.condition(data[0].flowElements, data[0].widgets)
          return this.conditionHandle(...params)
        }
        
    }

    condition (data = [], values = []) {
        if (data.length <= 0) {
          return
        }
  
        let conditions = [] // 先找到匹配的条件

        data.forEach(v => {
          if (v.type === 'StartEvent') {
            conditions = v.conditions
            return false
          }
        })
      
        return [conditions, values, data]
      }


    conditionHandle (conditions, values, data) {
      this.targetUserData = []
      let targetUserTask = '' // 匹配的id
      for (let i = 0; i < conditions.length; i++) { // 在根据匹配条件进行匹配

         // 同过计数来查询匹配的成功项
        let num = 0
        let condition = conditions[i].condition
        for (var j = 0; j < condition.length; j++) {
          for (var k = 0; k < values.length; k++) {
            if (values[k].widgetId === condition[j].widgetId) {
              
              if (!values[k].value) {
                return []
              }

              // 判断是否符合条件
              if (this.conditionFilter(condition[j], values[k].value)) {
                num++
              }
            }
          }
        }
        if (num === condition.length) {
          targetUserTask = conditions[i].targetUserTask // 现在已经找到匹配的id
          break
        }
      }

      // 根据 targetUserTask 在来匹配数据
      let getSidUser = data.find((value) => {
        return value.sid === targetUserTask
      })

      // 当匹配到的数据的条件还有值时，继续循环相关的条件
      if (getSidUser && getSidUser.conditions && getSidUser.conditions.length) {
        this.conditionHandle(getSidUser.conditions, values, data)
      }

      // 当找到的type类型为endEvent时需要结束
      if (getSidUser && getSidUser.type !== 'EndEvent') {
        this.targetUserData.push(getSidUser)
      }

      return this.targetUserData
    }

    // 过滤条件
    // type条件 current当前值 reduced对比值
    conditionFilter (condition, current) {
      let operator = condition.operator
      // 注意有可能为字符串、数字、数组的形式
      // 查看最后的返回值进行处理相对应的处理
      let reduced = Number(condition.value)
      // current = +current
      // isNaN(current)
      if (current.toString() === 'NaN' || reduced.toString() === 'NaN') {
        return false
      }
      switch (operator) {
        case '大于':
          return (current > reduced)
        case '小于':
          return (current < reduced)
        case '属于':
          return (current === reduced)
        case '不属于':
          return (current !== reduced)
        case '小于等于':
          return (current <= reduced)
        case '大于等于':
          return (current <= reduced)
        default:
          return false
      }
    }
    
}

export default Condition