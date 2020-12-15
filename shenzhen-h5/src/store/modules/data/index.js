import axios from "axios";

export default {
  namespaced: true,
  state: {
    allDataInfo: {},
  },
  getters: {},
  mutations: {
    setAllDataInfo(state, data) {
      const newData = {
        // 网页标题
        webTitle: data.title,
        // 首页banner
        homeBanner:
          data.banner.length < 20
            ? `http://pre.ryx365.com:8888/images/${data.banner}.jpg`
            : data.banner,
        // 会议背景
        meetingBgInfo: {
          title: "会议背景",
          des: "Conference background",
          detail: data.back,
        },
        // 会议议程
        meetingAgenda: {
          title: "会议议程",
          des: "Agenda",
          agendaInfo: data.agendas.map((item) => {
            return {
              id: item.id,
              title: item.title,
              detailLists: item.agendaDetails,
            };
          }),
        },
        // 头条新闻
        topNews: {
          title: "头条新闻",
          des: "NEWS",
          newsContent: data.newses.slice(0, 3),
          timeLineContent: data.newses.slice(3),
        },
        // 重磅嘉宾
        importantGuests: {
          title: "重磅嘉宾",
          des: "Guest",
          guestsData: data.customs.map((item) => {
            return {
              id: item.id,
              img: item.img,
              name: item.realname,
              company: item.position.split(",")[0],
              position: item.position.split(",")[1],
            };
          }),
        },
        // 合作单位
        cooperationUnitInfo: {
          title: "合作单位",
          des: "Cooperation Unit",
          dataListInfo: data.partners.map((item) => {
            return {
              id: item.id,
              title: item.title,
              unitLogoList: item.img.split(","),
            };
          }),
        },
        // 底部信息
        footInfo: {
          employList: data.employees.map((item) => {
            return {
              id: item.id,
              qrCode: item.ercode,
              title: item.title,
              tel: item.tel,
              weChat: item.wechat,
            };
          }),
        },
      };
      state.allDataInfo = newData;
    },
  },
  actions: {
    async getAllData({ commit }, { code }) {
      const res = await axios.get(
        `http://localhost:8081/local_api/api/forum?code=${code}`
      );
      commit("setAllDataInfo", res.data.data);
      return res;
    },
  },
};
