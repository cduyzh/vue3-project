<template>
    <div class="important-guests content-warp">
        <div class="article-title">
            <div class="border-left"></div>
            <div>
                <h3>重磅嘉宾</h3>
                <p class="des">Guest</p>
            </div>
        </div>
        <div class="guests-wrap">
            <div
                class="guest-item"
                v-for="(item, index) in importantGuestsData"
                :key="index"
            >
                <img class="avatar" :src="item.avatar" alt="" />
                <p class="name">{{ item.name }}</p>
                <p>{{ item.company }}</p>
                <p>{{ item.position }}</p>
            </div>
        </div>
        <p class="more-content">更多嘉宾正在邀请中···</p>
    </div>
</template>

<script>
    import {importantGuestsData} from '@/libs/mock'

    export default {
        name: 'ImportantGuests',
        data() {
            return {
                importantGuestsData
            }
        }
    }
</script>

<style lang="scss" scoped>
    .important-guests {
        margin-top: 70px;
        flex-direction: column;
    }
    .guests-wrap {
        display: flex;
        flex-wrap: wrap;
        margin-top: 42px;
    }
    .guest-item {
        display: flex;
        flex: 20%;
        flex-direction: column;
        margin-bottom: 50px;
        align-items: center;
        p {
            font-size: 14px;
            font-family: SourceHanSansCN-Regular, SourceHanSansCN;
            font-weight: 400;
            color: #333333;
            line-height: 12px;
            text-align: center;
            margin-bottom: 10px;
        }
    }
    .avatar {
        width: 128px;
        height: 128px;
        border-radius: 100px;
        border: 4px solid #ededed;
    }

    .name {
        font-size: 20px;
        font-family: SourceHanSansCN-Medium, SourceHanSansCN;
        font-weight: 500;
        color: #333333;
        line-height: 30px;
        margin: 15px 0;
    }
    .more-content {
        font-size: 20px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #999999;
        line-height: 12px;
        margin: 0 auto 68px;
    }
</style>