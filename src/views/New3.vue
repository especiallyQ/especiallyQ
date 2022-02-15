<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home/news' }">猫咪资讯</el-breadcrumb-item>
      <el-breadcrumb-item>猫咪睡觉位置和主人关系</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title">猫咪睡觉位置和主人关系</div>
    <p>
      猫咪一天有三分之二的时间都在睡觉，所以睡觉的地方对它们来说是很重要的。
      其实猫咪睡觉的位置，和主人有关，你家猫咪最喜欢睡在哪里呢？
    </p>
    <img src="../assets/N8.jpg" />
    <p>
      <span>1、 猫窝</span><br />
      猫窝是主人给猫咪睡觉的地方，这也是最规矩的睡觉位置。
      猫咪喜欢在猫窝里睡觉，说明它的性格比较独立，也是信任主人的。
      因为猫咪不愿意打扰主人休息，而且它也知道主人不会抛弃它，所以才会安心地在猫窝里睡觉。
    </p>
    <p class="text1">
      <span>2、 主人的床上</span>
      如果你家猫咪喜欢上你的床睡觉，说明它很爱你，你们的感情也很深。
      因为爱你，所以才会时刻想跟你在一起，包括睡觉的时候，而且靠着你一起睡，也会让它有安全感，它可以睡得很安心。
      当猫咪独自在家的时候，也会睡在你床上，因为床上有你的味道，它想念你，猫咪这是在睹物思人，说明了你在猫咪心目中是非常重要的人。
    </p>
    <img src="../assets/N9.jpg" />
    <p>
      <span> 3、喜欢在家里最高的地方睡</span>

      要是你家猫咪喜欢在家里最高的地方睡觉，比如说冰箱上、衣柜上、窗帘支架上等，说明它对这个家还是不放心的。因为在高处，能让猫咪随时观察到周围的环境，一旦有什么危险靠近，它都能第一时间发现。
      猫咪喜欢睡在高处，是对主人不信任的一种表现，说明它没有把你当成真正的主人。
    </p>

    <p class="text1">
      <span> 4、喜欢睡在角落里</span>
      如果说你家猫咪喜欢睡在角落里，像墙角、床底、没有人去的杂物间等，说明它对这个家还是有很大的戒心的。对它而言，这就是一个陌生的环境，让它感觉害怕。
      一般刚刚到家的猫咪，会喜欢睡在角落里。如果你家猫咪长期躲起来睡觉的话，那很可能是你做了什么对它不好的事情。
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