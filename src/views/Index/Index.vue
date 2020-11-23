<template>
    <div class="Index">
        <Header 
            :logo="headerLogo" 
            :roleList="roleList" 
            :roleChunkFlag="roleFlag" 
            @click="RoleItemClick"/>
        <router-view></router-view>
    </div>
</template>

<script>
import './style.scss'
export default {
    name: "Index",
    data() {
        return {
            headerLogo: 'assets/portrait_icon.jpg',
            roleFlag: true,
            roleList: this.constant["roleList"],
            roleResult: {
                '学习资料': 'StudyDatum',
                '裁剪图片': 'TailorPhoto',
                '退出登录': 'QuitLogin'
                
            }
        }
    },
    methods:{
        RoleItemClick(name) {
            const fnName = this.roleResult[name];
            this[fnName]()
        },
        StudyDatum() {
            this.$router.push({path: '/study'});
        },
        TailorPhoto() {
            this.$router.push({path: '/tailor'});
        },
        QuitLogin() {
            this.$router.push({path: '/login'});
        }
       
    },
    mounted() {
        console.log(this.$JayWord, '__')
        // this.Move()
    }
}
</script>