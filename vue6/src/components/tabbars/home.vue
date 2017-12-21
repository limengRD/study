<template>
    <div>
        <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="(item,i) in lunboImg" :key="i">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                lunboImg: []
            }
        },
        created(){
            this.lunbotu()
        },
        methods: {
            async lunbotu() {
                const { data } = await this.$http.get('/api/getlunbo')
                if(data.status == 0) this.lunboImg = data.message
            }
        }
    }
</script>

<style>
    img {
        width: 100%;
        height: 100%;
    }
    .mint-swipe {
        height: 180px;
    }
</style>
