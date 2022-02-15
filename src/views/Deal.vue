<template>
  <div>
    <div class="title">买猫卖猫</div>
    <div class="screen">
      <ul class="variety">
        <span class="titleL">品种：</span>
        <li
          v-for="item in List"
          :key="item.id"
          :class="{ activeColor: colorID == item.id }"
          @click="change(item.id)"
        >
          <span class="search">{{ item.name }}</span>
        </li>
      </ul>

      <ul class="price">
        <span class="titleL">价格：</span>
        <li
          v-for="item in List2"
          :key="item.id"
          @click="changeMoney(item.id)"
          :class="{ activeColor: colorID2 == item.id }"
        >
          <span class="search">{{ item.name }}</span>
        </li>
      </ul>
      <div class="age">
        <span class="titleL">月龄：</span>
        <span class="search ever">不限</span>
      </div>
    </div>
    <div class="width_criterion" v-if="showDeal">
      <el-card v-for="item in information" :key="item.id" shadow="hover">
        <div class="upBox">
          <div class="IMG"><img src="../assets/M1.jpg" /></div>
          <div class="rigth_box">
            <div class="up_title">
              <span>{{ item.title }}</span>
            </div>
            <div class="middle_title">
              <span
                >品种: <span class="keyword">{{ item.variety }}</span></span
              >
              <span
                >价格: <span class="keyword">{{ item.price }}</span> 元/只</span
              >
              <span
                >在售只数: <span class="keyword">{{ item.count }}</span
                >只</span
              >
              <span
                >年龄: <span class="keyword">{{ item.age }}</span
                >月</span
              >
            </div>
            <div class="down_title">
              <div class="personal">
                <span class="person">上线时间：{{ item.UpTime }}</span>
              </div>
              <el-button type="danger" @click="Dialog">立即购买</el-button>
            </div>
          </div>
        </div>
        <div class="downBox">
          <div class="left_Box">
            <p class="down_left_title">基本信息</p>
            <div class="message_box">
              <span class="message">猫咪性别：{{ item.sex }}</span>
              <span class="message">地址：{{ item.area }}</span>
            </div>
          </div>
          <div class="right_Box">
            <p class="down_right_title">健康防御</p>
            <div class="message_right_box">
              <span class="message_rigth">疫苗情况：{{ item.vaccine }}</span>
              <span class="message_right">驱虫情况：{{ item.expelling }}</span>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page.sync="page.pageIndex"
      :page-size="page.pageSize"
      layout="total, prev, pager, next"
      :total="page.total"
      v-if="showDeal"
    >
    </el-pagination>
    <div class="dialog">
      <el-dialog
        title="官方声明"
        :visible.sync="dialogVisible"
        width="30%"
        :show-close="false"
      >
        <span class="dialog_span"
          >本站不提供任何真实有效的交易信息服务，资源均来源于网络，如有侵权，请联系删除！</span
        >
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
    <div class="Empty" v-if="!showDeal">
      <el-empty description="暂无数据"></el-empty>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
