<template>
  <div class="relative">
    <n-page-header>
      <template #title>
        <div class="page-header-title-wrapper">
          <p>Directory</p>
          <h5>{{ appPath }}</h5>
        </div>
      </template>

      <template #extra>
        <n-space>
          <n-button @click="chooseDirectory" type="success" ghost
            >Choose Directory</n-button
          >
        </n-space>
      </template>
    </n-page-header>
    <div class="files-wrapper">
      <n-grid
        :x-gap="24"
        :y-gap="16"
        cols="2 s:3 m:4 l:5 xl:8 2xl:7"
        responsive="screen"
      >
        <n-grid-item
          class="file"
          v-for="(file, idx) in files"
          :key="'file-' + idx + '-' + file.name"
        >
          <n-icon v-if="file.icon !== undefined" color="#2080F0" size="40">
            <div v-html="file.icon"></div>
          </n-icon>
          <h4 class="file-name">{{ file.name }}</h4>
          <p v-if="file.size">{{ file.size }}</p>
          <p v-if="!file.size">N/A</p>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>

<script>
import {
  NGrid,
  NGridItem,
  NIcon,
  NPageHeader,
  NSpace,
  NButton,
} from "naive-ui";

import { files, appPath, chooseDirectory } from "@/composables/useFiles";

export default {
  components: {
    NGrid,
    NGridItem,
    NIcon,
    NPageHeader,
    NSpace,
    NButton,
  },
  setup() {
    return {
      files,
      appPath,
      chooseDirectory,
    };
  },
};
</script>

<style lang="scss" scoped>
.n-page-header-wrapper {
  margin-bottom: 2rem;
  position: sticky;
  top: 0rem;
  left: 0;
  width: 100%;
  background-color: var(--back-color);
  z-index: 10;
  padding: 1rem 0;

  .page-header-title-wrapper {
    p {
      color: #2080f0;
      font-size: 0.9rem;
    }
  }
}

.file {
  .file-name {
    word-wrap: break-word;
    margin-bottom: 8px;
  }

  p {
    font-weight: 500;
  }
}
</style>
