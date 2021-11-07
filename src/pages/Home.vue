<template>
  <div class="home">
    <Header />
    <main class="container">
      <FilesViewer />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import FilesViewer from "@/components/FilesViewer.vue";

export default {
  components: {
    Header,
    Footer,
    FilesViewer,
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  height: calc(100vh - 7rem); // header - 4rem and footer - 3rem
  overflow: auto;
  position: relative;
}
</style>
