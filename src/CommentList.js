class commentList {
  constructor(commentArray) {
    this.commentArray = []
  }

  render(commentArray) {
    commentArray.map(function(comment) {
      `<ul>${comment}</ul>`
    })
  }

  addComment(str) {
    render().call(str)
  }
}
