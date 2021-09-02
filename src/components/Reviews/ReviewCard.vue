<template>
  <div class="review-card rounded">
    <div class="content">
      <div>
        <div class="vote-container rounded" @click="countVote(review)">
          <div class="icon mdi mdi-chevron-up"></div>
          <div class="vote">{{ review.votes }}</div>
        </div>
      </div>
      <div>
        <div class="title">{{ review.title }}</div>
        <div class="description">{{ review.description }}</div>
      </div>
    </div>
    <div>
      <div class="comments-container">
        <div class="icon mdi mdi-message"></div>
        <div class="comment">{{ review.comments }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewCard",
  props: ["review"],
  methods: {
      countVote(review) {
          this.$store.commit("COUNT_VOTE", review)
      }
  }
};
</script>

<style>
.review-card {
  background-color: white;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
}
.title{
    font-weight: bold;
}
.description{
    color: grey;
}
.vote-container {
  width: 42px;
  height: 42px;
  padding: 4px;
  background-color: #f0f0fd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 0 30px 30px 0;
  cursor: pointer;
}
.vote-container .vote {
  font-size: 0.8rem;
}
.vote-container:active {
  transform: scale(0.95);
}

.comments-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.comments-container .icon {
  color: #f0f0fd;
  margin-right: 5px;
  font-size: 1.2rem;
}
.comments-container .comment {
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
