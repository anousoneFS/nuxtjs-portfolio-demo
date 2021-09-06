<template>
  <b-container class="mt-4">
    <center>
      <b-col cols="6">
        <h1>Photo Detail</h1>
        <img
          :src="photo.download_url"
          alt="photo detail"
          class="photos"
        /><br />
        <h2>Author: {{ photo.author }}</h2>
        <nuxt-link to="/photos" class="btn btn-primary mt-5">back</nuxt-link>
      </b-col>
    </center>
  </b-container>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const photo = await $axios.$get(
      `https://picsum.photos/id/${params.id}/info`
    )
    return {
      photo,
    }
  },
}
</script>

<style scoped>
.photos {
  width: 400px;
}
</style>
