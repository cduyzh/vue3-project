<template>
    <div class="footer">
        <div class="content-warp">
            <img class="logo" src="../assets/logo.png" alt="" />
            <div class="split-line"></div>
            <div
                class="nav-content"
                v-for="item in vxAllDataInfo.employList"
                :key="item.id"
            >
                <img
                    class="qr-code"
                    :src="
                        item.qrCode.length < 20
                            ? `http://pre.ryx365.com:8888/images/${item.qrCode}.jpg`
                            : item.img
                    "
                    alt=""
                />
                <div class="nav">
                    <h4>{{ item.title }}</h4>
                    <p class="tel">电话：{{ item.tel }}</p>
                    <p class="wechat">微信：{{ item.weChat }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'Footer',
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                vxAllDataInfo: state => state.data.allDataInfo.footInfo,
            }),
        },
    }
</script>

<style lang="scss" scoped>
    .logo {
        width: 170px;
        height: 75px;
    }
    .footer {
        width: 100%;
        height: 220px;
        display: flex;
        background: #4b4b4b;
        .content-warp {
            display: flex;
            align-items: center;
        }
    }
    .content-warp {
        width: 100%;
        justify-content: center;
    }
    .split-line {
        width: 1px;
        height: 136px;
        background: #666666;
        margin: 0 78px;
    }
    .nav {
        margin-right: 15px;
    }
    h4 {
        font-size: 18px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #ffffff;
        line-height: 27px;
        letter-spacing: 2px;
        margin-bottom: 15px;
    }
    p {
        font-size: 14px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #d8d8d8;
        line-height: 21px;
        margin-bottom: 0;
    }
    .qr-code {
        width: 82px;
        height: 82px;
        margin-right: 15px;
    }
    .nav-content {
        display: flex;
        margin-right: 75px;
    }
</style>