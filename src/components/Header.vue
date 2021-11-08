<template>
  <header class="container">
    <div @click="$router.push('/')" class="brand">
      <h3>Organize</h3>
    </div>

    <nav>
      <ul>
        <li>
          <n-button
            @click="$router.push('/settings')"
            text-color="white"
            color="#2080F0"
            icon-placement="right"
          >
            <template #icon>
              <n-icon color="white">
                <settings-outline />
              </n-icon>
            </template>
            Settings
          </n-button>
        </li>
        <li>
          <n-button
            text
            @click="toggleTheme"
            type="info"
            icon-placement="right"
          >
            <template #icon>
              <n-icon>
                <moon v-if="!theme" />
                <sunny v-if="theme" />
              </n-icon>
            </template>

            {{ theme ? "Light" : "Dark" }}
          </n-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { NButton, NIcon } from "naive-ui";
import { SettingsOutline, Sunny, Moon } from "@vicons/ionicons5";
import { theme, toggleTheme } from "@/composables/useTheme.js";

export default {
  components: {
    NButton,
    NIcon,
    SettingsOutline,
    Sunny,
    Moon,
  },
  setup() {
    return {
      theme,
      toggleTheme,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 4rem;
  background-color: var(--n-background-secondary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);

  .brand {
    font-size: 1.2rem;
    cursor: pointer;
  }

  nav {
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;

      li {
        margin: 0 12px;
      }
    }
  }
}
</style>
