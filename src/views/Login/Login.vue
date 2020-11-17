<template>
    <div id="login">
        <div class="back-theEarth login-back" @click="CutBack" ref="backLog"></div>
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
            password_input: '',
            backCount: 0,
            backArr: this.constant["backArr"]
        }
    },
    methods: {
        CutBack() {
            let nowBack  = this.backArr[this.backCount];
            let nextBack = this.backArr[this.backCount+1] ? this.backArr[this.backCount+1] : this.backArr[0];
            let replaceBack = this.$refs.backLog.className.replace(nowBack, nextBack);
            this.$refs.backLog.className = replaceBack;
            this.backCount++;
            if(this.backCount == this.backArr.length) this.backCount = 0;
        },
        Login() {
            this.$router.push({path: '/index'});
        }
    }
}
</script>

<style>

</style>