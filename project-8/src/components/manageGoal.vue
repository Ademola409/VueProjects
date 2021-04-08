<template>
    <h1>Managing the goals</h1>
    <input type="text" v-model.trim="enteredGoal">
    <button @click="addGoal">add goal</button>

    <teleport to="body">
        <transition name="dialog">
            <error-alert v-if="dialogVisibility">
                <h1>Input is Invalid!!!!!</h1>
                <button @click="hideDialog">Try Again</button>
            </error-alert>
        </transition>
    </teleport>

    <ul>
        <li v-for="goal in goalList" :key=goal>{{goal}}</li>
    </ul>
</template>


<script>
import errorAlert from './errorAlert.vue';

export default {
    components:{
        errorAlert
    },
    data(){
        return {
            enteredGoal:'',
            dialogVisibility:false,
            goalList:[]
        }
    },
    methods:{
        addGoal(){
            if (this.enteredGoal==''){
                this.dialogVisibility=true
            }  
            else{
                this.goalList.push(this.enteredGoal)
            }
        },

        hideDialog(){
            this.dialogVisibility=false
        }
    }
}
</script>

<style scoped>
.dialog-enter-from{
    opacity: 0;
    transform:translateY(-30px)
}
.dialog-enter-active{
    transition: all 0.3s ease-out;
}
.dialog-enter-to{
    opacity: 1;
    transform:translateY(0)
}
</style>