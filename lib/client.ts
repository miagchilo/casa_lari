import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../generated/graphql';

const ENDPOINT = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clftsnukw30vf01upekmw13r4/master';
const graphQLClient = new GraphQLClient(ENDPOINT);

export const sdk = getSdk(graphQLClient);
