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

export default {
  name: "ReviewsContainer",
  components: {
    ReviewCard,
  },
  computed: {
    ...mapGetters(["sortByVote", "sortByCategory", "reviews"]),
    filteredReviews() {
      let votesFilter = this.reviews.slice(0).sort((a, b) => {
        return this.sortByVote === "Most Upvotes"
          ? b.votes - a.votes
          : a.votes - b.votes;
      });

      let categoryFilter = votesFilter.filter(
        (review) => review.category === this.sortByCategory
      );

      return categoryFilter;
    },
  },
};
</script>

<style></style>
