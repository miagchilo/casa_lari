import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clftsnukw30vf01upekmw13r4/master',
  documents: ['**/*.graphql'],
  generates: {
    './generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request']
    }
  }
};
export default config;
