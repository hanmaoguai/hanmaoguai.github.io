<script setup lang="ts">
import SideIndex from './side/SideIndex.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px">
        <div class="common-aside">
          <SideIndex />
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <div class="common-header">header</div>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  height: 100vh;
}

.common-aside {
  height: 100vh;
  border-right: 1px solid black;
}

.common-header {
  height: 46px;
  border-bottom: 1px solid black;
}
</style>
