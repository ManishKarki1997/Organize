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
main {
  grid-area: main;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
