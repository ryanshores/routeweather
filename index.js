const { ApolloServer, gql } = require('apollo-server');

const routes = [
	{
		start: 'Houston',
		destination: 'Dallas',
		route: 'I-45',
		precip: '0.45',
	},
	{
		start: 'Houston',
		destination: 'Austin',
		route: '290',
		precip: '0.23',
	}
];

const typeDefs = gql`
type Route {
	start: String
	destination: String
	route: String
	precip: String
}

type Query {
	routes: [Route]
}
`;

const resolvers = {
	Query: {
		routes: () => routes,
	}
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
})