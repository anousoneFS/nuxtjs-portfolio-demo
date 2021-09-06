<template>
  <b-container class="mt-5">
      <article>
          <h1 class="title">{{post.title}}</h1>
          <nuxt-content :document="post" />
      </article>
  </b-container>
</template>

<script>
export default {
    async asyncData({ $content, params}){
        const post = await $content('blog', params.slug).fetch()
        return {post};
    }
}
</script>

<style>

</style>