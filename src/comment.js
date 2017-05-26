class Comment {
  constructor(commentText) {
    this.commentText = 'hey, heres some default text'
  }

  render(commentText) {
    return `<li>${commentText}</li>`
  }
}
