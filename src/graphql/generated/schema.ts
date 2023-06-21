import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Booking = {
  __typename?: 'Booking';
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  service?: Maybe<Service>;
  serviceId?: Maybe<Scalars['String']['output']>;
};

export type BookingFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  serviceId?: InputMaybe<Scalars['String']['input']>;
};

export type Company = {
  __typename?: 'Company';
  avater?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  employee?: Maybe<Array<Maybe<Employee>>>;
  id?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type CompanyFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyInput = {
  avater: Scalars['String']['input'];
  description: Scalars['String']['input'];
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export enum CompanyRole {
owner ,employee
}

export type CompanyUser = {
  __typename?: 'CompanyUser';
  companyRole?: Maybe<CompanyRole>;
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
};

export type Employee = {
  __typename?: 'Employee';
  company?: Maybe<Company>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type EmployeeInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GeoLocation = {
  __typename?: 'GeoLocation';
  companyId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type GeoLocationInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
};

export type Location = {
  __typename?: 'Location';
  city?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type LocationInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPaymentMethod?: Maybe<Scalars['String']['output']>;
  createBooking?: Maybe<DefaultResposnce>;
  createCompany?: Maybe<DefaultResposnce>;
  createCompanyWithOwner?: Maybe<CompanyLoginResponsce>;
  createEmployee?: Maybe<DefaultResposnce>;
  createGeoLocation?: Maybe<DefaultResposnce>;
  createLocation?: Maybe<DefaultResposnce>;
  createPlan?: Maybe<DefaultResposnce>;
  createService?: Maybe<DefaultResposnce>;
  createsubscription?: Maybe<DefaultResposnce>;
  deleteBooking?: Maybe<DefaultResposnce>;
  deleteService?: Maybe<DefaultResposnce>;
  editCompany?: Maybe<DefaultResposnce>;
  editPlan?: Maybe<DefaultResposnce>;
  login?: Maybe<Loginresponsce>;
  ownerLogin?: Maybe<Loginresponsce>;
  ownerRegister?: Maybe<DefaultResposnce>;
  register?: Maybe<DefaultResposnce>;
  updateBooking?: Maybe<DefaultResposnce>;
  updateService?: Maybe<DefaultResposnce>;
  updatesubscription?: Maybe<DefaultResposnce>;
};


export type MutationAddPaymentMethodArgs = {
  token: Scalars['String']['input'];
};


export type MutationCreateBookingArgs = {
  booking?: InputMaybe<BookingInput>;
};


export type MutationCreateCompanyArgs = {
  company?: InputMaybe<CompanyInput>;
};


export type MutationCreateCompanyWithOwnerArgs = {
  companyInput?: InputMaybe<CompanyInput>;
  geoLocationInput?: InputMaybe<GeoLocationInput>;
  locationInput?: InputMaybe<LocationInput>;
  ownerInput?: InputMaybe<OwnerInput>;
  userInput?: InputMaybe<UserInput>;
};


export type MutationCreateEmployeeArgs = {
  employee?: InputMaybe<EmployeeInput>;
  user?: InputMaybe<UserInput>;
};


export type MutationCreateGeoLocationArgs = {
  geoLocation?: InputMaybe<GeoLocationInput>;
};


export type MutationCreateLocationArgs = {
  location?: InputMaybe<LocationInput>;
};


export type MutationCreatePlanArgs = {
  plan?: InputMaybe<PlanInput>;
};


export type MutationCreateServiceArgs = {
  service?: InputMaybe<ServiceInput>;
};


export type MutationCreatesubscriptionArgs = {
  subscription?: InputMaybe<SubscriptionInput>;
};


export type MutationDeleteBookingArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteServiceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditCompanyArgs = {
  company?: InputMaybe<CompanyInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditPlanArgs = {
  id: Scalars['String']['input'];
  plan?: InputMaybe<PlanInput>;
};


export type MutationLoginArgs = {
  user?: InputMaybe<LoginInput>;
};


export type MutationOwnerLoginArgs = {
  user?: InputMaybe<LoginInput>;
};


export type MutationOwnerRegisterArgs = {
  owner?: InputMaybe<OwnerInput>;
  user?: InputMaybe<UserInput>;
};


export type MutationRegisterArgs = {
  user?: InputMaybe<UserInput>;
};


export type MutationUpdateBookingArgs = {
  booking?: InputMaybe<BookingInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateServiceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  service?: InputMaybe<ServiceInput>;
};


export type MutationUpdatesubscriptionArgs = {
  id: Scalars['String']['input'];
  subscription?: InputMaybe<SubscriptionInput>;
};

export type Owner = {
  __typename?: 'Owner';
  company?: Maybe<Company>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type OwnerInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Plan = {
  __typename?: 'Plan';
  createdAt?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  is_default?: Maybe<Scalars['Boolean']['output']>;
  is_free?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planType?: Maybe<PlanType>;
  price?: Maybe<Scalars['Float']['output']>;
  trial_days?: Maybe<Scalars['Int']['output']>;
};

export type PlanInput = {
  description: Scalars['String']['input'];
  interval_count?: InputMaybe<Scalars['Int']['input']>;
  is_default: Scalars['Boolean']['input'];
  is_free: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  planType: PlanType;
  price: Scalars['Float']['input'];
  trial_days: Scalars['Int']['input'];
};

export enum PlanType {
  Month = 'month',
  Week = 'week',
  Year = 'year'
}

export type Query = {
  __typename?: 'Query';
  fetchAllBookings?: Maybe<FetchAllBookingsResponsce>;
  fetchAllCompany?: Maybe<FetchAllCompanyResponsce>;
  fetchAllService?: Maybe<FetchAllServiceResponsce>;
  fetchSingleService?: Maybe<FetchSingleServiceResponsce>;
  getBooking?: Maybe<Booking>;
  getCompany?: Maybe<Company>;
  getEmployee?: Maybe<Employee>;
  getGeoLocation?: Maybe<GeoLocation>;
  getLocation?: Maybe<Location>;
  getOwner?: Maybe<Owner>;
  getPlan?: Maybe<Plan>;
  healthCheck?: Maybe<Scalars['String']['output']>;
  me?: Maybe<User>;
  subscription?: Maybe<Subscription>;
};


export type QueryFetchAllBookingsArgs = {
  filter?: InputMaybe<BookingFilterInput>;
};


export type QueryFetchAllCompanyArgs = {
  filters?: InputMaybe<CompanyFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchAllServiceArgs = {
  filters?: InputMaybe<ServiceFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFetchSingleServiceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetBookingArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCompanyArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetEmployeeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetGeoLocationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetLocationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetOwnerArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPlanArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubscriptionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Service = {
  __typename?: 'Service';
  booking?: Maybe<Booking>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  durationPreiod?: Maybe<Scalars['Int']['output']>;
  durationType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  serviceCategoryid?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Float']['output']>;
};

export type ServiceFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  durationPreiod?: InputMaybe<Scalars['Int']['input']>;
  durationType?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  serviceCategoryid?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionInput = {
  planId?: InputMaybe<Scalars['String']['input']>;
};

export enum SubscriptionStatus {
  Active = 'active',
  BalanceEmpty = 'balance_empty',
  Failed = 'failed',
  Pending = 'pending',
  RenewNeeded = 'renew_needed'
}

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
};

export type UserInput = {
  confirmPassword?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export enum UserRole {
  Admin = 'admin',
  Company = 'company',
  Public = 'public',
  Superadmin = 'superadmin'
}

export type CompanyLoginResponsce = {
  __typename?: 'companyLoginResponsce';
  accessToken?: Maybe<Scalars['String']['output']>;
  isAuthenticated?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<CompanyUser>;
};

export enum CompanyRole {
  Employee = 'employee',
  Owner = 'owner'
}

export type DefaultResposnce = {
  __typename?: 'defaultResposnce';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type FetchAllBookingsResponsce = {
  __typename?: 'fetchAllBookingsResponsce';
  count?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  result?: Maybe<Array<Maybe<Booking>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type FetchAllCompanyResponsce = {
  __typename?: 'fetchAllCompanyResponsce';
  message?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  result?: Maybe<Array<Maybe<Company>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type FetchAllServiceResponsce = {
  __typename?: 'fetchAllServiceResponsce';
  message?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  result?: Maybe<Array<Maybe<Service>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type FetchSingleServiceResponsce = {
  __typename?: 'fetchSingleServiceResponsce';
  message?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Service>;
};

export type Loginresponsce = {
  __typename?: 'loginresponsce';
  accessToken?: Maybe<Scalars['String']['output']>;
  isAuthenticated?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

export type Subscription = {
  __typename?: 'subscription';
  createdAt?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  plan?: Maybe<Plan>;
  status?: Maybe<SubscriptionStatus>;
  subscription_end?: Maybe<Scalars['String']['output']>;
  subscription_time?: Maybe<Scalars['Float']['output']>;
  user?: Maybe<User>;
};

export type FetchAllServiceQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  filters?: InputMaybe<ServiceFilterInput>;
}>;


export type FetchAllServiceQuery = { __typename?: 'Query', fetchAllService?: { __typename?: 'fetchAllServiceResponsce', message?: string | null, pages?: number | null, total?: number | null, result?: Array<{ __typename?: 'Service', companyId?: string | null, createdAt?: number | null, description?: string | null, durationPreiod?: number | null, durationType?: string | null, id?: string | null, images?: Array<string | null> | null, name?: string | null, price?: number | null, serviceCategoryid?: string | null, slug?: string | null, updatedAt?: number | null } | null> | null } | null };

export type FetchSingleServiceQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type FetchSingleServiceQuery = { __typename?: 'Query', fetchSingleService?: { __typename?: 'fetchSingleServiceResponsce', message?: string | null, result?: { __typename?: 'Service', companyId?: string | null, createdAt?: number | null, description?: string | null, durationPreiod?: number | null, durationType?: string | null, id?: string | null, images?: Array<string | null> | null, name?: string | null, price?: number | null, serviceCategoryid?: string | null, slug?: string | null, updatedAt?: number | null } | null } | null };

export type RegisterMutationVariables = Exact<{
  user?: InputMaybe<UserInput>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename: 'defaultResposnce', message?: string | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id?: string | null, firstname?: string | null, lastname?: string | null, email?: string | null } | null };

export type LoginMutationVariables = Exact<{
  user?: InputMaybe<LoginInput>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'loginresponsce', accessToken?: string | null, message?: string | null, isAuthenticated?: boolean | null, success?: boolean | null, user?: { __typename?: 'User', id?: string | null, firstname?: string | null, lastname?: string | null, email?: string | null, role?: UserRole | null } | null } | null };

export type CreateCompanyWithOwnerMutationVariables = Exact<{
  userInput?: InputMaybe<UserInput>;
  ownerInput?: InputMaybe<OwnerInput>;
  companyInput?: InputMaybe<CompanyInput>;
  locationInput?: InputMaybe<LocationInput>;
  geoLocationInput?: InputMaybe<GeoLocationInput>;
}>;


export type CreateCompanyWithOwnerMutation = { __typename?: 'Mutation', createCompanyWithOwner?: { __typename?: 'companyLoginResponsce', accessToken?: string | null, isAuthenticated?: boolean | null, message?: string | null, success?: boolean | null, user?: { __typename?: 'CompanyUser', email?: string | null, firstname?: string | null, id?: string | null, lastname?: string | null, role?: UserRole | null, companyRole?: CompanyRole | null } | null } | null };


export const FetchAllServiceDocument = gql`
    query FetchAllService($page: Int, $limit: Int, $filters: ServiceFilterInput) {
  fetchAllService(page: $page, limit: $limit, filters: $filters) {
    message
    pages
    total
    result {
      companyId
      createdAt
      description
      durationPreiod
      durationType
      id
      images
      name
      price
      serviceCategoryid
      slug
      updatedAt
    }
  }
}
    `;

/**
 * __useFetchAllServiceQuery__
 *
 * To run a query within a React component, call `useFetchAllServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchAllServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchAllServiceQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useFetchAllServiceQuery(baseOptions?: Apollo.QueryHookOptions<FetchAllServiceQuery, FetchAllServiceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchAllServiceQuery, FetchAllServiceQueryVariables>(FetchAllServiceDocument, options);
      }
export function useFetchAllServiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchAllServiceQuery, FetchAllServiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchAllServiceQuery, FetchAllServiceQueryVariables>(FetchAllServiceDocument, options);
        }
export type FetchAllServiceQueryHookResult = ReturnType<typeof useFetchAllServiceQuery>;
export type FetchAllServiceLazyQueryHookResult = ReturnType<typeof useFetchAllServiceLazyQuery>;
export type FetchAllServiceQueryResult = Apollo.QueryResult<FetchAllServiceQuery, FetchAllServiceQueryVariables>;
export const FetchSingleServiceDocument = gql`
    query FetchSingleService($id: String, $slug: String) {
  fetchSingleService(id: $id, slug: $slug) {
    message
    result {
      companyId
      createdAt
      description
      durationPreiod
      durationType
      id
      images
      name
      price
      serviceCategoryid
      slug
      updatedAt
    }
  }
}
    `;

/**
 * __useFetchSingleServiceQuery__
 *
 * To run a query within a React component, call `useFetchSingleServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchSingleServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchSingleServiceQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFetchSingleServiceQuery(baseOptions?: Apollo.QueryHookOptions<FetchSingleServiceQuery, FetchSingleServiceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchSingleServiceQuery, FetchSingleServiceQueryVariables>(FetchSingleServiceDocument, options);
      }
export function useFetchSingleServiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchSingleServiceQuery, FetchSingleServiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchSingleServiceQuery, FetchSingleServiceQueryVariables>(FetchSingleServiceDocument, options);
        }
export type FetchSingleServiceQueryHookResult = ReturnType<typeof useFetchSingleServiceQuery>;
export type FetchSingleServiceLazyQueryHookResult = ReturnType<typeof useFetchSingleServiceLazyQuery>;
export type FetchSingleServiceQueryResult = Apollo.QueryResult<FetchSingleServiceQuery, FetchSingleServiceQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($user: UserInput) {
  register(user: $user) {
    __typename
    message
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    firstname
    lastname
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const LoginDocument = gql`
    mutation Login($user: LoginInput) {
  login(user: $user) {
    accessToken
    message
    user {
      id
      firstname
      lastname
      email
      role
    }
    isAuthenticated
    success
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateCompanyWithOwnerDocument = gql`
    mutation CreateCompanyWithOwner($userInput: UserInput, $ownerInput: OwnerInput, $companyInput: CompanyInput, $locationInput: LocationInput, $geoLocationInput: GeoLocationInput) {
  createCompanyWithOwner(
    userInput: $userInput
    ownerInput: $ownerInput
    companyInput: $companyInput
    locationInput: $locationInput
    geoLocationInput: $geoLocationInput
  ) {
    accessToken
    isAuthenticated
    message
    success
    user {
      email
      firstname
      id
      lastname
      role
      companyRole
    }
  }
}
    `;
export type CreateCompanyWithOwnerMutationFn = Apollo.MutationFunction<CreateCompanyWithOwnerMutation, CreateCompanyWithOwnerMutationVariables>;

/**
 * __useCreateCompanyWithOwnerMutation__
 *
 * To run a mutation, you first call `useCreateCompanyWithOwnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyWithOwnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyWithOwnerMutation, { data, loading, error }] = useCreateCompanyWithOwnerMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *      ownerInput: // value for 'ownerInput'
 *      companyInput: // value for 'companyInput'
 *      locationInput: // value for 'locationInput'
 *      geoLocationInput: // value for 'geoLocationInput'
 *   },
 * });
 */
export function useCreateCompanyWithOwnerMutation(baseOptions?: Apollo.MutationHookOptions<CreateCompanyWithOwnerMutation, CreateCompanyWithOwnerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCompanyWithOwnerMutation, CreateCompanyWithOwnerMutationVariables>(CreateCompanyWithOwnerDocument, options);
      }
export type CreateCompanyWithOwnerMutationHookResult = ReturnType<typeof useCreateCompanyWithOwnerMutation>;
export type CreateCompanyWithOwnerMutationResult = Apollo.MutationResult<CreateCompanyWithOwnerMutation>;
export type CreateCompanyWithOwnerMutationOptions = Apollo.BaseMutationOptions<CreateCompanyWithOwnerMutation, CreateCompanyWithOwnerMutationVariables>;