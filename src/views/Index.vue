<template>
	<div v-title data-title="码神之路-blog">
        <el-container>
    
          <el-main class="me-articles">
                主区域
            
          </el-main>
    
          <el-aside>
    
                侧边栏,右侧
          </el-aside>
    
        </el-container>
      </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {

            }
        },
        methods: {

        },
        components: {

        }
    }
</script>

<style>
    .el-container {
    width: 960px;
  }

  .el-aside {
    margin-left: 20px;
    width: 260px;
  }

  .el-main {
    padding: 0px;
    line-height: 16px;
  }

  .el-card {
    border-radius: 0;
  }

  .el-card:not(:first-child) {
    margin-top: 20px;
  }
</style>