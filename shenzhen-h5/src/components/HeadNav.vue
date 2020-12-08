<template>
    <div class="head-nav-content content-warp">
        <a href="/">
            <img class="logo" src="../assets/logo.png" alt="" />
        </a>
        <div class="nav-menu">
            <a href="/"> 首页 </a>
            <a href="/"> 背景 </a>
            <a href="/"> 议程 </a>
            <a href="/"> 新闻 </a>
            <a href="/"> 嘉宾 </a>
            <a href="/"> 合作 </a>
            <a-dropdown
                :class="{ 'show-drop-down': showDropDown }"
                @visibleChange="onDropdownShow"
            >
                <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                    往届 <DownOutlined />
                </a>
                <template #overlay>
                    <a-menu>
                        <a-menu-item>
                            <a href="javascript:;">1st menu item</a>
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;">2nd menu item</a>
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;">3rd menu item</a>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </div>
        <a-button type="primary" @click="onClickBtn">申请参会</a-button>
    </div>
</template>

<script>
    import {DownOutlined} from '@ant-design/icons-vue';

    export default {
        name: 'HeadNav',
        components: {
            DownOutlined
        },
        data() {
            return {
                showDropDown: false
            }
        },
        methods: {
            onClickBtn() {
            },
            onDropdownShow(visible) {
                this.showDropDown = visible
            }
        },
    }
</script>

<style lang="scss" scoped>
    .head-nav-content {
        height: 70px;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        height: 50px;
    }
    .nav-menu {
        width: 560px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
            font-size: 16px;
            font-family: SourceHanSansCN-Normal, SourceHanSansCN;
            font-weight: 400;
            color: #333333;
            line-height: 24px;
            &:hover {
                color: #eb6314;
            }
        }
    }
    .ant-dropdown-link {
        span {
            transition: 0.3s all;
        }
    }
    .show-drop-down {
        span {
            transform: rotate(180deg) !important;
        }
    }
    .dropdown-trigger-btn:hover,
    .dropdown-trigger-btn:focus {
        border: unset;
    }
    .ant-dropdown-menu-item:hover {
        a {
            color: #eb6314;
        }
    }
    .ant-btn-primary {
        width: 128px;
        height: 40px;
        font-size: 18px;
        border-radius: 21px;
        color: #eb6314;
        background: #fff;
        border: 1px solid #eb6314;
    }
    .ant-btn-primary:hover,
    .ant-btn-primary:focus {
        background: #eb6314;
        border-color: #eb6314;
        color: #fff;
    }
</style>