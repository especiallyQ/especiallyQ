<template>
  <div>
    <div>
      <el-carousel
        trigger="click"
        height="400px"
        :interval="3000"
        arrow="always"
      >
        <el-carousel-item v-for="item in carousel" :key="item.id">
          <img :src="item.idView" class="image" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="cut">
      <p>热门猫咪</p>
    </div>
    <div class="criterion">
      <div class="upCard">
        <div class="tran1">
          <img class="U1" src="../assets/U1.jpg" alt="布偶" title="布偶" />
        </div>
        <div class="tran2">
          <img class="U2" src="../assets/G1.jpg" alt="暹罗" title="暹罗" />
        </div>
        <div class="tran4">
          <img class="U4" src="../assets/G3.jpg" alt="美短" title="美短" />
        </div>
        <div class="tran3">
          <img class="U3" src="../assets/U3.jpg" alt="英短" title="英短" />
        </div>
      </div>
      <div class="downCard">
        <div class="dar1">
          <img class="D1" v-lazy="img5" alt="加菲" title="加菲" />
        </div>
        <div class="dar2">
          <img class="D2" v-lazy="img6" alt="缅因" title="缅因" />
        </div>
        <div class="dar3">
          <img class="D3" v-lazy="img7" alt="波斯" title="波斯" />
        </div>
        <div class="dar5">
          <img class="D5" v-lazy="img8" alt="狸花" title="狸花" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/4.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/1.jpg";
import img5 from "../assets/D1.jpg";
import img6 from "../assets/G6.jpg";
import img7 from "../assets/D3.jpg";
import img8 from "../assets/G4.jpg";

export default {
  data() {
    return {
      carousel: [
        { id: 0, idView: img1 },
        { id: 1, idView: img2 },
        { id: 2, idView: img3 },
        { id: 3, idView: img4 },
      ],
      img5,
      img6,
      img7,
      img8,
    };
  },
};
</script>

<style lang="less">
.M {
  overflow: hidden;
  display: inline-block;
}
.el-carousel__item {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin-left: 67px;
}

.cut {
  width: 100%;
  height: 100px;
  font-size: 25px;
  line-height: 100px;
  text-align: center;
}

.criterion {
  .upCard {
    width: 100%;
    height: 220px;
    overflow: hidden;
    margin-left: 18px;
    .tran1 {
      width: 355px;
      height: 100%;
      overflow: hidden;
      display: inline-block;
      margin-right: 11px;

      .U1 {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
      }

      .U1:hover {
        transform: scale(1.4);
      }
    }

    .tran2 {
      width: 160px;
      height: 100%;
      margin-right: 11px;
      display: inline-block;
      overflow: hidden;
      .U2 {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
      }
      .U2:hover {
        transform: scale(1.4);
      }
    }

    .tran4 {
      width: 355px;
      height: 100%;
      display: inline-block;
      margin-right: 11px;
      overflow: hidden;
      .U4 {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
      }

      .U4:hover {
        transform: scale(1.4);
      }
    }

    .tran3 {
      width: 220px;
      height: 100%;
      display: inline-block;
      overflow: hidden;
      .U3 {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
      }

      .U3:hover {
        transform: scale(1.4);
      }
    }
  }

  .downCard {
    width: 100%;
    height: 220px;
    margin-top: 10px;
    margin-left: 18px;

    .dar1 {
      .M;
      width: 260px;
      height: 100%;
      margin-right: 11px;

      .D1 {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
      }

      .D1:hover {
        transform: scale(1.4);
      }
    }
    .dar2 {
      .M;
      width: 310px;
      height: 100%;
      margin-right: 11px;
      .D2 {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
      }
      .D2:hover {
        transform: scale(1.4);
      }
    }
    .dar3 {
      .M;
      width: 220px;
      height: 100%;
      margin-right: 11px;

      .D3 {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
      }
      .D3:hover {
        transform: scale(1.4);
      }
    }

    .dar5 {
      .M;
      width: 300px;
      height: 100%;
      .D5 {
        width: 100%;
        height: 100%;
        transition: all 0.6s;
      }
      .D5:hover {
        transform: scale(1.4);
      }
    }
  }
}
</style>