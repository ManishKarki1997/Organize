<template>
  <footer>
    <n-button text-color="#2080F0" color="white" icon-placement="right">
      <template #icon>
        <n-icon color="#2080F0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
          >
            <path d="M26 20h-6v-2h6z" fill="currentColor"></path>
            <path d="M30 28h-6v-2h6z" fill="currentColor"></path>
            <path d="M28 24h-6v-2h6z" fill="currentColor"></path>
            <path
              d="M17.003 20a4.895 4.895 0 0 0-2.404-4.173L22 3l-1.73-1l-7.577 13.126a5.699 5.699 0 0 0-5.243 1.503C3.706 20.24 3.996 28.682 4.01 29.04a1 1 0 0 0 1 .96h14.991a1 1 0 0 0 .6-1.8c-3.54-2.656-3.598-8.146-3.598-8.2zm-5.073-3.003A3.11 3.11 0 0 1 15.004 20c0 .038.002.208.017.469l-5.9-2.624a3.8 3.8 0 0 1 2.809-.848zM15.45 28A5.2 5.2 0 0 1 14 25h-2a6.5 6.5 0 0 0 .968 3h-2.223A16.617 16.617 0 0 1 10 24H8a17.342 17.342 0 0 0 .665 4H6c.031-1.836.29-5.892 1.803-8.553l7.533 3.35A13.025 13.025 0 0 0 17.596 28z"
              fill="currentColor"
            ></path>
          </svg>
        </n-icon>
      </template>
      Organize
    </n-button>
  </footer>
</template>

<script>
import { NButton, NIcon } from "naive-ui";
export default {
  components: {
    NButton,
    NIcon,
  },
};
</script>

<style lang="scss" scoped>
footer {
  grid-area: footer;
  width: 100%;
  max-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  background-color: #2080f0;
  /* color: white; */
}
</style>
