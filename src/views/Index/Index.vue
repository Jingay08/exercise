<template>
    <div class="Index">
        <Header 
            :logo="headerLogo" 
            :roleList="roleList" 
            :roleChunkFlag="roleFlag" 
            @click="RoleItemClick"/>
        <div class="day index-back"></div>
        <div class="night index-back"></div>
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
                "学习资料": "StudyDatum"
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
            console.log(11111)
        },
       
    },
    mounted() {
        // this.Move()
    }
}
</script>