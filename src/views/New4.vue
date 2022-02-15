<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home/news' }">猫咪资讯</el-breadcrumb-item>
      <el-breadcrumb-item>最烧钱的5大猫咪</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title">最烧钱的5大猫咪</div>
    <p>
      相信很多人都是很想养猫的，但是有的人就会考虑经济问题来选择合适自己的猫咪，有的人因为没钱就不敢养猫咪。下面这5种猫咪“最烧钱”了，不是有钱人，真不敢养它！
    </p>
    <img src="../assets/N10.jpg" alt="" />
    <p>
      <span> NO.5 英国短毛猫 价格：2500~1w+</span><br />
      英短猫的购买价格在很多城市来说是相对比较高的，所以想要购买品相比较好的英短猫就需要花费一笔比较高的价格。英短猫还很贪吃，需要给它准备好猫粮外还要准备各种各样的零食，在饮食上就是一笔较大的开销。
      而且想要饲养好英短猫，那么生活用品也要齐全，所以饲养英短猫的花费是比较高的。
    </p>
    <p class="text1">
      <span> NO.4 苏格兰折耳猫 价格：1000~5000+</span><br />
      折耳猫是很多人都不倡导饲养的一只猫咪，因为没有买卖就没有杀害
      折耳猫天生就带有很多遗传病，随时都会发病，治疗起来很麻烦，而且需要花费很多费用，平时的检查费用花费也是
      比较多的。
      之所以折耳猫这么乖巧，是因为它们身上一直有着不同程度的疼痛，所以如果已经饲养了折耳猫，一定要好好照顾它们。
    </p>
    <img src="../assets/N11.jpg" />
    <p>
      <span> NO.3 加拿大无毛猫 价格：8000~10w+</span><br />
      加拿大无毛猫也被说为是只有有钱人才会饲养的猫咪，因为它的购买价格非常贵，不是普通人能承受得起的，除了购买很贵外，无毛猫后期饲养的费用也是比较高的，因为无毛猫因为没有毛发的保护，所以很容易患上皮肤病，平时还需要用专用的护肤品。
      夏天带无毛猫出门还要精心为它涂上专用的“防晒霜”，很多网友都感叹自己活得还不如一只猫精致。
    </p>
    <p class="text1">
      <span> NO.2 缅因猫 价格：2000~1.5w+</span><br />
      说到缅因猫应该很多人都还没见过真面目，但是应该都知道这只猫咪是体型最大的猫咪，它体型最长能达到120cm，相当于比很多狗狗体型还大。正因为体型比较大，所以缅因猫的食量是普通猫咪的2~3倍，很多网友直呼被它吃穷了。
      所以如果想要饲养缅因猫，就硬要备好“饭钱”，平时也要给它吃一些鸡肉、牛肉等等作为辅食，也可以购买一些肉类冻干零食，这样才能满足猫咪的需求。
    </p>
    <p class="text1">
      <span> NO.1 布偶猫 价格：6000~1.5w+</span><br />
      因为它身体就跟它的长相一样娇贵，不仅购买价格很贵，后期饲养费用高，还很难伺候。因为布偶猫的肠胃很差，所以经常都会拉稀、呕吐等等，需要注意的很多，后期饲养费用也很高。
      如果饲养布偶猫，一定要注意猫咪的肠胃护理，平时给布偶猫的饮食不能太杂外，建议给猫咪挑选一款含有益生菌成分的猫粮，这样可以从日常饮食种调理猫咪肠胃。
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
div {
  width: 60%;
  margin: 0 auto;
  position: relative;
    top: 17px;

  .el-breadcrumb {
    position: absolute;
    top: -15px;
    left: -150px;
    font-size: 15px;
  }

  .title {
    width: 100%;
    height: 82px;
    line-height: 50px;
  }
  p {
    text-indent: 20px;
    font-size: 17px;
    line-height: 30px;

    span {
      font-weight: bolder;
    }
  }

  img {
    margin-top: 25px;
    margin-left: 45px;
    margin-bottom: 25px;
    width: 600px;
  }

  .text1 {
    margin-top: 25px;
  }
}
</style>