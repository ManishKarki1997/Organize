<template>
  <n-config-provider namespace="theme" :theme="theme">
    <n-theme-editor>
      <div class="view">
        <button @click="toggleTheme">Toggle Theme</button>
        <router-view />
      </div>
    </n-theme-editor>
    <n-global-style />
  </n-config-provider>
</template>

<script>
import { NConfigProvider, NGlobalStyle, NThemeEditor } from "naive-ui";
import { onMounted } from "vue";
import { getLocalStorage } from "@/composables/useLocalStorage.js";
import {
  theme,
  toggleTheme,
  isDarkModeSet,
  themeKey,
} from "@/composables/useTheme.js";

export default {
  name: "App",
  components: {
    NConfigProvider,
    NGlobalStyle,
    NThemeEditor,
  },
  setup() {
    onMounted(() => {
      const savedTheme = getLocalStorage(themeKey);
      if (savedTheme !== undefined || savedTheme !== null) {
        isDarkModeSet.value = savedTheme === "true";
      }
    });

    return {
      theme,
      toggleTheme,
    };
  },
};
</script>

<style scoped>
.view {
  min-height: 100vh;
  width: 100vw;
  background-color: var(--n-background-primary);
}
</style>
