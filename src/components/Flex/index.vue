<template>
  <div class="flex-box-wrapper" :class="{inline, inline}">
    <div class="flex-left">{{title}}</div>
    <div class="flex-right">
    	<slot></slot>
    </div>
  </div>
</template>

<script>
export default {
	name: 'Flex',
	props: {
		title: {
			type: String,
			default: ''
		},
		inline: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .flex-box-wrapper {
  	display: flex;
  	align-items: center;
  	margin-bottom: 10px;
  	color: #666;
		&.inline {
      margin-right: 15px;
		}
  	.flex-left {
  		flex-grow: 0;
  		flex-shrink: 0;
			margin-right: 10px;
			font-size: 14px;
  	}
  	.flex-right {
  		flex: 1;
  		display: flex;
  		align-items: center;
  		.selector {
  			width: 100%;
  		}
  		// .el-select {
  		// 	width: 100%;
  		// }
  	}
  }
</style>