<script setup lang="ts">
import avatarImage from '../../assets/image/avatar.jpg'
import githubIcon from '../../assets/svg/github-twotone.svg'
import emailIcon from '../../assets/svg/ic--outline-email.svg'
</script>

<template>
  <div class="side-info">
    <el-avatar :size="50" :src="avatarImage" />
    <div class="info-icon">
      <github-icon />
      <email-icon />
    </div>
    <div class="info-sign">
      <el-card> this is sign</el-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-info {
  display: flex;
  flex-direction: column;
}
</style>
