<template>
  <q-page padding>
      <q-calendar
      v-model="selectedDate"
      view="month"
      locale="en-us"
      :day-height="100"
    />
  </q-page>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      selectedDate : '2021/02/08'
    }
  }
}
</script>
