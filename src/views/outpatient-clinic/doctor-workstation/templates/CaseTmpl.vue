<template>
  <div class="case-template-search">
    <div class="t-left">
      <div class="type-choice">
        <el-radio-group v-model="type">
          <el-radio v-for="item in o.caseHistoryTmplType" :key="item.label" :label="item.label">{{item.name}}</el-radio>
        </el-radio-group>
      </div>
      <his-search-input :prepends="o.caseTemplateOpts" v-model="wordKey" @search="resetTree"></his-search-input>
    </div>
    <div class="t-right">
      <div class="top-btn">
        <el-button size="small">返回</el-button>
        <el-button size="small" type="primary">调入病历</el-button>
      </div>
      <case-history></case-history>
    </div>
  </div>
</template>

<script>
  import Outpatient from '@D/OutpatientDTO'
  import CaseHistory from '../tabs/CaseHistory'

  export default {
    name: 'CaseTmpl',
    components: {
      CaseHistory
    },
    data() {
      return {
        type: 1,
        o: Outpatient,
        wordKey: ''
      }
    },
    methods: {
      resetTree() {
        console.log(this.wordKey)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/mixin.scss';

  .case-template-search {
    @include flexSS;
    .t-left {
      width: 300px;
      @include flex-fixed;
      .type-choice {
        margin-bottom: 14px;
      }
      margin-right: 20px;
    }
    .t-right {
      @include flex-vary;
      .top-btn {
        margin-bottom: 16px;
      }
    }
  }
</style>