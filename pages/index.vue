<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '~~/store/user.store';

const userStore = useUserStore()
const { name, id, dob } = storeToRefs(userStore)

watch(id, () => {
  console.log({
    name, id, dob
  });
})

definePageMeta({
  middleware: 'index'
})

const changeUser = () => {
  userStore.setUser({
    name: "Hung2",
    id: id.value + 1,
    dob: "22-6-1998"
  })

}
</script>

<template>
  <div @click="changeUser">Index</div>
</template>
