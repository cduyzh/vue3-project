<template>
    <div class="content-warp top-news">
        <div class="article-title">
            <div class="border-left"></div>
            <div>
                <h3>{{ vxAllDataInfo.title }}</h3>
                <p class="des">{{ vxAllDataInfo.des }}</p>
            </div>
        </div>
        <div class="news-warp">
            <div class="content">
                <div
                    class="news-item"
                    v-for="item in vxAllDataInfo.newsContent"
                    :key="item.id"
                    @click="onOpenUrl(item.url)"
                >
                    <img
                        :src="
                            item.img.length < 20
                                ? `http://pre.ryx365.com:8888/images/${item.img}.jpg`
                                : item.img
                        "
                        alt=""
                    />
                    <div>
                        <p class="title">{{ item.title }}</p>
                        <p class="des">{{ item.text }}</p>
                    </div>
                </div>
            </div>
            <div class="time-line">
                <a-timeline>
                    <a-timeline-item
                        v-for="item in vxAllDataInfo.timeLineContent"
                        class="time-line-item"
                        :key="item.id"
                        @click="onOpenUrl(item.url)"
                    >
                        <template #dot
                            ><img
                                class="cube-icon"
                                src="../assets/cube.png"
                                alt=""
                        /></template>
                        <p class="title">
                            {{ item.title }}
                        </p>
                        <p class="des">
                            {{ item.text }}
                        </p>
                    </a-timeline-item>
                </a-timeline>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'TopNews',
        data() {
            return {
            }
        },
        computed: {
            ...mapState({
                vxAllDataInfo: state => state.data.allDataInfo.topNews,
            }),
        },
        methods: {
            onOpenUrl(url = "//www.baidu.com/") {
                window.open(url)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .top-news {
        flex-direction: column;
    }
    .news-warp {
        display: flex;
        justify-content: space-between;
        margin-top: 33px;
    }
    .content {
        padding: 35px 33px 35px 31px;
        width: 825px;
        height: 580px;
        background: #ffffff;
        box-shadow: 0px 0px 15px 0px rgba(213, 213, 213, 0.5);
    }
    .time-line {
        width: 360px;
        height: 580px;
        background: #ffffff;
        box-shadow: 0px 0px 15px 0px rgba(213, 213, 213, 0.5);
        overflow-y: scroll;
    }
    .news-item {
        display: flex;
        cursor: pointer;
        transition: 0.3s all;
        margin-bottom: 30px;
        img {
            width: 250px;
            height: 150px;
            margin-right: 25px;
        }
        p {
            font-family: SourceHanSansCN-Regular, SourceHanSansCN;
            font-weight: 400;
            font-size: 14px;
        }
        .title {
            font-family: SourceHanSansCN-Regular, SourceHanSansCN;
            width: 486px;
            font-size: 20px;
            overflow: hidden; //超出的文本隐藏
            text-overflow: ellipsis; //溢出用省略号显示
            white-space: nowrap; //溢出不换行
            margin-bottom: 13px;
            font-weight: bold;
            color: #333;
        }
        .des {
            color: #333333;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
        &:hover {
            .title {
                color: #318aff;
            }
        }
    }
    .time-line-item {
        cursor: pointer;
        &:hover {
            .title {
                color: #318aff;
            }
        }
    }
    .time-line {
        padding: 45px 22px 0 33px;
        .title {
            font-size: 14px;
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 700;
            margin-bottom: 10px;
            color: #333333;
            line-height: 21px;
        }
        .des {
            font-size: 12px;
            font-family: SourceHanSansCN-Regular, SourceHanSansCN;
            font-weight: 400;
            color: #666666;
            line-height: 18px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .cube-icon {
            width: 14px;
            height: 14px;
        }
    }
</style>