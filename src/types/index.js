import Post from './post.type';
import Comment from './comment.type';
import User from './user.type';

const root = `
  type Query {
    posts: [Post]
    post(id: ID): Post
  }

  type Mutation {
    createPost(title: String, content:String, userId: ID): Post
    commentPost(description: String, postId: ID, userId: ID): Comment
  }
`

const SchemaDefinition = `schema {
  query: Query
  mutation: Mutation
}`;

export default [
  SchemaDefinition,
  root,
  Post,
  Comment,
  User
]
