<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home/news' }"
        >猫咪资讯</el-breadcrumb-item
      >
      <el-breadcrumb-item>如何判断自己在猫心中的地位</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title">如何判断自己在猫心中的地位</div>
    <p>
      许多铲屎官爱叫自己猫咪“宝宝”“乖儿子”等，把猫咪当成自己的孩子一样宠爱。
      但在猫咪眼中，他可能根本不觉得自己是宠物，更不认为你是它的主人，反而认为自己才是老大，是一家之主。<br />
      如果你家猫咪对你有以下这几种表现，说明它把你当成了一个跟班小弟。
    </p>
    <img v-lazy="img1" />
    <p>
      <span> 1、舔你</span>
      <br />
      在猫猫的等级世界里，一般只有上级的猫咪才有资格去舔下级的猫。
      比如猫妈妈舔幼猫，强壮的猫舔弱小的猫，当然还有情侣猫之间的互舔。
      这种舔除了能清理皮毛，保持身体的干净整洁，也能留下自己的气味，表明自己的身份。
      如果一只猫舔别的猫，是想告诉全世界：它是我的，我罩着！
      所以，当你的猫经常舔你的手、脸、头发，说明它把你当成了等级比它低的猫，甚至可能是它的孩子。
    </p>
    <img v-lazy="img2" />
    <p>
      <span> 2、给你带回食物</span><br />
      喵星人给铲屎官送礼物往往不鸣则已一鸣惊人。
      铲屎官们收到的礼物往往是：蟑螂、半死不活的老鼠、麻雀，甚至还有的铲屎官收到了蝙蝠和蛇！
      当猫给你送礼物，不管礼物多么惊悚，其实都表明它爱你，并且可能是老大对小弟的“疼爱”。
      不要急着责备它，否则它要么会很失望，要么会很生气。
      在它眼里，你是一个很弱鸡的小猫，打不到猎物，它怕你饿死，所以才出去打猎送给你吃。
      你可以开心地收下，最好摸摸它表示感谢，再背着它处理掉啦。
    </p>
    <p class="text1">
      <span> 3、老是跟着你</span><br />
      你走到哪儿，他就跟到哪儿，尤其爱监视你洗澡、上厕所。
      这也是主子也是担心你的安危的表现。作为家里的“老大”，不仅有着每天巡视领地的责任，还有监护你的责任。
      天，你怎么在水里泡着，不怕被淹死？ 天，你怎么把自己关在这么臭的地方？
      如此种种，让它觉得你这么笨的生存能力实在低下，肯定躲避不了捕食者。所以往往养的越久的猫主子越粘着你，不仅是因为爱你，也是担心你这个小弟的安危。
    </p>
    <img v-lazy="img3" />
    <p>
      <span> 4、等你回家</span><br />
      你有没有经历过这样的场景：当你加班后回到家门口，还在掏钥匙，就听见了屋子里猫咪喵喵的叫声。
      进门以后，他不断地蹭着你，表现得十分兴奋。
      这种等铲屎官回家的行为，也说明它对你的爱和担心。它认为你是出去打猎了，你越久不回来，就越可能是遭遇了不测。
    </p>
    <p class="text1">
      <span> 5、在你面前露肚皮、打滚 这都是猫咪很放松的表现。</span><br />
      如果在你面前露出肚皮、随意打滚，说明在它心目中，你对它没有威胁。
      当然，铲屎官在猫咪心中可能还有其他的形象，可以根据它的表现来判断。
    </p>
    <img v-lazy="img4" />
  </div>
</template>

<script>
import img1 from "../assets/N1.jpg";
import img2 from "../assets/N2.jpg";
import img3 from "../assets/N3.jpg";
import img4 from "../assets/TL.jpg";
export default {
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
    };
  },
};
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

.separator-class {
  position: relative;
  left: 226px;
}
</style>