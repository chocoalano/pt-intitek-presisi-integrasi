<script setup>
import Input from "@/components/forms/Input.vue";
import Alert from '@/components/Alert.vue'
import { useCrudStore } from "@/stores/crud";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { ref, watch, reactive } from "vue";

const store = useCrudStore();
const { form, msg } = storeToRefs(store);
const route = useRoute();

const validator = ref(true);

watch(form, (n) => {
  if (
    n.title != '' &&
    n.description != '' &&
    n.price != '' &&
    n.discountPercentage != '' &&
    n.rating != '' &&
    n.stock != '' &&
    n.brand != '' &&
    n.category != '' &&
    n.thumbnail != ''
  ) {
    validator.value=false
  } else {
    validator.value = true
  }
});
</script>
<template>
  <form
    class="mt-10 space-y-10"
    @submit.prevent="store.PostStore(route.params.id)"
  >
    <fieldset>
      <legend class="text-sm font-semibold leading-6 text-gray-900">
        Forms
      </legend>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
        <div class="lg:col-span-3">
          <Input
            id="title"
            :value="form.title"
            class="mb-4"
            type="text"
            label="title"
            v-model="form.title"
          />
        </div>
        <div class="lg:col-span-3">
          <Input
            id="price"
            :value="form.price"
            class="mb-4"
            type="text"
            label="price"
            v-model="form.price"
          />
        </div>
        <div class="lg:col-span-3">
          <Input
            id="discountPercentage"
            :value="form.discountPercentage"
            class="mb-4"
            type="text"
            label="discountPercentage"
            v-model="form.discountPercentage"
          />
        </div>
        <div class="lg:col-span-3">
          <Input
            id="rating"
            :value="form.rating"
            class="mb-4"
            type="text"
            label="rating"
            v-model="form.rating"
          />
        </div>
        <div class="lg:col-span-3">
          <Input
            id="stock"
            :value="form.stock"
            class="mb-4"
            type="text"
            label="stock"
            v-model="form.stock"
          />
        </div>
        <div class="lg:col-span-3">
          <Input
            id="brand"
            :value="form.brand"
            class="mb-4"
            type="text"
            label="brand"
            v-model="form.brand"
          />
        </div>
        <div class="lg:col-span-3">
          <Input
            id="category"
            :value="form.category"
            class="mb-4"
            type="text"
            label="category"
            v-model="form.category"
          />
        </div>
        <div class="lg:col-span-3">
          <Input
            id="thumbnail"
            :value="form.thumbnail"
            class="mb-4"
            type="text"
            label="thumbnail"
            v-model="form.thumbnail"
          />
        </div>
        <div class="lg:col-span-12">
          <Input
            id="description"
            :value="form.description"
            class="mb-4"
            type="text"
            label="description"
            v-model="form.description"
          />
        </div>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          :disabled="validator"
        >
        Submit
        </button>
      </div>
    </fieldset>
    <Alert v-if="msg.type != null" :type="msg.type" :title="msg.title" :msg="msg.msg" />
  </form>
</template>
