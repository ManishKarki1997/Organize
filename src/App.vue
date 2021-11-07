<template>
  <n-config-provider abstract :theme="theme">
    <n-message-provider>
      <router-view />
      <n-global-style />
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import { NConfigProvider, NGlobalStyle, NMessageProvider } from "naive-ui";

import { theme } from "@/composables/useTheme.js";

export default {
  name: "App",
  components: {
    NConfigProvider,
    NGlobalStyle,
    NMessageProvider,
  },
  setup() {
    return {
      theme,
    };
  },
};
</script>

<style scoped></style>
