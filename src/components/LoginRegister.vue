<template>
  <div class="q-pa-lg">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- <q-input
            v-if="tab == 'register'"
            standout="bg-teal text-white"
            v-model="formData.username"
            type="text"
            label="Username"
            autofocus /> -->

          <q-input
            standout="bg-teal text-white"
            v-model="formData.email"
            type="email"
            label="Email"
            autofocus />

          <q-input
            standout="bg-teal text-white"
            v-model="formData.password"
            type="password"
            label="Password" />
          

          <q-toggle v-model="accept" label="I accept the license and terms" />

          <div>
            <q-btn
              :label="tab"
              type="submit"
              :loading="submitting"
              color="primary"
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
            >
            </q-btn>
          </div>
      </q-form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'LoginRegister',
  props: {
    tab: {
      type: String,
      default: "login"
    },
  },
  data () {
    return {
      formData: {
        email: '',
        password: '', 
      },
      accept: false,        
      submitting: false, 
    } 
  },
  methods: { 
    ...mapActions('auth', ['signIn', 'signOut', 'registerUser']),
    onSubmit () { 
      if (this.tab === 'login') {
        if (this.accept !== true) { 
          this.$q.notify({
            color: 'red-5',
            textColor: 'white', 
            icon: 'warning', 
            message: 'You need to accept the license and terms first'})
        } else if (this.formData.password.length <= 0){
          this.$q.notify({
            color: 'red-5',
            textColor: 'white', 
            icon: 'warning', 
            message: 'Password is required'})
        } else if (this.formData.email.length <= 0){
          this.$q.notify({
            color: 'red-5',
            textColor: 'white', 
            icon: 'warning', 
            message: 'Email is required'
          })
        } else { 
          this.submitting = true
          this.signIn(this.formData)
          .then(()=> {
            this.$q.notify({ 
              color:'green-4', 
              textColor: 'white',
              icon: 'cloud_done', 
              message: 'Signed In Successfully!'
            })
            this.$router.replace({name: 'dashboard' })
            .catch(() => {})
          })
          .catch(err => {
            this.$q.notify({
              color: 'red-5',
              textColor: 'white', 
              icon: 'warning', 
              message: err.message
            })
          })
          this.submitting = false
        }
      } else {
        this.registerUser(this.formData)
          .then(() => {
            this.$q.notify({
              color:'green-4', 
              textColor: 'white',
              icon: 'cloud_done', 
              message: 'Registered successfully'
            })
          })
          .catch(err => {
            this.$q.notify({
              color: 'red-5',
              textColor: 'white', 
              icon: 'warning', 
              message: err.message
            })
          })
      }
    },
    onReset () {
      // this.formData.username = null
      this.formData.email = null
      this.formData.password = null
      this.accept = false
      this.submitting = false
      }
  }

}
</script>
