<template>
    <el-table ref="elTable" border :data="tableData" v-bind="$attrs" v-on="$listeners">
        <template v-for="(column, cIndex) in columns">
            <el-table-column v-if="column.sequence" align="center" 
                :key="cIndex" 
                :type="column.sequence" 
                :label="column.label" 
                :width="column.width || 'auto'">
            </el-table-column>
            <el-table-column v-else-if="column.image" align="center" 
                :key="cIndex" 
                :prop="column.prop" 
                :label="column.label" 
                width="100px"  
                :formatter="column.formatter">
                <template slot-scope="scope">
                    <img :src="scope.row[column.prop]" width="60" height="60" :onerror="defaultImg" 
                        style="margin: 10px auto;display: block;"/>
                </template>
            </el-table-column>
            <el-table-column v-else align="center" 
                :key="cIndex" 
                :prop="column.prop" 
                :label="column.label" 
                :width="column.width || 'auto'" 
                :formatter="column.formatter">
            </el-table-column>
        </template>
        <slot></slot>
    </el-table>
</template>

<script>
export default {
    name: 'Table',
    props: {
        tableData: {
            type: Array,
            default: function() {
                return []
            }
        },
        columns: {
            type: Array,
            default: function() {
                return []
            }
        }
    },
    data() {
        return {
            // defaultImg: 'this.src="' + require('../../assets/timg.jpg') + '"'
            defaultImg: ''
        }
    },
    methods: {
    	clearSelection() {
    		this.$refs.elTable.clearSelection()
    	}
    }
}
</script>

