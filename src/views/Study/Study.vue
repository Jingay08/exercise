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
                <div v-for="(item, idx) in menuList" :key="idx" class="list-chunk">
                    <p class="chunk-title">
                        <i class="el-icon-sunny"></i>
                        <span>{{item.name}}</span>
                    </p>
                    <div class="chunk-content">
                        <div v-for="(chunk, chunkIdx) in item.content" :key="chunkIdx" class="content-study">
                            <i :class="[chunk.icon ? chunk.icon : 'vue_icon']"></i>
                            <div class="study-detail">
                                <p class="detail-title">{{chunk.name}}</p>
                                <p class="detail-content">{{chunk.titleContent}}</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
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