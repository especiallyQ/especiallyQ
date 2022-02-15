<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home/news' }"
        >猫咪资讯</el-breadcrumb-item
      >
      <el-breadcrumb-item>猫在养你的四种表现</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title">猫在养你的四种表现</div>
    <p>
      喵星人是一种不轻易屈服的物种，虽然很多家猫都是寄人篱下的，但这些高傲的猫咪却从未对此承认过。
      在猫咪们的潜意识里，只知道有朋友、妈妈、敌人、伙伴，唯独没有主人这一个词语。
      所以，很多时候当我们觉得自己是在养猫的时候，猫咪们可不是这样认为的。
      如果你家猫咪有以下这4个表现，那么萌猫恭喜你了，说明猫主子在把你当了“小朋友”养着呢！
    </p>
    <img src="../assets/N4.jpg" />
    <p>
      <span> 第一个表现、猫咪会随时盯着你，担心你出现幺蛾子。</span><br />
      猫咪是天生操心的劳碌命，别看它们在家总是一副睡眼朦胧的模样，其实它们都在暗中盯着铲屎官。
      在它的眼中铲屎官就是个长不大的“小朋友”，只要少看看一会，都很容易会闯祸。
      如果你仔细去留意，你会发现猫咪盯着自己时，就像妈妈照看自己的孩子一般，会无死角地紧盯着，无论是吃饭、睡觉、上厕所，它们都不曾放过！
    </p>
    <p class="text1">
      <span> 第二个表现、猫咪会陪着你睡觉，在夜深人静的时候。</span><br />
      虽然猫咪会因为温暖被窝而陪铲屎官睡觉，但更多时候是因为猫咪深爱着自己的铲屎官。
      猫咪们知道，熟睡的铲屎官是毫无防备的，像个手无寸铁的小朋友，需要自己来守护。
      所以每到夜深人静的时候，猫咪总喜欢在铲屎官的床边巡视。
      它们躺一会又会跑开，隔一会又会躺回来，像极了妈妈在巡查自己的孩子入睡一般。
    </p>
    <img src="../assets/N5.jpg" />
    <p>
      <span> 第三个表现、猫咪会愿意陪你玩耍，却不忍心伤害你。</span><br />
      猫咪是一种玩性很强的宠物，尤其是年幼的小猫，它们经常会把铲屎官当成是“假想敌”，让你来陪它玩耍。
      如果你家猫咪总喜欢无缘故地欺负你，比如，咬你、扒拉你，但它又不舍得伤害的时候，你就要意识到了。
      猫咪只不过是想要陪你玩耍，它们不会有任何想伤害你的举动。
      它们会像对待的小朋友是一样的温柔，对你充满着耐心，既不下死口咬，也不轻易露出爪爪。
    </p>
    <p class="text1">
      <span> 第四个表现、猫咪会为了你打猎，为你送上各种大礼。</span><br />
      猫咪是很爱照顾自己的铲屎官，当它看到你不吃猫粮又不爱罐头，“猫妈妈”是十分着急的。
      为了改善你伙食，猫咪们会不辞劳苦地外出捕猎，为你寻找各种补身子的大礼。
      所以说，当你家猫咪把老鼠、蟑螂、小鸟，叼到你面前的时候，不要过于惊慌哈，建议你大胆地接受吧。
      这其实是猫咪在养你的表现，只有铲屎官才会有如此拥有如此特殊的待遇。
    </p>
    <img src="../assets/TL.jpg" />
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