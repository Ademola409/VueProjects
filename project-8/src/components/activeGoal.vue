<template>
    <h1>{{ActiveUser.name}}</h1>
    <p>Active Goals Profile</p>
</template>



<script>
export default {
    inject:['ActiveUser']
}
</script>