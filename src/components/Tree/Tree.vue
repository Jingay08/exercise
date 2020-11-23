<template>
    <div class="Tree">
        <ul v-for="(item, idx) in treeData" :key="idx"  :class="`${classTitle}`" class="tree-item">
            <li @click="expend($event,item)">
                <i :class="mathRandom()" class="preIcon"></i>
                <span class="title">{{item.name}}</span>
                <template  v-if="item.children">
                    <i :class="[item.show ? 'el-icon-arrow-down': 'el-icon-arrow-right']" class=" arrowDown"></i>
                </template> 
            </li>
            <template v-if="item.children">
                <collapse-transition>
                    <Tree :data="item.children" :classTitle="classTitle + '-' + idx" v-show="item.show"/>
                </collapse-transition>
            </template>
        </ul>
    </div>
</template>

<script>
import './style.scss';
export default {
    name: "Tree",
    props: {
        data: {
           
        },
        classTitle: {
            default:() => {
                return 'item';
            }
        }
    },
    data() {
        return {
            randomIcon: this.constant.randomIcon,
            treeData: []
        }
    },
    methods:{
        mathRandom() {
            const randomItem = this.randomIcon[Math.floor(Math.random() * this.randomIcon.length)];
            return randomItem;
        },
        expend(e, item) {
            let tarDom = e.currentTarget;
            let resultIsHave = tarDom.querySelector('.arrowDown');
            if(resultIsHave) {
                item.show = !item.show;
            } else {
            }
         
          
        }
    },
    watch:{
        data:{
            handler(pre, next) {
                this.treeData = _.cloneDeep(pre);
            },
            immediate: true,
            deep: true   
        }
    }
}
</script>