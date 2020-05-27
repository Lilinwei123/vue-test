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
      <thead>
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
      </thead>
      <tbody>
        <tr v-for="(item, index) in listData" :key="index">
          <td>{{index+1}}</td>
          <td>{{item['部门代码']}}</td>
          <td>{{item['部门名称']}}</td>
          <td>{{item['用人司局']}}</td>
          <td>{{item['报考职位']}}</td>
          <td>{{item['职位属性']}}</td>
          <td>{{item.__EMPTY_5}} </td>
          <td>{{item.__EMPTY_6}} </td>
          <td>{{item.flag ? '是' : ''}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>


<script>
import data from "./data";

export default {
  name: "sn-discovery",
  components: {},
  computed: {
    // username () {
    //     // 我们很快就会看到 `params` 是什么
    //     return this.$route.params.username
    //     }
  },

  data: function() {
    return {
      // dataJson: {},
      listData: []
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.listData = data;
    }
  }
};
</script>
