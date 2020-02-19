<template>
  <div class="session-title">
    <div class="name">{{ name }}</div>
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SessionTitle',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.session-title {
  display: flex;
  align-items: center;
  .name {
    flex-grow: 0;
    flex-shrink: 0;
    margin-right: 10px;
    padding-left: 10px;
    border-left: 5px solid #333;
    font-size: 14px;
  }
  .right {
  		flex: 1;
  		display: flex;
  		align-items: center;
  	}
}
</style>