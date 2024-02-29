
<script setup>
import { useLayoutStore } from "@/stores/layouts";
import { RouterView } from "vue-router";
import Sidebar from "@/components/layouts/Sidebar.vue";
import Navbar from "@/components/layouts/Navbar.vue";
import Footer from "@/components/layouts/Footer.vue";

const layout = useLayoutStore();
layout.$patch({ sidebar: layout.sidebar })
layout.sidebar;
</script>

<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">
      <Sidebar />
      <div
        class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen"
        :class="layout.sidebar ? 'overlay' : ''"
        id="main-content"
      >
        <Navbar />
        <div class="p-6 bg-gray-100 mb-20">
          <router-view />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>
