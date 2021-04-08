<template>
    <form-list @add-contact="addFriend"></form-list>
    <section>
        <ul>
            <friends-Name v-for="friend in friends" 
            :key="friend.id" 
            :id=friend.id
            :friendName=friend.name
            :friendEmail=friend.email
            :friendPhone=friend.phone
            :address=friend.address
            :isFavorite=friend.isFavorite
            @address-toggle="changeFavorite"
            @delete-contact="contactDelete"></friends-Name>
        </ul>
    </section>
</template>

<script>
import friendsName from './friendsName.vue';
import formList from './form.vue';
export default {
    components:{
        friendsName,
        formList
    },  
    data(){
        return {
            friends:[
                {
                    id:'Lawal',
                    name:'Lawal Ademola',
                    phone:'07013495428',
                    email:'lawalabdulazeez199@gmail.com',
                    address:'New Town Avenue',
                    isFavorite:true
                },
                {
                    id:'Salami',
                    name:'Salami Mary',
                    phone:'08162549124',
                    email:'salamimary@gmail.com',
                    address:'Owode',
                    isFavorite:false
                }
            ]  
        }
    },
    methods:{
        changeFavorite(friendId){
            var selectedFriend=this.friends.find(friend=>friend.id===friendId)
            selectedFriend.isFavorite=!selectedFriend.isFavorite
        },

        addFriend(data){
            this.friends.push({
                id:new Date().toISOString(),
                name:data.Name,
                phone:data.Phone,
                email:data.Email,
                address:data.Address
            })
        },

        contactDelete(friendId){
            this.friends=this.friends.filter(friend=>friend.id !== friendId)
        }
    }

}
</script>
