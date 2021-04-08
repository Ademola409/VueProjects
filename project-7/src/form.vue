<template>
    <section>
        <form @submit.prevent="submitForm">
            <div>
                <label for="">Name</label>
                <input type="text" v-model="inputName">
            </div>
            <div>
                <label for="">Phone</label>
                <input type="tel" v-model="inputPhone">
            </div>
            <div>
                <label for="">Email</label>
                <input type="email" v-model="inputEmail">
            </div>
            <div>
                <label for="">Address</label>
                <input type="text" v-model="inputAddress">
            </div>
            <button>Add Contact</button>
        </form>
    </section>
</template>

<script>
export default {
    emits:['add-contact'],
    data(){
        return {
            inputName:'',
            inputPhone:'',
            inputEmail:'',
            inputAddress:'',
            collectedDetails:[]
        }
    },
    methods:{
        submitForm(){
            this.$emit('add-contact',
            {Name:this.inputName,
            Phone:this.inputPhone, 
            Email:this.inputEmail,
            Address:this.inputAddress})
        }
    }
}
</script>