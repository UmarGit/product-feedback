import Vue from 'vue'
import Vuex from 'vuex'
import ProductService from '../services/product.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sortByVote: "Most Upvotes",
    sortByCategory: "frontend",
    reviews: ProductService.getReviews()
  },
  mutations: {
    SORT_CARDS_BY_VOTES(state, payload) {
      state.sortByVote = payload
    },
    SORT_CARDS_BY_CATEGORIES(state, payload) {
      state.sortByCategory = payload
    },
    GET_REVIEWS(state) {
      state.reviews = ProductService.getReviews()
    },
    COUNT_VOTE(state, payload) {
      let review = state.reviews.filter(review => review.id === payload.id)[0]
      review.votes = review.votes + 1
      ProductService.saveReviews(state.reviews)
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
