class Els {
    constructor() {
    }
    setCursorLocation(dom) {
        let result = this.examineDom(dom);
        let resultDom = result ? dom : document.createRange().createContextualFragment(dom);
        let selection = window.getSelection();
        selection.selectAllChildren(resultDom); //取消之前的文本区域 设置新的区域
        selection.collapseToEnd(); //把光标定位到文本最后
    }
    jointStr(soure, start, newStr) {   
        return soure.slice(0, start) + newStr + soure.slice(start);
    }
    replaceStr(soure, start, replaceValue) {
        return soure.slice(0, start+1) + replaceValue + soure.slice(soure.length);
    }
    examineDom(dom)  {
        let isDOM = dom && typeof dom === 'object' && dom.nodeType === 1 && typeof 	dom.nodeName === 'string';
        return isDOM;
    }
    getFormatDate(date, frontYear = 0) {
        var y = frontYear !== 0 ?  date.getFullYear() - frontYear : date.getFullYear(); 
        var m = date.getMonth() + 1; 
        m = m < 10 ? '0' + m : m; 
        var d = date.getDate(); 
        d = d < 10 ? ('0' + d) : d; 
        return y + '-' + m + '-' + d; 
    }
    keyToUpperCase(params) {
        let produceObj = {}
        if(typeof params == 'object') {
            for(let i in params) {
                produceObj[i.toUpperCase()] =   params[i]
            }
        }
        return produceObj
    }
    merageValue(paramsOne, paramsTwo, isDeep) {
        let createParams = {}
        if(isDeep) {
            for(let i in paramsOne) {
                for(let j in paramsTwo) {
                    if(i === j) {
                        createParams[i] = Array.isArray(paramsTwo[j]) ? [...paramsTwo[j], ...paramsOne[i]] : { ...paramsTwo[j], ...paramsOne[i]}
                    }
                }
            }
        }
        return _.cloneDeep(createParams);
    }
}

export default Els;