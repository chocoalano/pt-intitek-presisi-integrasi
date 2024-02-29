<script setup>
import { useCrudStore } from "@/stores/crud";
const store = useCrudStore();
const props = defineProps(["type", "title", "msg"]);
</script>
<template>
  <div role="alert">
    <div
      :class="`bg-${
        props.type ? 'blue' : 'red'
      }-500 text-white font-bold rounded-t px-4 py-2`"
    >
    <button
      class="bg-transparent hover:bg-blue-400 text-blue-100 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
      @click="store.resetMsg()"
    >
      Close
    </button>
      {{ props.title }}
    </div>
    <div
      :class="`border border-t-0 border-${
        props.type ? 'blue' : 'red'
      }-400 rounded-b bg-${props.type ? 'blue' : 'red'}-100 px-4 py-3 text-${
        props.type ? 'blue' : 'red'
      }-700`"
    >
      <p>{{ props.msg }}</p>
    </div>
  </div>
</template>
