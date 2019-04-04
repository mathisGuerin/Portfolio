<template>
    <div>
        {{this.exp.company}}
        <img class="Experience-img" :src="this.exp.logo" />
    </div>
</template>

<script>
export default {
    props: ['exp']
}
</script>

<style lang="scss" scoped>
.Experience-img {
    width: 100px;
}
</style>

