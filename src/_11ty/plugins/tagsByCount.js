export default function tagsByCount(collectionApi) {
  const tagCounts = {};

  collectionApi.getAll().forEach(item => {
    const tags = item.data.tags || [];
    tags.forEach(tag => {
      if (!["all", "nav", "post", "posts"].includes(tag)) {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      }
    });
  });

  return Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1]); 
}
