/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetPracticeAttendances($practiceId: String!) {\n    practiceAttendances(practiceId: $practiceId) {\n      id\n      dogId\n      attending\n      dog {\n        id\n        name\n        ownerId\n        trainingLevel\n        owner {\n          givenName\n          surname\n        }\n      }\n    }\n  }\n": typeof types.GetPracticeAttendancesDocument,
    "\n  mutation UpdateAttendances($practiceId: String!, $updates: [AttendanceUpdate!]!) {\n    updateAttendances(practiceId: $practiceId, updates: $updates) {\n      id\n      dogId\n      attending\n    }\n  }\n": typeof types.UpdateAttendancesDocument,
    "\n  mutation LoginUser($username: String!, $password: String!) {\n    loginUser(username: $username, password: $password) {\n      token\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        clubs {\n          id\n          name\n        }\n      }\n    }\n  }\n": typeof types.LoginUserDocument,
    "\n  query GetCurrentUser {\n    currentUser {\n      id\n      username\n      email\n      firstName\n      lastName\n      clubs {\n        id\n        name\n      }\n    }\n  }\n": typeof types.GetCurrentUserDocument,
    "\n  mutation UpdateUser($firstName: String, $lastName: String, $email: String) {\n    updateUser(firstName: $firstName, lastName: $lastName, email: $email) {\n      id\n      username\n      email\n      firstName\n      lastName\n      clubs {\n        id\n        name\n      }\n    }\n  }\n": typeof types.UpdateUserDocument,
    "\n  mutation ChangePassword($currentPassword: String!, $newPassword: String!) {\n    changePassword(currentPassword: $currentPassword, newPassword: $newPassword)\n  }\n": typeof types.ChangePasswordDocument,
    "\n  query GetClubs {\n    clubs {\n      id\n      name\n      nafaClubNumber\n      defaultPracticeTime\n    }\n  }\n": typeof types.GetClubsDocument,
    "\n  query GetClubById($id: String!) {\n    club(id: $id) {\n      id\n      name\n      nafaClubNumber\n      defaultPracticeTime\n    }\n  }\n": typeof types.GetClubByIdDocument,
    "\n  query GetLocationById($id: String!) {\n    location(id: $id) {\n      id\n      name\n      isDefault\n      isDoubleLane\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.GetLocationByIdDocument,
    "\n  query GetLocationsByClub($clubId: ID!) {\n    locationsByClub(clubId: $clubId) {\n      id\n      name\n      isDefault\n      isDoubleLane\n    }\n  }\n": typeof types.GetLocationsByClubDocument,
    "\n  mutation CreateLocation($clubId: ID!, $name: String!, $isDefault: Boolean!, $isDoubleLane: Boolean!) {\n    createLocation(clubId: $clubId, name: $name, isDefault: $isDefault, isDoubleLane: $isDoubleLane) {\n      id\n      name\n      isDefault\n      isDoubleLane\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.CreateLocationDocument,
    "\n  mutation UpdateLocation($id: String!, $name: String, $isDefault: Boolean, $isDoubleLane: Boolean) {\n    updateLocation(id: $id, name: $name, isDefault: $isDefault, isDoubleLane: $isDoubleLane) {\n      id\n      name\n      isDefault\n      isDoubleLane\n      updatedAt\n    }\n  }\n": typeof types.UpdateLocationDocument,
    "\n  mutation DeleteLocation($id: String!) {\n    deleteLocation(id: $id)\n  }\n": typeof types.DeleteLocationDocument,
    "\n  mutation UpdateClub($id: String!, $name: String, $nafaClubNumber: String, $defaultPracticeTime: String) {\n    updateClub(id: $id, name: $name, nafaClubNumber: $nafaClubNumber, defaultPracticeTime: $defaultPracticeTime) {\n      id\n      name\n      nafaClubNumber\n      defaultPracticeTime\n      updatedAt\n    }\n  }\n": typeof types.UpdateClubDocument,
    "\n  query GetDogsByHandlersInClub($clubId: ID!) {\n    dogsByHandlersInClub(clubId: $clubId) {\n      id\n      givenName\n      surname\n      dogs {\n        id\n        name\n        crn\n        status\n        trainingLevel\n      }\n    }\n  }\n": typeof types.GetDogsByHandlersInClubDocument,
    "\n  query GetDogById($id: String!) {\n    dog(id: $id) {\n      id\n      name\n      crn\n      status\n      trainingLevel\n      ownerId\n      updatedAt\n      createdAt\n    }\n  }\n": typeof types.GetDogByIdDocument,
    "\n  query GetActiveDogsInClub($clubId: ID!) {\n    activeDogsInClub(clubId: $clubId)\n  }\n": typeof types.GetActiveDogsInClubDocument,
    "\n  mutation DeleteDog($id: String!) {\n    deleteDog(id: $id)\n  }\n": typeof types.DeleteDogDocument,
    "\n  mutation CreateDog(\n    $name: String!\n    $ownerId: String!\n    $clubId: String!\n    $trainingLevel: TrainingLevel!\n    $status: DogStatus!\n    $crn: String\n  ) {\n    createDog(\n      name: $name\n      ownerId: $ownerId\n      clubId: $clubId\n      trainingLevel: $trainingLevel\n      status: $status\n      crn: $crn\n    ) {\n      id\n      name\n      crn\n      status\n      trainingLevel\n      ownerId\n    }\n  }\n": typeof types.CreateDogDocument,
    "\n  mutation UpdateDog(\n    $id: String!\n    $name: String\n    $ownerId: String\n    $trainingLevel: TrainingLevel\n    $status: DogStatus\n    $crn: String\n  ) {\n    updateDog(\n      id: $id\n      name: $name\n      ownerId: $ownerId\n      trainingLevel: $trainingLevel\n      status: $status\n      crn: $crn\n    ) {\n      id\n      name\n      crn\n      status\n      trainingLevel\n      ownerId\n    }\n  }\n": typeof types.UpdateDogDocument,
    "\n    query GetHandlerById($id: String!) {\n      handler(id: $id) {\n        id\n        givenName\n        surname\n        createdAt\n        updatedAt\n      }\n    }\n  ": typeof types.GetHandlerByIdDocument,
    "\n    mutation CreateHandler($givenName: String!, $surname: String!, $clubId: ID!) {\n      createHandler(givenName: $givenName, surname: $surname, clubId: $clubId) {\n        id\n        givenName\n        surname\n      }\n    }\n  ": typeof types.CreateHandlerDocument,
    "\n    mutation UpdateHandler($id: String!, $givenName: String, $surname: String) {\n      updateHandler(id: $id, givenName: $givenName, surname: $surname) {\n        id\n        givenName\n        surname\n      }\n    }\n  ": typeof types.UpdateHandlerDocument,
    "\n    mutation DeleteHandler($id: String!) {\n      deleteHandler(id: $id)\n    }\n  ": typeof types.DeleteHandlerDocument,
    "\n    query GetPracticesByClub($clubId: String!) {\n      practiceSummariesByClub(clubId: $clubId) {\n        id\n        scheduledAt\n        status\n        setsCount\n        attendingCount\n        notAttendingCount\n        unconfirmedCount\n      }\n    }\n  ": typeof types.GetPracticesByClubDocument,
    "\n  query GetPractice($id: String!) {\n    practice(id: $id) {\n      id\n      scheduledAt\n      status\n      clubId\n      createdAt\n      updatedAt\n      attendances {\n        id\n        attending\n        dogId\n        createdAt\n        updatedAt\n      }\n      sets {\n        id\n        index\n        notes\n        type\n        typeCustom\n        createdAt\n        updatedAt\n        locationId\n        dogs {\n          id\n          index\n          lane\n          dogId\n        }\n      }\n    }\n  }\n": typeof types.GetPracticeDocument,
    "\n  mutation CreatePractice($clubId: String!, $scheduledAt: DateTimeISO!, $status: PracticeStatus!) {\n    createPractice(clubId: $clubId, scheduledAt: $scheduledAt, status: $status) {\n      id\n      scheduledAt\n      status\n      clubId\n    }\n  }\n": typeof types.CreatePracticeDocument,
    "\n  mutation UpdatePractice($id: String!, $scheduledAt: DateTimeISO, $status: PracticeStatus) {\n    updatePractice(id: $id, scheduledAt: $scheduledAt, status: $status) {\n      id\n      scheduledAt\n      status\n      clubId\n    }\n  }\n": typeof types.UpdatePracticeDocument,
    "\n  mutation DeletePractice($id: String!) {\n    deletePractice(id: $id)\n  }\n": typeof types.DeletePracticeDocument,
    "\n  query GetSets($practiceId: String!) {\n    sets(practiceId: $practiceId) {\n      id\n      index\n      type\n      typeCustom\n      notes\n      locationId\n      dogs {\n        dogId\n        index\n        lane\n      }\n    }\n  }\n": typeof types.GetSetsDocument,
    "\n  mutation DeleteSets($ids: [String!]!) {\n    deleteSets(ids: $ids)\n  }\n": typeof types.DeleteSetsDocument,
    "\n  mutation UpdateSets($updates: [SetUpdate!]!) {\n    updateSets(updates: $updates) {\n      id\n      index\n      type\n      typeCustom\n      notes\n      locationId\n      dogs {\n        dogId\n        index\n        lane\n      }\n    }\n  }\n": typeof types.UpdateSetsDocument,
    "\n  subscription ClubChanged {\n    clubChanged {\n      club {\n        id\n        name\n        nafaClubNumber\n        defaultPracticeTime\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n": typeof types.ClubChangedDocument,
    "\n  subscription ClubById($clubId: String) {\n    clubById(clubId: $clubId) {\n      club {\n        id\n        name\n        nafaClubNumber\n        defaultPracticeTime\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n": typeof types.ClubByIdDocument,
    "\n  subscription DogChanged($clubId: String) {\n    dogChanged(clubId: $clubId) {\n      dog {\n        id\n        name\n        crn\n        status\n        trainingLevel\n        ownerId\n        clubId\n        createdAt\n        updatedAt\n        owner {\n          id\n          givenName\n          surname\n        }\n        club {\n          id\n          name\n        }\n      }\n      eventType\n    }\n  }\n": typeof types.DogChangedDocument,
    "\n  subscription HandlerChanged($clubId: String) {\n    handlerChanged(clubId: $clubId) {\n      handler {\n        id\n        givenName\n        surname\n        clubId\n        createdAt\n        updatedAt\n        club {\n          id\n          name\n        }\n        dogs {\n          id\n          name\n          status\n          trainingLevel\n        }\n      }\n      eventType\n    }\n  }\n": typeof types.HandlerChangedDocument,
    "\n  subscription LocationChanged($clubId: String) {\n    locationChanged(clubId: $clubId) {\n      location {\n        id\n        name\n        isDefault\n        isDoubleLane\n        clubId\n        createdAt\n        updatedAt\n        club {\n          id\n          name\n        }\n      }\n      eventType\n    }\n  }\n": typeof types.LocationChangedDocument,
    "\n  subscription PracticeChanged($practiceId: String!) {\n    practiceChanged(practiceId: $practiceId) {\n      practice {\n        id\n        scheduledAt\n        status\n        clubId\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n": typeof types.PracticeChangedDocument,
    "\n  subscription PracticeAttendanceChanged($practiceId: String!) {\n    practiceAttendanceChanged(practiceId: $practiceId) {\n      attendance {\n        id\n        attending\n        dogId\n        practiceId\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n": typeof types.PracticeAttendanceChangedDocument,
    "\n  subscription PracticeSetChanged($practiceId: String!) {\n    practiceSetChanged(practiceId: $practiceId) {\n      set {\n        id\n        index\n        notes\n        type\n        typeCustom\n        practiceId\n        locationId\n        createdAt\n        updatedAt\n        dogs {\n          id\n          index\n          lane\n          dogId\n        }\n      }\n      eventType\n    }\n  }\n": typeof types.PracticeSetChangedDocument,
    "\n  subscription PracticeSummaryChanged($clubId: String!) {\n    practiceSummaryChanged(clubId: $clubId) {\n      practice {\n        id\n        scheduledAt\n        status\n        setsCount\n        attendingCount\n        notAttendingCount\n        unconfirmedCount\n      }\n      eventType\n    }\n  }\n": typeof types.PracticeSummaryChangedDocument,
};
const documents: Documents = {
    "\n  query GetPracticeAttendances($practiceId: String!) {\n    practiceAttendances(practiceId: $practiceId) {\n      id\n      dogId\n      attending\n      dog {\n        id\n        name\n        ownerId\n        trainingLevel\n        owner {\n          givenName\n          surname\n        }\n      }\n    }\n  }\n": types.GetPracticeAttendancesDocument,
    "\n  mutation UpdateAttendances($practiceId: String!, $updates: [AttendanceUpdate!]!) {\n    updateAttendances(practiceId: $practiceId, updates: $updates) {\n      id\n      dogId\n      attending\n    }\n  }\n": types.UpdateAttendancesDocument,
    "\n  mutation LoginUser($username: String!, $password: String!) {\n    loginUser(username: $username, password: $password) {\n      token\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        clubs {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.LoginUserDocument,
    "\n  query GetCurrentUser {\n    currentUser {\n      id\n      username\n      email\n      firstName\n      lastName\n      clubs {\n        id\n        name\n      }\n    }\n  }\n": types.GetCurrentUserDocument,
    "\n  mutation UpdateUser($firstName: String, $lastName: String, $email: String) {\n    updateUser(firstName: $firstName, lastName: $lastName, email: $email) {\n      id\n      username\n      email\n      firstName\n      lastName\n      clubs {\n        id\n        name\n      }\n    }\n  }\n": types.UpdateUserDocument,
    "\n  mutation ChangePassword($currentPassword: String!, $newPassword: String!) {\n    changePassword(currentPassword: $currentPassword, newPassword: $newPassword)\n  }\n": types.ChangePasswordDocument,
    "\n  query GetClubs {\n    clubs {\n      id\n      name\n      nafaClubNumber\n      defaultPracticeTime\n    }\n  }\n": types.GetClubsDocument,
    "\n  query GetClubById($id: String!) {\n    club(id: $id) {\n      id\n      name\n      nafaClubNumber\n      defaultPracticeTime\n    }\n  }\n": types.GetClubByIdDocument,
    "\n  query GetLocationById($id: String!) {\n    location(id: $id) {\n      id\n      name\n      isDefault\n      isDoubleLane\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetLocationByIdDocument,
    "\n  query GetLocationsByClub($clubId: ID!) {\n    locationsByClub(clubId: $clubId) {\n      id\n      name\n      isDefault\n      isDoubleLane\n    }\n  }\n": types.GetLocationsByClubDocument,
    "\n  mutation CreateLocation($clubId: ID!, $name: String!, $isDefault: Boolean!, $isDoubleLane: Boolean!) {\n    createLocation(clubId: $clubId, name: $name, isDefault: $isDefault, isDoubleLane: $isDoubleLane) {\n      id\n      name\n      isDefault\n      isDoubleLane\n      createdAt\n      updatedAt\n    }\n  }\n": types.CreateLocationDocument,
    "\n  mutation UpdateLocation($id: String!, $name: String, $isDefault: Boolean, $isDoubleLane: Boolean) {\n    updateLocation(id: $id, name: $name, isDefault: $isDefault, isDoubleLane: $isDoubleLane) {\n      id\n      name\n      isDefault\n      isDoubleLane\n      updatedAt\n    }\n  }\n": types.UpdateLocationDocument,
    "\n  mutation DeleteLocation($id: String!) {\n    deleteLocation(id: $id)\n  }\n": types.DeleteLocationDocument,
    "\n  mutation UpdateClub($id: String!, $name: String, $nafaClubNumber: String, $defaultPracticeTime: String) {\n    updateClub(id: $id, name: $name, nafaClubNumber: $nafaClubNumber, defaultPracticeTime: $defaultPracticeTime) {\n      id\n      name\n      nafaClubNumber\n      defaultPracticeTime\n      updatedAt\n    }\n  }\n": types.UpdateClubDocument,
    "\n  query GetDogsByHandlersInClub($clubId: ID!) {\n    dogsByHandlersInClub(clubId: $clubId) {\n      id\n      givenName\n      surname\n      dogs {\n        id\n        name\n        crn\n        status\n        trainingLevel\n      }\n    }\n  }\n": types.GetDogsByHandlersInClubDocument,
    "\n  query GetDogById($id: String!) {\n    dog(id: $id) {\n      id\n      name\n      crn\n      status\n      trainingLevel\n      ownerId\n      updatedAt\n      createdAt\n    }\n  }\n": types.GetDogByIdDocument,
    "\n  query GetActiveDogsInClub($clubId: ID!) {\n    activeDogsInClub(clubId: $clubId)\n  }\n": types.GetActiveDogsInClubDocument,
    "\n  mutation DeleteDog($id: String!) {\n    deleteDog(id: $id)\n  }\n": types.DeleteDogDocument,
    "\n  mutation CreateDog(\n    $name: String!\n    $ownerId: String!\n    $clubId: String!\n    $trainingLevel: TrainingLevel!\n    $status: DogStatus!\n    $crn: String\n  ) {\n    createDog(\n      name: $name\n      ownerId: $ownerId\n      clubId: $clubId\n      trainingLevel: $trainingLevel\n      status: $status\n      crn: $crn\n    ) {\n      id\n      name\n      crn\n      status\n      trainingLevel\n      ownerId\n    }\n  }\n": types.CreateDogDocument,
    "\n  mutation UpdateDog(\n    $id: String!\n    $name: String\n    $ownerId: String\n    $trainingLevel: TrainingLevel\n    $status: DogStatus\n    $crn: String\n  ) {\n    updateDog(\n      id: $id\n      name: $name\n      ownerId: $ownerId\n      trainingLevel: $trainingLevel\n      status: $status\n      crn: $crn\n    ) {\n      id\n      name\n      crn\n      status\n      trainingLevel\n      ownerId\n    }\n  }\n": types.UpdateDogDocument,
    "\n    query GetHandlerById($id: String!) {\n      handler(id: $id) {\n        id\n        givenName\n        surname\n        createdAt\n        updatedAt\n      }\n    }\n  ": types.GetHandlerByIdDocument,
    "\n    mutation CreateHandler($givenName: String!, $surname: String!, $clubId: ID!) {\n      createHandler(givenName: $givenName, surname: $surname, clubId: $clubId) {\n        id\n        givenName\n        surname\n      }\n    }\n  ": types.CreateHandlerDocument,
    "\n    mutation UpdateHandler($id: String!, $givenName: String, $surname: String) {\n      updateHandler(id: $id, givenName: $givenName, surname: $surname) {\n        id\n        givenName\n        surname\n      }\n    }\n  ": types.UpdateHandlerDocument,
    "\n    mutation DeleteHandler($id: String!) {\n      deleteHandler(id: $id)\n    }\n  ": types.DeleteHandlerDocument,
    "\n    query GetPracticesByClub($clubId: String!) {\n      practiceSummariesByClub(clubId: $clubId) {\n        id\n        scheduledAt\n        status\n        setsCount\n        attendingCount\n        notAttendingCount\n        unconfirmedCount\n      }\n    }\n  ": types.GetPracticesByClubDocument,
    "\n  query GetPractice($id: String!) {\n    practice(id: $id) {\n      id\n      scheduledAt\n      status\n      clubId\n      createdAt\n      updatedAt\n      attendances {\n        id\n        attending\n        dogId\n        createdAt\n        updatedAt\n      }\n      sets {\n        id\n        index\n        notes\n        type\n        typeCustom\n        createdAt\n        updatedAt\n        locationId\n        dogs {\n          id\n          index\n          lane\n          dogId\n        }\n      }\n    }\n  }\n": types.GetPracticeDocument,
    "\n  mutation CreatePractice($clubId: String!, $scheduledAt: DateTimeISO!, $status: PracticeStatus!) {\n    createPractice(clubId: $clubId, scheduledAt: $scheduledAt, status: $status) {\n      id\n      scheduledAt\n      status\n      clubId\n    }\n  }\n": types.CreatePracticeDocument,
    "\n  mutation UpdatePractice($id: String!, $scheduledAt: DateTimeISO, $status: PracticeStatus) {\n    updatePractice(id: $id, scheduledAt: $scheduledAt, status: $status) {\n      id\n      scheduledAt\n      status\n      clubId\n    }\n  }\n": types.UpdatePracticeDocument,
    "\n  mutation DeletePractice($id: String!) {\n    deletePractice(id: $id)\n  }\n": types.DeletePracticeDocument,
    "\n  query GetSets($practiceId: String!) {\n    sets(practiceId: $practiceId) {\n      id\n      index\n      type\n      typeCustom\n      notes\n      locationId\n      dogs {\n        dogId\n        index\n        lane\n      }\n    }\n  }\n": types.GetSetsDocument,
    "\n  mutation DeleteSets($ids: [String!]!) {\n    deleteSets(ids: $ids)\n  }\n": types.DeleteSetsDocument,
    "\n  mutation UpdateSets($updates: [SetUpdate!]!) {\n    updateSets(updates: $updates) {\n      id\n      index\n      type\n      typeCustom\n      notes\n      locationId\n      dogs {\n        dogId\n        index\n        lane\n      }\n    }\n  }\n": types.UpdateSetsDocument,
    "\n  subscription ClubChanged {\n    clubChanged {\n      club {\n        id\n        name\n        nafaClubNumber\n        defaultPracticeTime\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n": types.ClubChangedDocument,
    "\n  subscription ClubById($clubId: String) {\n    clubById(clubId: $clubId) {\n      club {\n        id\n        name\n        nafaClubNumber\n        defaultPracticeTime\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n": types.ClubByIdDocument,
    "\n  subscription DogChanged($clubId: String) {\n    dogChanged(clubId: $clubId) {\n      dog {\n        id\n        name\n        crn\n        status\n        trainingLevel\n        ownerId\n        clubId\n        createdAt\n        updatedAt\n        owner {\n          id\n          givenName\n          surname\n        }\n        club {\n          id\n          name\n        }\n      }\n      eventType\n    }\n  }\n": types.DogChangedDocument,
    "\n  subscription HandlerChanged($clubId: String) {\n    handlerChanged(clubId: $clubId) {\n      handler {\n        id\n        givenName\n        surname\n        clubId\n        createdAt\n        updatedAt\n        club {\n          id\n          name\n        }\n        dogs {\n          id\n          name\n          status\n          trainingLevel\n        }\n      }\n      eventType\n    }\n  }\n": types.HandlerChangedDocument,
    "\n  subscription LocationChanged($clubId: String) {\n    locationChanged(clubId: $clubId) {\n      location {\n        id\n        name\n        isDefault\n        isDoubleLane\n        clubId\n        createdAt\n        updatedAt\n        club {\n          id\n          name\n        }\n      }\n      eventType\n    }\n  }\n": types.LocationChangedDocument,
    "\n  subscription PracticeChanged($practiceId: String!) {\n    practiceChanged(practiceId: $practiceId) {\n      practice {\n        id\n        scheduledAt\n        status\n        clubId\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n": types.PracticeChangedDocument,
    "\n  subscription PracticeAttendanceChanged($practiceId: String!) {\n    practiceAttendanceChanged(practiceId: $practiceId) {\n      attendance {\n        id\n        attending\n        dogId\n        practiceId\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n": types.PracticeAttendanceChangedDocument,
    "\n  subscription PracticeSetChanged($practiceId: String!) {\n    practiceSetChanged(practiceId: $practiceId) {\n      set {\n        id\n        index\n        notes\n        type\n        typeCustom\n        practiceId\n        locationId\n        createdAt\n        updatedAt\n        dogs {\n          id\n          index\n          lane\n          dogId\n        }\n      }\n      eventType\n    }\n  }\n": types.PracticeSetChangedDocument,
    "\n  subscription PracticeSummaryChanged($clubId: String!) {\n    practiceSummaryChanged(clubId: $clubId) {\n      practice {\n        id\n        scheduledAt\n        status\n        setsCount\n        attendingCount\n        notAttendingCount\n        unconfirmedCount\n      }\n      eventType\n    }\n  }\n": types.PracticeSummaryChangedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPracticeAttendances($practiceId: String!) {\n    practiceAttendances(practiceId: $practiceId) {\n      id\n      dogId\n      attending\n      dog {\n        id\n        name\n        ownerId\n        trainingLevel\n        owner {\n          givenName\n          surname\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPracticeAttendances($practiceId: String!) {\n    practiceAttendances(practiceId: $practiceId) {\n      id\n      dogId\n      attending\n      dog {\n        id\n        name\n        ownerId\n        trainingLevel\n        owner {\n          givenName\n          surname\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateAttendances($practiceId: String!, $updates: [AttendanceUpdate!]!) {\n    updateAttendances(practiceId: $practiceId, updates: $updates) {\n      id\n      dogId\n      attending\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAttendances($practiceId: String!, $updates: [AttendanceUpdate!]!) {\n    updateAttendances(practiceId: $practiceId, updates: $updates) {\n      id\n      dogId\n      attending\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginUser($username: String!, $password: String!) {\n    loginUser(username: $username, password: $password) {\n      token\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        clubs {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LoginUser($username: String!, $password: String!) {\n    loginUser(username: $username, password: $password) {\n      token\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        clubs {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCurrentUser {\n    currentUser {\n      id\n      username\n      email\n      firstName\n      lastName\n      clubs {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCurrentUser {\n    currentUser {\n      id\n      username\n      email\n      firstName\n      lastName\n      clubs {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser($firstName: String, $lastName: String, $email: String) {\n    updateUser(firstName: $firstName, lastName: $lastName, email: $email) {\n      id\n      username\n      email\n      firstName\n      lastName\n      clubs {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser($firstName: String, $lastName: String, $email: String) {\n    updateUser(firstName: $firstName, lastName: $lastName, email: $email) {\n      id\n      username\n      email\n      firstName\n      lastName\n      clubs {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ChangePassword($currentPassword: String!, $newPassword: String!) {\n    changePassword(currentPassword: $currentPassword, newPassword: $newPassword)\n  }\n"): (typeof documents)["\n  mutation ChangePassword($currentPassword: String!, $newPassword: String!) {\n    changePassword(currentPassword: $currentPassword, newPassword: $newPassword)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetClubs {\n    clubs {\n      id\n      name\n      nafaClubNumber\n      defaultPracticeTime\n    }\n  }\n"): (typeof documents)["\n  query GetClubs {\n    clubs {\n      id\n      name\n      nafaClubNumber\n      defaultPracticeTime\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetClubById($id: String!) {\n    club(id: $id) {\n      id\n      name\n      nafaClubNumber\n      defaultPracticeTime\n    }\n  }\n"): (typeof documents)["\n  query GetClubById($id: String!) {\n    club(id: $id) {\n      id\n      name\n      nafaClubNumber\n      defaultPracticeTime\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLocationById($id: String!) {\n    location(id: $id) {\n      id\n      name\n      isDefault\n      isDoubleLane\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query GetLocationById($id: String!) {\n    location(id: $id) {\n      id\n      name\n      isDefault\n      isDoubleLane\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLocationsByClub($clubId: ID!) {\n    locationsByClub(clubId: $clubId) {\n      id\n      name\n      isDefault\n      isDoubleLane\n    }\n  }\n"): (typeof documents)["\n  query GetLocationsByClub($clubId: ID!) {\n    locationsByClub(clubId: $clubId) {\n      id\n      name\n      isDefault\n      isDoubleLane\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateLocation($clubId: ID!, $name: String!, $isDefault: Boolean!, $isDoubleLane: Boolean!) {\n    createLocation(clubId: $clubId, name: $name, isDefault: $isDefault, isDoubleLane: $isDoubleLane) {\n      id\n      name\n      isDefault\n      isDoubleLane\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateLocation($clubId: ID!, $name: String!, $isDefault: Boolean!, $isDoubleLane: Boolean!) {\n    createLocation(clubId: $clubId, name: $name, isDefault: $isDefault, isDoubleLane: $isDoubleLane) {\n      id\n      name\n      isDefault\n      isDoubleLane\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateLocation($id: String!, $name: String, $isDefault: Boolean, $isDoubleLane: Boolean) {\n    updateLocation(id: $id, name: $name, isDefault: $isDefault, isDoubleLane: $isDoubleLane) {\n      id\n      name\n      isDefault\n      isDoubleLane\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateLocation($id: String!, $name: String, $isDefault: Boolean, $isDoubleLane: Boolean) {\n    updateLocation(id: $id, name: $name, isDefault: $isDefault, isDoubleLane: $isDoubleLane) {\n      id\n      name\n      isDefault\n      isDoubleLane\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteLocation($id: String!) {\n    deleteLocation(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteLocation($id: String!) {\n    deleteLocation(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateClub($id: String!, $name: String, $nafaClubNumber: String, $defaultPracticeTime: String) {\n    updateClub(id: $id, name: $name, nafaClubNumber: $nafaClubNumber, defaultPracticeTime: $defaultPracticeTime) {\n      id\n      name\n      nafaClubNumber\n      defaultPracticeTime\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateClub($id: String!, $name: String, $nafaClubNumber: String, $defaultPracticeTime: String) {\n    updateClub(id: $id, name: $name, nafaClubNumber: $nafaClubNumber, defaultPracticeTime: $defaultPracticeTime) {\n      id\n      name\n      nafaClubNumber\n      defaultPracticeTime\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetDogsByHandlersInClub($clubId: ID!) {\n    dogsByHandlersInClub(clubId: $clubId) {\n      id\n      givenName\n      surname\n      dogs {\n        id\n        name\n        crn\n        status\n        trainingLevel\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetDogsByHandlersInClub($clubId: ID!) {\n    dogsByHandlersInClub(clubId: $clubId) {\n      id\n      givenName\n      surname\n      dogs {\n        id\n        name\n        crn\n        status\n        trainingLevel\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetDogById($id: String!) {\n    dog(id: $id) {\n      id\n      name\n      crn\n      status\n      trainingLevel\n      ownerId\n      updatedAt\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GetDogById($id: String!) {\n    dog(id: $id) {\n      id\n      name\n      crn\n      status\n      trainingLevel\n      ownerId\n      updatedAt\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetActiveDogsInClub($clubId: ID!) {\n    activeDogsInClub(clubId: $clubId)\n  }\n"): (typeof documents)["\n  query GetActiveDogsInClub($clubId: ID!) {\n    activeDogsInClub(clubId: $clubId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteDog($id: String!) {\n    deleteDog(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteDog($id: String!) {\n    deleteDog(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateDog(\n    $name: String!\n    $ownerId: String!\n    $clubId: String!\n    $trainingLevel: TrainingLevel!\n    $status: DogStatus!\n    $crn: String\n  ) {\n    createDog(\n      name: $name\n      ownerId: $ownerId\n      clubId: $clubId\n      trainingLevel: $trainingLevel\n      status: $status\n      crn: $crn\n    ) {\n      id\n      name\n      crn\n      status\n      trainingLevel\n      ownerId\n    }\n  }\n"): (typeof documents)["\n  mutation CreateDog(\n    $name: String!\n    $ownerId: String!\n    $clubId: String!\n    $trainingLevel: TrainingLevel!\n    $status: DogStatus!\n    $crn: String\n  ) {\n    createDog(\n      name: $name\n      ownerId: $ownerId\n      clubId: $clubId\n      trainingLevel: $trainingLevel\n      status: $status\n      crn: $crn\n    ) {\n      id\n      name\n      crn\n      status\n      trainingLevel\n      ownerId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateDog(\n    $id: String!\n    $name: String\n    $ownerId: String\n    $trainingLevel: TrainingLevel\n    $status: DogStatus\n    $crn: String\n  ) {\n    updateDog(\n      id: $id\n      name: $name\n      ownerId: $ownerId\n      trainingLevel: $trainingLevel\n      status: $status\n      crn: $crn\n    ) {\n      id\n      name\n      crn\n      status\n      trainingLevel\n      ownerId\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateDog(\n    $id: String!\n    $name: String\n    $ownerId: String\n    $trainingLevel: TrainingLevel\n    $status: DogStatus\n    $crn: String\n  ) {\n    updateDog(\n      id: $id\n      name: $name\n      ownerId: $ownerId\n      trainingLevel: $trainingLevel\n      status: $status\n      crn: $crn\n    ) {\n      id\n      name\n      crn\n      status\n      trainingLevel\n      ownerId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetHandlerById($id: String!) {\n      handler(id: $id) {\n        id\n        givenName\n        surname\n        createdAt\n        updatedAt\n      }\n    }\n  "): (typeof documents)["\n    query GetHandlerById($id: String!) {\n      handler(id: $id) {\n        id\n        givenName\n        surname\n        createdAt\n        updatedAt\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateHandler($givenName: String!, $surname: String!, $clubId: ID!) {\n      createHandler(givenName: $givenName, surname: $surname, clubId: $clubId) {\n        id\n        givenName\n        surname\n      }\n    }\n  "): (typeof documents)["\n    mutation CreateHandler($givenName: String!, $surname: String!, $clubId: ID!) {\n      createHandler(givenName: $givenName, surname: $surname, clubId: $clubId) {\n        id\n        givenName\n        surname\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateHandler($id: String!, $givenName: String, $surname: String) {\n      updateHandler(id: $id, givenName: $givenName, surname: $surname) {\n        id\n        givenName\n        surname\n      }\n    }\n  "): (typeof documents)["\n    mutation UpdateHandler($id: String!, $givenName: String, $surname: String) {\n      updateHandler(id: $id, givenName: $givenName, surname: $surname) {\n        id\n        givenName\n        surname\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteHandler($id: String!) {\n      deleteHandler(id: $id)\n    }\n  "): (typeof documents)["\n    mutation DeleteHandler($id: String!) {\n      deleteHandler(id: $id)\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetPracticesByClub($clubId: String!) {\n      practiceSummariesByClub(clubId: $clubId) {\n        id\n        scheduledAt\n        status\n        setsCount\n        attendingCount\n        notAttendingCount\n        unconfirmedCount\n      }\n    }\n  "): (typeof documents)["\n    query GetPracticesByClub($clubId: String!) {\n      practiceSummariesByClub(clubId: $clubId) {\n        id\n        scheduledAt\n        status\n        setsCount\n        attendingCount\n        notAttendingCount\n        unconfirmedCount\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPractice($id: String!) {\n    practice(id: $id) {\n      id\n      scheduledAt\n      status\n      clubId\n      createdAt\n      updatedAt\n      attendances {\n        id\n        attending\n        dogId\n        createdAt\n        updatedAt\n      }\n      sets {\n        id\n        index\n        notes\n        type\n        typeCustom\n        createdAt\n        updatedAt\n        locationId\n        dogs {\n          id\n          index\n          lane\n          dogId\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPractice($id: String!) {\n    practice(id: $id) {\n      id\n      scheduledAt\n      status\n      clubId\n      createdAt\n      updatedAt\n      attendances {\n        id\n        attending\n        dogId\n        createdAt\n        updatedAt\n      }\n      sets {\n        id\n        index\n        notes\n        type\n        typeCustom\n        createdAt\n        updatedAt\n        locationId\n        dogs {\n          id\n          index\n          lane\n          dogId\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePractice($clubId: String!, $scheduledAt: DateTimeISO!, $status: PracticeStatus!) {\n    createPractice(clubId: $clubId, scheduledAt: $scheduledAt, status: $status) {\n      id\n      scheduledAt\n      status\n      clubId\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePractice($clubId: String!, $scheduledAt: DateTimeISO!, $status: PracticeStatus!) {\n    createPractice(clubId: $clubId, scheduledAt: $scheduledAt, status: $status) {\n      id\n      scheduledAt\n      status\n      clubId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdatePractice($id: String!, $scheduledAt: DateTimeISO, $status: PracticeStatus) {\n    updatePractice(id: $id, scheduledAt: $scheduledAt, status: $status) {\n      id\n      scheduledAt\n      status\n      clubId\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePractice($id: String!, $scheduledAt: DateTimeISO, $status: PracticeStatus) {\n    updatePractice(id: $id, scheduledAt: $scheduledAt, status: $status) {\n      id\n      scheduledAt\n      status\n      clubId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeletePractice($id: String!) {\n    deletePractice(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeletePractice($id: String!) {\n    deletePractice(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSets($practiceId: String!) {\n    sets(practiceId: $practiceId) {\n      id\n      index\n      type\n      typeCustom\n      notes\n      locationId\n      dogs {\n        dogId\n        index\n        lane\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSets($practiceId: String!) {\n    sets(practiceId: $practiceId) {\n      id\n      index\n      type\n      typeCustom\n      notes\n      locationId\n      dogs {\n        dogId\n        index\n        lane\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteSets($ids: [String!]!) {\n    deleteSets(ids: $ids)\n  }\n"): (typeof documents)["\n  mutation DeleteSets($ids: [String!]!) {\n    deleteSets(ids: $ids)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateSets($updates: [SetUpdate!]!) {\n    updateSets(updates: $updates) {\n      id\n      index\n      type\n      typeCustom\n      notes\n      locationId\n      dogs {\n        dogId\n        index\n        lane\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateSets($updates: [SetUpdate!]!) {\n    updateSets(updates: $updates) {\n      id\n      index\n      type\n      typeCustom\n      notes\n      locationId\n      dogs {\n        dogId\n        index\n        lane\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription ClubChanged {\n    clubChanged {\n      club {\n        id\n        name\n        nafaClubNumber\n        defaultPracticeTime\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n"): (typeof documents)["\n  subscription ClubChanged {\n    clubChanged {\n      club {\n        id\n        name\n        nafaClubNumber\n        defaultPracticeTime\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription ClubById($clubId: String) {\n    clubById(clubId: $clubId) {\n      club {\n        id\n        name\n        nafaClubNumber\n        defaultPracticeTime\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n"): (typeof documents)["\n  subscription ClubById($clubId: String) {\n    clubById(clubId: $clubId) {\n      club {\n        id\n        name\n        nafaClubNumber\n        defaultPracticeTime\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription DogChanged($clubId: String) {\n    dogChanged(clubId: $clubId) {\n      dog {\n        id\n        name\n        crn\n        status\n        trainingLevel\n        ownerId\n        clubId\n        createdAt\n        updatedAt\n        owner {\n          id\n          givenName\n          surname\n        }\n        club {\n          id\n          name\n        }\n      }\n      eventType\n    }\n  }\n"): (typeof documents)["\n  subscription DogChanged($clubId: String) {\n    dogChanged(clubId: $clubId) {\n      dog {\n        id\n        name\n        crn\n        status\n        trainingLevel\n        ownerId\n        clubId\n        createdAt\n        updatedAt\n        owner {\n          id\n          givenName\n          surname\n        }\n        club {\n          id\n          name\n        }\n      }\n      eventType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription HandlerChanged($clubId: String) {\n    handlerChanged(clubId: $clubId) {\n      handler {\n        id\n        givenName\n        surname\n        clubId\n        createdAt\n        updatedAt\n        club {\n          id\n          name\n        }\n        dogs {\n          id\n          name\n          status\n          trainingLevel\n        }\n      }\n      eventType\n    }\n  }\n"): (typeof documents)["\n  subscription HandlerChanged($clubId: String) {\n    handlerChanged(clubId: $clubId) {\n      handler {\n        id\n        givenName\n        surname\n        clubId\n        createdAt\n        updatedAt\n        club {\n          id\n          name\n        }\n        dogs {\n          id\n          name\n          status\n          trainingLevel\n        }\n      }\n      eventType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription LocationChanged($clubId: String) {\n    locationChanged(clubId: $clubId) {\n      location {\n        id\n        name\n        isDefault\n        isDoubleLane\n        clubId\n        createdAt\n        updatedAt\n        club {\n          id\n          name\n        }\n      }\n      eventType\n    }\n  }\n"): (typeof documents)["\n  subscription LocationChanged($clubId: String) {\n    locationChanged(clubId: $clubId) {\n      location {\n        id\n        name\n        isDefault\n        isDoubleLane\n        clubId\n        createdAt\n        updatedAt\n        club {\n          id\n          name\n        }\n      }\n      eventType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription PracticeChanged($practiceId: String!) {\n    practiceChanged(practiceId: $practiceId) {\n      practice {\n        id\n        scheduledAt\n        status\n        clubId\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n"): (typeof documents)["\n  subscription PracticeChanged($practiceId: String!) {\n    practiceChanged(practiceId: $practiceId) {\n      practice {\n        id\n        scheduledAt\n        status\n        clubId\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription PracticeAttendanceChanged($practiceId: String!) {\n    practiceAttendanceChanged(practiceId: $practiceId) {\n      attendance {\n        id\n        attending\n        dogId\n        practiceId\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n"): (typeof documents)["\n  subscription PracticeAttendanceChanged($practiceId: String!) {\n    practiceAttendanceChanged(practiceId: $practiceId) {\n      attendance {\n        id\n        attending\n        dogId\n        practiceId\n        createdAt\n        updatedAt\n      }\n      eventType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription PracticeSetChanged($practiceId: String!) {\n    practiceSetChanged(practiceId: $practiceId) {\n      set {\n        id\n        index\n        notes\n        type\n        typeCustom\n        practiceId\n        locationId\n        createdAt\n        updatedAt\n        dogs {\n          id\n          index\n          lane\n          dogId\n        }\n      }\n      eventType\n    }\n  }\n"): (typeof documents)["\n  subscription PracticeSetChanged($practiceId: String!) {\n    practiceSetChanged(practiceId: $practiceId) {\n      set {\n        id\n        index\n        notes\n        type\n        typeCustom\n        practiceId\n        locationId\n        createdAt\n        updatedAt\n        dogs {\n          id\n          index\n          lane\n          dogId\n        }\n      }\n      eventType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription PracticeSummaryChanged($clubId: String!) {\n    practiceSummaryChanged(clubId: $clubId) {\n      practice {\n        id\n        scheduledAt\n        status\n        setsCount\n        attendingCount\n        notAttendingCount\n        unconfirmedCount\n      }\n      eventType\n    }\n  }\n"): (typeof documents)["\n  subscription PracticeSummaryChanged($clubId: String!) {\n    practiceSummaryChanged(clubId: $clubId) {\n      practice {\n        id\n        scheduledAt\n        status\n        setsCount\n        attendingCount\n        notAttendingCount\n        unconfirmedCount\n      }\n      eventType\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;