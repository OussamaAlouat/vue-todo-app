<template>
  <div class="main container">
    <h1>ToDo APP</h1>
    <div v-if="isEmpty">
      <el-alert
        title="There are not activities at this moment"
        type="info"
        :center="true"
        show-icon
        :closable="false">
      </el-alert>
    </div>

    <div v-if="isWrongActivity" class="wrongNotification">
      <el-alert
        :title="errorMessage"
        type="error"
        :center="true"
        show-icon
        :closable="false">
      </el-alert>
    </div>

    <Activity></Activity>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import Activity from './Activity'

  export default {
    name: 'Dashboard',
    components: {
      Activity,
    },
    computed: {
      ...mapGetters({
        'activities': 'getActivities',
        'errorMessage': 'getErrorMessage'
      }),
      isEmpty() {
        return this.activities.length === 0;
      },
      isWrongActivity() {
        return this.errorMessage.length > 0;
      }
    },
  }
</script>

<style>
.main {
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 10px;
}

.wrongNotification {
  margin-bottom: 0.2rem;
  width: 80%;
  margin-left: 10%;
  text-align: center;
  margin-top: 10px;
}
</style>