<script setup lang="ts">
import SideIndex from './side/SideIndex.vue'
import HeaderIndex from './header/HeaderIndex.vue'

const route = useRoute()
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px">
        <SideIndex />
      </el-aside>
      <el-container>
        <el-header>
          <header-index />
        </el-header>
        <el-main>
          <router-view :key="route.fullPath" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  height: calc(100vh - 20px);
}

.common-aside {
  height: calc(100vh - 20px);
  border-right: 1px solid black;
}

.common-header {
  height: 46px;
  border-bottom: 1px solid black;
}
</style>
