<template>
  <div class="entirety">
    <div class="LeftPicture"><img src="../assets/F3.jpg"/></div>
    <div class="synopsis"><span>品种简介</span></div>
    <div class="introduce">
      <el-collapse accordion>
        <el-collapse-item title="布偶猫" name="1">
          <div>
            布偶猫在20世纪60年代由Ann
            Baker率先培育。布偶猫的祖先几乎全是流浪猫。
          </div>
          <div>
            Ann将一只她收养的白色长毛母猫和她其它收养的猫配种，这只母猫的后代有着异乎寻常的安静性格，当她抱着它们的时候，有一些就像布偶一样松松垮垮地挂在她的胳膊上。经过毛色等外貌的筛选，她发明了布偶这个品种。
          </div>
        </el-collapse-item>
        <el-collapse-item title="狸花猫" name="2">
          <div>
            中国是狸花猫的源产地。它属于自然猫，因为是在千百年中经过许多品种的自然淘汰而保留下来的品种，最为人所熟知的便是"狸猫换太子"。
          </div>
          <div>
            它有非常漂亮的皮毛(也被人们叫做花猫)、健康的身体，特别容易喂养，对捕捉老鼠是十分的在行。
          </div>
        </el-collapse-item>
        <el-collapse-item title="暹罗猫" name="3">
          <div>
            暹罗猫最早的记录是1350年的一份手稿，上面描述了一只身体白色、面部、尾巴、脚和耳朵呈黑色的猫。暹罗猫在19世纪末期从泰国出口到世界各地，当时泰国被称为暹罗。
          </div>
        </el-collapse-item>
        <el-collapse-item title="英国短毛猫" name="4">
          <div>
            英国短毛猫有可能是最老的英国品种猫，它们的祖先可以追溯到罗马时代的家猫。
          </div>
          <div>
            它们早先以力量和捕猎能力著称。英国短毛猫起初是英国的街头流浪猫，但在育种者不断地优选下，形成了一个稳定的品种。
          </div>
        </el-collapse-item>
        <el-collapse-item title="美国短毛猫" name="5">
          <div>
            美国短毛猫在1906年被承认。它们起初被命名为“本土短毛猫（Domestic
            Shorthair）”。
          </div>
          <div>
            它们乘坐五月花号船随着欧洲移民一起来到北美大陆，用以捕捉船舱中的老鼠，是一种纯天然进化过来的功能型猫咪。在人类长期的育种优选下，培育出了稳定的品种。
          </div>
        </el-collapse-item>
        <el-collapse-item title="异国短毛猫（加菲）" name="6">
          <div>
            异国短毛猫其实是“无心插柳”的结果。美国短毛猫的育种者将美国短毛猫与波斯猫配种，本来想获得银色的被毛和绿色的眼睛，可是结果不尽如人意。但这个新品种看起来却异常可爱，育种者建议它们成为一个新的品种，称为“sterling”（意思为银色）。
          </div>
          <div>
            它们看着和波斯猫很像，但是有着短的、密致的被毛。起初在赛事中只接受银色，但是后来所有其它颜色也被承认，并改名为“异国短毛猫”。之后育种者又用不同的品种，比如缅因猫、俄罗斯蓝猫等，与波斯猫配种，获得不同毛色的异国短毛猫。
          </div>
        </el-collapse-item>
        <el-collapse-item title="波斯猫" name="7">
          <div>
            波斯猫以它们起源的国家——波斯——命名，但是也有考古研究将这个品种猫的历史渊源推前到公元前1600多年。
          </div>
          <div>
            从有记录开始，波斯猫就一直是人类最喜爱的猫咪品种之一。开创了维多利亚时代的维多利亚女王，据说就有两只蓝眼波斯猫。波斯猫的体型和性格决定了它们高贵的气质。
          </div>
        </el-collapse-item>
        <el-collapse-item title="缅因猫" name="8">
          <div>
            缅因猫，又称缅因库恩猫，是比较古老的一种猫品种。缅因猫生活在北美缅因州，是体型最大的驯养猫咪。
          </div>
          <div>
            缅因猫的长相与西伯利亚森林猫相似，冷峻的外表和健壮的体型，使它看起来威风凛凛。
            但是，实际上它却是一只善于交际的猫咪，喜欢和人类相处，且性格温顺，聪慧俏皮，因此它有了个绰号“温柔的巨人”。
          </div>
        </el-collapse-item>
        <el-collapse-item title="斯芬克斯猫" name="9">
          <div>人类从1966年开始育种斯芬克斯猫。</div>
          <div>
            在加拿大，一个育种者发现一只黑猫和白猫生下了一只没有毛的小猫咪。这个小猫被拿来与其它猫咪配种，将这个无毛的隐性基因培育成了一个新的品种。由于和古埃及的斯芬克斯雕像很像，人们将这个猫称为“斯芬克斯猫”。
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.entirety {
  position: relative;
  overflow: hidden;
  .LeftPicture {
    width: 30%;
    height: 100%;
    float: left;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .synopsis {
    width: 60%;
    height: 100px;
    position: absolute;
    top: 0;
    left: 430px;
    text-align: center;
    line-height: 100px;
    font-size: 25px;
    letter-spacing: 3px;
  }

  .introduce {
    width: 60%;
    position: absolute;
    top: 140px;
    left: 430px;
  }
}

.el-collapse-item__header {
  font-size: 15px;
  font-weight: bold;
}

</style>