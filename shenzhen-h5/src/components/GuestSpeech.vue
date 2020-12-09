<template>
    <div class="guests-speech content-warp">
        <div class="article-title">
            <div class="border-left"></div>
            <div>
                <h3>嘉宾演讲</h3>
                <p class="des">Guest speech</p>
            </div>
        </div>
        <div class="speech-group">
            <div
                class="speech-people"
                v-for="(item, index) in speechPeopleList"
                :key="index"
            >
                <img :src="item.img" alt="" />
                <div class="detail">
                    <p class="name">{{ item.name }}</p>
                    <p class="positon">{{ item.positon }}</p>
                    <p class="content">{{ item.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GuestSpeech',
        data() {
            return {
                speechPeopleList: [
                    {
                        img: require('../assets/guest-sppech-1.png'),
                        name: '演讲嘉宾',
                        positon: '职位介绍职位介绍职职位介绍职位介',
                        content: '36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人国新商业生态注入新的源动力！政策导向等定期输出高质量研究报告。'
                    },
                    {
                        img: require('../assets/guest-sppech-2.png'),
                        name: '演讲嘉宾',
                        positon: '职位介绍职位介绍职职位介绍职位介',
                        content: '36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人国新商业生态注入新的源动力！政策导向等定期输出高质量研究报告。'
                    },
                    {
                        img: require('../assets/guest-sppech-1.png'),
                        name: '演讲嘉宾',
                        positon: '职位介绍职位介绍职职位介绍职位介',
                        content: '36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人国新商业生态注入新的源动力！政策导向等定期输出高质量研究报告。'
                    },
                    {
                        img: require('../assets/guest-sppech-2.png'),
                        name: '演讲嘉宾',
                        positon: '职位介绍职位介绍职职位介绍职位介',
                        content: '36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人国新商业生态注入新的源动力！政策导向等定期输出高质量研究报告。'
                    }, {
                        img: require('../assets/guest-sppech-1.png'),
                        name: '演讲嘉宾',
                        positon: '职位介绍职位介绍职职位介绍职位介',
                        content: '36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人国新商业生态注入新的源动力！政策导向等定期输出高质量研究报告。'
                    },
                    {
                        img: require('../assets/guest-sppech-2.png'),
                        name: '演讲嘉宾',
                        positon: '职位介绍职位介绍职职位介绍职位介',
                        content: '36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人国新商业生态注入新的源动力！政策导向等定期输出高质量研究报告。'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .guests-speech {
        margin-bottom: 20px;
        flex-direction: column;
    }
    .article-title {
        margin-bottom: 27px;
    }
    img {
        width: 300px;
        height: 300px;
        margin-right: 25px;
    }
    .speech-group {
        display: flex;
        flex-wrap: wrap;
    }
    .speech-people {
        display: flex;
        flex: 1 1 50%;
		margin-bottom: 50px;
    }
    .detail {
        width: 232px;
    }
    .name {
        font-size: 28px;
        font-family: SourceHanSansCN-Medium, SourceHanSansCN;
        font-weight: 500;
        color: #333333;
        line-height: 28px;
        letter-spacing: 1px;
    }
    .positon {
        font-size: 24px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #333333;
        line-height: 32px;
        margin: 28px 0 15px;
    }
    .content {
        font-size: 14px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #333333;
        line-height: 25px;
    }
</style>