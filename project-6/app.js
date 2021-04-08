function getRandomValue(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

var app = new Vue({
    el: '#game',
    data(){
        return {
            playerHealth:100,
            monsterHealth:100,
            currentRound:0,
            winner:null,
            logMessages:[],
        }
    },
    computed:{
        monsterStyleHealth(){
            if (this.monsterHealth<0){
                return {width: '0%'}
            }
            else{
                return {width: this.monsterHealth +"%"}
            }   
        },

        playerStyleHealth(){
            if(this.playerHealth<0){
                return {width: '0%'}
            }
            else{
                return {width: this.playerHealth +"%"}
            }      
        },

        mayUseSpecialAttack(){
            return this.currentRound % 3 != 0
        }
    },  

    watch:{
        playerHealth(value){
            if(value<=0 && this.monsterHealth<=0){
                this.winner='draw'
            }
            else if(value <=0){
                this.winner='player lost'
            }
        },

        monsterHealth(value){
            if(value<=0 && this.playerHealth<=0){
                this.winner='draw'
            }
            else if(value <=0){
                this.winner='monster lost'
            }
        }


    },

    methods:{
        restartGame(){
            this.playerHealth=100;
            this.monsterHealth=100;
            this.currentRound=0;
            this.winner=null;
            this.logMessages=[]
        },

        attackMonster(){
            this.currentRound++;
            const attackValue=getRandomValue(5,12);
            this.monsterHealth-=attackValue;
            this.attackPlayer()
            this.addLogMessage('player','attack', attackValue)
        },
        attackPlayer(){
            const attackValue=getRandomValue(8,15);
            this.playerHealth-=attackValue; 
            this.addLogMessage('monster','attack', attackValue)
        },

        specialAttackMonster(){
            this.currentRound++;
            const attackValue=getRandomValue(10,25);
            this.monsterHealth-=attackValue;
            this.attackPlayer()
            this.addLogMessage('player','special-Attack', attackValue)
        },
        healPlayer(){
            this.currentRound++;
            const healValue =getRandomValue(8,20);
            if(this.playerHealth +healValue> 100){
                this.playerHealth=100
            }
            else{
                this.playerHealth+=healValue
            }
            this.attackMonster()
            this.addLogMessage('player','Heal', healValue)
        },

        surrender(){
            this.winner='player lost'
            this.playerHealth=0
            this.addLogMessage('player','surrender', this.playerHealth)
        },

        addLogMessage(who,what,value){
            this.logMessages.unshift({
                actionBy:who,
                actionType:what,
                actionValue:value
            })
        },
    }


})