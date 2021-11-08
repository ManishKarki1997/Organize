<template>
  <n-config-provider abstract :theme="theme">
    <n-message-provider>
      <router-view />
      <n-global-style />
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import { onMounted } from "vue";
import { NConfigProvider, NGlobalStyle, NMessageProvider } from "naive-ui";

import { theme } from "@/composables/useTheme.js";
import { settings, saveSettings } from "@/composables/useSettings.js";
import constants from "@/data/constants.js";
import { getLocalStorage } from "@/composables/useLocalStorage.js";

export default {
  name: "App",
  components: {
    NConfigProvider,
    NGlobalStyle,
    NMessageProvider,
  },
  setup() {
    onMounted(() => {
      const savedSettings = JSON.parse(
        getLocalStorage(constants.APP_LOCAL_STORAGE_KEY_NAME)
      );

      // first time load
      if (!savedSettings) {
        const payload = {
          isFirstLoad: false,
          ...JSON.parse(JSON.stringify(settings.value)),
        };

        saveSettings(JSON.stringify(payload));
        return;
      }

      // not first time application load, so if there's settings saved in local storage
      // load them
      if (savedSettings && !savedSettings.isFirstLoad) {
        settings.value = savedSettings;
      }
    });

    return {
      theme,
    };
  },
};
</script>

<style scoped></style>
