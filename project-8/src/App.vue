<template> 
  <section>
    <h2>KEEP ALIVE DEMO</h2>
  <button @click="setSelectedComponents('active-goal')">Active goal</button>
  <button @click="setSelectedComponents('manage-goal')">Manage goal</button>
  <!-- <active-goal v-if="selectedComponent=='active-goal' "></active-goal>
  <manage-goal v-if="selectedComponent=='manage-goal' "></manage-goal> -->
  <keep-alive>
    <component :is="selectedComponent"></component>
  </keep-alive>
  </section>
</template>

<script>
import activeGoal from './components/activeGoal.vue';
import manageGoal from './components/manageGoal.vue';
export default {
  components:{
    activeGoal,
    manageGoal
  },

  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      selectedComponent:'active-goal'
    };
  },

  provide(){
    return {
      ActiveUser:this.activeUser
    }
  },

  methods:{
    setSelectedComponents(cmp){
      this.selectedComponent=cmp
    },
  }

};
</script>

