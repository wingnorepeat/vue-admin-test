<template>
  <div class="panicked-patients">
    <el-row :gutter="4">
      <el-col :span="17"><his-flex title="挂号时间："><el-date-picker
      v-model="search.date"
      :clearable="false"
      type="date"
      size="small"
      placeholder="选择日期">
    </el-date-picker></his-flex></el-col>
      <el-col :span="7"><his-select size="small" :options="o.registeredTime" v-model="search.times"></his-select></el-col>
    </el-row>
    <div class="number">
      <div>待诊 <span class="blue">23</span></div>
      <div>暂挂 <span class="blue">23</span></div>
      <div>已诊 <span class="grey">23</span></div>
      <div>总数 <span class="grey">23</span></div>
    </div>
    <el-row :gutter="4">
      <el-col :span="8"><his-select size="small" :options="o.attendanceStatus" v-model="filter.status"></his-select></el-col>
      <el-col :span="10"><el-input size="small" v-model="filter.name" placeholder="患者姓名"></el-input></el-col>
      <el-col :span="6"><el-button size="small" type="primary" @click="onSearch">查找</el-button></el-col>
    </el-row>
    <div class="table">
      <his-table @row-dblclick="onRowDblclick" :tableData="tableData" :columns="o.attendanceColumns">
          <el-table-column label="操作" align="center" width="80">
              <template>
                <el-button type="text" @click.stop="seeDoctor">就诊</el-button>
              </template>
          </el-table-column>
      </his-table>
    </div>
  </div>
</template>

<script>
import Outpatient from '@D/OutpatientDTO'

export default {
  name: 'PanickedPatients',
  data() {
    return {
      filter: {
        name: '',
        status: ''
      },
      search: {
        date: new Date(),
        times: 0
      },
      o: Outpatient,
      tableData: []
    }
  },
  created() {
    setTimeout(() => {
      this.tableData = [{
        id: '1',
        w1: '红诶哦',
        w2: '待诊'
      }]
    }, 300)
  },
  methods: {
    onSearch() {

    },
    seeDoctor() {
      console.log('接诊')
    },
    onRowDblclick(row, column) {
      console.log(row)
    }
  }
  }
</script>

<style lang="scss">
@import '@/styles/mixin.scss';

.panicked-patients {
  width: 300px;
  padding: 14px 10px;
  border: 1px solid #eee;
  min-height: 500px;
  max-height: 500px;
  overflow: auto;
  .el-input--suffix .el-input__inner {
    padding-right: 0;
  }
  .el-date-editor.el-input {
    width: auto;
  }
  .number {
    @include flexB;
    margin: 10px 0;
  }
  .table {
    width: 100%;
    margin-top: 10px;
  }
}
</style>