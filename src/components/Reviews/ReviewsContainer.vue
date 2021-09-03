<template>
  <section>
    <ReviewCard
      v-for="(review, index) in filteredReviews"
      :key="index"
      :review="review"
    />
  </section>
</template>

<script>
import ReviewCard from "./ReviewCard.vue";
import { mapGetters } from "vuex";
import ProductService from '../../services/product.service'

export default {
  name: "ReviewsContainer",
  components: {
    ReviewCard,
  },
  computed: {
    ...mapGetters(["sortByVote", "sortByCategory", "reviews"]),
    filteredReviews() {
      return ProductService.filterReviews(this.reviews, this.sortByVote, this.sortByCategory)
    },
  },
};
</script>

<style></style>
