<template>
    <div id="login">
        <div class="back-theEarth login-back" @click="CutBack" ref="backLog"></div>
        <transition name="thin">
            <i class="ball_icon login-sign" @click.stop="LoginSign" v-show="!loginFrameFlag"></i>
        </transition>
        <!-- <div class="login-sign" >
            <i class="ball_icon" @click.stop="LoginSign"></i>
        </div> -->
        <transition name="thin">
            <div class="login-import" v-if="loginFrameFlag">
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
                    <!-- <div class="both">登录</div> -->
                    <el-button type="primary" size="mini" @click="Login">登&nbsp;录</el-button>
                    <el-button size="mini">注&nbsp;册</el-button>
                </div>
            </div>
        </transition>
        <transition name="thin">
            <div class="shade" v-if="shadeFlag">
                <div class="container">
                    <div class="header"></div>
                    <div class="battery">
                    </div>
                    <div class="battery-copy">
                        <div class="g-wave"></div>
                        <div class="g-wave"></div>
                        <div class="g-wave"></div>
                    </div>
                </div>
            </div>
        </transition>
        
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
            backArr: this.constant["backArr"],
            backFlag: true,
            timeOut: undefined,
            loginFrameFlag: false,
            shadeFlag: false
        }
    },
    methods: {
        CutBack() {
            if(!this.backFlag) return; 
            this.backFlag = false;
            clearTimeout(this.timeOut);
            this.timeOut = setTimeout(() => {
                this.backFlag = true;
            },1000);
            let nowBack  = this.backArr[this.backCount];
            let nextBack = this.backArr[this.backCount+1] ? this.backArr[this.backCount+1] : this.backArr[0];
            let replaceBack = this.$refs.backLog.className.replace(nowBack, nextBack);
            this.$refs.backLog.className = replaceBack;
            this.backCount++;
            if(this.backCount == this.backArr.length) this.backCount = 0;
        },
        LoginSign() {
            this.loginFrameFlag = !this.loginFrameFlag;
        },
        Login() {
            if(this.account_input && this.password_input) {
                this.shadeFlag = true;
                this.loginFrameFlag = false;
                setTimeout(() => {
                    this.$router.push({path: '/index'});
                },10000)
            }
        }
    }
}
</script>