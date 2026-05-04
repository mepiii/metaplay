// Search: reviews feature. Saves, loads, and deletes user reviews from localStorage.

const key = id => `mp_reviews_${id}`;

// Search: get reviews for one game.
export function getReviews(gameId) {
  return JSON.parse(localStorage.getItem(key(gameId)) || '[]');
}

// Search: save new user review.
export function saveReview(gameId, review) {
  const list = getReviews(gameId);
  list.unshift({ ...review, date: new Date().toISOString() });
  localStorage.setItem(key(gameId), JSON.stringify(list));
}

// Search: delete review by index.
export function deleteReview(gameId, index) {
  const list = getReviews(gameId);
  list.splice(index, 1);
  localStorage.setItem(key(gameId), JSON.stringify(list));
}

// Search: delete all reviews by username.
export function deleteReviewByUser(gameId, username, index) {
  const list = getReviews(gameId);
  // Search: check review owner before deleting.
  if (list[index] && list[index].user === username) {
    list.splice(index, 1);
    localStorage.setItem(key(gameId), JSON.stringify(list));
    return true;
  }
  return false;
}
