<template>
  <div>
    <!-- <table id="ta">
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>身份证号</th>
          <th>银行卡号</th>
          <th>月份</th>
          <th>金额</th>
          <th>班级</th>
          <th>是否是建档立卡</th>
          <th>签名</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in listData" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.__EMPTY}}</td>
          <td>{{item.__EMPTY_1}}</td>
          <td>{{item.__EMPTY_2}}$</td>
          <td>{{item.__EMPTY_3}}$</td>
          <td>{{item.__EMPTY_4}}</td>
          <td>{{item.__EMPTY_5}} </td>
          <td>{{item.__EMPTY_6}} </td>
          <td>{{item.flag ? '是' : ''}}</td>
          <td></td>
        </tr>
      </tbody>
    </table> -->

    <table id="ta">
      <!-- <thead>
        <tr>
          <th>序号</th>
          <th>部门代码</th>
          <th>部门名称</th>
          <th>用人司局</th>
          <th>银行卡号</th>
          <th>报考职位</th>
          <th>职位属性</th>
          <th>班级</th>
          <th>是否是建档立卡</th>
          <th>签名</th>
        </tr>
      </thead> -->
      <tbody>
        <tr v-for="(item, index) in data5" :key="index">
          <td>{{index+1}}</td>
          <td>{{item['__EMPTY']}}</td>
          <td>{{item['__EMPTY_1']}}</td>
          <td>{{item['__EMPTY_2']}}</td>
          <td>{{item['__EMPTY_3']}}</td>
          <td>{{item['__EMPTY_4']}}</td>
          <!-- <td>{{item['__EMPTY_5']}}</td>
          <td>{{item['__EMPTY_6']}}</td>
          <td>{{item['__EMPTY_7']}}</td>
          <td>{{item['__EMPTY_8']}}</td>
          <td>{{item['__EMPTY_9']}}</td>
          <td>{{item['__EMPTY_10']}}</td> -->

        </tr>
      </tbody>
    </table>
    
  </div>
</template>


<script>
import data from "./data";
import data2 from "./data2"

export default {
  name: "sn-discovery",
  components: {},
  computed: {
    
  },

  data: function() {
    return {
      // dataJson: {},
      listData: [],
      data3: [],
      finalData: [],
      data4: [],
      data5: []
    };
  },

  mounted() {
    this.data4 = data;
    this.init();
  },

  methods: {
    init() {

      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data2.length; j++) {
          if (data[i].__EMPTY_3 == data2[j].__EMPTY_3) {
            this.data3.push(data[i])
          }
        }
      }

      this.get();
    },

    get() {

      for (let i = 0; i < this.data4.length; i++) {
        let flag = 0;
        for (let j = 0; j < this.data3.length; j++) {
          // debugger
          if (this.data4[i].__EMPTY_3 == this.data3[j].__EMPTY_3) {
            flag = 1;
          } 
        }

        if (!flag) {
          this.data5.push(this.data4[i])
        }
      }
    }
  }
};
</script>
