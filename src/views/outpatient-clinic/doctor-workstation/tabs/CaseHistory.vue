<template>
  <div class="case-history">
    <his-session-title name="基本信息">
      <el-button size="small">调用病历模板</el-button>
    </his-session-title>
    <div class="base-message message">
      <his-flex title="主诉：">
        <el-input size="small" v-model="form.mainWord"></el-input>
      </his-flex>
      <his-flex title="现病史：">
        <el-input size="small" v-model="form.mainWord"></el-input>
      </his-flex>
      <his-flex title="既往史：">
        <el-input size="small" v-model="form.mainWord"></el-input>
      </his-flex>
      <his-flex title="过敏史：">
        <el-input size="small" v-model="form.mainWord"></el-input>
      </his-flex>
    </div>
    <el-row :gutter="20">
      <el-col :span="12">
        <his-session-title name="体征信息"></his-session-title>
        <div class="message body-message">
          <his-flex :inline="true" title="T:">
            <template>
              <his-number v-model="form.tNum"></his-number>
              <div class="desc">C</div>
            </template>
          </his-flex>
          <his-flex :inline="true" title="P:">
            <template>
              <his-number v-model="form.pNum"></his-number>
              <div class="desc">次/分</div>
            </template>
          </his-flex>
          <his-flex :inline="true" title="R:">
            <template>
              <his-number v-model="form.rNum"></his-number>
              <div class="desc">次/分</div>
            </template>
          </his-flex>
          <his-flex :inline="true" title="HR:">
            <template>
              <his-number v-model="form.hrNum"></his-number>
              <div class="desc">次/分</div>
            </template>
          </his-flex>
          <his-flex :inline="true" title="SPO2:">
            <template>
              <his-number v-model="form.spo2Num"></his-number>
            </template>
          </his-flex>
          <his-flex :inline="true" title="BP:">
            <template>
              <his-number v-model="form.bp1Num"></his-number>
              <div class="mlr5"> / </div>
              <his-number v-model="form.bp2Num"></his-number>
              <div class="desc">mmHg</div>
            </template>
          </his-flex>
          <his-flex :inline="true" title="FPG:">
            <template>
              <his-number v-model="form.fpgNum"></his-number>
              <div class="desc">mmol/L</div>
            </template>
          </his-flex>
          <his-flex :inline="true">
            <el-checkbox v-model="form.fpgChecked">未测</el-checkbox>
          </his-flex>
          <his-flex :inline="true" title="PPG:">
            <template>
              <his-number v-model="form.fpgNum"></his-number>
              <div class="desc">mmol/L</div>
            </template>
          </his-flex>
          <his-flex :inline="true">
            <el-checkbox v-model="form.ppgChecked">未测</el-checkbox>
          </his-flex>
          <his-flex :inline="true" title="H:">
            <template>
              <his-number v-model="form.H"></his-number>
              <div class="desc">cm</div>
            </template>
          </his-flex>
          <his-flex :inline="true" title="W:">
            <template>
              <his-number v-model="form.wNum"></his-number>
              <div class="desc">kg</div>
            </template>
          </his-flex>
          <his-flex :inline="true" title="BMI:">
            <template>
              <his-number v-model="form.bmiNum"></his-number>
            </template>
          </his-flex>
        </div>
      </el-col>
      <el-col :span="12">
        <his-session-title name="望闻切诊"></his-session-title>
        <div class="message">
          <el-row :gutter="20">
            <el-col :span="12">
              <his-flex title="面色：">
                <el-input size="small" v-model="form.mainWord"></el-input>
              </his-flex>
            </el-col>
            <el-col :span="12">
              <his-flex title="言语：">
                <el-input size="small" v-model="form.mainWord"></el-input>
              </his-flex>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <his-flex title="舌象：">
                <el-input size="small" v-model="form.mainWord"></el-input>
              </his-flex>
            </el-col>
            <el-col :span="12">
              <his-flex title="脉象：">
                <el-input size="small" v-model="form.mainWord"></el-input>
              </his-flex>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <his-flex title="苔象：">
                <el-input size="small" v-model="form.mainWord"></el-input>
              </his-flex>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <his-session-title name="诊断信息"></his-session-title>
    <div class="message">
      <el-table :data="tableData" style="width: 100%;">
        <el-table-column label="" prop="icd"></el-table-column>
        <el-table-column label="*ICD" prop="icd"></el-table-column>
        <el-table-column label="*西医诊断">
          <template slot-scope="scope">
            
          </template>
        </el-table-column>
      </el-table>
    </div>
    <his-session-title name="处理信息"></his-session-title>
    <div class="message">
      <his-flex title="处理意见：">
        <el-input size="small" v-model="form.mainWord"></el-input>
      </his-flex>
      <his-flex title="健教处方：">
        <his-select size="small" :options="o.healthTeachRecipe" v-model="form.healthKey"></his-select>
      </his-flex>
    </div>
  </div>
</template>

<script>
import Outpatient from '@D/OutpatientDTO'

export default {
  name: 'CaseHistory',
  data() {
    return {
      form: {
        mainWord: '999',
        tNum: 0,
        pNum: 0,
        rNum: 0,
        hrNum: 0,
        spo2Num: 0,
        bp1Num: 0,
        bp2Num: 0,
        fpgNum: 0,
        ppG: 0,
        hNum: 0,
        wNum: 0,
        bmiNum: 0,
        fpgChecked: false,
        ppgChecked: false,
        healthKey: -1
      },
      tableData: [],
      o: Outpatient
    }
  },
  created() {
    this.tableData = [{
      id: '1',
      icd: '',
      rowType: '主',
      westJudge: '',
      eastJudge: '',
      eastOpt: '',
      judgeTime: '',
      type: ''
    }]
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.case-history {
  .message {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .body-message {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .desc {
      margin-left: 4px;
    }
  }
}
</style>