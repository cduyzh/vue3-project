<template>
    <div class="content-warp meeting-agenda">
        <div class="article-title">
            <div class="border-left"></div>
            <div>
                <h3>{{ vxAllDataInfo.title }}</h3>
                <p class="des">{{ vxAllDataInfo.des }}</p>
            </div>
        </div>
        <div class="tab-head">
            <div
                class="row-title"
                :class="{ 'tab-actived': activeTabIndex === index }"
                v-for="(item, index) in vxAllDataInfo.agendaInfo"
                :key="index"
                @click="activeTabIndex = index"
            >
                {{ item.title }}
            </div>
        </div>
        <div class="tab-content">
            <div
                class="row-item"
                v-for="(item, index) in tabContentList"
                :key="index"
            >
                <div class="time">{{ item.time }}</div>
                <div class="main-content">{{ item.process }}</div>
                <div class="content">{{ item.title }}</div>
                <div class="speaker">{{ item.custom }}</div>
                <div class="from">{{ item.position }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'MeetingAgenda',
        data() {
            return {
                activeTabIndex: 0,
                tabMenuList: [],
            }
        },
        computed: {
            ...mapState({
                vxAllDataInfo: state => state.data.allDataInfo.meetingAgenda,
            }),
            tabContentList() {
                return this.vxAllDataInfo.agendaInfo[this.activeTabIndex].detailLists
            }
        }
    }
</script>

<style lang="scss" scoped>
    .meeting-agenda {
        flex-direction: column;
        margin-bottom: 70px;
    }
    .des {
        margin-bottom: 27px;
    }
    .article-title {
        margin-bottom: 27px;
    }
    .tab-head {
        margin-bottom: 50px;
        display: flex;
    }
    .row-title {
        height: 50px;
        background: #e6e6e6;
        color: #999999;
        line-height: 33px;
        font-size: 22px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        margin-right: 10px;
        cursor: pointer;
        transition: 0.3s all;
        &:last-child {
            margin-right: 0;
        }
    }
    .tab-actived {
        background: #318aff;
        color: #fff;
    }
    .tab-content {
    }
    .row-item {
        display: flex;
        margin-bottom: 33px;
        &:last-child {
            margin-bottom: 0;
        }
        > div {
            font-size: 14px;
            font-family: SourceHanSansCN-Regular, SourceHanSansCN;
            font-weight: 400;
            text-align: center;
            color: #333333;
        }
        .time {
            color: #318aff;
            width: 12%;
        }
        .main-content {
            width: 15%;
        }
        .content {
            width: 34%;
            text-align: left;
        }
        .speaker {
            width: 15%;
        }
        .from {
            text-align: left;
            width: 26%;
        }
    }
</style>