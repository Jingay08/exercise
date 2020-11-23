module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      //设置全局sass
      sass: {
        //引入多个使用；分号隔开
        prependData: `@import "~@/utils/css/common.scss";`
      },
    }
},
}
