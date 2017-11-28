<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-setting"></i> 管理中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main">
      <div class="list-div first">
        <table cellspacing="1" cellpadding="3">
          <tbody>
          <tr>
            <th colspan="4" class="group-title">订单统计信息</th>
          </tr>
          <tr>
            <td width="20%">待发货订单:</td>
            <td width="30%"><strong style="color:red">4</strong></td>
            <td width="20%">未确认订单:</td>
            <td width="30%"><strong>2</strong></td>
          </tr>
          <tr>
            <td>待支付订单:</td>
            <td><strong>3</strong></td>
            <td>已成交订单数:</td>
            <td><strong>3</strong></td>
          </tr>
          <tr>
            <td>新缺货登记:</td>
            <td><strong>2</strong></td>
            <td>退款申请:</td>
            <td><strong>0</strong></td>
          </tr>
          <tr>
            <td>部分发货订单:</td>
            <td><strong>1</strong></td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="list-div second">
        <table cellspacing="1" cellpadding="3">
          <tbody>
          <tr>
            <th colspan="4" class="group-title">实体商品统计信息</th>
          </tr>
          <tr>
            <td width="20%">商品总数:</td>
            <td width="30%"><strong><a href="">20</a></strong></td>
            <td width="20%">库存警告商品数:</td>
            <td width="30%"><strong style="color:red">7</strong></td>
          </tr>
          <tr>
            <td>新品推荐数:</td>
            <td><strong>11</strong></td>
            <td>精品推荐数:</td>
            <td><strong>10</strong></td>
          </tr>
          <tr>
            <td>热销商品数:</td>
            <td><strong>11</strong></td>
            <td>促销商品数:</td>
            <td><strong>2</strong></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {}
    }
  }
</script>
<style scoped>

  .list-div {
    width: 96.5%;
    margin: 0 auto;
    background: #ccc;
    position: relative;
  }

  .second {
    margin-top: 20px;
  }

  .list-div th {
    line-height: 24px;
    text-align: center;
    white-space: nowrap;
  }

  .list-div table {
    width: 100%;
  }

  th.group-title {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    padding-left: 10px;
    text-align: left !important;
    background: #EEF1F6;
    font-weight: normal;
  }

  .list-div th {
    line-height: 24px;
    text-align: center;
    white-space: nowrap;
  }

  .list-div td {
    background: #fff;
    text-align: center;
    font-size: 14px;
    line-height: 32px;
  }
</style>
