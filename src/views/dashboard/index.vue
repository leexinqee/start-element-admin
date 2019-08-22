<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人信息</span>
      </div>
      <div class="dashboard-text">name:{{name}}</div>
      <div class="dashboard-text">role:<span v-for='role in roles' :key='role'>{{role}}</span></div>
    </el-card>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters(['name', 'roles'])
  }
}
</script>
<style lang="scss" scoped>
.box-card {
  width: 480px;
}
</style>
