<template>
    <div class="content-warp cooperation-unit-warp">
        <div class="article-title">
            <div class="border-left"></div>
            <div>
                <h3>合作单位</h3>
                <p class="des">Cooperation Unit</p>
            </div>
        </div>
        <div class="content">
            <h4>指导单位</h4>
            <img src="../assets/support-unit-1.png" alt="" />
        </div>
        <div class="content">
            <h4>主办单位</h4>
            <div class="img-group-1">
                <img src="../assets/support-unit-1.png" alt="" />
                <img src="../assets/support-unit-2.png" alt="" />
            </div>
        </div>
        <div class="content">
            <h4>学术支持</h4>
            <div class="img-group-1">
                <img src="../assets/support-unit-1.png" alt="" />
                <img src="../assets/support-unit-2.png" alt="" />
                <img src="../assets/support-unit-3.png" alt="" />
                <img src="../assets/support-unit-4.png" alt="" />
            </div>
        </div>
        <div class="content">
            <h4>支持单位</h4>
            <div class="img-group-2">
                <img src="../assets/support-unit-1.png" alt="" />
                <img src="../assets/support-unit-2.png" alt="" />
                <img src="../assets/support-unit-3.png" alt="" />
                <img src="../assets/support-unit-4.png" alt="" />
                <img src="../assets/support-unit-5.png" alt="" />
                <img src="../assets/support-unit-1.png" alt="" />
                <img src="../assets/support-unit-2.png" alt="" />
                <img src="../assets/support-unit-3.png" alt="" />
                <img src="../assets/support-unit-4.png" alt="" />
                <img src="../assets/support-unit-5.png" alt="" />
                <img src="../assets/support-unit-1.png" alt="" />
                <img src="../assets/support-unit-2.png" alt="" />
                <img src="../assets/support-unit-3.png" alt="" />
                <img src="../assets/support-unit-4.png" alt="" />
                <img src="../assets/support-unit-5.png" alt="" />
                <img src="../assets/support-unit-1.png" alt="" />
                <img src="../assets/support-unit-2.png" alt="" />
                <img src="../assets/support-unit-3.png" alt="" />
                <img src="../assets/support-unit-4.png" alt="" />
                <img src="../assets/support-unit-5.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CooperationUnit',
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .cooperation-unit-warp {
        flex-direction: column;
    }
    .article-title {
        margin-bottom: 50px;
    }
    .cooperation-unit-warp {
        margin-bottom: 110px;
    }
    .content {
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
    }
    h4 {
        font-size: 16px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #333333;
        line-height: 12px;
        margin-bottom: 25px;
    }
    img {
        width: 180px;
        height: 60px;
        border: 1px solid #d8d8d8;
    }
    .img-group-1 {
        img {
            margin-right: 24px;
        }
    }
    .img-group-2 {
        img {
            margin: 0 24px 20px 0;
        }
    }
</style>