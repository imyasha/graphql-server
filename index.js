const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  type Query {
    books: [Book]
    authors: [Author]
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: {name: 'Kate Chopin'},
  },
  {
    title: 'City of Glass',
    author: {name: 'Kate Chopin'},
  },
  {
    title: 'The Pig',
    author: {name: 'Paul Auster'},
  },
  {
    title: 'The Dog',
    author: {name: 'Paul Auster'},
  },
];

const authors = [
  {
    name: 'Kate Chopin',
    books: [
      {title: 'City of Glass'},
      {title: 'The Awakening'}
    ]
  },
  {
    name: 'Paul Auster',
    books: [
      {title: 'The Pig'},
      {title: 'The Dog'}
    ]
  }
]

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
