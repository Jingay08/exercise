import Header from './Header/Header';

const componentArr = [
    Header
];

export default Vue => {
    for(let key in componentArr){
        Vue.component(componentArr[key].name, componentArr[key]);
    }
  };

