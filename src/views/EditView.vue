<script setup>
import Form from "@/components/Form.vue";
import Breadscrumb from '@/components/Breadscrumb.vue'
import { useRoute } from 'vue-router'
import { useCrudStore } from "@/stores/crud";
const store = useCrudStore();
const route = useRoute()
store.PostEdit(route.params.id);
</script>

<template>
  <div id="home">
    <Breadscrumb/>
    <div class="flex flex-wrap -mx-3 mb-20">
      <Form />
    </div>
  </div>
</template>
