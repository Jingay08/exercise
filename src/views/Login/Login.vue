<template>
    <div id="login">
        <div class="login-import">
            <p class="login-title">登&nbsp;&nbsp;&nbsp;录</p>
            <div class="login-account login-chunk">
                <label for="">账&nbsp;号：</label>
                <el-input v-model="account_input" placeholder="请输入账号"></el-input>
            </div>
            <div class="login-password login-chunk">
                <label for="">密&nbsp;码：</label>
                <el-input v-model="password_input" placeholder="请输入密码"></el-input>
            </div>
            <div class="login-operation login-chunk">
                <el-button type="primary" size="mini" @click="Login">登&nbsp;录</el-button>
                <el-button size="mini">注&nbsp;册</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import './style.scss';
export default {
    name: 'Login',
    data() {
        return {
            account_input: '',
            password_input: ''
        }
    },
    methods: {
        Login() {
            this.$router.push({path: '/index'});
        }
    }
}
</script>

<style>

</style>