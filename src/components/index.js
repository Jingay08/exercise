import Header from './Header/Header';
import Tree from './Tree/Tree'
import CollapseTransition from './CollapseTransition/CollapseTransition'

const componentArr = [
    Header,
    Tree,
    CollapseTransition
];

export default Vue => {
    for(let key in componentArr){
        Vue.component(componentArr[key].name, componentArr[key]);
    }
  };

