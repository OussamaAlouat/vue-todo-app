<template>
  <div>
    <Dashboard></Dashboard>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Dashboard from './components/DashboardComponent.vue';

export default {
  components: { Dashboard },
  mounted() {
    this.initData();
  },
  methods: {
    ...mapActions(['initData']),
  },
};

</script>
