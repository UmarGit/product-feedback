<template>
  <div class="feedback-board rounded">
    <p class="caption">FeedBack Board</p>
  </div>
</template>

<script>
export default {
    name: "FeedbackBoard"
}
</script>

<style>
.feedback-board {
    padding: 20px;
    background: linear-gradient(120deg, rgba(112,175,248,1) 0%, rgba(161,67,235,1) 47%, rgba(235,159,137,1) 82%);
    color: white;
    width: 240px;
    height: 100px;
    margin: 10px;
    display: flex;
    align-items: flex-end;
}
.caption{
    font-size: 0.9rem;
    margin: 0;
}
</style>