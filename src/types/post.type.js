export default `
  type Post {
    id: ID
    title: String
    user: User
    content: String
    comments: [Comment]
  }
`;