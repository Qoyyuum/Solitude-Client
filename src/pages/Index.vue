<template>
  <div class="q-pa-lg">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="login">
        <login-register :tab="tab" />
      </q-tab-panel>
      <q-tab-panel name="register">
        <login-register :tab="tab" />
      </q-tab-panel>

    </q-tab-panels>
  </div>
</template>

<script>
import LoginRegister from "src/components/LoginRegister.vue"



export default {
  name: 'Login',

  meta: {
    title: 'Solitude - Book a time and place slot app'
  },

  data () {
    return {
      tab: 'login'
    }
  },
  components: { LoginRegister }

}
</script>