export default {
  data() {
    return {
      List: [
        { id: "0", name: "全部" },
        { id: "1", name: "布偶猫" },
        { id: "2", name: "狸花猫" },
        { id: "3", name: "暹罗猫" },
        { id: "4", name: "美短猫" },
        { id: "5", name: "英短猫" },
        { id: "6", name: "加菲猫" },
        { id: "7", name: "波斯猫" },
        { id: "8", name: "缅因猫" },
      ],

      List2: [
        { id: "0", name: "不限" },
        { id: "1", name: "2500元以内" },
        { id: "2", name: "2500元-5000元" },
        { id: "3", name: "5000元-10000元" },
        { id: "4", name: "10000元以上" },
      ],
      colorID: 0,
      colorID2: 0,
      showDeal: true,
      page: {
        pageIndex: 1,
        total: 1,
        pageSize: 5,
      },

      //dialog页面
      dialogVisible: false,

      //品种过滤
      estimate: "",
      //价格过滤
      money: "",
      //时间过滤
      time: "",

      //初次数据
      transfer: "",

      //品种数据
      varietyData: "",

      //价格数据
      priceData: "",

      //滤层数据
      middleData: "",

      //最终数据
      information: "",
    };
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 220);
    },

    change(num) {
      this.estimate = num;
      this.colorID = num;
    },
    changeMoney(num) {
      this.money = num;
      this.colorID2 = num;
    },

    setPage() {
      this.page.total = this.middleData.length;
      this.information = this.middleData.filter((item, index) => {
        return index < 5;
      });
      this.page.pageIndex = 1;
    },

    Dialog() {
      if (this.$store.state.user) {
        this.dialogVisible = true;
      } else {
        this.$router.push("/login");
        Message({
          message: "请先登录再进行购买",
          type: "error",
          duration: 1500,
        });
      }
    },

    handleCurrentChange(val) {
      let index = 5 * (val - 1);
      let num = 5 * val;
      let table = [];
      for (let i = index; i < num; i++) {
        if (this.middleData[i]) {
          table.push(this.middleData[i]);
        }
        this.information = table;
      }
    },
  },

  created() {
    this.estimate = "10";
    this.money = "10";
    this.time = "10";
  },

  watch: {

    information: {
      handler() {
        if (this.information == "") {
          this.showDeal = false;
        } else {
          this.showDeal = true;
        }
        this.scrollTop();
      },
      immediate: true,
    },

    "$store.state.edit": {
      handler() {
        this.transfer = this.$store.state.edit;
        this.estimate = "0";
        this.money = "0";
        this.time = "0";
      },
      immediate: true,
      deep: true,
    },

    estimate: {
      handler() {
        switch (this.estimate) {
          case "0":
            this.varietyData = this.transfer;
            break;
          case "1":
            this.varietyData = this.transfer.filter((k) => {
              return k.variety == "布偶猫";
            });
            break;
          case "2":
            this.varietyData = this.transfer.filter((k) => {
              return k.variety == "狸花猫";
            });
            break;
          case "3":
            this.varietyData = this.transfer.filter((k) => {
              return k.variety == "暹罗猫";
            });
            break;
          case "4":
            this.varietyData = this.transfer.filter((k) => {
              return k.variety == "美短猫";
            });
            break;
          case "5":
            this.varietyData = this.transfer.filter((k) => {
              return k.variety == "英短猫";
            });
            break;
          case "6":
            this.varietyData = this.transfer.filter((k) => {
              return k.variety == "加菲猫";
            });
            break;
          case "7":
            this.varietyData = this.transfer.filter((k) => {
              return k.variety == "波斯猫";
            });
            break;
          case "8":
            this.varietyData = this.transfer.filter((k) => {
              return k.variety == "缅因猫";
            });
            break;
          case "10":
            this.varietyData = this.transfer;
            break;
        }
      },
      immediate: true,
    },
    varietyData: {
      handler() {
        switch (this.money) {
          case "0":
            this.priceData = this.varietyData;
            break;
          case "1":
            this.priceData = this.varietyData.filter((k) => {
              return k.price <= 2500;
            });
            break;
          case "2":
            this.priceData = this.varietyData.filter((k) => {
              return 2500 < k.price <= 5000;
            });
            break;
          case "3":
            this.priceData = this.varietyData.filter((k) => {
              return 5000 < k.price <= 10000;
            });
            break;
          case "4":
            this.priceData = this.varietyData.filter((k) => {
              return k.price > 10000;
            });
            break;
          case "10":
            this.priceData = this.varietyData;
            break;
        }
      },
      immediate: true,
    },
    money: {
      handler() {
        switch (this.money) {
          case "0":
            this.priceData = this.varietyData;
            break;
          case "1":
            this.priceData = this.varietyData.filter((k) => {
              return k.price <= 2500;
            });
            break;
          case "2":
            this.priceData = this.varietyData.filter((k) => {
              return k.price <= 5000 && k.price > 2500;
            });
            break;
          case "3":
            this.priceData = this.varietyData.filter((k) => {
              return k.price <= 10000 && k.price > 5000;
            });
            break;
          case "4":
            this.priceData = this.varietyData.filter((k) => {
              return k.price > 10000;
            });
            break;
          case "10":
            this.priceData = this.varietyData;
            break;
        }
      },
      immediate: true,
    },
    priceData: {
      handler() {
        switch (this.time) {
          case "0":
            this.middleData = this.priceData;
            break;
          case "10":
            this.middleData = this.priceData;
            break;
        }
      },
      immediate: true,
    },
    middleData: {
      handler() {
        setTimeout(() => {
          this.setPage();
        }, 100);
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
* {
  list-style: none;
}
.title {
  letter-spacing: 5px;
  height: 50px;
}
.width_criterion {
  width: 60%;
  position: relative;
  cursor: pointer;
}

.el-card {
  width: 100%;
  height: 260px;
  margin-bottom: 15px;
  position: relative;

  .upBox {
    width: 89%;
    height: 160px;
    position: absolute;
    border-bottom: 1px solid black;

    .IMG {
      width: 200px;
      height: 160px;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .rigth_box {
      margin-left: 215px;
      width: 65%;
      height: 160px;

      .up_title {
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-weight: bold;
      }

      .middle_title {
        width: 100%;
        height: 55px;
        font-size: 13px;
        line-height: 55px;
        display: flex;
        justify-content: space-between;

        .keyword {
          font-size: 18px;
          font-weight: bold;
          color: red;
        }
      }
      .down_title {
        width: 100%;
        height: 60px;

        .personal {
          width: 220px;
          height: 60px;
          float: left;

          line-height: 60px;

          .person {
            font-size: 13px;
            font-weight: bold;
          }
        }
        .el-button {
          position: absolute;
          width: 150px;
          top: 10px;
          left: 245px;
        }
      }
    }
  }
  .downBox {
    width: 89%;
    height: 70px;
    position: absolute;
    top: 181px;

    .left_Box {
      width: 50%;
      height: 100%;
      float: left;

      .down_left_title {
        font-size: 15px;
        position: absolute;
        top: 10px;
        left: 15px;
        font-weight: bold;
      }
      .message_box {
        width: 300px;
        height: 30px;
        line-height: 50px;
        position: absolute;
        top: 24px;
        left: 15px;
        font-size: 14px;
        .message {
          margin-right: 35px;
        }
      }
    }
    .right_Box {
      width: 50%;
      height: 0px;

      .down_right_title {
        font-size: 15px;
        position: absolute;
        top: 10px;
        left: 185px;
        font-weight: bold;
      }

      .message_right_box {
        width: 300px;
        height: 30px;
        line-height: 50px;
        position: absolute;
        top: 24px;
        left: 185px;
        font-size: 14px;

        .message_rigth {
          margin-right: 35px;
        }
      }
    }
  }
}

.screen {
  width: 60%;
  height: 200px;
  margin-bottom: 50px;

  .variety {
    width: 100%;
    height: 70px;
    line-height: 80px;
  }
  .price {
    width: 100%;
    height: 65px;
    line-height: 60px;
  }
  .age {
    .price;
  }
  .titleL {
    margin-left: 25px;
    font-size: 16px;
    font-weight: bold;
  }
}

.search {
  font-weight: normal;
  cursor: pointer;
  font-size: 14px;
  margin-left: 25px;
}
.search:hover {
  color: red;
}
.el-card:hover {
  background-color: rgb(237, 235, 235);
}

.el-pagination {
  width: 100px;
  margin-left: 670px;
}

.dialog_span {
  display: inline-block;
  width: 488px;
  line-height: 35px;
  font-size: 16px;
  font-weight: bold;
}

li {
  display: inline-block;
  height: 50px;
}

.activeColor {
  color: red;
}

.ever {
  color: red;
}
</style>