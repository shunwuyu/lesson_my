- js 类型知识点
    1. 7 个基础数据类型 + 1个对象 
    2. typeof   null   object [object array] 
        instanceof {} -> Object -> null 
    3. 基于对象的面向对象？ new  
        Constructor + prototype 
    4. prototype   继承
    5. 类型转换 隐式 + 显示 
    6. 0.1 + 0.2 ！= 0. 3

- 请像学习this的规则一样， 学习类型转换的规则
    有法可依 
- js 弱类型语言， 类型转换系统， 
    字符串
    布尔值 
    字符型 
    +  !  * /   === 隐式类型转换
- 由于js 神奇（莫名奇妙）的类型转换， 建议， 在代码里 不要用==
    js 推荐禁用==  使用=== 

    [] + {}  ???? 
- 显示类型转换
    String()
    Number()
    Boolean()
    类型转换了， 但是没有调用以上方法， 偷偷的换了， 隐式类型转换
- +   小心， 类型转换     字符串拼接  数值相加
    x + y 
    + 左右两侧，任何一个是字符串， 拼接  不是字符串的隐式类型转换为字符串
    如果左右任何一个是对象，这个对象(???)得到字符串， 拼接 ， 另外一个转换成字符串
    变成数值类型  相加了

- String() 强制类型的规则 
    简单数据类型 和理解的一样  ''
    复杂数据类型 强制转成字符串的时候？   好几个规则， 个个不一样
    - 对象字面量   [object Object]
    - 数组 ''   [1,2,3] '1,2,3'       [] + {} 
        会调用原型链上的toString 方法， 结果返回

- Number() 强制类型转换的时候
    简单数据类型   Number(undefined)  NaN
        Symbol()   throw  error   NaN  typeof  number

    复杂数据类型 -> Number      
        复杂数据类型转变成基础类型的过程 ToPrimitive
        1. 会先转换为基础类型  [1,2,3]  => '1,2,3'
            valueOf方法 优先
            toString  
        2. 再转换为number类型
            Number(简单数据类型  '')


- toPrimitive 
    1. 如果有vlaueOf  方法 ， 且是基础数据类型
        对对象toPrimitive 时， 使用之
        [1,2] valueOf 方法 本身
    2. 转而用toString() 方法 
        '1,2'
        '[Object Array]'

- [] + {}    '[object Object]'
    {} + []   0  

    [] + {} == {} + []
    ==  隐式转换？     原则？

    ==  抽象相等  做题  类型转换， 左右的类型不一致 
    === 绝对（全）相等， 正确性， 开发中

-   1 对于数字和字符串的抽象比较，将字符串进行ToNumber操作后再进行比较
    2 对于布尔值和其他类型的比较，将其布尔类型进行ToNumber操作后再进行比较
    3 对于对象和基础类型的比较，将对象进行ToPrimitive操作后在进行比较
    4 对象之间的比较，引用同一个对象则为true，否则为false

[] ==  ![]
[] ==  false 
'' ==    0
0  ==  0