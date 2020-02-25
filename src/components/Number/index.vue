<template>
  <div class="number-wrapper" v-clickoutside="close">
    <el-input-number @focus="onFocus" @blur="onBlur" @change="onChange" :size="size" :controls="false" :value="value" :min="0"></el-input-number>
    <div class="keyboard-input" @click.stop="onKeyboardInput" v-show="showKeyboardInput">{{keyboardVal}}</div>
    <div class="finger-keyboard" v-show="showKeyboard">
      <el-button size="small" @click.stop="onNumber" v-for="(item, index) in buttons" :key="index">{{item}}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Number',
  data() {
    return {
      showKeyboard: false,
      showKeyboardInput: false,
      keyboardVal: 0,
      buttons: [7, 8, 9, 'C', 4, 5, 6, '清空', 1, 2, 3, '确认', 0, '.']
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: 'mini'
    }
  },
  mounted() {
    let me = this
  },
  methods: {
    onNumber(e) {
      let key = e.target.textContent
      let curVal = this.keyboardVal + ''
      switch (key) {
        case 'C':
          if (curVal.length > 1) {
            curVal = curVal.substring(0, curVal.length - 1)
          } else {
            curVal = '0'
          }
        break
        case '清空':
          curVal = '0'
        break
        case '确认':
          this.close()
        break
        case '.':
          if (curVal.indexOf('.') == -1) {
            curVal += key
          }
        break
      
        default:
          if (curVal.length == 1 && curVal == '0') {
            curVal = key
          } else {
            curVal += key
          }
        break
      }
      this.keyboardVal = curVal
    },
    onKeyboardInput() {
      this.emitNumber(Number(this.keyboardVal))
      this.showKeyboardInput = false
    },
    emitNumber(curVal) {
      this.$emit('input', curVal)
    },
    onChange(curVal, oldVal) {
      this.keyboardVal = curVal
    },
    onFocus() {
      this.showKeyboard = true
      this.keyboardVal = this.value
      this.showKeyboardInput = false
    },
    onBlur() {
      this.showKeyboardInput = true
    },
    close() {
      if (this.showKeyboard) {
        this.emitNumber(Number(this.keyboardVal))
        this.showKeyboard = false
        this.showKeyboardInput = false
      }
    }
  }
}
</script>

<style lang="scss">
  .number-wrapper {
    position: relative;
    .el-input-number.is-without-controls .el-input__inner {
      padding-left: 8px;
      padding-right: 8px;
    }
    .el-input-number--mini {
      width: 70px;
    }
    .el-button--small, .el-button--small.is-round {
      padding: 9px;
    }
    .el-button {
      width: 25%;
      &:nth-child(11) {
        margin-right: 57px;
      }
      &:nth-child(12) {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 64px;
      }
      &:nth-child(13) {
        margin-left: 57.5px !important;
      }
    }
    .el-button+.el-button {
      margin-left: 0px;
    } 
    .finger-keyboard {
      position: absolute;
      width: 230px;
      background-color: #eee;
      z-index: 999;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      box-shadow: #999 1px 1px 5px;
    }
    .keyboard-input {
      position: absolute;
      width: 100%;
      height: 100%;
      text-align: center;
      top: 0;
      left: 0;
      line-height: 28px;
      background-color: #fff;
    }
  }
</style>
