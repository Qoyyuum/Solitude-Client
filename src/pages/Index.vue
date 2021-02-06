<template>
  <div>
      <q-calendar
    v-model="selectedDate"
    view="month"
    locale="en-us"
    :day-height="100"
  />
  </div>
</template>

<script>

export default {
  name: 'PageIndex',
  data () {
    return {
      selectedDate: '2021/02/01',
      splitterModel: 50,
      date: '2021/02/01',
      events: ['2021/02/01', '2021/02/05', '2021/02/06' ]
    }
  }
}
</script>
