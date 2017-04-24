const { makeExecutableSchema, addErrorLoggingToSchema } = require('graphql-tools');
const typeDefs = [`
  type Hello {
    id: ID,
    content: String,
  }

  type Query {
    hello: Hello
  }

  schema {
    query: Query
  }
`];

const resolvers = {
  Hello: {
  	content(root, args, context) {
  		return root.content;
  	}
  },
  Query: {
    async hello(root, args, context) {
      //await new Promise(resolve => {setTimeout(resolve, 1000)});
      return {
        id: 'zxcvbn',
        content: 'Hello world!'
      };
    }
  }
};

const jsSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const logger = { log: (e) => console.error(e.stack) };
addErrorLoggingToSchema(jsSchema, logger);
module.exports = jsSchema;
