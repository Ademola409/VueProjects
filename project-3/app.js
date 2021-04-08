var app = new Vue({
  el: '#events',
  data: {
    counter:0,
    name:'',
    userNameValidity:false,
  },
  watch:{
    counter(newValue){
      if (newValue<0){
        alert('Limit reached')
        this.counter=0 
      }
      else if (newValue>50){
        setTimeout( ()=> this.counter=0,2000)
      }
    }
  },
  computed:{
    fullName(){
      if (this.name==''){
        return ''
      }
      else{
        return this.name+' '+ 'lawal'
      }  
    }
  },
  methods:{
    addCounter(number){
      this.counter+=number
    },
    reduceCounter(number){
      this.counter-=number
    },

    checkInput(){
      if (this.name==''){
        alert('Fill the input please')
      }
    },
  }
})

