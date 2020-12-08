<template>
    <div class="footer-banner">
        <div class="banner-side">
            <img src="../assets/banner-1.png" alt="" />
        </div>
        <div class="banner-center">
            <img src="../assets/banner-2.png" alt="" />
            <div style="height: 15px"></div>
            <img src="../assets/banner-3.png" alt="" />
        </div>
        <div class="banner-side">
            <img src="../assets/banner-4.png" alt="" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterBanner',
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .footer-banner {
	overflow: hidden;
        display: flex;
        margin-bottom: 65px;
        justify-content: space-between;
    }
    .banner-side {
        flex: 0 0 35%;
        img {
			height: 389px;
            width: 100%;
        }
    }
    .banner-center {
        flex: 0 0 30%;
        margin: 0 15px;
        img {
            width: 100%;
			height: 187px;
        }
    }
</style>