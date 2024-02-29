<script setup>
import Table from "@/components/Table.vue";
import Breadscrumb from '@/components/Breadscrumb.vue'
</script>

<template>
  <div id="home">
    <Breadscrumb/>
    <div class="lg:flex justify-between items-center mb-6">
      <p class="text-2xl font-semibold mb-2 lg:mb-0">Crud Example with <a href="https://dummyjson.com/">https://dummyjson.com/</a></p>
      <router-link to="/add" class="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow">Create New</router-link>
    </div>

    <div class="flex flex-wrap -mx-3 mb-20">
      <Table />
    </div>
  </div>
</template>
