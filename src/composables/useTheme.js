import { darkTheme } from "naive-ui";
import { computed, ref } from "vue";

import { setLocalStorage } from "./useLocalStorage";

const themeKey = "organize-theme-dark-mode";

const isDarkModeSet = ref(false);

const theme = computed(() => (isDarkModeSet.value ? darkTheme : null));

const toggleTheme = () => {
  isDarkModeSet.value = !isDarkModeSet.value;
  setLocalStorage(themeKey, isDarkModeSet.value);
};

export { theme, toggleTheme, isDarkModeSet, themeKey };
