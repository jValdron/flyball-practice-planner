import { graphql } from './generated/gql';

export const GetSets = graphql(`
  query GetSets($practiceId: String!) {
    sets(practiceId: $practiceId) {
      id
      index
      type
      typeCustom
      notes
      locationId
      dogs {
        dogId
        index
        lane
      }
    }
  }
`);

export const DeleteSets = graphql(`
  mutation DeleteSets($ids: [String!]!) {
    deleteSets(ids: $ids)
  }
`);

export const UpdateSets = graphql(`
  mutation UpdateSets($updates: [SetUpdate!]!) {
    updateSets(updates: $updates) {
      id
      index
      type
      typeCustom
      notes
      locationId
      dogs {
        dogId
        index
        lane
      }
    }
  }
`);
