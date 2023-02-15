- js 面试准备思路
    1. 覆盖高频考点
    2. 全面 准确 深度的介绍 

- 扁平化  flatten
    将多层级数组转化为一维数组

    1. 递归思想
    2. API
    3. 业务需求
        多维数组->一维数组

- localStorage 本地存储 html5 重要功能
    - cookie  身份状态  随着http每次发送
        HTTP 无状态协议 Stateless   cookie 弥补这个缺憾
        1. 每次请求响应是独立的
            快  服务器响应简单 
        2. 没有事务记忆能力
        基于请求响应 公平
        登录  购物车 评论 点赞 cookie  字符串 a=1;b=2
        domain 

        HTTP 头部信息  更小 < 4KB
        url长度
        域名 同一个域名下的所有请求都会带上cookie 服务器解析cookie  
        请求的性能有影响的 

    - localStorage 不需要每次http 请求都发送
        本地存储  domain  
        大小也有限制 5M  用户设置  草稿箱 首页列表 

        JSON.stringify()   序列化
        JSON.parse()       反序列化

- 扁平化
    js开发中经常需要把一个多维数组一维化，flatten

    1. 遍历+Array.isArray递归， 传统解决
    2. reduce 可以优化命令式， 解决更优美，
        []  result pre 已经扁平化的部分数组， cur Array.isArray 递归
    3. 将数组序列化后（JSON.stringify）， 得到字符串， 正则替换掉[]
        接着使用splie 切割 或 最外层加[] 
        反序列化一下(JSON.parse) 得到一位数组 
    4. es10 Array.flat(Infinity)
    5. 为了兼容性， 不重复造轮子， lodash 库 

- reduce map  some filter find 高阶函数 
    如果函数的参数是函数， 或者返回值是函数
    - 闭包  高阶函数  返回值是函数 
    - map...  参数是函数 
    - map
        es6 数组的API, 基于一个数组每一项执行一个函数， 返回值组成一个新的数组 
        1. 数组中的每一项都调用一个提供的参数，返回的结果， 组成新的数组。 
        2. 全新的函数式编程风格， 更好理解
        3. 原来的数组不会受到影响  