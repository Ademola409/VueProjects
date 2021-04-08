const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoal:''
    };
  },

  methods:{
    addGoal(){
      if (this.enteredGoal==''){
        alert('No empty field allowed')
      }
      else{
        this.goals.push(this.enteredGoal)
        this.enteredGoal=''
      }
    },
    removeGoal(goalIndex){
      this.goals.splice(goalIndex, 1)
    }
  }
});

app.mount('#user-goals');
