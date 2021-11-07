<template>
  <n-config-provider abstract :theme="theme">
    <router-view />
    <n-global-style />
  </n-config-provider>
</template>

<script>
import { NConfigProvider, NGlobalStyle } from "naive-ui";

import { theme } from "@/composables/useTheme.js";

export default {
  name: "App",
  components: {
    NConfigProvider,
    NGlobalStyle,
  },
  setup() {
    return {
      theme,
    };
  },
};
</script>

<style scoped></style>
