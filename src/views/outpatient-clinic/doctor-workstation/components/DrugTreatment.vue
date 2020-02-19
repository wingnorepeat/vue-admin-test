<template>
  <div class="drug-treatment">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="病历" name="caseHistory">
        <case-history></case-history>
      </el-tab-pane>
      <el-tab-pane label="西药&中成药" name="cAndW">西药&中成药</el-tab-pane>
      <el-tab-pane label="中草药" name="herbs">中草药</el-tab-pane>
      <el-tab-pane label="辅检&治疗" name="check">辅检&治疗</el-tab-pane>
      <el-tab-pane label="附加材料" name="extraMaterial">附加材料</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import CaseHistory from '../tabs/CaseHistory'

export default {
  name: 'DrugTreatment',
  data() {
    return {
      activeName: 'caseHistory'
    }
  },
  methods: {
    handleClick() {

    }
  },
  components: {
    CaseHistory
  }
}
</script>

<style lang="scss" scoped>
.drug-treatment {
  width: 100%;
  padding: 0px 10px 14px;
  border: 1px solid #eee;
  min-height: 500px;
}
</style>