<template>
  <n-config-provider namespace="theme" :theme="theme">
    <Header />
    <router-view />
    <n-global-style />
  </n-config-provider>
</template>

<script>
import { NConfigProvider, NGlobalStyle } from "naive-ui";

import Header from "@/components/Header.vue";
import { theme } from "@/composables/useTheme.js";

export default {
  name: "App",
  components: {
    NConfigProvider,
    NGlobalStyle,
    Header,
  },
  setup() {
    return {
      theme,
    };
  },
};
</script>

<style scoped></style>
