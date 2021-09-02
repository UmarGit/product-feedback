<template>
  <main>
    <feedback-board />
    <div class="container">
      <app-bar />
      <reviews-container />
    </div>
  </main>
</template>

<script>
import FeedbackBoard from "./components/FeedbackBoard.vue";
import AppBar from "./components/AppBar.vue";
import ReviewsContainer from "./components/Reviews/ReviewsContainer.vue";

export default {
  name: "App",
  components: {
    FeedbackBoard,
    AppBar,
    ReviewsContainer,
  },
  created() {
    this.$store.commit("GET_REVIEWS")
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
body {
  background-color: #f8f8fd;
  font-family: 'Poppins', sans-serif;
}
main {
  max-width: 1200px;
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.container {
  flex: 1;
  margin: 10px;
}
.rounded {
  border-radius: 10px;
}
</style>
