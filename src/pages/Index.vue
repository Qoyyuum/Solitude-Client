<template>
  <div class="q-pa-md" style="max-width: 400px">
    <h3>Login</h3>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        standout="bg-teal text-white"
        v-model="username"
        type="text"
        label="Username"
        autofocus />

      <q-input
        standout="bg-teal text-white"
        v-model="password"
        type="password"
        label="Password" />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn
          label="Submit"
          type="submit"
          :loading="submitting"
          color="primary"
          to="/dashboard"
        >
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: null,
      password: null,
      submitting: false,
      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.submitting = true
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>