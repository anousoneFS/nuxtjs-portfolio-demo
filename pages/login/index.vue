<template>
  <b-container class="mt-4">
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Your Password:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <div v-show="error">
      <p>Invalid Password {{ error }}</p>
    </div>
  </b-container>
</template>

<script>
export default {
  middleware: 'isLoggedIn',
  data() {
    return {
      email: '',
      password: '',
      show: true,
      error: null,
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      const payload = {
        data: {
          email: this.email,
          password: this.password,
        },
      }
      try {
        await this.$auth.loginWith('local', payload)
        this.$router.push('/')
      } catch (error) {
        this.error = error
      }
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.email = ''
      this.password = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>
