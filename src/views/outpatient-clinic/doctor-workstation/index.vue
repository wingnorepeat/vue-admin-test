<template>
  <div class="doctor-workstation">
    <div class="operation">
      <el-button size="small">历史就诊</el-button>
      <el-button size="small">打印</el-button>
      <el-button size="small">下一个</el-button>
      <el-button size="small" type="primary">就诊结束</el-button>
      <el-button size="small" type="primary">暂挂</el-button>
      <el-button size="small">暂存</el-button>
    </div>
    <his-session-title name="病人信息">
      <template>
        <el-button size="small">候诊病人</el-button>
        <div class="message-disease">
          <span>张三（欠费）</span>
          <span>男</span>
          <span>21岁3个月</span>
          <span>自费</span>
          <span>科室：全诊科室1</span>
          <span>医生：徐文星</span>
          <span>挂号时间：2019-09-07 上午</span>
          <span>挂号流水号：2019383888283</span>
        </div>
      </template>
    </his-session-title>
    <div class="main-content">
      <div class="left" style="display: none;">
        <panicked-patients></panicked-patients>
      </div>
      <div class="middle" style="display: none;">
        <drug-treatment></drug-treatment>
      </div>
      <div class="right">
        <case-tmpl></case-tmpl>
      </div>
    </div>
  </div>
</template>

<script>
import PanickedPatients from './components/PanickedPatients'
import DrugTreatment from './components/DrugTreatment'
import CaseTmpl from './templates/CaseTmpl'

export default {
  components: {
    PanickedPatients,
    DrugTreatment,
    CaseTmpl
  },
  data() {
    return {
      data: ''
    }
  }
}
</script>

<style lang="scss">
.doctor-workstation {
  .operation {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
  .message-disease {
    font-size: 14px;
    color: #999;
    span {
      margin-left: 10px;
    }
  }
  .main-content {
    display: flex;
    margin-top: 15px;
    .left {
      flex: 0;
    }
    .middle, .right {
      flex: 1;
    }
    .middle {
      margin-left: 10px;
    }
  }
}
</style>
