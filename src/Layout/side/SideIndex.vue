<script setup lang="ts">
import avatarImage from '../../assets/image/avatar.jpg'
import githubIcon from '../../assets/svg/github-twotone.svg'
import emailIcon from '../../assets/svg/ic--outline-email.svg'
</script>

<template>
  <div class="side-info">
    <el-card style="height: calc(100vh - 20px)">
      <div class="my-info">
        <el-avatar :size="50" :src="avatarImage" />
        <div class="info-icon">
          <github-icon />
          <email-icon />
        </div>
        <el-card> this is sign</el-card>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.side-info {
  display: flex;
  flex-direction: column;
}

.my-info {
  display: flex;
  flex-direction: column;
  height: 68vh;
  justify-content: space-around;
  // background-color: antiquewhite;
}

</style>
