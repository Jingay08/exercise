<template>
    <el-header>
        <div class="back" >
            <el-page-header @back="GoBack" v-if="backChunkFlag"></el-page-header>
        </div>
        <div class="role" 
            v-if="roleChunkFlag"
            @mouseenter="RoleMouseenter" 
            @mouseleave="RoleMouseleave">
            <el-avatar icon="el-icon-user-solid" :src="require(`@/${logoUrl}`)"></el-avatar>
            <p class="role-name">吼清拉少</p>
            <transition name="thin">
                <div 
                    class="role-list" 
                    ref="roleList" 
                    v-if="roleFlag">
                    <template v-for="(item, idx) in roleList" >
                        <p 
                            v-if="item.name" 
                            :key="idx" 
                            class="role-list-item"
                            @click="MessageClick(item.name)">{{item.name}}</p>
                        <el-divider v-else-if="item.special" :key="idx"></el-divider>
                    </template>
                </div>
            </transition>
        </div>
    </el-header>
</template> 

<script>
import './style.scss';
export default {
    name: "Header",
    props: {
        backChunkFlag: {
            type: Boolean,
            default: () => {
                return false;
            }
        },
        logo: {
            type: String
        },
        roleChunkFlag: {
            type: Boolean,
            default: () => {
                return false;
            }
        },
        roleList: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    data() {
        return {
            logoUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            roleFlag: false
        }
    },
    methods:{
        GoBack() {
            this.$router.go(-1)
        },
        RoleMouseenter() {
            this.roleFlag = true;
        },
        RoleMouseleave() {
            this.roleFlag = false;
        },
        MessageClick(name) {
            this.$emit("click", name);
        }

    },
    watch:{
        logo: {
            handler(pre) {
                this.logoUrl = pre;
            },
            immediate: true,
            deep: true
        }
    }
}
</script>