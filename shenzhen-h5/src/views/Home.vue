<template>
    <div v-if="!showPage" class="loading-content">
        <!-- <a-spin size="large" /> -->
    </div>
    <div v-else class="home">
        <a-back-top />
        <HeadNav />
        <div class="main-banner" :style='{backgroundImage: "url("+vxHomeBanner+")"}'></div>
        <div id="meeting-bg" class="meeting-bg content-warp">
            <div class="article-title">
                <div class="border-left"></div>
                <div>
                    <h3>{{ vxAllDataInfo.title }}</h3>
                    <p class="des">{{ vxAllDataInfo.des }}</p>
                </div>
            </div>
            <p>
                {{ vxAllDataInfo.detail }}
            </p>
        </div>
        <MeetingAgenda />
        <TopNews />
        <ImportantGuests />
        <FooterBanner />
        <CooperationUnit />
        <Footer />
    </div>
</template>

<script>
    import HeadNav from '@/components/HeadNav.vue'
    import MeetingAgenda from '@/components/MeetingAgenda.vue'
    import TopNews from '@/components/TopNews.vue'
    import ImportantGuests from '@/components/ImportantGuests.vue'
    import FooterBanner from '@/components/FooterBanner.vue'
    import Footer from '@/components/Footer.vue'
    import CooperationUnit from '@/components/CooperationUnit.vue'
    import {mapActions, mapState} from 'vuex'
    import {message} from 'ant-design-vue';

    export default {
        name: 'Home',
        components: {
            HeadNav,
            MeetingAgenda,
            TopNews,
            ImportantGuests,
            FooterBanner,
            Footer,
            CooperationUnit,
        },
        data() {
            return {
                showPage: false
            }
        },
        computed: {
            ...mapState({
                vxAllDataInfo: state => state.data.allDataInfo.meetingBgInfo,
                vxHomeBanner: state => state.data.allDataInfo.homeBanner,
            }),
        },
        methods: {
            ...mapActions({
                vxGetAllData: 'data/getAllData',
            })
        },
        async mounted() {
            try {
                await this.vxGetAllData()
                this.showPage = true
            } catch (error) {
                message.error('接口出了点问题');
            }
        },
    }
</script>

<style lang="scss">
    .loading-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
        width: 100%;
    }
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .content-warp {
        width: 1200px;
        display: flex;
        margin: 0 auto;
    }
    .main-banner {
        background-size: cover;
        width: 100%;
        background-repeat: no-repeat;
        height: 610px;
        max-width: 2018px;
        background-position-x: center;
        margin-bottom: 20px;
    }
    .meeting-bg {
        flex-direction: column;
        p {
            margin: 22px 0 70px;
            font-size: 14px;
            font-family: SourceHanSansCN-Regular, SourceHanSansCN;
            font-weight: 400;
            color: #333333;
            line-height: 25px;
            text-align: justify;
        }
    }
    .article-title {
        display: flex;
        .border-left {
            margin-right: 12px;
            width: 9px;
            height: 70px;
            background: #318aff;
        }
        h3 {
            font-size: 32px;
            font-family: SourceHanSansCN-Normal, SourceHanSansCN;
            font-weight: 400;
            color: #333333;
            line-height: 32px;
            margin-bottom: 15px;
        }
        .des {
            font-size: 22px;
            font-family: Humanist521BT-Light, Humanist521BT;
            font-weight: 300;
            color: #318aff;
            line-height: 26px;
            text-transform: uppercase;
            margin-bottom: 0;
            margin-top: 0;
            text-align: left;
        }
    }
</style>