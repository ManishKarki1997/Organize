<template>
  <div class="home">
    <Header />
    <main class="container">
      <h4>Home</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum libero
        adipisci dolores expedita in iure sunt ullam id blanditiis facilis.
      </p>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
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
