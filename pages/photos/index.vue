<template>
  <b-container>
    <b-row>
      <b-col v-for="photo in photos" :key="photo.id" cols="3">
        <b-card class="mb-2">
          <nuxt-link :to="`/photos/${photo.id}`">
            <p>id: {{ photo.id }}</p>
            <img :src="photo.download_url" alt="image" class="image" />
            <p>author: {{ photo.author }}</p>
          </nuxt-link>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const photos = await $axios.$get('https://picsum.photos/v2/list')
    return { photos }
  },
}
</script>

<style scoped>
.photos {
  width: 100px;
}
.image {
  width: 150px;
}
</style>
