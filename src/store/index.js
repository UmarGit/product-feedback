import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sortByVote: "Most Upvotes",
    sortByCategory: "frontend",
    reviews: [
      {
        id: 0,
        title: "Some Title 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        votes: 100,
        comments: 1,
        category: "frontend",
      },
      {
        id: 1,
        title: "Some Title 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        votes: 102,
        comments: 1,
        category: "frontend",
      },
      {
        id: 2,
        title: "Some Title 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        votes: 109,
        comments: 1,
        category: "frontend",
      },
      {
        id: 3,
        title: "Some Title 4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        votes: 10,
        comments: 0,
        category: "backend",
      },
      {
        id: 4,
        title: "Some Title 5",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        votes: 50,
        comments: 2,
        category: "backend",
      },
    ]
  },
  mutations: {
    SORT_CARDS_BY_VOTES(state, payload) {
      state.sortByVote = payload
    },
    SORT_CARDS_BY_CATEGORIES(state, payload) {
      state.sortByCategory = payload
    },
    GET_REVIEWS(state) {
      let savedReviews = JSON.parse(localStorage.getItem("reviews"));
      if (savedReviews) {
        state.reviews = savedReviews
      }
    },
    COUNT_VOTE(state, payload) {
      let review = state.reviews.filter(review => review.id === payload.id)[0]
      review.votes = review.votes + 1
      localStorage.setItem("reviews", JSON.stringify(state.reviews))
    }
  },
  getters: {
    sortByVote(state) {
      return state.sortByVote
    },
    sortByCategory(state) {
      return state.sortByCategory
    },
    reviews(state) {
      return state.reviews
    }
  }
})
