<template>
  <view
    class="card-conent"
    style="background-image: url(../../static/background.png)"
  >
    <view v-for="(item, index) in list" :key="index">
      <uni-card :title="item.route" extra="查看详情" @click="showDetail(item)">
        <uni-grid :column="4" :showBorder="false">
          <uni-grid-item>
            <text class="text">20GP</text>
            <text class="text">{{ item.cost20 }}</text>
          </uni-grid-item>
          <uni-grid-item>
            <text class="text">40GP</text>
            <text class="text">{{ item.cost40gp }}</text>
          </uni-grid-item>
          <uni-grid-item>
            <text class="text">40HQ</text>
            <text class="text">{{ item.cost40hq }}</text>
          </uni-grid-item>
          <uni-grid-item>
            <text class="text">45HQ</text>
            <text class="text">{{ item.cost45hq }}</text>
          </uni-grid-item>
        </uni-grid>
      </uni-card>
    </view>
  </view>
</template>


<script>
export default {
  data() {
    return {
      keyword: "",
      data: {
        pol: "",
        pod: "",
        date: "",
        carrier: "",
      },
      list: [],
    };
  },
  created() {},

  methods: {
    showDetail(val) {
      uni.navigateTo({
        url:
          "/pages/detail/index?detail=" +
          encodeURIComponent(JSON.stringify(val)),
        fail: (res) => {
          console.log(res); //打印错误信息
        },
      });
    },

    searchPrice: async function (e) {
      let res = await this.$Tools.Axios({
        url: this.$api.scp_price,
        method: "GET",
      });
      if (res) {
        this.list = res;
      } else {
      }
    },

    onLoad(option) {
      (this.pol = option.pol),
        (this.data.pod = option.pod),
        (this.data.date = option.date),
        (this.data.carrier = option.carrier);
      // TODO测试使用
      // if (this.pol != '' && this.pod != '') {
      this.searchPrice();
      // }
    },
  },
};
</script>

<style>
.card-conent {
  height: calc(100vh);
  overflow-y: auto;
}

.uni-card {
  margin-top: 30rpx !important;
  padding: 0 4px !important;
  /* border-radius: 15rpx !important; */
}

>>> .uni-card__header-title-text {
  flex: none !important;
  font-size: 12px !important;
}

>>> .uni-card__content--pd {
  padding: 8px !important;
}

.text {
  font-size: 24rpx;
  margin-top: 30rpx;
  text-align: center;
  font-weight: 500;
}

.grid-item-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20rpx 0;
}

.grid-item-box-row {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
