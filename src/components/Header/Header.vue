<template>
    <el-header>
        <div class=""></div>
        <div class="role">
            <el-avatar icon="el-icon-user-solid" :src="require(`@/${logoUrl}`)"></el-avatar>
            <p class="role-name">name</p>
         
        </div>
    </el-header>
</template> 

<script>
import './style.scss';
export default {
    name: "Header",
    props: {
        logo: {
            type: String
        }
    },
    data() {
        return {
            logoUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
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