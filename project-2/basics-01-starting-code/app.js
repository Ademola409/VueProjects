var app = new Vue({
    el:'#user-goal',
    data: {
        courseGoalA:"finish this work and let's play",
        courseGoalB:'Game begins shortly....',
        vuelink:'https://vuejs.org/'
    },

    methods:{
        outputGoal(){
            const randomNumber=Math.random();
            if (randomNumber < 0.5){
                return this.courseGoalA;
            }
            else{
                return this.courseGoalB;
            }
        },
    }

})

