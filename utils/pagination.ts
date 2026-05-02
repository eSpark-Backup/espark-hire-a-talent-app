export const paginate = (array, currentPage, postsPerPage) => {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = array?.slice(indexOfFirstPost, indexOfLastPost);
  return currentPosts;
};

export const calculateTotalPages = (array, postsPerPage) => {
  return Math.ceil(array?.length / postsPerPage);
};
