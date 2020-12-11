<template>
    <div class="content-warp top-news">
        <div class="article-title">
            <div class="border-left"></div>
            <div>
                <h3>头条新闻</h3>
                <p class="des">NEWS</p>
            </div>
        </div>
        <div class="news-warp">
            <div class="content">
                <div
                    class="news-item"
                    v-for="(item, index) in newsContent"
                    :key="index"
                    @click="onOpenUrl(item.link)"
                >
                    <img :src="item.pic" alt="" />
                    <div>
                        <p class="title">{{ item.title }}</p>
                        <p class="des">{{ item.des }}</p>
                    </div>
                </div>
            </div>
            <div class="time-line">
                <a-timeline>
                    <a-timeline-item>
                        <template #dot
                            ><img
                                class="cube-icon"
                                src="../assets/cube.png"
                                alt=""
                        /></template>
                        <p class="title">
                            元戎启行联合杭州，建立长三角自动驾驶测…
                        </p>
                        <p class="des">
                            9月29日，
                            深圳元戎启行科技有限公司与杭州余杭经济开发区就“深圳元戎启行科技有限公司长三深圳元戎启行科技有限公司与杭州余杭经济开发区就“深圳元戎启行科技有限公司长三
                        </p>
                    </a-timeline-item>
                    <a-timeline-item>
                        <template #dot
                            ><img
                                class="cube-icon"
                                src="../assets/cube.png"
                                alt=""
                        /></template>
                        <p class="title">
                            元戎启行联合杭州，建立长三角自动驾驶测…
                        </p>
                        <p class="des">
                            9月29日，
                            深圳元戎启行科技有限公司与杭州余杭经济开发区就“深圳元戎启行科技有限公司长三深圳元戎启行科技有限公司与杭州余杭经济开发区就“深圳元戎启行科技有限公司长三
                        </p></a-timeline-item
                    >
                    <a-timeline-item>
                        <template #dot
                            ><img
                                class="cube-icon"
                                src="../assets/cube.png"
                                alt=""
                        /></template>
                        <p class="title">
                            元戎启行联合杭州，建立长三角自动驾驶测…
                        </p>
                        <p class="des">
                            9月29日，
                            深圳元戎启行科技有限公司与杭州余杭经济开发区就“深圳元戎启行科技有限公司长三深圳元戎启行科技有限公司与杭州余杭经济开发区就“深圳元戎启行科技有限公司长三
                        </p></a-timeline-item
                    >
                    <a-timeline-item>
                        <template #dot
                            ><img
                                class="cube-icon"
                                src="../assets/cube.png"
                                alt=""
                        /></template>
                        <p class="title">
                            元戎启行联合杭州，建立长三角自动驾驶测…
                        </p>
                        <p class="des">
                            9月29日，
                            深圳元戎启行科技有限公司与杭州余杭经济开发区就“深圳元戎启行科技有限公司长三深圳元戎启行科技有限公司与杭州余杭经济开发区就“深圳元戎启行科技有限公司长三
                        </p></a-timeline-item
                    >
                    <a-timeline-item>
                        <template #dot
                            ><img
                                class="cube-icon"
                                src="../assets/cube.png"
                                alt=""
                        /></template>
                        <p class="title">
                            元戎启行联合杭州，建立长三角自动驾驶测…
                        </p>
                        <p class="des">
                            9月29日，
                            深圳元戎启行科技有限公司与杭州余杭经济开发区就“深圳元戎启行科技有限公司长三
                        </p></a-timeline-item
                    >
                </a-timeline>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TopNews',
        data() {
            return {
                newsContent: [{
                    pic: require('../assets/top-news-1.png'),
                    title: '分享主题分享主题分享主题分享主题分享主题分享分享主题分享主题分享主题分享主题分享主题分享',
                    des: '分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介。分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介分享简介。'
                }, {
                    pic: require('../assets/top-news-2.png'),
                    title: '新四化下的汽车零部件行业报告金山办公宣布金山新四化下的汽车零部件行业报告金山办公宣布金山',
                    des: '乘用车销量持续下滑，靠整车销量生存的汽车零部件企业该何去何从？36氪获悉，金山办公宣布金山文档成为第31届世界大学生运动会办公软件类官方独家供应商。'
                }, {
                    pic: require('../assets/top-news-3.png'),
                    title: '新四化下的汽车零部件行业报告金山办公宣布金山新四化下的汽车零部件行业报告金山办公宣布金山',
                    des: '乘用车销量持续下滑，靠整车销量生存的汽车零部件企业该何去何从？36氪获悉，金山办公宣布金山文档成为第31届世界大学生运动会办公软件类官方独家供应商。'
                }]
            }
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

    .time-line {
        padding: 45px 22px 0 33px;
        .title {
            font-size: 14px;
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 700;
            margin-bottom: 10px;
            color: #333333;
            line-height: 21px;
            &:hover {
                color: #318aff;
                cursor: pointer;
            }
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