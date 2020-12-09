<template>
    <div class="round-table content-warp">
        <div class="article-title">
            <div class="border-left"></div>
            <div>
                <h3>圆桌会议</h3>
                <p class="des">Roundtable</p>
            </div>
        </div>
        <div class="round-news">
            <div
                class="round-item"
                v-for="(item, index) in tableData"
                :key="index"
            >
                <div class="detail-info">
                    <img :src="item.img" alt="" />
                    <div class="info">
                        <p class="title">{{ item.title }}</p>
                        <p class="des">{{ item.des }}</p>
                    </div>
                </div>
                <div class="pepple-group">
                    <div
                        class="people"
                        v-for="(e, index) in item.peopleList"
                        :key="index"
                    >
                        <img class="avatar" :src="e.avatar" alt="" />
                        <p class="name">{{ e.name }}</p>
                        <p>{{ e.company }}</p>
                        <p>{{ e.position }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Roundtable',
        data() {
            return {
                tableData: [{
                    img: require('../assets/table-1.png'),
                    title: '圆桌主题圆桌主题圆桌主题圆桌主题',
                    des: '36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人国新商业生态注入新的源动力！政策导向等定期输出高质量研究报告，研究方向覆盖人工向覆盖人工向覆盖人工智能、5G、区块链、医疗、金融引导基金。36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人国新商业生态注入新的源动力！政策导向等定期输出高质量研究报告，研究方向覆盖人工向覆盖人工向覆盖人工智能、5G、区块链、医疗、金融引导基金。36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人国新商业生态注入新的源动力！',
                    peopleList: [{
                        avatar: require("../assets/guests-1.png"),
                        name: "王金银",
                        company: "北京知因智慧科技有限飞机公司",
                        position: "总经理",
                    },
                    {
                        avatar: require("../assets/guests-2.png"),
                        name: "王玉锁",
                        company: "新奥集团",
                        position: "董事局主席",
                    },
                    {
                        avatar: require("../assets/guests-3.png"),
                        name: "柳传志",
                        company: "马云公益基金会",
                        position: "创办人",
                    },
                    {
                        avatar: require("../assets/guests-4.png"),
                        name: "邓锋",
                        company: "中关村科技租赁股份有限公司",
                        position: "总经理",
                    },
                    {
                        avatar: require("../assets/guests-5.png"),
                        name: "王金银",
                        company: "北京知因智慧科技有限飞机公司",
                        position: "创始创人资租赁有限公司总经理",
                    }]
                }, {
                    img: require('../assets/table-1.png'),
                    title: '圆桌主题圆桌主题圆桌主题圆桌主题',
                    des: '36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人国新商业生态注入新的源动力！政策导向等定期输出高质量研究报告，研究方向覆盖人工向覆盖人工向覆盖人工智能、5G、区块链、医疗、金融引导基金。36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人国新商业生态注入新的源动力！政策导向等定期输出高质量研究报告，研究方向覆盖人工向覆盖人工向覆盖人工智能、5G、区块链、医疗、金融引导基金。36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人国新商业生态注入新的源动力！',
                    peopleList: [{
                        avatar: require("../assets/guests-1.png"),
                        name: "王金银",
                        company: "北京知因智慧科技有限飞机公司",
                        position: "总经理",
                    },
                    {
                        avatar: require("../assets/guests-2.png"),
                        name: "王玉锁",
                        company: "新奥集团",
                        position: "董事局主席",
                    },
                    {
                        avatar: require("../assets/guests-3.png"),
                        name: "柳传志",
                        company: "马云公益基金会",
                        position: "创办人",
                    },
                    {
                        avatar: require("../assets/guests-4.png"),
                        name: "邓锋",
                        company: "中关村科技租赁股份有限公司",
                        position: "总经理",
                    },
                    {
                        avatar: require("../assets/guests-5.png"),
                        name: "王金银",
                        company: "北京知因智慧科技有限飞机公司",
                        position: "创始创人资租赁有限公司总经理",
                    },
                    {
                        avatar: require("../assets/guests-5.png"),
                        name: "王金银",
                        company: "北京知因智慧科技有限飞机公司",
                        position: "创始创人资租赁有限公司总经理",
                    }, {
                        avatar: require("../assets/guests-5.png"),
                        name: "王金银",
                        company: "北京知因智慧科技有限飞机公司",
                        position: "创始创人资租赁有限公司总经理",
                    },
                    {
                        avatar: require("../assets/guests-5.png"),
                        name: "王金银",
                        company: "北京知因智慧科技有限飞机公司",
                        position: "创始创人资租赁有限公司总经理",
                    }]
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .round-table {
        flex-direction: column;
    }
    .article-title {
        margin-bottom: 27px;
    }
    .people {
        display: flex;
        flex: 20%;
        flex-direction: column;
        margin-bottom: 50px;
        align-items: center;
    }
    .avatar {
        width: 128px;
        height: 128px;
        border-radius: 100px;
        border: 4px solid #ededed;
    }
    p {
        font-size: 14px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #333333;
        line-height: 12px;
        text-align: center;
    }
    .name {
        font-size: 20px;
        font-family: SourceHanSansCN-Medium, SourceHanSansCN;
        font-weight: 500;
        color: #333333;
        line-height: 30px;
        margin: 15px 0;
    }
    .detail-info {
        display: flex;
        margin-bottom: 55px;
        img {
            width: 650px;
            height: 330px;
            margin-right: 65px;
        }
    }
    .pepple-group {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 50px;
    }
    .info {
        .title {
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 500;
            color: #333333;
            line-height: 28px;
            letter-spacing: 1px;
            text-align: left;
            font-size: 28px;
        }
        .des {
            text-align: left;
            font-size: 14px;
            font-family: SourceHanSansCN-Regular, SourceHanSansCN;
            font-weight: 400;
            color: #333333;
            line-height: 25px;
        }
    }
</style>