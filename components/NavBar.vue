<template>
    <div id="nav-bar">
        <nuxt-link class="link" to="/">Home</nuxt-link>
        <nuxt-link class="link" to="create">Add Question</nuxt-link>
        <nuxt-link class="link" to="edit">Edit Question</nuxt-link>
        <nuxt-link class="link" to="test-view">Test View</nuxt-link>
    </div>
</template>

<style lang="scss" scoped>
    #nav-bar {
        display: flex;
        justify-content: left;
        align-items: center;
        height: 5vw;
        width: 100%;
        background-color: green;
        .link {
            color: white;
            text-decoration: none;
            padding: 10px 15px;
        }
    }
</style>
