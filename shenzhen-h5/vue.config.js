module.exports = {
  devServer: {
    host: "0.0.0.0",
    inline: false,
    open: true, //配置自动启动浏览器
    port: "8081", // 端口号
    https: false, // https: {type:Bollean}
    open: true, // 配置自动启动浏览器
    // 配置代理
    proxy: {
      "/local_api": {
        target: "http://pre.ryx365.com:9091", // 想要访问接口域名
        changeOrigin: true, // 开启跨域,在本地创建一个虚拟服务,然后发送请求的数据,并同时接收请求的数据,这样服务端和服务端进行数据交互就不会有问题
        pathRewrite: {
          "^/local_api": "/", // 路径重写
        },
      },
    },
  },
};
