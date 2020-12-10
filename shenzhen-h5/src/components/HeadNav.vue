<template>
    <div class="head-nav-content content-warp">
        <a href="/">
            <img class="logo" src="../assets/logo-1.png" alt="" />
        </a>
        <div class="nav-menu">
            <a
                v-for="(item, index) in menuList"
                :key="index"
                href="javascript:void(0)"
                @click="scrollTo(item.selector)"
            >
                {{ item.name }}
            </a>
            <a-dropdown
                v-if="0"
                :class="{ 'show-drop-down': showDropDown }"
                @visibleChange="onDropdownShow"
            >
                <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                    往届 <DownOutlined />
                </a>
                <template #overlay>
                    <a-menu>
                        <a-menu-item>
                            <a href="javascript:;"
                                >第三届中国融资租赁总经理高峰论坛</a
                            >
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;"
                                >第五届中国融资租赁创新与发展高峰论坛</a
                            >
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;"
                                >第三届中国融资租赁总经理高峰论坛</a
                            >
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;"
                                >第三届中国融资租赁总经理高峰论坛</a
                            >
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;"
                                >第五届中国融资租赁创新与发展高峰论坛</a
                            >
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;"
                                >第三届中国融资租赁总经理高峰论坛</a
                            >
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;"
                                >第三届中国融资租赁总经理高峰论坛</a
                            >
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;"
                                >第五届中国融资租赁创新与发展高峰论坛</a
                            >
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;"
                                >第三届中国融资租赁总经理高峰论坛</a
                            >
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </div>
        <a-button type="primary" @click="scrollTo('.footer')"
            >申请参会</a-button
        >
    </div>
</template>

<script>
    import {DownOutlined} from '@ant-design/icons-vue';

    export default {
        name: 'HeadNav',
        props: {
            isPrevious: {
                type: Boolean,
                default: false
            }
        },
        components: {
            DownOutlined
        },
        data() {
            return {
                showDropDown: true
            }
        },
        computed: {
            menuList() {
                return this.isPrevious ? [{
                    name: '首页',
                    selector: '/',
                }, {
                    name: '致辞',
                    selector: '.address-bg',
                }, {
                    name: '嘉宾',
                    selector: '.guests-speech',
                }, {
                    name: '圆桌',
                    selector: '.round-table',
                }, {
                    name: '新闻',
                    selector: '.top-news',
                }, {
                    name: '参会',
                    selector: '.participating-companies',
                }] : [{
                    name: '首页',
                    selector: '.head-nav-content',
                }, {
                    name: '背景',
                    selector: '.meeting-bg',
                }, {
                    name: '议程',
                    selector: '.meeting-agenda',
                }, {
                    name: '新闻',
                    selector: '.top-news',
                }, {
                    name: '嘉宾',
                    selector: '.important-guests',
                }, {
                    name: '合作',
                    selector: '.cooperation-unit-warp',
                }]
            }
        },
        methods: {
            getOffsetTop(elem) {
                let top = 0
                while (elem) {
                    top += elem.offsetTop
                    elem = elem.offsetParent
                }
                return top
            },
            scrollTo(selector) {
                const elem = document.querySelector(selector)
                console.log('Hobby Test ~ file: HeadNav.vue ~ line 109 ~ scrollTo ~ elem', elem)
                if (elem) {
                    document.body.scrollTop = document.documentElement.scrollTop =
                        this.getOffsetTop(elem)
                }
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
    .ant-dropdown-menu {
        padding: 4px 24px;
        left: -119px;
        top: 17px;
    }
    .ant-dropdown-menu-item:hover,
    .ant-dropdown-menu-submenu-title:hover {
        background-color: #fff;
    }
</style>