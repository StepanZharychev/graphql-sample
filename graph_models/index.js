import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import {Impression, Impressions} from './impression/queries'
import {AddImpression, UpdateImpression, DeleteImpression} from './impression/mutations'

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        impression: Impression,
        impressions: Impressions
    }
});
const Mutations = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        impressionAdd: AddImpression,
        impressionUpdate: UpdateImpression,
        impressionDelete: DeleteImpression
    }
});

export default new GraphQLSchema({
    query: Query,
    mutation: Mutations
});