export default {

  diary(collectionApi) {
    return collectionApi
      .getFilteredByGlob("./src/routes/diary/*.md")
      .sort((a, b) => a.date - b.date)
  },

  writings(collectionApi) {
    return collectionApi
      .getFilteredByGlob("./src/routes/writings/*.md")
  }

}