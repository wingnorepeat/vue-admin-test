<template>
  <div style="display: inline-block;" class="selector">
    <template v-if="!see">
      <el-select v-bind="$attrs" v-on="$listeners" :value="value">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </template>
    <template v-else>
      <div class="el-form-detail">{{ seeLabel }}</div>
    </template>
  </div>
</template>

<script>
export default {
	name: 'Select',
  props: {
    options: {
      type: Array,
      default: []
    },
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    see: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    seeLabel() {
      if (this.options.length && this.value.toString()) {
        return this.options.find(v => {
          return v.value === this.value
        }).label
      }
      return ''
    }
  }
}
</script>
