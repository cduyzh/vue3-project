<template>
    <a-carousel effect="fade">
        <div class="carousel-item">
            <img class="content-img" src="../assets/address-1.png" alt="" />
            <div class="content-info">
                <h4 class="address-name">致辞人</h4>
                <p class="address-postion">职位介绍职位介绍职位介绍职位介绍</p>
                <p class="content-des">
                    36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人一起成长。我们拥有服务于VCPE等GP的VClub，有服务于创业者的EClub。现在我们发起36氪“源计划”，为一级市场源头的LP们提供展示舞台，共同为中国新商业生态注入新的源动力！政策导向等定期输出高质量研究报告，研究方向覆盖人工智能、5G、区块链、医疗、金融引导基金、孵化器/产业园区等提供专业定制化咨询服务，服务内容包括行业研究、产业规划、用户研究、股权投资研究、指数研究、投资配置、基金/企业尽调、战略规划、园区规划等，帮助政府、企业、投资机构等快速了解行业动态，把握发展机遇和明确发展方向。
                </p>
            </div>
        </div>
        <div class="carousel-item">
            <img class="content-img" src="../assets/address-1.png" alt="" />
            <div class="content-info">
                <h4 class="address-name">致辞人</h4>
                <p class="address-postion">职位介绍职位介绍职位介绍职位介绍</p>
                <p class="content-des">
                    36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人一起成长。我们拥有服务于VCPE等GP的VClub，有服务于创业者的EClub。现在我们发起36氪“源计划”，为一级市场源头的LP们提供展示舞台，共同为中国新商业生态注入新的源动力！政策导向等定期输出高质量研究报告，研究方向覆盖人工智能、5G、区块链、医疗、金融引导基金、孵化器/产业园区等提供专业定制化咨询服务，服务内容包括行业研究、产业规划、用户研究、股权投资研究、指数研究、投资配置、基金/企业尽调、战略规划、园区规划等，帮助政府、企业、投资机构等快速了解行业动态，把握发展机遇和明确发展方向。
                </p>
            </div>
        </div>
        <div class="carousel-item">
            <img class="content-img" src="../assets/address-1.png" alt="" />
            <div class="content-info">
                <h4 class="address-name">致辞人</h4>
                <p class="address-postion">职位介绍职位介绍职位介绍职位介绍</p>
                <p class="content-des">
                    36氪作为中国创投行业的见证者，完整经历了过去10年互联网以及移动互联网的创业浪潮，陪伴了一代创业者和投资人一起成长。我们拥有服务于VCPE等GP的VClub，有服务于创业者的EClub。现在我们发起36氪“源计划”，为一级市场源头的LP们提供展示舞台，共同为中国新商业生态注入新的源动力！政策导向等定期输出高质量研究报告，研究方向覆盖人工智能、5G、区块链、医疗、金融引导基金、孵化器/产业园区等提供专业定制化咨询服务，服务内容包括行业研究、产业规划、用户研究、股权投资研究、指数研究、投资配置、基金/企业尽调、战略规划、园区规划等，帮助政府、企业、投资机构等快速了解行业动态，把握发展机遇和明确发展方向。
                </p>
            </div>
        </div>
    </a-carousel>
</template>

<script>
    export default {
        name: 'HomeCarousel',
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .ant-carousel {
        margin-bottom: 112px;
    }
    .carousel-item {
        display: flex !important;
    }
    .content-img {
        width: 500px;
        height: 340px;
        margin-right: 76px;
    }
    .content-info {
        display: flex;
        flex-direction: column;
    }
    .address-name {
        font-size: 28px;
        font-family: SourceHanSansCN-Medium, SourceHanSansCN;
        font-weight: 500;
        color: #333333;
        line-height: 28px;
        letter-spacing: 1px;
        margin-bottom: 0;
    }
    .address-postion {
        font-size: 24px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #333333;
        line-height: 36px;
        margin: 28px 0 31px;
    }
    .content-des {
        font-size: 14px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #333333;
        line-height: 25px;
        margin: 0 !important;
    }
    .content-info {
        display: flex;
    }
</style>