<template>
    <div v-if="!showPage" class="loading-content">
        <!-- <a-spin size="large" /> -->
    </div>
    <div v-else class="meeting-process-content">
        <a-back-top />
        <HeadNav isPrevious="true" />
        <div class="main-banner"></div>
        <div class="address-bg content-warp">
            <div class="article-title">
                <div class="border-left"></div>
                <div id="meeting-bg">
                    <h3>致辞</h3>
                    <p class="des">Address</p>
                </div>
            </div>
            <HomeCarousel />
        </div>
        <GuestSpeech />
        <Roundtable />
        <TopNews />
        <FooterBanner />
        <ParticipatingCompanies />
        <Footer />
    </div>
</template>


<script>
    import HeadNav from '@/components/HeadNav.vue'
    import HomeCarousel from '@/components/HomeCarousel.vue'
    import GuestSpeech from '@/components/GuestSpeech.vue'
    import Roundtable from '@/components/Roundtable.vue'
    import TopNews from '@/components/TopNews.vue'
    import FooterBanner from '@/components/FooterBanner.vue'
    import ParticipatingCompanies from '@/components/ParticipatingCompanies.vue'
    import Footer from '@/components/Footer.vue'
    import {mapActions, mapState} from 'vuex'
    import {message} from 'ant-design-vue';

    export default {
        name: 'Home',
        components: {
            HeadNav,
            HomeCarousel,
            GuestSpeech,
            Roundtable,
            TopNews,
            FooterBanner,
            ParticipatingCompanies,
            Footer,
        },
        data() {
            return {
                showPage: false
            }
        },
        computed: {
            ...mapState({
                vxAllDataInfo: state => state.data.allDataInfo.meetingBgInfo,
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

<style lang="scss" >
    .address-bg {
        flex-direction: column;
        p {
            margin: 22px 0 70px;
            font-size: 14px;
            font-family: SourceHanSansCN-Regular, SourceHanSansCN;
            font-weight: 400;
            color: #333333;
            line-height: 25px;
        }
        .article-title {
            margin-bottom: 27px;
        }
    }

    .slick-dots {
        li > button {
            background: #000 !important;
        }
        .slick-active > button {
            background: #318aff !important;
        }
    }
    .slick-dots-bottom {
        bottom: -34px !important;
    }
    .meeting-process-content {
        .top-news {
            margin-bottom: 60px;
        }
    }
</style>
