<template>
    <div class="home">
        <a-back-top />
        <HeadNav />
        <div class="main-banner"></div>
        <div id="meeting-bg" class="meeting-bg content-warp">
            <div class="article-title">
                <div class="border-left"></div>
                <div>
                    <h3>会议背景</h3>
                    <p class="des">Conference background</p>
                </div>
            </div>
            <p>
                36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人一起成长。我们拥有服务于VCPE等GP的VClub，有服务于创业者的EClub。现在我们发起36氪“源计划”，为一级市场源头的LP们提供展示舞台，共同为中国新商业生态注入新的源动力！政策导向等定期输出高质量研究报告，研究方向覆盖人工智能、5G、区块链、医疗、金融、物流、文娱、消费、汽车、教育等多个领域，帮助政府、企业、投资机构等快速了解行业动态，把握发展机遇和明确发展方向。同时，研究院致力于为全国各级政府、企业、VC/PE机构、政府引导基金、孵化器/产业园区等提供专业定制化咨询服务，服务内容包括行业研究、产业规划、用户研究、股权投资研究、指数研究、投资配置、基金/企业尽调、战略规划、园区规划等，帮助政府、企业、投资机构等快速了解行业动态，把握发展机遇和明确发展方向。
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
            }
        },
    }
</script>

<style lang="scss">
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
        background: url("../assets/main-banner.png");
        background-size: cover;
        width: 100%;
        background-repeat: no-repeat;
        height: 488px;
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