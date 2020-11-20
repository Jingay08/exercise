<template>
    <div class="study">
        <transition name="fade">
            <Header v-if="headerFlag" :backChunkFlag="backFlag"/>
        </transition>
        <div class="study-content">
            <div class="content-menu">
                <div class="menu-title"></div>
                <Tree :data="menuList"/>
            </div>
            <div class="content-list">
                {{menuList}}
            </div>
        </div>

    </div>
</template>

<script>
import '../../utils/css/common.scss';
import './style.scss';
export default {
    name: 'Study', 
    data() {
        return {
            headerFlag: false,
            backFlag: true,
            isCollapse: true,
            menuList: this.constant.menuList
        }
    },
    methods:{
        Move() {
            document.onmousemove = (e) => {
                if(e.pageY < 10) {
                    this.headerFlag = true;
                    return;
                } 
                if(e.pageY > 60) this.headerFlag = false; 
                
            }
        }
    },
    mounted() {
        this.Move()
    }
}
</script>