<template>
  <div>
    <div>
      <el-row type="flex" justify="center" class="counterSection">
        <el-col :span="4">
          Completed :
        </el-col>
        <el-col :span="2">
          {{completed}}
        </el-col>
        <el-col :span="3">
          Total :
        </el-col>
        <el-col :span="2">
          {{total}}
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'InformationSection',
  computed: {
    ...mapState(['activities']),
    completed() {
      return this.activities.filter((val) => val.completed === true).length;
    },
    total() {
      return this.activities.length;
    },
  },
};
</script>

<style>

.counterSection {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
