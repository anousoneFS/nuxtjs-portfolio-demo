<template>
  <b-container>
    <center class="mt-5">
      <img
        :src="user.avatar_url"
        alt="image profile github"
        class="image_profile"
      />
      <p>Bio: {{ user.bio }}</p>
      <p>name: {{ user.name }}</p>
      <p>location: {{ user.location }}</p>
    </center>
    <b-row>
      <b-col v-for="repo in repos" :key="repo.id" cols="3">
        <b-card class="mb-5">
          <a :href="repo.html_url">
            <h2 class="title">{{ repo.name }}</h2>
          </a>
          <p>Star: {{ repo.stargazers_count }}</p>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const baseURL = 'https://api.github.com'
    const [user, repos] = await Promise.all([
      $axios.$get(`${baseURL}/users/anousonefs`),
      $axios.$get(`${baseURL}/users/anousonefs/repos`),
    ])
    return { user, repos }
  },
}
</script>

<style scoped>
.image_profile {
  width: 150px;
}
</style>
