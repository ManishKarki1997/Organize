import { darkTheme } from "naive-ui";
import { computed } from "vue";

import { settings, saveSettings } from "@/composables/useSettings";

const themeKey = "organize-theme-dark-mode";

const theme = computed(() =>
  settings.value.isThemeDarkMode ? darkTheme : null
);

const toggleTheme = () => {
  settings.value.isThemeDarkMode = !settings.value.isThemeDarkMode;

  const payload = JSON.stringify({
    ...JSON.parse(JSON.stringify(settings.value)),
    isThemeDarkMode: settings.value.isThemeDarkMode,
  });

  saveSettings(payload);
};

export { theme, toggleTheme, themeKey };
