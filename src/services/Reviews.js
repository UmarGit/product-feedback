import data from "./data.json";

class Reviews {
  reviews;

  getReviews() {
    let savedReviews = JSON.parse(localStorage.getItem("reviews"));

    if (savedReviews) {
      return savedReviews;
    } else {
      return this.reviews;
    }
  }

  setReviews(value) {
    this.reviews = value;
  }

  constructor() {
    this.setReviews(data);
  }
}

export default Reviews;
