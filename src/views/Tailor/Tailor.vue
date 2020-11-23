<template>
    <div class="Tailor">
       <transition name="fade">
            <Header v-if="headerFlag" :backChunkFlag="backFlag"/>
        </transition>
        <div class="day index-back"></div>
        <div class="night index-back"></div>
    </div>
</template>

<script>
import './style.scss';
export default {
    name: 'Tailor',
    data() {
        return {
            headerFlag: false,
            backFlag: true,
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