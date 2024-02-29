<script>
export default {
  name: "BaseInput",
  props: {
    id: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    }
  },
  methods: {
    callback(event) {
      this.$emit("update:modelValue", event.target.value);
    }
  }
};
</script>
<template>
  <div>
    <label
      for="price"
      class="block text-sm font-medium leading-6 text-gray-900"
      v-if="label" :for="id"
      >{{ label }}</label
    >
    <div class="relative mt-2 rounded-md shadow-sm">
      <input
        type="text"
        class="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        :value="value"
        @input="callback"
      />
    </div>
  </div>
</template>
