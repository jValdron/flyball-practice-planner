/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
};

/** The attendance status of a dog for a practice */
export enum AttendanceStatus {
  Attending = 'Attending',
  NotAttending = 'NotAttending',
  Unknown = 'Unknown'
}

export type AttendanceUpdate = {
  attending: AttendanceStatus;
  dogId: Scalars['ID']['input'];
};

export type Club = {
  __typename?: 'Club';
  createdAt: Scalars['DateTimeISO']['output'];
  /** Default practice time in 24-hour format (HH:mm) */
  defaultPracticeTime: Scalars['String']['output'];
  dogs: Array<Dog>;
  id: Scalars['ID']['output'];
  locations: Array<Location>;
  nafaClubNumber: Scalars['String']['output'];
  name: Scalars['String']['output'];
  practices: Array<Practice>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type Dog = {
  __typename?: 'Dog';
  club: Club;
  clubId: Scalars['ID']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  crn?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  owner: Handler;
  ownerId: Scalars['ID']['output'];
  status: DogStatus;
  trainingLevel: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

/** The status of a dog */
export enum DogStatus {
  Active = 'Active',
  Inactive = 'Inactive'
}

export type Handler = {
  __typename?: 'Handler';
  club: Club;
  clubId: Scalars['ID']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  dogs: Array<Dog>;
  givenName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  surname: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

/** The lane that the set is being performed in */
export enum Lane {
  Left = 'Left',
  Right = 'Right'
}

export type Location = {
  __typename?: 'Location';
  club: Club;
  clubId: Scalars['ID']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  isDoubleLane: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createClub: Club;
  createDog: Dog;
  createHandler: Handler;
  createLocation: Location;
  createPractice: Practice;
  deleteClub: Scalars['Boolean']['output'];
  deleteDog: Scalars['Boolean']['output'];
  deleteHandler: Scalars['Boolean']['output'];
  deleteLocation: Scalars['Boolean']['output'];
  deletePractice: Scalars['Boolean']['output'];
  deleteSet: Scalars['Boolean']['output'];
  updateAttendances: Array<PracticeAttendance>;
  updateClub?: Maybe<Club>;
  updateDog?: Maybe<Dog>;
  updateHandler?: Maybe<Handler>;
  updateLocation?: Maybe<Location>;
  updatePractice?: Maybe<Practice>;
  updateSet: Set;
};


export type MutationCreateClubArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateDogArgs = {
  clubId: Scalars['String']['input'];
  crn?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ownerId: Scalars['String']['input'];
  status: DogStatus;
  trainingLevel: Scalars['Float']['input'];
};


export type MutationCreateHandlerArgs = {
  clubId: Scalars['ID']['input'];
  givenName: Scalars['String']['input'];
  surname: Scalars['String']['input'];
};


export type MutationCreateLocationArgs = {
  clubId: Scalars['ID']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  isDoubleLane?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};


export type MutationCreatePracticeArgs = {
  clubId: Scalars['String']['input'];
  scheduledAt: Scalars['DateTimeISO']['input'];
  status: PracticeStatus;
};


export type MutationDeleteClubArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteDogArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteHandlerArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteLocationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePracticeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSetArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateAttendancesArgs = {
  practiceId: Scalars['String']['input'];
  updates: Array<AttendanceUpdate>;
};


export type MutationUpdateClubArgs = {
  defaultPracticeTime?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  nafaClubNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDogArgs = {
  clubId?: InputMaybe<Scalars['String']['input']>;
  crn?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DogStatus>;
  trainingLevel?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateHandlerArgs = {
  givenName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  surname?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateLocationArgs = {
  id: Scalars['String']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  isDoubleLane?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdatePracticeArgs = {
  clubId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  scheduledAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  status?: InputMaybe<PracticeStatus>;
};


export type MutationUpdateSetArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  update: SetUpdate;
};

export type Practice = {
  __typename?: 'Practice';
  attendances: Array<PracticeAttendance>;
  club: Club;
  clubId: Scalars['ID']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  scheduledAt: Scalars['DateTimeISO']['output'];
  sets: Array<Set>;
  status: PracticeStatus;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type PracticeAttendance = {
  __typename?: 'PracticeAttendance';
  attending: AttendanceStatus;
  createdAt: Scalars['DateTimeISO']['output'];
  dog: Dog;
  dogId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  practice: Practice;
  practiceId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

/** The status of a practice */
export enum PracticeStatus {
  Draft = 'Draft',
  Ready = 'Ready'
}

export type Query = {
  __typename?: 'Query';
  activeDogsInClub: Scalars['Int']['output'];
  club?: Maybe<Club>;
  clubs: Array<Club>;
  dog?: Maybe<Dog>;
  dogs: Array<Dog>;
  dogsByHandlersInClub?: Maybe<Array<Handler>>;
  handler?: Maybe<Handler>;
  handlers: Array<Handler>;
  location?: Maybe<Location>;
  locations: Array<Location>;
  locationsByClub: Array<Location>;
  practice?: Maybe<Practice>;
  practiceAttendances: Array<PracticeAttendance>;
  practices: Array<Practice>;
  practicesByClub: Array<Practice>;
  set?: Maybe<Set>;
  sets: Array<Set>;
};


export type QueryActiveDogsInClubArgs = {
  clubId: Scalars['ID']['input'];
};


export type QueryClubArgs = {
  id: Scalars['String']['input'];
};


export type QueryDogArgs = {
  id: Scalars['String']['input'];
};


export type QueryDogsByHandlersInClubArgs = {
  clubId: Scalars['ID']['input'];
};


export type QueryHandlerArgs = {
  id: Scalars['String']['input'];
};


export type QueryLocationArgs = {
  id: Scalars['String']['input'];
};


export type QueryLocationsByClubArgs = {
  clubId: Scalars['ID']['input'];
};


export type QueryPracticeArgs = {
  id: Scalars['String']['input'];
};


export type QueryPracticeAttendancesArgs = {
  practiceId: Scalars['String']['input'];
};


export type QueryPracticesByClubArgs = {
  clubId: Scalars['String']['input'];
};


export type QuerySetArgs = {
  id: Scalars['String']['input'];
};


export type QuerySetsArgs = {
  locationId: Scalars['String']['input'];
  practiceId: Scalars['String']['input'];
};

export type Set = {
  __typename?: 'Set';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  index: Scalars['Float']['output'];
  location: Location;
  locationId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  practice: Practice;
  practiceId: Scalars['ID']['output'];
  setDogs: Array<SetDog>;
  type: SetType;
  typeCustom?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type SetDog = {
  __typename?: 'SetDog';
  createdAt: Scalars['DateTimeISO']['output'];
  dog: Dog;
  dogId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  index: Scalars['Float']['output'];
  lane: Lane;
  set: Set;
  setId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type SetDogUpdate = {
  dogId: Scalars['ID']['input'];
  index: Scalars['Float']['input'];
  lane: Lane;
};

/** The type of set being performed */
export enum SetType {
  AroundTheWorld = 'AroundTheWorld',
  BoxWork = 'BoxWork',
  Custom = 'Custom',
  FullRuns = 'FullRuns',
  PowerJumping = 'PowerJumping',
  Restraints = 'Restraints',
  ReverseSnapoffs = 'ReverseSnapoffs',
  Snapoffs = 'Snapoffs',
  TwoJumpsFlyball = 'TwoJumpsFlyball'
}

export type SetUpdate = {
  dogs: Array<SetDogUpdate>;
  index: Scalars['Float']['input'];
  locationId: Scalars['ID']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  practiceId: Scalars['ID']['input'];
  type: SetType;
  typeCustom?: InputMaybe<Scalars['String']['input']>;
};

export type GetPracticeAttendancesQueryVariables = Exact<{
  practiceId: Scalars['String']['input'];
}>;


export type GetPracticeAttendancesQuery = { __typename?: 'Query', practiceAttendances: Array<{ __typename?: 'PracticeAttendance', id: string, dogId: string, attending: AttendanceStatus, dog: { __typename?: 'Dog', id: string, name: string, ownerId: string } }> };

export type UpdateAttendancesMutationVariables = Exact<{
  practiceId: Scalars['String']['input'];
  updates: Array<AttendanceUpdate> | AttendanceUpdate;
}>;


export type UpdateAttendancesMutation = { __typename?: 'Mutation', updateAttendances: Array<{ __typename?: 'PracticeAttendance', id: string, dogId: string, attending: AttendanceStatus }> };

export type GetClubsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClubsQuery = { __typename?: 'Query', clubs: Array<{ __typename?: 'Club', id: string, name: string, nafaClubNumber: string, defaultPracticeTime: string }> };

export type GetClubByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetClubByIdQuery = { __typename?: 'Query', club?: { __typename?: 'Club', id: string, name: string, nafaClubNumber: string, defaultPracticeTime: string } | null };

export type GetLocationByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetLocationByIdQuery = { __typename?: 'Query', location?: { __typename?: 'Location', id: string, name: string, isDefault: boolean, isDoubleLane: boolean, createdAt: any, updatedAt: any } | null };

export type GetLocationsByClubQueryVariables = Exact<{
  clubId: Scalars['ID']['input'];
}>;


export type GetLocationsByClubQuery = { __typename?: 'Query', locationsByClub: Array<{ __typename?: 'Location', id: string, name: string, isDefault: boolean, isDoubleLane: boolean }> };

export type CreateLocationMutationVariables = Exact<{
  clubId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  isDefault: Scalars['Boolean']['input'];
  isDoubleLane: Scalars['Boolean']['input'];
}>;


export type CreateLocationMutation = { __typename?: 'Mutation', createLocation: { __typename?: 'Location', id: string, name: string, isDefault: boolean, isDoubleLane: boolean, createdAt: any, updatedAt: any } };

export type UpdateLocationMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  isDoubleLane?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateLocationMutation = { __typename?: 'Mutation', updateLocation?: { __typename?: 'Location', id: string, name: string, isDefault: boolean, isDoubleLane: boolean, updatedAt: any } | null };

export type DeleteLocationMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteLocationMutation = { __typename?: 'Mutation', deleteLocation: boolean };

export type UpdateClubMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  nafaClubNumber?: InputMaybe<Scalars['String']['input']>;
  defaultPracticeTime?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateClubMutation = { __typename?: 'Mutation', updateClub?: { __typename?: 'Club', id: string, name: string, nafaClubNumber: string, defaultPracticeTime: string, updatedAt: any } | null };

export type GetDogsByHandlersInClubQueryVariables = Exact<{
  clubId: Scalars['ID']['input'];
}>;


export type GetDogsByHandlersInClubQuery = { __typename?: 'Query', dogsByHandlersInClub?: Array<{ __typename?: 'Handler', id: string, givenName: string, surname: string, dogs: Array<{ __typename?: 'Dog', id: string, name: string, crn?: string | null, status: DogStatus, trainingLevel: number }> }> | null };

export type GetDogByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetDogByIdQuery = { __typename?: 'Query', dog?: { __typename?: 'Dog', id: string, name: string, crn?: string | null, status: DogStatus, trainingLevel: number, ownerId: string, updatedAt: any, createdAt: any } | null };

export type GetActiveDogsInClubQueryVariables = Exact<{
  clubId: Scalars['ID']['input'];
}>;


export type GetActiveDogsInClubQuery = { __typename?: 'Query', activeDogsInClub: number };

export type DeleteDogMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteDogMutation = { __typename?: 'Mutation', deleteDog: boolean };

export type CreateDogMutationVariables = Exact<{
  name: Scalars['String']['input'];
  ownerId: Scalars['String']['input'];
  clubId: Scalars['String']['input'];
  trainingLevel: Scalars['Float']['input'];
  status: DogStatus;
  crn?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateDogMutation = { __typename?: 'Mutation', createDog: { __typename?: 'Dog', id: string, name: string, crn?: string | null, status: DogStatus, trainingLevel: number, ownerId: string } };

export type UpdateDogMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  clubId?: InputMaybe<Scalars['String']['input']>;
  trainingLevel?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<DogStatus>;
  crn?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateDogMutation = { __typename?: 'Mutation', updateDog?: { __typename?: 'Dog', id: string, name: string, crn?: string | null, status: DogStatus, trainingLevel: number, ownerId: string } | null };

export type GetHandlerByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetHandlerByIdQuery = { __typename?: 'Query', handler?: { __typename?: 'Handler', id: string, givenName: string, surname: string, createdAt: any, updatedAt: any } | null };

export type CreateHandlerMutationVariables = Exact<{
  givenName: Scalars['String']['input'];
  surname: Scalars['String']['input'];
  clubId: Scalars['ID']['input'];
}>;


export type CreateHandlerMutation = { __typename?: 'Mutation', createHandler: { __typename?: 'Handler', id: string, givenName: string, surname: string } };

export type UpdateHandlerMutationVariables = Exact<{
  id: Scalars['String']['input'];
  givenName?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateHandlerMutation = { __typename?: 'Mutation', updateHandler?: { __typename?: 'Handler', id: string, givenName: string, surname: string } | null };

export type DeleteHandlerMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteHandlerMutation = { __typename?: 'Mutation', deleteHandler: boolean };

export type GetPracticesByClubQueryVariables = Exact<{
  clubId: Scalars['String']['input'];
}>;


export type GetPracticesByClubQuery = { __typename?: 'Query', practicesByClub: Array<{ __typename?: 'Practice', id: string, scheduledAt: any, status: PracticeStatus, attendances: Array<{ __typename?: 'PracticeAttendance', id: string, attending: AttendanceStatus }>, sets: Array<{ __typename?: 'Set', id: string }> }> };

export type GetPracticeQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetPracticeQuery = { __typename?: 'Query', practice?: { __typename?: 'Practice', id: string, scheduledAt: any, status: PracticeStatus, clubId: string } | null };

export type CreatePracticeMutationVariables = Exact<{
  clubId: Scalars['String']['input'];
  scheduledAt: Scalars['DateTimeISO']['input'];
  status: PracticeStatus;
}>;


export type CreatePracticeMutation = { __typename?: 'Mutation', createPractice: { __typename?: 'Practice', id: string, scheduledAt: any, status: PracticeStatus, clubId: string } };

export type UpdatePracticeMutationVariables = Exact<{
  id: Scalars['String']['input'];
  clubId?: InputMaybe<Scalars['String']['input']>;
  scheduledAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  status?: InputMaybe<PracticeStatus>;
}>;


export type UpdatePracticeMutation = { __typename?: 'Mutation', updatePractice?: { __typename?: 'Practice', id: string, scheduledAt: any, status: PracticeStatus, clubId: string } | null };

export type DeletePracticeMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeletePracticeMutation = { __typename?: 'Mutation', deletePractice: boolean };

export type GetSetsQueryVariables = Exact<{
  practiceId: Scalars['String']['input'];
  locationId: Scalars['String']['input'];
}>;


export type GetSetsQuery = { __typename?: 'Query', sets: Array<{ __typename?: 'Set', id: string, index: number, type: SetType, typeCustom?: string | null, notes?: string | null, locationId: string, setDogs: Array<{ __typename?: 'SetDog', dogId: string, index: number, lane: Lane }> }> };

export type UpdateSetMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  update: SetUpdate;
}>;


export type UpdateSetMutation = { __typename?: 'Mutation', updateSet: { __typename?: 'Set', id: string, index: number, type: SetType, typeCustom?: string | null, notes?: string | null, locationId: string, setDogs: Array<{ __typename?: 'SetDog', dogId: string, index: number, lane: Lane }> } };

export type DeleteSetMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteSetMutation = { __typename?: 'Mutation', deleteSet: boolean };


export const GetPracticeAttendancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPracticeAttendances"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"practiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"practiceAttendances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"practiceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"practiceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dogId"}},{"kind":"Field","name":{"kind":"Name","value":"attending"}},{"kind":"Field","name":{"kind":"Name","value":"dog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}}]}}]}}]}}]} as unknown as DocumentNode<GetPracticeAttendancesQuery, GetPracticeAttendancesQueryVariables>;
export const UpdateAttendancesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAttendances"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"practiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updates"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AttendanceUpdate"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAttendances"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"practiceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"practiceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dogId"}},{"kind":"Field","name":{"kind":"Name","value":"attending"}}]}}]}}]} as unknown as DocumentNode<UpdateAttendancesMutation, UpdateAttendancesMutationVariables>;
export const GetClubsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nafaClubNumber"}},{"kind":"Field","name":{"kind":"Name","value":"defaultPracticeTime"}}]}}]}}]} as unknown as DocumentNode<GetClubsQuery, GetClubsQueryVariables>;
export const GetClubByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetClubById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"club"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nafaClubNumber"}},{"kind":"Field","name":{"kind":"Name","value":"defaultPracticeTime"}}]}}]}}]} as unknown as DocumentNode<GetClubByIdQuery, GetClubByIdQueryVariables>;
export const GetLocationByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLocationById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"isDoubleLane"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetLocationByIdQuery, GetLocationByIdQueryVariables>;
export const GetLocationsByClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLocationsByClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locationsByClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"clubId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"isDoubleLane"}}]}}]}}]} as unknown as DocumentNode<GetLocationsByClubQuery, GetLocationsByClubQueryVariables>;
export const CreateLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isDefault"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isDoubleLane"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"clubId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"isDefault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isDefault"}}},{"kind":"Argument","name":{"kind":"Name","value":"isDoubleLane"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isDoubleLane"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"isDoubleLane"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateLocationMutation, CreateLocationMutationVariables>;
export const UpdateLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isDefault"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isDoubleLane"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"isDefault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isDefault"}}},{"kind":"Argument","name":{"kind":"Name","value":"isDoubleLane"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isDoubleLane"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"isDoubleLane"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateLocationMutation, UpdateLocationMutationVariables>;
export const DeleteLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteLocationMutation, DeleteLocationMutationVariables>;
export const UpdateClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nafaClubNumber"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultPracticeTime"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"nafaClubNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nafaClubNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"defaultPracticeTime"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultPracticeTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nafaClubNumber"}},{"kind":"Field","name":{"kind":"Name","value":"defaultPracticeTime"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateClubMutation, UpdateClubMutationVariables>;
export const GetDogsByHandlersInClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDogsByHandlersInClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dogsByHandlersInClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"clubId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"dogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"crn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"trainingLevel"}}]}}]}}]}}]} as unknown as DocumentNode<GetDogsByHandlersInClubQuery, GetDogsByHandlersInClubQueryVariables>;
export const GetDogByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDogById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"crn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"trainingLevel"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetDogByIdQuery, GetDogByIdQueryVariables>;
export const GetActiveDogsInClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetActiveDogsInClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeDogsInClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"clubId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}}}]}]}}]} as unknown as DocumentNode<GetActiveDogsInClubQuery, GetActiveDogsInClubQueryVariables>;
export const DeleteDogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteDog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteDogMutation, DeleteDogMutationVariables>;
export const CreateDogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateDog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trainingLevel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DogStatus"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"crn"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"ownerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"clubId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}}},{"kind":"Argument","name":{"kind":"Name","value":"trainingLevel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trainingLevel"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"crn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"crn"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"crn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"trainingLevel"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}}]}}]}}]} as unknown as DocumentNode<CreateDogMutation, CreateDogMutationVariables>;
export const UpdateDogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trainingLevel"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DogStatus"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"crn"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"ownerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"clubId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}}},{"kind":"Argument","name":{"kind":"Name","value":"trainingLevel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trainingLevel"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"crn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"crn"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"crn"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"trainingLevel"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}}]}}]}}]} as unknown as DocumentNode<UpdateDogMutation, UpdateDogMutationVariables>;
export const GetHandlerByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHandlerById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"handler"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetHandlerByIdQuery, GetHandlerByIdQueryVariables>;
export const CreateHandlerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateHandler"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"givenName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"surname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createHandler"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"givenName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"givenName"}}},{"kind":"Argument","name":{"kind":"Name","value":"surname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"surname"}}},{"kind":"Argument","name":{"kind":"Name","value":"clubId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}}]}}]}}]} as unknown as DocumentNode<CreateHandlerMutation, CreateHandlerMutationVariables>;
export const UpdateHandlerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateHandler"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"givenName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"surname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateHandler"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"givenName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"givenName"}}},{"kind":"Argument","name":{"kind":"Name","value":"surname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"surname"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"surname"}}]}}]}}]} as unknown as DocumentNode<UpdateHandlerMutation, UpdateHandlerMutationVariables>;
export const DeleteHandlerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteHandler"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteHandler"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteHandlerMutation, DeleteHandlerMutationVariables>;
export const GetPracticesByClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPracticesByClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"practicesByClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"clubId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"scheduledAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"attendances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attending"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetPracticesByClubQuery, GetPracticesByClubQueryVariables>;
export const GetPracticeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPractice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"practice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"scheduledAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"clubId"}}]}}]}}]} as unknown as DocumentNode<GetPracticeQuery, GetPracticeQueryVariables>;
export const CreatePracticeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePractice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scheduledAt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTimeISO"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PracticeStatus"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPractice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"clubId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}}},{"kind":"Argument","name":{"kind":"Name","value":"scheduledAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scheduledAt"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"scheduledAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"clubId"}}]}}]}}]} as unknown as DocumentNode<CreatePracticeMutation, CreatePracticeMutationVariables>;
export const UpdatePracticeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePractice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scheduledAt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTimeISO"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PracticeStatus"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePractice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"clubId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clubId"}}},{"kind":"Argument","name":{"kind":"Name","value":"scheduledAt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scheduledAt"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"scheduledAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"clubId"}}]}}]}}]} as unknown as DocumentNode<UpdatePracticeMutation, UpdatePracticeMutationVariables>;
export const DeletePracticeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePractice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePractice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeletePracticeMutation, DeletePracticeMutationVariables>;
export const GetSetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"practiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"practiceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"practiceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"locationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"typeCustom"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"setDogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dogId"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"lane"}}]}}]}}]}}]} as unknown as DocumentNode<GetSetsQuery, GetSetsQueryVariables>;
export const UpdateSetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"update"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetUpdate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"update"},"value":{"kind":"Variable","name":{"kind":"Name","value":"update"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"typeCustom"}},{"kind":"Field","name":{"kind":"Name","value":"notes"}},{"kind":"Field","name":{"kind":"Name","value":"locationId"}},{"kind":"Field","name":{"kind":"Name","value":"setDogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dogId"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"lane"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSetMutation, UpdateSetMutationVariables>;
export const DeleteSetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteSetMutation, DeleteSetMutationVariables>;