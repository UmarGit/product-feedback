import Reviews from './Reviews'

const reviews = new Reviews();

export default {
    getReviews() {
        return reviews.getReviews();
    },
    saveReviews(reviews) {
        localStorage.setItem("reviews", JSON.stringify(reviews))
    },
    filterReviews(reviews, sortByVote, sortByCategory) {
        let votesFilter = reviews.slice(0).sort((a, b) => {
            return sortByVote === "Most Upvotes"
                ? b.votes - a.votes
                : a.votes - b.votes
        })

        let categoryFilter = votesFilter.filter(
            (review) => review.category === sortByCategory
        )

        return categoryFilter
    }
}