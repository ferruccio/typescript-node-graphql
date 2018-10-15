import express from 'express';
import express_graphql from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        message: String!
    }
`);

const root = {
    message: () => 'hello world!',
};

const app = express();
app.use('/graphql', express_graphql({
    graphiql: true,
    rootValue: root,
    schema,
}));
app.listen(4000, () => console.log('running On localhost:4000/graphql'));
