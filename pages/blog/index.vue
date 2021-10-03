<template>
    <b-container class="mt-5">
        <h1 class="title">Blog</h1>
        <b-row>
            <b-col v-for="post in posts" :key="post.slug" cols="4">
                <b-card>
                    <nuxt-link :to="`/blog/${post.slug}`">{{ post.title }}</nuxt-link>
                    <p>{{ post.description }}</p>
                    <p>create at: {{ post.createdAt }}</p>
                </b-card>
            </b-col>
        </b-row>
        <nuxt-link to="/" class="btn btn-success">go to home</nuxt-link>

    </b-container>
</template>

<script>
export default {
    middleware: ['auth'],
    async asyncData({ $content }){
        const posts = await $content('blog').sortBy('createdAt', 'desc').fetch()
        return { posts }
    }
}

</script>

<style>

</style>