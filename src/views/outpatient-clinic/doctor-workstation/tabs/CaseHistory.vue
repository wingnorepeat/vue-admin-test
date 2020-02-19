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
        <div class="message">

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

    </div>
    <his-session-title name="处理信息"></his-session-title>
    <div class="message">
      <his-flex title="处理意见：">
        <el-input size="small" v-model="form.mainWord"></el-input>
      </his-flex>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseHistory',
  data() {
    return {
      form: {
        mainWord: '999'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.case-history {
  .message {
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
</style>