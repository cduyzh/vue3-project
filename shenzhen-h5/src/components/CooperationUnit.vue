<template>
    <div class="content-warp cooperation-unit-warp">
        <div class="article-title">
            <div class="border-left"></div>
            <div>
                <h3>{{ vxAllDataInfo.title }}</h3>
                <p class="des">{{ vxAllDataInfo.des }}</p>
            </div>
        </div>
        <div
            class="content"
            v-for="item in vxAllDataInfo.dataListInfo"
            :key="item.id"
        >
            <h4>{{ item.title }}</h4>
            <div class="img-group">
                <img
                    v-for="(imgSrc, index) in item.unitLogoList"
                    :key="index"
                    :src="
                        imgSrc.length < 20
                            ? `http://pre.ryx365.com:8888/images/${imgSrc}.jpg`
                            : imgSrc
                    "
                />
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'CooperationUnit',
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                vxAllDataInfo: state => state.data.allDataInfo.cooperationUnitInfo,
            }),
        },
    }
</script>

<style lang="scss" scoped>
    .cooperation-unit-warp {
        flex-direction: column;
    }
    .article-title {
        margin-bottom: 50px;
    }
    .cooperation-unit-warp {
        margin-bottom: 110px;
    }
    .content {
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
    }
    h4 {
        font-size: 16px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 700;
        color: #333333;
        line-height: 12px;
        margin-bottom: 25px;
    }
    img {
        width: 180px;
        height: 60px;
        border: 1px solid #d8d8d8;
    }
    .img-group {
        img {
            margin: 0 24px 20px 0;
            &:nth-child(6n + 6) {
                margin-right: 0;
            }
        }
    }
</style>