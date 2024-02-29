<template>
  <div class="container mx-auto p-4">
    <Alert v-if="msg.type != null" :type="msg.type" :title="msg.title" :msg="msg.msg" />
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">No.</th>
          <th class="py-2 px-4 border-b">Title</th>
          <th class="py-2 px-4 border-b">Description</th>
          <th class="py-2 px-4 border-b">Price</th>
          <th class="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, index) in list" :key="i.id">
          <td class="py-2 px-4 border-b">{{ index+1 }}</td>
          <td class="py-2 px-4 border-b">{{ i.title }}</td>
          <td class="py-2 px-4 border-b">{{ i.description }}</td>
          <td class="py-2 px-4 border-b">$ {{ i.price }}</td>
          <td class="py-2 px-4 border-b text-center">
            <div class="inline-flex">
              <router-link :to="`/edit/${i.id}`" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-2 rounded-l">
                Edit
              </router-link>
              <button
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-2 rounded-r"
                @click="store.PostDelete(i.id)"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import Alert from '@/components/Alert.vue'
import { useCrudStore } from "@/stores/crud";
import { storeToRefs } from "pinia";
const store = useCrudStore();
store.fetchPosts();
const { list, msg } = storeToRefs(store);
</script>
