export default {
    backArr: ['back-theEarth','back-sun','back_mercury','back_venus','back_mars','back_jupiter','back_saturn','back_uranus','back_neptune'],
    roleList:[
        {
            name: '个人中心'
        },
        {
            name: '账号设置'
        },
        {
            name: '学习资料'
        },
        {
            special: true
        },
        {
            name: '退出登录'
        }
    ],
    menuList: [
        {
            name: 'JavaScript'
        },
        {
            name: 'Css'
        },
        {
            name: '算法'
        },
        {
            name: '前端面试',
            show: false,
            children: [
                {
                    name: '技术社区',
                    show: false,
                    children: [
                        {
                            name: 'bb'
                        }
                    ]
                },
                {
                    name: '博客团队',
                    show: false,
                    children: [
                        {
                            name: 'aa'
                        }
                    ]
                }
            ]
        }
    ],
    randomIcon: ['el-icon-apple','el-icon-cherry','el-icon-watermelon','el-icon-grape','el-icon-pear','el-icon-orange','el-icon-potato-strips','el-icon-lollipop','el-icon-ice-cream-square','el-icon-ice-cream-round','el-icon-burger','el-icon-tableware','el-icon-sugar','el-icon-dessert','el-icon-ice-cream','el-icon-food','el-icon-chicken'],

}