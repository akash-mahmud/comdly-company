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
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateBooking = {
  __typename?: 'AggregateBooking';
  _count?: Maybe<BookingCountAggregate>;
  _max?: Maybe<BookingMaxAggregate>;
  _min?: Maybe<BookingMinAggregate>;
};

export type AggregateBuisnessCategory = {
  __typename?: 'AggregateBuisnessCategory';
  _count?: Maybe<BuisnessCategoryCountAggregate>;
  _max?: Maybe<BuisnessCategoryMaxAggregate>;
  _min?: Maybe<BuisnessCategoryMinAggregate>;
};

export type AggregateBuisnessSubCategory = {
  __typename?: 'AggregateBuisnessSubCategory';
  _count?: Maybe<BuisnessSubCategoryCountAggregate>;
  _max?: Maybe<BuisnessSubCategoryMaxAggregate>;
  _min?: Maybe<BuisnessSubCategoryMinAggregate>;
};

export type AggregateCompany = {
  __typename?: 'AggregateCompany';
  _count?: Maybe<CompanyCountAggregate>;
  _max?: Maybe<CompanyMaxAggregate>;
  _min?: Maybe<CompanyMinAggregate>;
};

export type AggregateCustomFieldForProduct = {
  __typename?: 'AggregateCustomFieldForProduct';
  _count?: Maybe<CustomFieldForProductCountAggregate>;
  _max?: Maybe<CustomFieldForProductMaxAggregate>;
  _min?: Maybe<CustomFieldForProductMinAggregate>;
};

export type AggregateCustomProductFieldForBuisnessCategory = {
  __typename?: 'AggregateCustomProductFieldForBuisnessCategory';
  _count?: Maybe<CustomProductFieldForBuisnessCategoryCountAggregate>;
  _max?: Maybe<CustomProductFieldForBuisnessCategoryMaxAggregate>;
  _min?: Maybe<CustomProductFieldForBuisnessCategoryMinAggregate>;
};

export type AggregateCustomProductFieldForBuisnessCategoryValue = {
  __typename?: 'AggregateCustomProductFieldForBuisnessCategoryValue';
  _count?: Maybe<CustomProductFieldForBuisnessCategoryValueCountAggregate>;
  _max?: Maybe<CustomProductFieldForBuisnessCategoryValueMaxAggregate>;
  _min?: Maybe<CustomProductFieldForBuisnessCategoryValueMinAggregate>;
};

export type AggregateEmployee = {
  __typename?: 'AggregateEmployee';
  _count?: Maybe<EmployeeCountAggregate>;
  _max?: Maybe<EmployeeMaxAggregate>;
  _min?: Maybe<EmployeeMinAggregate>;
};

export type AggregateEvent = {
  __typename?: 'AggregateEvent';
  _count?: Maybe<EventCountAggregate>;
  _max?: Maybe<EventMaxAggregate>;
  _min?: Maybe<EventMinAggregate>;
};

export type AggregateFetaureCategory = {
  __typename?: 'AggregateFetaureCategory';
  _count?: Maybe<FetaureCategoryCountAggregate>;
  _max?: Maybe<FetaureCategoryMaxAggregate>;
  _min?: Maybe<FetaureCategoryMinAggregate>;
};

export type AggregateFetaures = {
  __typename?: 'AggregateFetaures';
  _count?: Maybe<FetauresCountAggregate>;
  _max?: Maybe<FetauresMaxAggregate>;
  _min?: Maybe<FetauresMinAggregate>;
};

export type AggregateGeolocation = {
  __typename?: 'AggregateGeolocation';
  _avg?: Maybe<GeolocationAvgAggregate>;
  _count?: Maybe<GeolocationCountAggregate>;
  _max?: Maybe<GeolocationMaxAggregate>;
  _min?: Maybe<GeolocationMinAggregate>;
  _sum?: Maybe<GeolocationSumAggregate>;
};

export type AggregateLocation = {
  __typename?: 'AggregateLocation';
  _count?: Maybe<LocationCountAggregate>;
  _max?: Maybe<LocationMaxAggregate>;
  _min?: Maybe<LocationMinAggregate>;
};

export type AggregateOwner = {
  __typename?: 'AggregateOwner';
  _count?: Maybe<OwnerCountAggregate>;
  _max?: Maybe<OwnerMaxAggregate>;
  _min?: Maybe<OwnerMinAggregate>;
};

export type AggregatePlan = {
  __typename?: 'AggregatePlan';
  _avg?: Maybe<PlanAvgAggregate>;
  _count?: Maybe<PlanCountAggregate>;
  _max?: Maybe<PlanMaxAggregate>;
  _min?: Maybe<PlanMinAggregate>;
  _sum?: Maybe<PlanSumAggregate>;
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
};

export type AggregateProvider = {
  __typename?: 'AggregateProvider';
  _avg?: Maybe<ProviderAvgAggregate>;
  _count?: Maybe<ProviderCountAggregate>;
  _max?: Maybe<ProviderMaxAggregate>;
  _min?: Maybe<ProviderMinAggregate>;
  _sum?: Maybe<ProviderSumAggregate>;
};

export type AggregateReview = {
  __typename?: 'AggregateReview';
  _avg?: Maybe<ReviewAvgAggregate>;
  _count?: Maybe<ReviewCountAggregate>;
  _max?: Maybe<ReviewMaxAggregate>;
  _min?: Maybe<ReviewMinAggregate>;
  _sum?: Maybe<ReviewSumAggregate>;
};

export type AggregateSiteDesighn = {
  __typename?: 'AggregateSiteDesighn';
  _count?: Maybe<SiteDesighnCountAggregate>;
  _max?: Maybe<SiteDesighnMaxAggregate>;
  _min?: Maybe<SiteDesighnMinAggregate>;
};

export type AggregateSubscription = {
  __typename?: 'AggregateSubscription';
  _count?: Maybe<SubscriptionCountAggregate>;
  _max?: Maybe<SubscriptionMaxAggregate>;
  _min?: Maybe<SubscriptionMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateUserTokens = {
  __typename?: 'AggregateUserTokens';
  _count?: Maybe<UserTokensCountAggregate>;
  _max?: Maybe<UserTokensMaxAggregate>;
  _min?: Maybe<UserTokensMinAggregate>;
};

export type Booking = {
  __typename?: 'Booking';
  bookingDate: Scalars['DateTime']['output'];
  bookingTime: Scalars['DateTime']['output'];
  company: Company;
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  status: BookingStatus;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type BookingCountAggregate = {
  __typename?: 'BookingCountAggregate';
  _all: Scalars['Int']['output'];
  bookingDate: Scalars['Int']['output'];
  bookingTime: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  note: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type BookingCountOrderByAggregateInput = {
  bookingDate?: InputMaybe<SortOrder>;
  bookingTime?: InputMaybe<SortOrder>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookingCreateInput = {
  bookingDate: Scalars['DateTime']['input'];
  bookingTime: Scalars['DateTime']['input'];
  company: CompanyCreateNestedOneWithoutBookingInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<BookingStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutBookingInput;
};

export type BookingCreateManyCompanyInput = {
  bookingDate: Scalars['DateTime']['input'];
  bookingTime: Scalars['DateTime']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<BookingStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type BookingCreateManyCompanyInputEnvelope = {
  data: Array<BookingCreateManyCompanyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookingCreateManyInput = {
  bookingDate: Scalars['DateTime']['input'];
  bookingTime: Scalars['DateTime']['input'];
  companyId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<BookingStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type BookingCreateManyUserInput = {
  bookingDate: Scalars['DateTime']['input'];
  bookingTime: Scalars['DateTime']['input'];
  companyId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<BookingStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BookingCreateManyUserInputEnvelope = {
  data: Array<BookingCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookingCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<BookingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookingCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<BookingCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<BookingCreateManyCompanyInputEnvelope>;
};

export type BookingCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<BookingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookingCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BookingCreateWithoutUserInput>>;
  createMany?: InputMaybe<BookingCreateManyUserInputEnvelope>;
};

export type BookingCreateOrConnectWithoutCompanyInput = {
  create: BookingCreateWithoutCompanyInput;
  where: BookingWhereUniqueInput;
};

export type BookingCreateOrConnectWithoutUserInput = {
  create: BookingCreateWithoutUserInput;
  where: BookingWhereUniqueInput;
};

export type BookingCreateWithoutCompanyInput = {
  bookingDate: Scalars['DateTime']['input'];
  bookingTime: Scalars['DateTime']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<BookingStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutBookingInput;
};

export type BookingCreateWithoutUserInput = {
  bookingDate: Scalars['DateTime']['input'];
  bookingTime: Scalars['DateTime']['input'];
  company: CompanyCreateNestedOneWithoutBookingInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<BookingStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BookingGroupBy = {
  __typename?: 'BookingGroupBy';
  _count?: Maybe<BookingCountAggregate>;
  _max?: Maybe<BookingMaxAggregate>;
  _min?: Maybe<BookingMinAggregate>;
  bookingDate: Scalars['DateTime']['output'];
  bookingTime: Scalars['DateTime']['output'];
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  status: BookingStatus;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type BookingListRelationFilter = {
  every?: InputMaybe<BookingWhereInput>;
  none?: InputMaybe<BookingWhereInput>;
  some?: InputMaybe<BookingWhereInput>;
};

export type BookingMaxAggregate = {
  __typename?: 'BookingMaxAggregate';
  bookingDate?: Maybe<Scalars['DateTime']['output']>;
  bookingTime?: Maybe<Scalars['DateTime']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  status?: Maybe<BookingStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BookingMaxOrderByAggregateInput = {
  bookingDate?: InputMaybe<SortOrder>;
  bookingTime?: InputMaybe<SortOrder>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookingMinAggregate = {
  __typename?: 'BookingMinAggregate';
  bookingDate?: Maybe<Scalars['DateTime']['output']>;
  bookingTime?: Maybe<Scalars['DateTime']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  status?: Maybe<BookingStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BookingMinOrderByAggregateInput = {
  bookingDate?: InputMaybe<SortOrder>;
  bookingTime?: InputMaybe<SortOrder>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookingOrderByWithAggregationInput = {
  _count?: InputMaybe<BookingCountOrderByAggregateInput>;
  _max?: InputMaybe<BookingMaxOrderByAggregateInput>;
  _min?: InputMaybe<BookingMinOrderByAggregateInput>;
  bookingDate?: InputMaybe<SortOrder>;
  bookingTime?: InputMaybe<SortOrder>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookingOrderByWithRelationInput = {
  bookingDate?: InputMaybe<SortOrder>;
  bookingTime?: InputMaybe<SortOrder>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum BookingScalarFieldEnum {
  BookingDate = 'bookingDate',
  BookingTime = 'bookingTime',
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Note = 'note',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type BookingScalarWhereInput = {
  AND?: InputMaybe<Array<BookingScalarWhereInput>>;
  NOT?: InputMaybe<Array<BookingScalarWhereInput>>;
  OR?: InputMaybe<Array<BookingScalarWhereInput>>;
  bookingDate?: InputMaybe<DateTimeFilter>;
  bookingTime?: InputMaybe<DateTimeFilter>;
  companyId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumBookingStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BookingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BookingScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BookingScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BookingScalarWhereWithAggregatesInput>>;
  bookingDate?: InputMaybe<DateTimeWithAggregatesFilter>;
  bookingTime?: InputMaybe<DateTimeWithAggregatesFilter>;
  companyId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  note?: InputMaybe<StringNullableWithAggregatesFilter>;
  status?: InputMaybe<EnumBookingStatusWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export enum BookingStatus {
  Active = 'active',
  Cancelled = 'cancelled',
  NotApproved = 'notApproved',
  Pending = 'pending'
}

export type BookingUpdateInput = {
  bookingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  bookingTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutBookingNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBookingStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBookingNestedInput>;
};

export type BookingUpdateManyMutationInput = {
  bookingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  bookingTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBookingStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookingUpdateManyWithWhereWithoutCompanyInput = {
  data: BookingUpdateManyMutationInput;
  where: BookingScalarWhereInput;
};

export type BookingUpdateManyWithWhereWithoutUserInput = {
  data: BookingUpdateManyMutationInput;
  where: BookingScalarWhereInput;
};

export type BookingUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<BookingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookingCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<BookingCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<BookingCreateManyCompanyInputEnvelope>;
  delete?: InputMaybe<Array<BookingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookingWhereUniqueInput>>;
  set?: InputMaybe<Array<BookingWhereUniqueInput>>;
  update?: InputMaybe<Array<BookingUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: InputMaybe<Array<BookingUpdateManyWithWhereWithoutCompanyInput>>;
  upsert?: InputMaybe<Array<BookingUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type BookingUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<BookingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookingCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BookingCreateWithoutUserInput>>;
  createMany?: InputMaybe<BookingCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<BookingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookingWhereUniqueInput>>;
  set?: InputMaybe<Array<BookingWhereUniqueInput>>;
  update?: InputMaybe<Array<BookingUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<BookingUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<BookingUpsertWithWhereUniqueWithoutUserInput>>;
};

export type BookingUpdateWithWhereUniqueWithoutCompanyInput = {
  data: BookingUpdateWithoutCompanyInput;
  where: BookingWhereUniqueInput;
};

export type BookingUpdateWithWhereUniqueWithoutUserInput = {
  data: BookingUpdateWithoutUserInput;
  where: BookingWhereUniqueInput;
};

export type BookingUpdateWithoutCompanyInput = {
  bookingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  bookingTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBookingStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBookingNestedInput>;
};

export type BookingUpdateWithoutUserInput = {
  bookingDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  bookingTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutBookingNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  note?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBookingStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookingUpsertWithWhereUniqueWithoutCompanyInput = {
  create: BookingCreateWithoutCompanyInput;
  update: BookingUpdateWithoutCompanyInput;
  where: BookingWhereUniqueInput;
};

export type BookingUpsertWithWhereUniqueWithoutUserInput = {
  create: BookingCreateWithoutUserInput;
  update: BookingUpdateWithoutUserInput;
  where: BookingWhereUniqueInput;
};

export type BookingWhereInput = {
  AND?: InputMaybe<Array<BookingWhereInput>>;
  NOT?: InputMaybe<Array<BookingWhereInput>>;
  OR?: InputMaybe<Array<BookingWhereInput>>;
  bookingDate?: InputMaybe<DateTimeFilter>;
  bookingTime?: InputMaybe<DateTimeFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumBookingStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BookingWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type BuisnessCategory = {
  __typename?: 'BuisnessCategory';
  _count?: Maybe<BuisnessCategoryCount>;
  buisnessSubCategory: Array<BuisnessSubCategory>;
  company: Array<Company>;
  customField: Array<CustomProductFieldForBuisnessCategory>;
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product: Array<Product>;
  slug: Scalars['String']['output'];
};


export type BuisnessCategoryBuisnessSubCategoryArgs = {
  cursor?: InputMaybe<BuisnessSubCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<BuisnessSubCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BuisnessSubCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BuisnessSubCategoryWhereInput>;
};


export type BuisnessCategoryCompanyArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type BuisnessCategoryCustomFieldArgs = {
  cursor?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereInput>;
};


export type BuisnessCategoryProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type BuisnessCategoryCount = {
  __typename?: 'BuisnessCategoryCount';
  buisnessSubCategory: Scalars['Int']['output'];
  company: Scalars['Int']['output'];
  customField: Scalars['Int']['output'];
  product: Scalars['Int']['output'];
};


export type BuisnessCategoryCountBuisnessSubCategoryArgs = {
  where?: InputMaybe<BuisnessSubCategoryWhereInput>;
};


export type BuisnessCategoryCountCompanyArgs = {
  where?: InputMaybe<CompanyWhereInput>;
};


export type BuisnessCategoryCountCustomFieldArgs = {
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereInput>;
};


export type BuisnessCategoryCountProductArgs = {
  where?: InputMaybe<ProductWhereInput>;
};

export type BuisnessCategoryCountAggregate = {
  __typename?: 'BuisnessCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
};

export type BuisnessCategoryCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
};

export type BuisnessCategoryCreateInput = {
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedManyWithoutBuisnessCategoryInput>;
  company?: InputMaybe<CompanyCreateNestedManyWithoutBuisnessCategoryInput>;
  customField?: InputMaybe<CustomProductFieldForBuisnessCategoryCreateNestedManyWithoutBuisnessCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  product?: InputMaybe<ProductCreateNestedManyWithoutBuisnessCategoryInput>;
  slug: Scalars['String']['input'];
};

export type BuisnessCategoryCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type BuisnessCategoryCreateNestedOneWithoutBuisnessSubCategoryInput = {
  connect?: InputMaybe<BuisnessCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BuisnessCategoryCreateOrConnectWithoutBuisnessSubCategoryInput>;
  create?: InputMaybe<BuisnessCategoryCreateWithoutBuisnessSubCategoryInput>;
};

export type BuisnessCategoryCreateNestedOneWithoutCompanyInput = {
  connect?: InputMaybe<BuisnessCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BuisnessCategoryCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<BuisnessCategoryCreateWithoutCompanyInput>;
};

export type BuisnessCategoryCreateNestedOneWithoutCustomFieldInput = {
  connect?: InputMaybe<BuisnessCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BuisnessCategoryCreateOrConnectWithoutCustomFieldInput>;
  create?: InputMaybe<BuisnessCategoryCreateWithoutCustomFieldInput>;
};

export type BuisnessCategoryCreateNestedOneWithoutProductInput = {
  connect?: InputMaybe<BuisnessCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BuisnessCategoryCreateOrConnectWithoutProductInput>;
  create?: InputMaybe<BuisnessCategoryCreateWithoutProductInput>;
};

export type BuisnessCategoryCreateOrConnectWithoutBuisnessSubCategoryInput = {
  create: BuisnessCategoryCreateWithoutBuisnessSubCategoryInput;
  where: BuisnessCategoryWhereUniqueInput;
};

export type BuisnessCategoryCreateOrConnectWithoutCompanyInput = {
  create: BuisnessCategoryCreateWithoutCompanyInput;
  where: BuisnessCategoryWhereUniqueInput;
};

export type BuisnessCategoryCreateOrConnectWithoutCustomFieldInput = {
  create: BuisnessCategoryCreateWithoutCustomFieldInput;
  where: BuisnessCategoryWhereUniqueInput;
};

export type BuisnessCategoryCreateOrConnectWithoutProductInput = {
  create: BuisnessCategoryCreateWithoutProductInput;
  where: BuisnessCategoryWhereUniqueInput;
};

export type BuisnessCategoryCreateWithoutBuisnessSubCategoryInput = {
  company?: InputMaybe<CompanyCreateNestedManyWithoutBuisnessCategoryInput>;
  customField?: InputMaybe<CustomProductFieldForBuisnessCategoryCreateNestedManyWithoutBuisnessCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  product?: InputMaybe<ProductCreateNestedManyWithoutBuisnessCategoryInput>;
  slug: Scalars['String']['input'];
};

export type BuisnessCategoryCreateWithoutCompanyInput = {
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedManyWithoutBuisnessCategoryInput>;
  customField?: InputMaybe<CustomProductFieldForBuisnessCategoryCreateNestedManyWithoutBuisnessCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  product?: InputMaybe<ProductCreateNestedManyWithoutBuisnessCategoryInput>;
  slug: Scalars['String']['input'];
};

export type BuisnessCategoryCreateWithoutCustomFieldInput = {
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedManyWithoutBuisnessCategoryInput>;
  company?: InputMaybe<CompanyCreateNestedManyWithoutBuisnessCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  product?: InputMaybe<ProductCreateNestedManyWithoutBuisnessCategoryInput>;
  slug: Scalars['String']['input'];
};

export type BuisnessCategoryCreateWithoutProductInput = {
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedManyWithoutBuisnessCategoryInput>;
  company?: InputMaybe<CompanyCreateNestedManyWithoutBuisnessCategoryInput>;
  customField?: InputMaybe<CustomProductFieldForBuisnessCategoryCreateNestedManyWithoutBuisnessCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type BuisnessCategoryGroupBy = {
  __typename?: 'BuisnessCategoryGroupBy';
  _count?: Maybe<BuisnessCategoryCountAggregate>;
  _max?: Maybe<BuisnessCategoryMaxAggregate>;
  _min?: Maybe<BuisnessCategoryMinAggregate>;
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type BuisnessCategoryMaxAggregate = {
  __typename?: 'BuisnessCategoryMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type BuisnessCategoryMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
};

export type BuisnessCategoryMinAggregate = {
  __typename?: 'BuisnessCategoryMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type BuisnessCategoryMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
};

export type BuisnessCategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<BuisnessCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<BuisnessCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<BuisnessCategoryMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
};

export type BuisnessCategoryOrderByWithRelationInput = {
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryOrderByRelationAggregateInput>;
  company?: InputMaybe<CompanyOrderByRelationAggregateInput>;
  customField?: InputMaybe<CustomProductFieldForBuisnessCategoryOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
};

export type BuisnessCategoryRelationFilter = {
  is?: InputMaybe<BuisnessCategoryWhereInput>;
  isNot?: InputMaybe<BuisnessCategoryWhereInput>;
};

export enum BuisnessCategoryScalarFieldEnum {
  Id = 'id',
  Image = 'image',
  Name = 'name',
  Slug = 'slug'
}

export type BuisnessCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BuisnessCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BuisnessCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BuisnessCategoryScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
};

export type BuisnessCategoryUpdateInput = {
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateManyWithoutBuisnessCategoryNestedInput>;
  company?: InputMaybe<CompanyUpdateManyWithoutBuisnessCategoryNestedInput>;
  customField?: InputMaybe<CustomProductFieldForBuisnessCategoryUpdateManyWithoutBuisnessCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateManyWithoutBuisnessCategoryNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BuisnessCategoryUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BuisnessCategoryUpdateOneRequiredWithoutBuisnessSubCategoryNestedInput = {
  connect?: InputMaybe<BuisnessCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BuisnessCategoryCreateOrConnectWithoutBuisnessSubCategoryInput>;
  create?: InputMaybe<BuisnessCategoryCreateWithoutBuisnessSubCategoryInput>;
  update?: InputMaybe<BuisnessCategoryUpdateWithoutBuisnessSubCategoryInput>;
  upsert?: InputMaybe<BuisnessCategoryUpsertWithoutBuisnessSubCategoryInput>;
};

export type BuisnessCategoryUpdateOneRequiredWithoutCustomFieldNestedInput = {
  connect?: InputMaybe<BuisnessCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BuisnessCategoryCreateOrConnectWithoutCustomFieldInput>;
  create?: InputMaybe<BuisnessCategoryCreateWithoutCustomFieldInput>;
  update?: InputMaybe<BuisnessCategoryUpdateWithoutCustomFieldInput>;
  upsert?: InputMaybe<BuisnessCategoryUpsertWithoutCustomFieldInput>;
};

export type BuisnessCategoryUpdateOneWithoutCompanyNestedInput = {
  connect?: InputMaybe<BuisnessCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BuisnessCategoryCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<BuisnessCategoryCreateWithoutCompanyInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<BuisnessCategoryUpdateWithoutCompanyInput>;
  upsert?: InputMaybe<BuisnessCategoryUpsertWithoutCompanyInput>;
};

export type BuisnessCategoryUpdateOneWithoutProductNestedInput = {
  connect?: InputMaybe<BuisnessCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BuisnessCategoryCreateOrConnectWithoutProductInput>;
  create?: InputMaybe<BuisnessCategoryCreateWithoutProductInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<BuisnessCategoryUpdateWithoutProductInput>;
  upsert?: InputMaybe<BuisnessCategoryUpsertWithoutProductInput>;
};

export type BuisnessCategoryUpdateWithoutBuisnessSubCategoryInput = {
  company?: InputMaybe<CompanyUpdateManyWithoutBuisnessCategoryNestedInput>;
  customField?: InputMaybe<CustomProductFieldForBuisnessCategoryUpdateManyWithoutBuisnessCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateManyWithoutBuisnessCategoryNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BuisnessCategoryUpdateWithoutCompanyInput = {
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateManyWithoutBuisnessCategoryNestedInput>;
  customField?: InputMaybe<CustomProductFieldForBuisnessCategoryUpdateManyWithoutBuisnessCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateManyWithoutBuisnessCategoryNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BuisnessCategoryUpdateWithoutCustomFieldInput = {
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateManyWithoutBuisnessCategoryNestedInput>;
  company?: InputMaybe<CompanyUpdateManyWithoutBuisnessCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateManyWithoutBuisnessCategoryNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BuisnessCategoryUpdateWithoutProductInput = {
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateManyWithoutBuisnessCategoryNestedInput>;
  company?: InputMaybe<CompanyUpdateManyWithoutBuisnessCategoryNestedInput>;
  customField?: InputMaybe<CustomProductFieldForBuisnessCategoryUpdateManyWithoutBuisnessCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BuisnessCategoryUpsertWithoutBuisnessSubCategoryInput = {
  create: BuisnessCategoryCreateWithoutBuisnessSubCategoryInput;
  update: BuisnessCategoryUpdateWithoutBuisnessSubCategoryInput;
};

export type BuisnessCategoryUpsertWithoutCompanyInput = {
  create: BuisnessCategoryCreateWithoutCompanyInput;
  update: BuisnessCategoryUpdateWithoutCompanyInput;
};

export type BuisnessCategoryUpsertWithoutCustomFieldInput = {
  create: BuisnessCategoryCreateWithoutCustomFieldInput;
  update: BuisnessCategoryUpdateWithoutCustomFieldInput;
};

export type BuisnessCategoryUpsertWithoutProductInput = {
  create: BuisnessCategoryCreateWithoutProductInput;
  update: BuisnessCategoryUpdateWithoutProductInput;
};

export type BuisnessCategoryWhereInput = {
  AND?: InputMaybe<Array<BuisnessCategoryWhereInput>>;
  NOT?: InputMaybe<Array<BuisnessCategoryWhereInput>>;
  OR?: InputMaybe<Array<BuisnessCategoryWhereInput>>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryListRelationFilter>;
  company?: InputMaybe<CompanyListRelationFilter>;
  customField?: InputMaybe<CustomProductFieldForBuisnessCategoryListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
};

export type BuisnessCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type BuisnessSubCategory = {
  __typename?: 'BuisnessSubCategory';
  _count?: Maybe<BuisnessSubCategoryCount>;
  buisnessCategory: BuisnessCategory;
  buisnessCategoryId: Scalars['String']['output'];
  company: Array<Company>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product: Array<Product>;
};


export type BuisnessSubCategoryCompanyArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type BuisnessSubCategoryProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type BuisnessSubCategoryCount = {
  __typename?: 'BuisnessSubCategoryCount';
  company: Scalars['Int']['output'];
  product: Scalars['Int']['output'];
};


export type BuisnessSubCategoryCountCompanyArgs = {
  where?: InputMaybe<CompanyWhereInput>;
};


export type BuisnessSubCategoryCountProductArgs = {
  where?: InputMaybe<ProductWhereInput>;
};

export type BuisnessSubCategoryCountAggregate = {
  __typename?: 'BuisnessSubCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  buisnessCategoryId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type BuisnessSubCategoryCountOrderByAggregateInput = {
  buisnessCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type BuisnessSubCategoryCreateInput = {
  buisnessCategory: BuisnessCategoryCreateNestedOneWithoutBuisnessSubCategoryInput;
  company?: InputMaybe<CompanyCreateNestedManyWithoutBuisnessSubCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  product?: InputMaybe<ProductCreateNestedManyWithoutBuisnessSubCategoryInput>;
};

export type BuisnessSubCategoryCreateManyBuisnessCategoryInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type BuisnessSubCategoryCreateManyBuisnessCategoryInputEnvelope = {
  data: Array<BuisnessSubCategoryCreateManyBuisnessCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BuisnessSubCategoryCreateManyInput = {
  buisnessCategoryId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type BuisnessSubCategoryCreateNestedManyWithoutBuisnessCategoryInput = {
  connect?: InputMaybe<Array<BuisnessSubCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuisnessSubCategoryCreateOrConnectWithoutBuisnessCategoryInput>>;
  create?: InputMaybe<Array<BuisnessSubCategoryCreateWithoutBuisnessCategoryInput>>;
  createMany?: InputMaybe<BuisnessSubCategoryCreateManyBuisnessCategoryInputEnvelope>;
};

export type BuisnessSubCategoryCreateNestedOneWithoutCompanyInput = {
  connect?: InputMaybe<BuisnessSubCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BuisnessSubCategoryCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<BuisnessSubCategoryCreateWithoutCompanyInput>;
};

export type BuisnessSubCategoryCreateNestedOneWithoutProductInput = {
  connect?: InputMaybe<BuisnessSubCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BuisnessSubCategoryCreateOrConnectWithoutProductInput>;
  create?: InputMaybe<BuisnessSubCategoryCreateWithoutProductInput>;
};

export type BuisnessSubCategoryCreateOrConnectWithoutBuisnessCategoryInput = {
  create: BuisnessSubCategoryCreateWithoutBuisnessCategoryInput;
  where: BuisnessSubCategoryWhereUniqueInput;
};

export type BuisnessSubCategoryCreateOrConnectWithoutCompanyInput = {
  create: BuisnessSubCategoryCreateWithoutCompanyInput;
  where: BuisnessSubCategoryWhereUniqueInput;
};

export type BuisnessSubCategoryCreateOrConnectWithoutProductInput = {
  create: BuisnessSubCategoryCreateWithoutProductInput;
  where: BuisnessSubCategoryWhereUniqueInput;
};

export type BuisnessSubCategoryCreateWithoutBuisnessCategoryInput = {
  company?: InputMaybe<CompanyCreateNestedManyWithoutBuisnessSubCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  product?: InputMaybe<ProductCreateNestedManyWithoutBuisnessSubCategoryInput>;
};

export type BuisnessSubCategoryCreateWithoutCompanyInput = {
  buisnessCategory: BuisnessCategoryCreateNestedOneWithoutBuisnessSubCategoryInput;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  product?: InputMaybe<ProductCreateNestedManyWithoutBuisnessSubCategoryInput>;
};

export type BuisnessSubCategoryCreateWithoutProductInput = {
  buisnessCategory: BuisnessCategoryCreateNestedOneWithoutBuisnessSubCategoryInput;
  company?: InputMaybe<CompanyCreateNestedManyWithoutBuisnessSubCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type BuisnessSubCategoryGroupBy = {
  __typename?: 'BuisnessSubCategoryGroupBy';
  _count?: Maybe<BuisnessSubCategoryCountAggregate>;
  _max?: Maybe<BuisnessSubCategoryMaxAggregate>;
  _min?: Maybe<BuisnessSubCategoryMinAggregate>;
  buisnessCategoryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type BuisnessSubCategoryListRelationFilter = {
  every?: InputMaybe<BuisnessSubCategoryWhereInput>;
  none?: InputMaybe<BuisnessSubCategoryWhereInput>;
  some?: InputMaybe<BuisnessSubCategoryWhereInput>;
};

export type BuisnessSubCategoryMaxAggregate = {
  __typename?: 'BuisnessSubCategoryMaxAggregate';
  buisnessCategoryId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BuisnessSubCategoryMaxOrderByAggregateInput = {
  buisnessCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type BuisnessSubCategoryMinAggregate = {
  __typename?: 'BuisnessSubCategoryMinAggregate';
  buisnessCategoryId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BuisnessSubCategoryMinOrderByAggregateInput = {
  buisnessCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type BuisnessSubCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BuisnessSubCategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<BuisnessSubCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<BuisnessSubCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<BuisnessSubCategoryMinOrderByAggregateInput>;
  buisnessCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type BuisnessSubCategoryOrderByWithRelationInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryOrderByWithRelationInput>;
  buisnessCategoryId?: InputMaybe<SortOrder>;
  company?: InputMaybe<CompanyOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByRelationAggregateInput>;
};

export type BuisnessSubCategoryRelationFilter = {
  is?: InputMaybe<BuisnessSubCategoryWhereInput>;
  isNot?: InputMaybe<BuisnessSubCategoryWhereInput>;
};

export enum BuisnessSubCategoryScalarFieldEnum {
  BuisnessCategoryId = 'buisnessCategoryId',
  Id = 'id',
  Name = 'name'
}

export type BuisnessSubCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<BuisnessSubCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<BuisnessSubCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<BuisnessSubCategoryScalarWhereInput>>;
  buisnessCategoryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type BuisnessSubCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BuisnessSubCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BuisnessSubCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BuisnessSubCategoryScalarWhereWithAggregatesInput>>;
  buisnessCategoryId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type BuisnessSubCategoryUpdateInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneRequiredWithoutBuisnessSubCategoryNestedInput>;
  company?: InputMaybe<CompanyUpdateManyWithoutBuisnessSubCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateManyWithoutBuisnessSubCategoryNestedInput>;
};

export type BuisnessSubCategoryUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BuisnessSubCategoryUpdateManyWithWhereWithoutBuisnessCategoryInput = {
  data: BuisnessSubCategoryUpdateManyMutationInput;
  where: BuisnessSubCategoryScalarWhereInput;
};

export type BuisnessSubCategoryUpdateManyWithoutBuisnessCategoryNestedInput = {
  connect?: InputMaybe<Array<BuisnessSubCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuisnessSubCategoryCreateOrConnectWithoutBuisnessCategoryInput>>;
  create?: InputMaybe<Array<BuisnessSubCategoryCreateWithoutBuisnessCategoryInput>>;
  createMany?: InputMaybe<BuisnessSubCategoryCreateManyBuisnessCategoryInputEnvelope>;
  delete?: InputMaybe<Array<BuisnessSubCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BuisnessSubCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BuisnessSubCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<BuisnessSubCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<BuisnessSubCategoryUpdateWithWhereUniqueWithoutBuisnessCategoryInput>>;
  updateMany?: InputMaybe<Array<BuisnessSubCategoryUpdateManyWithWhereWithoutBuisnessCategoryInput>>;
  upsert?: InputMaybe<Array<BuisnessSubCategoryUpsertWithWhereUniqueWithoutBuisnessCategoryInput>>;
};

export type BuisnessSubCategoryUpdateOneWithoutCompanyNestedInput = {
  connect?: InputMaybe<BuisnessSubCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BuisnessSubCategoryCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<BuisnessSubCategoryCreateWithoutCompanyInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<BuisnessSubCategoryUpdateWithoutCompanyInput>;
  upsert?: InputMaybe<BuisnessSubCategoryUpsertWithoutCompanyInput>;
};

export type BuisnessSubCategoryUpdateOneWithoutProductNestedInput = {
  connect?: InputMaybe<BuisnessSubCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BuisnessSubCategoryCreateOrConnectWithoutProductInput>;
  create?: InputMaybe<BuisnessSubCategoryCreateWithoutProductInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<BuisnessSubCategoryUpdateWithoutProductInput>;
  upsert?: InputMaybe<BuisnessSubCategoryUpsertWithoutProductInput>;
};

export type BuisnessSubCategoryUpdateWithWhereUniqueWithoutBuisnessCategoryInput = {
  data: BuisnessSubCategoryUpdateWithoutBuisnessCategoryInput;
  where: BuisnessSubCategoryWhereUniqueInput;
};

export type BuisnessSubCategoryUpdateWithoutBuisnessCategoryInput = {
  company?: InputMaybe<CompanyUpdateManyWithoutBuisnessSubCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateManyWithoutBuisnessSubCategoryNestedInput>;
};

export type BuisnessSubCategoryUpdateWithoutCompanyInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneRequiredWithoutBuisnessSubCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateManyWithoutBuisnessSubCategoryNestedInput>;
};

export type BuisnessSubCategoryUpdateWithoutProductInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneRequiredWithoutBuisnessSubCategoryNestedInput>;
  company?: InputMaybe<CompanyUpdateManyWithoutBuisnessSubCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type BuisnessSubCategoryUpsertWithWhereUniqueWithoutBuisnessCategoryInput = {
  create: BuisnessSubCategoryCreateWithoutBuisnessCategoryInput;
  update: BuisnessSubCategoryUpdateWithoutBuisnessCategoryInput;
  where: BuisnessSubCategoryWhereUniqueInput;
};

export type BuisnessSubCategoryUpsertWithoutCompanyInput = {
  create: BuisnessSubCategoryCreateWithoutCompanyInput;
  update: BuisnessSubCategoryUpdateWithoutCompanyInput;
};

export type BuisnessSubCategoryUpsertWithoutProductInput = {
  create: BuisnessSubCategoryCreateWithoutProductInput;
  update: BuisnessSubCategoryUpdateWithoutProductInput;
};

export type BuisnessSubCategoryWhereInput = {
  AND?: InputMaybe<Array<BuisnessSubCategoryWhereInput>>;
  NOT?: InputMaybe<Array<BuisnessSubCategoryWhereInput>>;
  OR?: InputMaybe<Array<BuisnessSubCategoryWhereInput>>;
  buisnessCategory?: InputMaybe<BuisnessCategoryRelationFilter>;
  buisnessCategoryId?: InputMaybe<StringFilter>;
  company?: InputMaybe<CompanyListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductListRelationFilter>;
};

export type BuisnessSubCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Company = {
  __typename?: 'Company';
  _count?: Maybe<CompanyCount>;
  avater: Scalars['String']['output'];
  booking: Array<Booking>;
  buisnessCategory?: Maybe<BuisnessCategory>;
  buisnessCategoryId?: Maybe<Scalars['String']['output']>;
  buisnessSubCategory?: Maybe<BuisnessSubCategory>;
  buisnessSubCategoryId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customer_Id?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  employee: Array<Employee>;
  fetaureImage: Scalars['String']['output'];
  geolocation?: Maybe<Geolocation>;
  id: Scalars['String']['output'];
  location?: Maybe<Location>;
  logo: Scalars['String']['output'];
  name: Scalars['String']['output'];
  owner?: Maybe<Owner>;
  plan?: Maybe<Plan>;
  planId?: Maybe<Scalars['String']['output']>;
  product: Array<Product>;
  siteDesighn?: Maybe<SiteDesighn>;
  slug: Scalars['String']['output'];
  subscription?: Maybe<Subscription>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};


export type CompanyBookingArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookingWhereInput>;
};


export type CompanyEmployeeArgs = {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeWhereInput>;
};


export type CompanyProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type CompanyCount = {
  __typename?: 'CompanyCount';
  booking: Scalars['Int']['output'];
  employee: Scalars['Int']['output'];
  product: Scalars['Int']['output'];
};


export type CompanyCountBookingArgs = {
  where?: InputMaybe<BookingWhereInput>;
};


export type CompanyCountEmployeeArgs = {
  where?: InputMaybe<EmployeeWhereInput>;
};


export type CompanyCountProductArgs = {
  where?: InputMaybe<ProductWhereInput>;
};

export type CompanyCountAggregate = {
  __typename?: 'CompanyCountAggregate';
  _all: Scalars['Int']['output'];
  avater: Scalars['Int']['output'];
  buisnessCategoryId: Scalars['Int']['output'];
  buisnessSubCategoryId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  customer_Id: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  fetaureImage: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  logo: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  planId: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  subscriptionId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type CompanyCountOrderByAggregateInput = {
  avater?: InputMaybe<SortOrder>;
  buisnessCategoryId?: InputMaybe<SortOrder>;
  buisnessSubCategoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customer_Id?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fetaureImage?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  planId?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  subscriptionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CompanyCreateInput = {
  avater: Scalars['String']['input'];
  booking?: InputMaybe<BookingCreateNestedManyWithoutCompanyInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutCompanyInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutCompanyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutCompanyInput>;
  fetaureImage: Scalars['String']['input'];
  geolocation?: InputMaybe<GeolocationCreateNestedOneWithoutCompanyInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationCreateNestedOneWithoutCompanyInput>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutCompanyInput>;
  plan?: InputMaybe<PlanCreateNestedOneWithoutCompanyInput>;
  product?: InputMaybe<ProductCreateNestedManyWithoutCompanyInput>;
  siteDesighn?: InputMaybe<SiteDesighnCreateNestedOneWithoutCompanyInput>;
  slug: Scalars['String']['input'];
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutCompanyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCompanyInput;
};

export type CompanyCreateManyBuisnessCategoryInput = {
  avater: Scalars['String']['input'];
  buisnessSubCategoryId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  fetaureImage: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  planId?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  subscriptionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type CompanyCreateManyBuisnessCategoryInputEnvelope = {
  data: Array<CompanyCreateManyBuisnessCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CompanyCreateManyBuisnessSubCategoryInput = {
  avater: Scalars['String']['input'];
  buisnessCategoryId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  fetaureImage: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  planId?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  subscriptionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type CompanyCreateManyBuisnessSubCategoryInputEnvelope = {
  data: Array<CompanyCreateManyBuisnessSubCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CompanyCreateManyInput = {
  avater: Scalars['String']['input'];
  buisnessCategoryId?: InputMaybe<Scalars['String']['input']>;
  buisnessSubCategoryId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  fetaureImage: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  planId?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  subscriptionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type CompanyCreateManyPlanInput = {
  avater: Scalars['String']['input'];
  buisnessCategoryId?: InputMaybe<Scalars['String']['input']>;
  buisnessSubCategoryId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  fetaureImage: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  subscriptionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type CompanyCreateManyPlanInputEnvelope = {
  data: Array<CompanyCreateManyPlanInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CompanyCreateNestedManyWithoutBuisnessCategoryInput = {
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCreateOrConnectWithoutBuisnessCategoryInput>>;
  create?: InputMaybe<Array<CompanyCreateWithoutBuisnessCategoryInput>>;
  createMany?: InputMaybe<CompanyCreateManyBuisnessCategoryInputEnvelope>;
};

export type CompanyCreateNestedManyWithoutBuisnessSubCategoryInput = {
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCreateOrConnectWithoutBuisnessSubCategoryInput>>;
  create?: InputMaybe<Array<CompanyCreateWithoutBuisnessSubCategoryInput>>;
  createMany?: InputMaybe<CompanyCreateManyBuisnessSubCategoryInputEnvelope>;
};

export type CompanyCreateNestedManyWithoutPlanInput = {
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCreateOrConnectWithoutPlanInput>>;
  create?: InputMaybe<Array<CompanyCreateWithoutPlanInput>>;
  createMany?: InputMaybe<CompanyCreateManyPlanInputEnvelope>;
};

export type CompanyCreateNestedOneWithoutBookingInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutBookingInput>;
  create?: InputMaybe<CompanyCreateWithoutBookingInput>;
};

export type CompanyCreateNestedOneWithoutEmployeeInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutEmployeeInput>;
  create?: InputMaybe<CompanyCreateWithoutEmployeeInput>;
};

export type CompanyCreateNestedOneWithoutGeolocationInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutGeolocationInput>;
  create?: InputMaybe<CompanyCreateWithoutGeolocationInput>;
};

export type CompanyCreateNestedOneWithoutLocationInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutLocationInput>;
  create?: InputMaybe<CompanyCreateWithoutLocationInput>;
};

export type CompanyCreateNestedOneWithoutOwnerInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutOwnerInput>;
  create?: InputMaybe<CompanyCreateWithoutOwnerInput>;
};

export type CompanyCreateNestedOneWithoutProductInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutProductInput>;
  create?: InputMaybe<CompanyCreateWithoutProductInput>;
};

export type CompanyCreateNestedOneWithoutSiteDesighnInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutSiteDesighnInput>;
  create?: InputMaybe<CompanyCreateWithoutSiteDesighnInput>;
};

export type CompanyCreateNestedOneWithoutSubscriptionInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutSubscriptionInput>;
  create?: InputMaybe<CompanyCreateWithoutSubscriptionInput>;
};

export type CompanyCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<CompanyCreateWithoutUserInput>;
};

export type CompanyCreateOrConnectWithoutBookingInput = {
  create: CompanyCreateWithoutBookingInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutBuisnessCategoryInput = {
  create: CompanyCreateWithoutBuisnessCategoryInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutBuisnessSubCategoryInput = {
  create: CompanyCreateWithoutBuisnessSubCategoryInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutEmployeeInput = {
  create: CompanyCreateWithoutEmployeeInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutGeolocationInput = {
  create: CompanyCreateWithoutGeolocationInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutLocationInput = {
  create: CompanyCreateWithoutLocationInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutOwnerInput = {
  create: CompanyCreateWithoutOwnerInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutPlanInput = {
  create: CompanyCreateWithoutPlanInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutProductInput = {
  create: CompanyCreateWithoutProductInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutSiteDesighnInput = {
  create: CompanyCreateWithoutSiteDesighnInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutSubscriptionInput = {
  create: CompanyCreateWithoutSubscriptionInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateOrConnectWithoutUserInput = {
  create: CompanyCreateWithoutUserInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyCreateWithoutBookingInput = {
  avater: Scalars['String']['input'];
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutCompanyInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutCompanyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutCompanyInput>;
  fetaureImage: Scalars['String']['input'];
  geolocation?: InputMaybe<GeolocationCreateNestedOneWithoutCompanyInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationCreateNestedOneWithoutCompanyInput>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutCompanyInput>;
  plan?: InputMaybe<PlanCreateNestedOneWithoutCompanyInput>;
  product?: InputMaybe<ProductCreateNestedManyWithoutCompanyInput>;
  siteDesighn?: InputMaybe<SiteDesighnCreateNestedOneWithoutCompanyInput>;
  slug: Scalars['String']['input'];
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutCompanyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCompanyInput;
};

export type CompanyCreateWithoutBuisnessCategoryInput = {
  avater: Scalars['String']['input'];
  booking?: InputMaybe<BookingCreateNestedManyWithoutCompanyInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutCompanyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutCompanyInput>;
  fetaureImage: Scalars['String']['input'];
  geolocation?: InputMaybe<GeolocationCreateNestedOneWithoutCompanyInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationCreateNestedOneWithoutCompanyInput>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutCompanyInput>;
  plan?: InputMaybe<PlanCreateNestedOneWithoutCompanyInput>;
  product?: InputMaybe<ProductCreateNestedManyWithoutCompanyInput>;
  siteDesighn?: InputMaybe<SiteDesighnCreateNestedOneWithoutCompanyInput>;
  slug: Scalars['String']['input'];
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutCompanyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCompanyInput;
};

export type CompanyCreateWithoutBuisnessSubCategoryInput = {
  avater: Scalars['String']['input'];
  booking?: InputMaybe<BookingCreateNestedManyWithoutCompanyInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutCompanyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutCompanyInput>;
  fetaureImage: Scalars['String']['input'];
  geolocation?: InputMaybe<GeolocationCreateNestedOneWithoutCompanyInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationCreateNestedOneWithoutCompanyInput>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutCompanyInput>;
  plan?: InputMaybe<PlanCreateNestedOneWithoutCompanyInput>;
  product?: InputMaybe<ProductCreateNestedManyWithoutCompanyInput>;
  siteDesighn?: InputMaybe<SiteDesighnCreateNestedOneWithoutCompanyInput>;
  slug: Scalars['String']['input'];
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutCompanyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCompanyInput;
};

export type CompanyCreateWithoutEmployeeInput = {
  avater: Scalars['String']['input'];
  booking?: InputMaybe<BookingCreateNestedManyWithoutCompanyInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutCompanyInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutCompanyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  fetaureImage: Scalars['String']['input'];
  geolocation?: InputMaybe<GeolocationCreateNestedOneWithoutCompanyInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationCreateNestedOneWithoutCompanyInput>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutCompanyInput>;
  plan?: InputMaybe<PlanCreateNestedOneWithoutCompanyInput>;
  product?: InputMaybe<ProductCreateNestedManyWithoutCompanyInput>;
  siteDesighn?: InputMaybe<SiteDesighnCreateNestedOneWithoutCompanyInput>;
  slug: Scalars['String']['input'];
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutCompanyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCompanyInput;
};

export type CompanyCreateWithoutGeolocationInput = {
  avater: Scalars['String']['input'];
  booking?: InputMaybe<BookingCreateNestedManyWithoutCompanyInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutCompanyInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutCompanyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutCompanyInput>;
  fetaureImage: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationCreateNestedOneWithoutCompanyInput>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutCompanyInput>;
  plan?: InputMaybe<PlanCreateNestedOneWithoutCompanyInput>;
  product?: InputMaybe<ProductCreateNestedManyWithoutCompanyInput>;
  siteDesighn?: InputMaybe<SiteDesighnCreateNestedOneWithoutCompanyInput>;
  slug: Scalars['String']['input'];
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutCompanyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCompanyInput;
};

export type CompanyCreateWithoutLocationInput = {
  avater: Scalars['String']['input'];
  booking?: InputMaybe<BookingCreateNestedManyWithoutCompanyInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutCompanyInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutCompanyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutCompanyInput>;
  fetaureImage: Scalars['String']['input'];
  geolocation?: InputMaybe<GeolocationCreateNestedOneWithoutCompanyInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutCompanyInput>;
  plan?: InputMaybe<PlanCreateNestedOneWithoutCompanyInput>;
  product?: InputMaybe<ProductCreateNestedManyWithoutCompanyInput>;
  siteDesighn?: InputMaybe<SiteDesighnCreateNestedOneWithoutCompanyInput>;
  slug: Scalars['String']['input'];
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutCompanyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCompanyInput;
};

export type CompanyCreateWithoutOwnerInput = {
  avater: Scalars['String']['input'];
  booking?: InputMaybe<BookingCreateNestedManyWithoutCompanyInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutCompanyInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutCompanyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutCompanyInput>;
  fetaureImage: Scalars['String']['input'];
  geolocation?: InputMaybe<GeolocationCreateNestedOneWithoutCompanyInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationCreateNestedOneWithoutCompanyInput>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  plan?: InputMaybe<PlanCreateNestedOneWithoutCompanyInput>;
  product?: InputMaybe<ProductCreateNestedManyWithoutCompanyInput>;
  siteDesighn?: InputMaybe<SiteDesighnCreateNestedOneWithoutCompanyInput>;
  slug: Scalars['String']['input'];
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutCompanyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCompanyInput;
};

export type CompanyCreateWithoutPlanInput = {
  avater: Scalars['String']['input'];
  booking?: InputMaybe<BookingCreateNestedManyWithoutCompanyInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutCompanyInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutCompanyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutCompanyInput>;
  fetaureImage: Scalars['String']['input'];
  geolocation?: InputMaybe<GeolocationCreateNestedOneWithoutCompanyInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationCreateNestedOneWithoutCompanyInput>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutCompanyInput>;
  product?: InputMaybe<ProductCreateNestedManyWithoutCompanyInput>;
  siteDesighn?: InputMaybe<SiteDesighnCreateNestedOneWithoutCompanyInput>;
  slug: Scalars['String']['input'];
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutCompanyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCompanyInput;
};

export type CompanyCreateWithoutProductInput = {
  avater: Scalars['String']['input'];
  booking?: InputMaybe<BookingCreateNestedManyWithoutCompanyInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutCompanyInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutCompanyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutCompanyInput>;
  fetaureImage: Scalars['String']['input'];
  geolocation?: InputMaybe<GeolocationCreateNestedOneWithoutCompanyInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationCreateNestedOneWithoutCompanyInput>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutCompanyInput>;
  plan?: InputMaybe<PlanCreateNestedOneWithoutCompanyInput>;
  siteDesighn?: InputMaybe<SiteDesighnCreateNestedOneWithoutCompanyInput>;
  slug: Scalars['String']['input'];
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutCompanyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCompanyInput;
};

export type CompanyCreateWithoutSiteDesighnInput = {
  avater: Scalars['String']['input'];
  booking?: InputMaybe<BookingCreateNestedManyWithoutCompanyInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutCompanyInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutCompanyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutCompanyInput>;
  fetaureImage: Scalars['String']['input'];
  geolocation?: InputMaybe<GeolocationCreateNestedOneWithoutCompanyInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationCreateNestedOneWithoutCompanyInput>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutCompanyInput>;
  plan?: InputMaybe<PlanCreateNestedOneWithoutCompanyInput>;
  product?: InputMaybe<ProductCreateNestedManyWithoutCompanyInput>;
  slug: Scalars['String']['input'];
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutCompanyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCompanyInput;
};

export type CompanyCreateWithoutSubscriptionInput = {
  avater: Scalars['String']['input'];
  booking?: InputMaybe<BookingCreateNestedManyWithoutCompanyInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutCompanyInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutCompanyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutCompanyInput>;
  fetaureImage: Scalars['String']['input'];
  geolocation?: InputMaybe<GeolocationCreateNestedOneWithoutCompanyInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationCreateNestedOneWithoutCompanyInput>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutCompanyInput>;
  plan?: InputMaybe<PlanCreateNestedOneWithoutCompanyInput>;
  product?: InputMaybe<ProductCreateNestedManyWithoutCompanyInput>;
  siteDesighn?: InputMaybe<SiteDesighnCreateNestedOneWithoutCompanyInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutCompanyInput;
};

export type CompanyCreateWithoutUserInput = {
  avater: Scalars['String']['input'];
  booking?: InputMaybe<BookingCreateNestedManyWithoutCompanyInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutCompanyInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutCompanyInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedManyWithoutCompanyInput>;
  fetaureImage: Scalars['String']['input'];
  geolocation?: InputMaybe<GeolocationCreateNestedOneWithoutCompanyInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationCreateNestedOneWithoutCompanyInput>;
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutCompanyInput>;
  plan?: InputMaybe<PlanCreateNestedOneWithoutCompanyInput>;
  product?: InputMaybe<ProductCreateNestedManyWithoutCompanyInput>;
  siteDesighn?: InputMaybe<SiteDesighnCreateNestedOneWithoutCompanyInput>;
  slug: Scalars['String']['input'];
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutCompanyInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CompanyGroupBy = {
  __typename?: 'CompanyGroupBy';
  _count?: Maybe<CompanyCountAggregate>;
  _max?: Maybe<CompanyMaxAggregate>;
  _min?: Maybe<CompanyMinAggregate>;
  avater: Scalars['String']['output'];
  buisnessCategoryId?: Maybe<Scalars['String']['output']>;
  buisnessSubCategoryId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customer_Id?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  fetaureImage: Scalars['String']['output'];
  id: Scalars['String']['output'];
  logo: Scalars['String']['output'];
  name: Scalars['String']['output'];
  planId?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  subscriptionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type CompanyListRelationFilter = {
  every?: InputMaybe<CompanyWhereInput>;
  none?: InputMaybe<CompanyWhereInput>;
  some?: InputMaybe<CompanyWhereInput>;
};

export type CompanyMaxAggregate = {
  __typename?: 'CompanyMaxAggregate';
  avater?: Maybe<Scalars['String']['output']>;
  buisnessCategoryId?: Maybe<Scalars['String']['output']>;
  buisnessSubCategoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customer_Id?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fetaureImage?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CompanyMaxOrderByAggregateInput = {
  avater?: InputMaybe<SortOrder>;
  buisnessCategoryId?: InputMaybe<SortOrder>;
  buisnessSubCategoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customer_Id?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fetaureImage?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  planId?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  subscriptionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CompanyMinAggregate = {
  __typename?: 'CompanyMinAggregate';
  avater?: Maybe<Scalars['String']['output']>;
  buisnessCategoryId?: Maybe<Scalars['String']['output']>;
  buisnessSubCategoryId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customer_Id?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fetaureImage?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CompanyMinOrderByAggregateInput = {
  avater?: InputMaybe<SortOrder>;
  buisnessCategoryId?: InputMaybe<SortOrder>;
  buisnessSubCategoryId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customer_Id?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fetaureImage?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  planId?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  subscriptionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CompanyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CompanyOrderByWithAggregationInput = {
  _count?: InputMaybe<CompanyCountOrderByAggregateInput>;
  _max?: InputMaybe<CompanyMaxOrderByAggregateInput>;
  _min?: InputMaybe<CompanyMinOrderByAggregateInput>;
  avater?: InputMaybe<SortOrder>;
  buisnessCategoryId?: InputMaybe<SortOrderInput>;
  buisnessSubCategoryId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  customer_Id?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrder>;
  fetaureImage?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  planId?: InputMaybe<SortOrderInput>;
  slug?: InputMaybe<SortOrder>;
  subscriptionId?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CompanyOrderByWithRelationInput = {
  avater?: InputMaybe<SortOrder>;
  booking?: InputMaybe<BookingOrderByRelationAggregateInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryOrderByWithRelationInput>;
  buisnessCategoryId?: InputMaybe<SortOrderInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryOrderByWithRelationInput>;
  buisnessSubCategoryId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  customer_Id?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrder>;
  employee?: InputMaybe<EmployeeOrderByRelationAggregateInput>;
  fetaureImage?: InputMaybe<SortOrder>;
  geolocation?: InputMaybe<GeolocationOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<LocationOrderByWithRelationInput>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  owner?: InputMaybe<OwnerOrderByWithRelationInput>;
  plan?: InputMaybe<PlanOrderByWithRelationInput>;
  planId?: InputMaybe<SortOrderInput>;
  product?: InputMaybe<ProductOrderByRelationAggregateInput>;
  siteDesighn?: InputMaybe<SiteDesighnOrderByWithRelationInput>;
  slug?: InputMaybe<SortOrder>;
  subscription?: InputMaybe<SubscriptionOrderByWithRelationInput>;
  subscriptionId?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type CompanyRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>;
  isNot?: InputMaybe<CompanyWhereInput>;
};

export enum CompanyRole {
  Employee = 'employee',
  Owner = 'owner'
}

export enum CompanyScalarFieldEnum {
  Avater = 'avater',
  BuisnessCategoryId = 'buisnessCategoryId',
  BuisnessSubCategoryId = 'buisnessSubCategoryId',
  CreatedAt = 'createdAt',
  CustomerId = 'customer_Id',
  Description = 'description',
  FetaureImage = 'fetaureImage',
  Id = 'id',
  Logo = 'logo',
  Name = 'name',
  PlanId = 'planId',
  Slug = 'slug',
  SubscriptionId = 'subscriptionId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type CompanyScalarWhereInput = {
  AND?: InputMaybe<Array<CompanyScalarWhereInput>>;
  NOT?: InputMaybe<Array<CompanyScalarWhereInput>>;
  OR?: InputMaybe<Array<CompanyScalarWhereInput>>;
  avater?: InputMaybe<StringFilter>;
  buisnessCategoryId?: InputMaybe<StringNullableFilter>;
  buisnessSubCategoryId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer_Id?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringFilter>;
  fetaureImage?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  logo?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  planId?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  subscriptionId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CompanyScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CompanyScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CompanyScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CompanyScalarWhereWithAggregatesInput>>;
  avater?: InputMaybe<StringWithAggregatesFilter>;
  buisnessCategoryId?: InputMaybe<StringNullableWithAggregatesFilter>;
  buisnessSubCategoryId?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  customer_Id?: InputMaybe<StringNullableWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  fetaureImage?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  logo?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  planId?: InputMaybe<StringNullableWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  subscriptionId?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type CompanyUpdateInput = {
  avater?: InputMaybe<StringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutCompanyNestedInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutCompanyNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutCompanyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer_Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutCompanyNestedInput>;
  fetaureImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  geolocation?: InputMaybe<GeolocationUpdateOneWithoutCompanyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutCompanyNestedInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutCompanyNestedInput>;
  plan?: InputMaybe<PlanUpdateOneWithoutCompanyNestedInput>;
  product?: InputMaybe<ProductUpdateManyWithoutCompanyNestedInput>;
  siteDesighn?: InputMaybe<SiteDesighnUpdateOneWithoutCompanyNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutCompanyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCompanyNestedInput>;
};

export type CompanyUpdateManyMutationInput = {
  avater?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer_Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  fetaureImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompanyUpdateManyWithWhereWithoutBuisnessCategoryInput = {
  data: CompanyUpdateManyMutationInput;
  where: CompanyScalarWhereInput;
};

export type CompanyUpdateManyWithWhereWithoutBuisnessSubCategoryInput = {
  data: CompanyUpdateManyMutationInput;
  where: CompanyScalarWhereInput;
};

export type CompanyUpdateManyWithWhereWithoutPlanInput = {
  data: CompanyUpdateManyMutationInput;
  where: CompanyScalarWhereInput;
};

export type CompanyUpdateManyWithoutBuisnessCategoryNestedInput = {
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCreateOrConnectWithoutBuisnessCategoryInput>>;
  create?: InputMaybe<Array<CompanyCreateWithoutBuisnessCategoryInput>>;
  createMany?: InputMaybe<CompanyCreateManyBuisnessCategoryInputEnvelope>;
  delete?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CompanyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  set?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  update?: InputMaybe<Array<CompanyUpdateWithWhereUniqueWithoutBuisnessCategoryInput>>;
  updateMany?: InputMaybe<Array<CompanyUpdateManyWithWhereWithoutBuisnessCategoryInput>>;
  upsert?: InputMaybe<Array<CompanyUpsertWithWhereUniqueWithoutBuisnessCategoryInput>>;
};

export type CompanyUpdateManyWithoutBuisnessSubCategoryNestedInput = {
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCreateOrConnectWithoutBuisnessSubCategoryInput>>;
  create?: InputMaybe<Array<CompanyCreateWithoutBuisnessSubCategoryInput>>;
  createMany?: InputMaybe<CompanyCreateManyBuisnessSubCategoryInputEnvelope>;
  delete?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CompanyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  set?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  update?: InputMaybe<Array<CompanyUpdateWithWhereUniqueWithoutBuisnessSubCategoryInput>>;
  updateMany?: InputMaybe<Array<CompanyUpdateManyWithWhereWithoutBuisnessSubCategoryInput>>;
  upsert?: InputMaybe<Array<CompanyUpsertWithWhereUniqueWithoutBuisnessSubCategoryInput>>;
};

export type CompanyUpdateManyWithoutPlanNestedInput = {
  connect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyCreateOrConnectWithoutPlanInput>>;
  create?: InputMaybe<Array<CompanyCreateWithoutPlanInput>>;
  createMany?: InputMaybe<CompanyCreateManyPlanInputEnvelope>;
  delete?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CompanyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  set?: InputMaybe<Array<CompanyWhereUniqueInput>>;
  update?: InputMaybe<Array<CompanyUpdateWithWhereUniqueWithoutPlanInput>>;
  updateMany?: InputMaybe<Array<CompanyUpdateManyWithWhereWithoutPlanInput>>;
  upsert?: InputMaybe<Array<CompanyUpsertWithWhereUniqueWithoutPlanInput>>;
};

export type CompanyUpdateOneRequiredWithoutBookingNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutBookingInput>;
  create?: InputMaybe<CompanyCreateWithoutBookingInput>;
  update?: InputMaybe<CompanyUpdateWithoutBookingInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutBookingInput>;
};

export type CompanyUpdateOneRequiredWithoutGeolocationNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutGeolocationInput>;
  create?: InputMaybe<CompanyCreateWithoutGeolocationInput>;
  update?: InputMaybe<CompanyUpdateWithoutGeolocationInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutGeolocationInput>;
};

export type CompanyUpdateOneRequiredWithoutLocationNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutLocationInput>;
  create?: InputMaybe<CompanyCreateWithoutLocationInput>;
  update?: InputMaybe<CompanyUpdateWithoutLocationInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutLocationInput>;
};

export type CompanyUpdateOneRequiredWithoutSiteDesighnNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutSiteDesighnInput>;
  create?: InputMaybe<CompanyCreateWithoutSiteDesighnInput>;
  update?: InputMaybe<CompanyUpdateWithoutSiteDesighnInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutSiteDesighnInput>;
};

export type CompanyUpdateOneWithoutEmployeeNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutEmployeeInput>;
  create?: InputMaybe<CompanyCreateWithoutEmployeeInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CompanyUpdateWithoutEmployeeInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutEmployeeInput>;
};

export type CompanyUpdateOneWithoutOwnerNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutOwnerInput>;
  create?: InputMaybe<CompanyCreateWithoutOwnerInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CompanyUpdateWithoutOwnerInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutOwnerInput>;
};

export type CompanyUpdateOneWithoutProductNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutProductInput>;
  create?: InputMaybe<CompanyCreateWithoutProductInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CompanyUpdateWithoutProductInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutProductInput>;
};

export type CompanyUpdateOneWithoutSubscriptionNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutSubscriptionInput>;
  create?: InputMaybe<CompanyCreateWithoutSubscriptionInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CompanyUpdateWithoutSubscriptionInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutSubscriptionInput>;
};

export type CompanyUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CompanyCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<CompanyCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CompanyUpdateWithoutUserInput>;
  upsert?: InputMaybe<CompanyUpsertWithoutUserInput>;
};

export type CompanyUpdateWithWhereUniqueWithoutBuisnessCategoryInput = {
  data: CompanyUpdateWithoutBuisnessCategoryInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpdateWithWhereUniqueWithoutBuisnessSubCategoryInput = {
  data: CompanyUpdateWithoutBuisnessSubCategoryInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpdateWithWhereUniqueWithoutPlanInput = {
  data: CompanyUpdateWithoutPlanInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpdateWithoutBookingInput = {
  avater?: InputMaybe<StringFieldUpdateOperationsInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutCompanyNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutCompanyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer_Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutCompanyNestedInput>;
  fetaureImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  geolocation?: InputMaybe<GeolocationUpdateOneWithoutCompanyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutCompanyNestedInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutCompanyNestedInput>;
  plan?: InputMaybe<PlanUpdateOneWithoutCompanyNestedInput>;
  product?: InputMaybe<ProductUpdateManyWithoutCompanyNestedInput>;
  siteDesighn?: InputMaybe<SiteDesighnUpdateOneWithoutCompanyNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutCompanyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCompanyNestedInput>;
};

export type CompanyUpdateWithoutBuisnessCategoryInput = {
  avater?: InputMaybe<StringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutCompanyNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutCompanyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer_Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutCompanyNestedInput>;
  fetaureImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  geolocation?: InputMaybe<GeolocationUpdateOneWithoutCompanyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutCompanyNestedInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutCompanyNestedInput>;
  plan?: InputMaybe<PlanUpdateOneWithoutCompanyNestedInput>;
  product?: InputMaybe<ProductUpdateManyWithoutCompanyNestedInput>;
  siteDesighn?: InputMaybe<SiteDesighnUpdateOneWithoutCompanyNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutCompanyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCompanyNestedInput>;
};

export type CompanyUpdateWithoutBuisnessSubCategoryInput = {
  avater?: InputMaybe<StringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutCompanyNestedInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutCompanyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer_Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutCompanyNestedInput>;
  fetaureImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  geolocation?: InputMaybe<GeolocationUpdateOneWithoutCompanyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutCompanyNestedInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutCompanyNestedInput>;
  plan?: InputMaybe<PlanUpdateOneWithoutCompanyNestedInput>;
  product?: InputMaybe<ProductUpdateManyWithoutCompanyNestedInput>;
  siteDesighn?: InputMaybe<SiteDesighnUpdateOneWithoutCompanyNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutCompanyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCompanyNestedInput>;
};

export type CompanyUpdateWithoutEmployeeInput = {
  avater?: InputMaybe<StringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutCompanyNestedInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutCompanyNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutCompanyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer_Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  fetaureImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  geolocation?: InputMaybe<GeolocationUpdateOneWithoutCompanyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutCompanyNestedInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutCompanyNestedInput>;
  plan?: InputMaybe<PlanUpdateOneWithoutCompanyNestedInput>;
  product?: InputMaybe<ProductUpdateManyWithoutCompanyNestedInput>;
  siteDesighn?: InputMaybe<SiteDesighnUpdateOneWithoutCompanyNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutCompanyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCompanyNestedInput>;
};

export type CompanyUpdateWithoutGeolocationInput = {
  avater?: InputMaybe<StringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutCompanyNestedInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutCompanyNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutCompanyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer_Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutCompanyNestedInput>;
  fetaureImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutCompanyNestedInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutCompanyNestedInput>;
  plan?: InputMaybe<PlanUpdateOneWithoutCompanyNestedInput>;
  product?: InputMaybe<ProductUpdateManyWithoutCompanyNestedInput>;
  siteDesighn?: InputMaybe<SiteDesighnUpdateOneWithoutCompanyNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutCompanyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCompanyNestedInput>;
};

export type CompanyUpdateWithoutLocationInput = {
  avater?: InputMaybe<StringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutCompanyNestedInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutCompanyNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutCompanyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer_Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutCompanyNestedInput>;
  fetaureImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  geolocation?: InputMaybe<GeolocationUpdateOneWithoutCompanyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutCompanyNestedInput>;
  plan?: InputMaybe<PlanUpdateOneWithoutCompanyNestedInput>;
  product?: InputMaybe<ProductUpdateManyWithoutCompanyNestedInput>;
  siteDesighn?: InputMaybe<SiteDesighnUpdateOneWithoutCompanyNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutCompanyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCompanyNestedInput>;
};

export type CompanyUpdateWithoutOwnerInput = {
  avater?: InputMaybe<StringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutCompanyNestedInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutCompanyNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutCompanyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer_Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutCompanyNestedInput>;
  fetaureImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  geolocation?: InputMaybe<GeolocationUpdateOneWithoutCompanyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutCompanyNestedInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  plan?: InputMaybe<PlanUpdateOneWithoutCompanyNestedInput>;
  product?: InputMaybe<ProductUpdateManyWithoutCompanyNestedInput>;
  siteDesighn?: InputMaybe<SiteDesighnUpdateOneWithoutCompanyNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutCompanyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCompanyNestedInput>;
};

export type CompanyUpdateWithoutPlanInput = {
  avater?: InputMaybe<StringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutCompanyNestedInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutCompanyNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutCompanyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer_Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutCompanyNestedInput>;
  fetaureImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  geolocation?: InputMaybe<GeolocationUpdateOneWithoutCompanyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutCompanyNestedInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutCompanyNestedInput>;
  product?: InputMaybe<ProductUpdateManyWithoutCompanyNestedInput>;
  siteDesighn?: InputMaybe<SiteDesighnUpdateOneWithoutCompanyNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutCompanyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCompanyNestedInput>;
};

export type CompanyUpdateWithoutProductInput = {
  avater?: InputMaybe<StringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutCompanyNestedInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutCompanyNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutCompanyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer_Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutCompanyNestedInput>;
  fetaureImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  geolocation?: InputMaybe<GeolocationUpdateOneWithoutCompanyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutCompanyNestedInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutCompanyNestedInput>;
  plan?: InputMaybe<PlanUpdateOneWithoutCompanyNestedInput>;
  siteDesighn?: InputMaybe<SiteDesighnUpdateOneWithoutCompanyNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutCompanyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCompanyNestedInput>;
};

export type CompanyUpdateWithoutSiteDesighnInput = {
  avater?: InputMaybe<StringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutCompanyNestedInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutCompanyNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutCompanyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer_Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutCompanyNestedInput>;
  fetaureImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  geolocation?: InputMaybe<GeolocationUpdateOneWithoutCompanyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutCompanyNestedInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutCompanyNestedInput>;
  plan?: InputMaybe<PlanUpdateOneWithoutCompanyNestedInput>;
  product?: InputMaybe<ProductUpdateManyWithoutCompanyNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutCompanyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCompanyNestedInput>;
};

export type CompanyUpdateWithoutSubscriptionInput = {
  avater?: InputMaybe<StringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutCompanyNestedInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutCompanyNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutCompanyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer_Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutCompanyNestedInput>;
  fetaureImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  geolocation?: InputMaybe<GeolocationUpdateOneWithoutCompanyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutCompanyNestedInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutCompanyNestedInput>;
  plan?: InputMaybe<PlanUpdateOneWithoutCompanyNestedInput>;
  product?: InputMaybe<ProductUpdateManyWithoutCompanyNestedInput>;
  siteDesighn?: InputMaybe<SiteDesighnUpdateOneWithoutCompanyNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCompanyNestedInput>;
};

export type CompanyUpdateWithoutUserInput = {
  avater?: InputMaybe<StringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutCompanyNestedInput>;
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutCompanyNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutCompanyNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer_Id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateManyWithoutCompanyNestedInput>;
  fetaureImage?: InputMaybe<StringFieldUpdateOperationsInput>;
  geolocation?: InputMaybe<GeolocationUpdateOneWithoutCompanyNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<LocationUpdateOneWithoutCompanyNestedInput>;
  logo?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutCompanyNestedInput>;
  plan?: InputMaybe<PlanUpdateOneWithoutCompanyNestedInput>;
  product?: InputMaybe<ProductUpdateManyWithoutCompanyNestedInput>;
  siteDesighn?: InputMaybe<SiteDesighnUpdateOneWithoutCompanyNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutCompanyNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CompanyUpsertWithWhereUniqueWithoutBuisnessCategoryInput = {
  create: CompanyCreateWithoutBuisnessCategoryInput;
  update: CompanyUpdateWithoutBuisnessCategoryInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpsertWithWhereUniqueWithoutBuisnessSubCategoryInput = {
  create: CompanyCreateWithoutBuisnessSubCategoryInput;
  update: CompanyUpdateWithoutBuisnessSubCategoryInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpsertWithWhereUniqueWithoutPlanInput = {
  create: CompanyCreateWithoutPlanInput;
  update: CompanyUpdateWithoutPlanInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpsertWithoutBookingInput = {
  create: CompanyCreateWithoutBookingInput;
  update: CompanyUpdateWithoutBookingInput;
};

export type CompanyUpsertWithoutEmployeeInput = {
  create: CompanyCreateWithoutEmployeeInput;
  update: CompanyUpdateWithoutEmployeeInput;
};

export type CompanyUpsertWithoutGeolocationInput = {
  create: CompanyCreateWithoutGeolocationInput;
  update: CompanyUpdateWithoutGeolocationInput;
};

export type CompanyUpsertWithoutLocationInput = {
  create: CompanyCreateWithoutLocationInput;
  update: CompanyUpdateWithoutLocationInput;
};

export type CompanyUpsertWithoutOwnerInput = {
  create: CompanyCreateWithoutOwnerInput;
  update: CompanyUpdateWithoutOwnerInput;
};

export type CompanyUpsertWithoutProductInput = {
  create: CompanyCreateWithoutProductInput;
  update: CompanyUpdateWithoutProductInput;
};

export type CompanyUpsertWithoutSiteDesighnInput = {
  create: CompanyCreateWithoutSiteDesighnInput;
  update: CompanyUpdateWithoutSiteDesighnInput;
};

export type CompanyUpsertWithoutSubscriptionInput = {
  create: CompanyCreateWithoutSubscriptionInput;
  update: CompanyUpdateWithoutSubscriptionInput;
};

export type CompanyUpsertWithoutUserInput = {
  create: CompanyCreateWithoutUserInput;
  update: CompanyUpdateWithoutUserInput;
};

export type CompanyUserForResponsce = {
  __typename?: 'CompanyUserForResponsce';
  avater?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  avater?: InputMaybe<StringFilter>;
  booking?: InputMaybe<BookingListRelationFilter>;
  buisnessCategory?: InputMaybe<BuisnessCategoryRelationFilter>;
  buisnessCategoryId?: InputMaybe<StringNullableFilter>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryRelationFilter>;
  buisnessSubCategoryId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer_Id?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringFilter>;
  employee?: InputMaybe<EmployeeListRelationFilter>;
  fetaureImage?: InputMaybe<StringFilter>;
  geolocation?: InputMaybe<GeolocationRelationFilter>;
  id?: InputMaybe<StringFilter>;
  location?: InputMaybe<LocationRelationFilter>;
  logo?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  owner?: InputMaybe<OwnerRelationFilter>;
  plan?: InputMaybe<PlanRelationFilter>;
  planId?: InputMaybe<StringNullableFilter>;
  product?: InputMaybe<ProductListRelationFilter>;
  siteDesighn?: InputMaybe<SiteDesighnRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  subscription?: InputMaybe<SubscriptionRelationFilter>;
  subscriptionId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CompanyWhereUniqueInput = {
  customer_Id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subscriptionId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** New user data */
export type CreateOneUserArgsCustom = {
  avater?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type CustomFieldForProduct = {
  __typename?: 'CustomFieldForProduct';
  id: Scalars['String']['output'];
};

export type CustomFieldForProductCountAggregate = {
  __typename?: 'CustomFieldForProductCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
};

export type CustomFieldForProductCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CustomFieldForProductCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CustomFieldForProductCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CustomFieldForProductGroupBy = {
  __typename?: 'CustomFieldForProductGroupBy';
  _count?: Maybe<CustomFieldForProductCountAggregate>;
  _max?: Maybe<CustomFieldForProductMaxAggregate>;
  _min?: Maybe<CustomFieldForProductMinAggregate>;
  id: Scalars['String']['output'];
};

export type CustomFieldForProductMaxAggregate = {
  __typename?: 'CustomFieldForProductMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
};

export type CustomFieldForProductMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CustomFieldForProductMinAggregate = {
  __typename?: 'CustomFieldForProductMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
};

export type CustomFieldForProductMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CustomFieldForProductOrderByWithAggregationInput = {
  _count?: InputMaybe<CustomFieldForProductCountOrderByAggregateInput>;
  _max?: InputMaybe<CustomFieldForProductMaxOrderByAggregateInput>;
  _min?: InputMaybe<CustomFieldForProductMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
};

export type CustomFieldForProductOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
};

export enum CustomFieldForProductScalarFieldEnum {
  Id = 'id'
}

export type CustomFieldForProductScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CustomFieldForProductScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CustomFieldForProductScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CustomFieldForProductScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
};

export type CustomFieldForProductUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CustomFieldForProductUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CustomFieldForProductWhereInput = {
  AND?: InputMaybe<Array<CustomFieldForProductWhereInput>>;
  NOT?: InputMaybe<Array<CustomFieldForProductWhereInput>>;
  OR?: InputMaybe<Array<CustomFieldForProductWhereInput>>;
  id?: InputMaybe<StringFilter>;
};

export type CustomFieldForProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CustomProductFieldForBuisnessCategory = {
  __typename?: 'CustomProductFieldForBuisnessCategory';
  _count?: Maybe<CustomProductFieldForBuisnessCategoryCount>;
  buisnessCategory: BuisnessCategory;
  buisnessCategoryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  values: Array<CustomProductFieldForBuisnessCategoryValue>;
};


export type CustomProductFieldForBuisnessCategoryValuesArgs = {
  cursor?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereInput>;
};

export type CustomProductFieldForBuisnessCategoryCount = {
  __typename?: 'CustomProductFieldForBuisnessCategoryCount';
  values: Scalars['Int']['output'];
};


export type CustomProductFieldForBuisnessCategoryCountValuesArgs = {
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereInput>;
};

export type CustomProductFieldForBuisnessCategoryCountAggregate = {
  __typename?: 'CustomProductFieldForBuisnessCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  buisnessCategoryId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
};

export type CustomProductFieldForBuisnessCategoryCountOrderByAggregateInput = {
  buisnessCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type CustomProductFieldForBuisnessCategoryCreateInput = {
  buisnessCategory: BuisnessCategoryCreateNestedOneWithoutCustomFieldInput;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
  values?: InputMaybe<CustomProductFieldForBuisnessCategoryValueCreateNestedManyWithoutCustomProductFieldForBuisnessCategoryInput>;
};

export type CustomProductFieldForBuisnessCategoryCreateManyBuisnessCategoryInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CustomProductFieldForBuisnessCategoryCreateManyBuisnessCategoryInputEnvelope = {
  data: Array<CustomProductFieldForBuisnessCategoryCreateManyBuisnessCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomProductFieldForBuisnessCategoryCreateManyInput = {
  buisnessCategoryId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CustomProductFieldForBuisnessCategoryCreateNestedManyWithoutBuisnessCategoryInput = {
  connect?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryCreateOrConnectWithoutBuisnessCategoryInput>>;
  create?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryCreateWithoutBuisnessCategoryInput>>;
  createMany?: InputMaybe<CustomProductFieldForBuisnessCategoryCreateManyBuisnessCategoryInputEnvelope>;
};

export type CustomProductFieldForBuisnessCategoryCreateNestedOneWithoutValuesInput = {
  connect?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomProductFieldForBuisnessCategoryCreateOrConnectWithoutValuesInput>;
  create?: InputMaybe<CustomProductFieldForBuisnessCategoryCreateWithoutValuesInput>;
};

export type CustomProductFieldForBuisnessCategoryCreateOrConnectWithoutBuisnessCategoryInput = {
  create: CustomProductFieldForBuisnessCategoryCreateWithoutBuisnessCategoryInput;
  where: CustomProductFieldForBuisnessCategoryWhereUniqueInput;
};

export type CustomProductFieldForBuisnessCategoryCreateOrConnectWithoutValuesInput = {
  create: CustomProductFieldForBuisnessCategoryCreateWithoutValuesInput;
  where: CustomProductFieldForBuisnessCategoryWhereUniqueInput;
};

export type CustomProductFieldForBuisnessCategoryCreateWithoutBuisnessCategoryInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
  values?: InputMaybe<CustomProductFieldForBuisnessCategoryValueCreateNestedManyWithoutCustomProductFieldForBuisnessCategoryInput>;
};

export type CustomProductFieldForBuisnessCategoryCreateWithoutValuesInput = {
  buisnessCategory: BuisnessCategoryCreateNestedOneWithoutCustomFieldInput;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CustomProductFieldForBuisnessCategoryGroupBy = {
  __typename?: 'CustomProductFieldForBuisnessCategoryGroupBy';
  _count?: Maybe<CustomProductFieldForBuisnessCategoryCountAggregate>;
  _max?: Maybe<CustomProductFieldForBuisnessCategoryMaxAggregate>;
  _min?: Maybe<CustomProductFieldForBuisnessCategoryMinAggregate>;
  buisnessCategoryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type CustomProductFieldForBuisnessCategoryListRelationFilter = {
  every?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereInput>;
  none?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereInput>;
  some?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereInput>;
};

export type CustomProductFieldForBuisnessCategoryMaxAggregate = {
  __typename?: 'CustomProductFieldForBuisnessCategoryMaxAggregate';
  buisnessCategoryId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CustomProductFieldForBuisnessCategoryMaxOrderByAggregateInput = {
  buisnessCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type CustomProductFieldForBuisnessCategoryMinAggregate = {
  __typename?: 'CustomProductFieldForBuisnessCategoryMinAggregate';
  buisnessCategoryId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CustomProductFieldForBuisnessCategoryMinOrderByAggregateInput = {
  buisnessCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type CustomProductFieldForBuisnessCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CustomProductFieldForBuisnessCategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<CustomProductFieldForBuisnessCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<CustomProductFieldForBuisnessCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CustomProductFieldForBuisnessCategoryMinOrderByAggregateInput>;
  buisnessCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type CustomProductFieldForBuisnessCategoryOrderByWithRelationInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryOrderByWithRelationInput>;
  buisnessCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  values?: InputMaybe<CustomProductFieldForBuisnessCategoryValueOrderByRelationAggregateInput>;
};

export type CustomProductFieldForBuisnessCategoryRelationFilter = {
  is?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereInput>;
  isNot?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereInput>;
};

export enum CustomProductFieldForBuisnessCategoryScalarFieldEnum {
  BuisnessCategoryId = 'buisnessCategoryId',
  Id = 'id',
  Name = 'name',
  Type = 'type'
}

export type CustomProductFieldForBuisnessCategoryScalarWhereInput = {
  AND?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryScalarWhereInput>>;
  buisnessCategoryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
};

export type CustomProductFieldForBuisnessCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryScalarWhereWithAggregatesInput>>;
  buisnessCategoryId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
};

export type CustomProductFieldForBuisnessCategoryUpdateInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneRequiredWithoutCustomFieldNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  values?: InputMaybe<CustomProductFieldForBuisnessCategoryValueUpdateManyWithoutCustomProductFieldForBuisnessCategoryNestedInput>;
};

export type CustomProductFieldForBuisnessCategoryUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CustomProductFieldForBuisnessCategoryUpdateManyWithWhereWithoutBuisnessCategoryInput = {
  data: CustomProductFieldForBuisnessCategoryUpdateManyMutationInput;
  where: CustomProductFieldForBuisnessCategoryScalarWhereInput;
};

export type CustomProductFieldForBuisnessCategoryUpdateManyWithoutBuisnessCategoryNestedInput = {
  connect?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryCreateOrConnectWithoutBuisnessCategoryInput>>;
  create?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryCreateWithoutBuisnessCategoryInput>>;
  createMany?: InputMaybe<CustomProductFieldForBuisnessCategoryCreateManyBuisnessCategoryInputEnvelope>;
  delete?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryUpdateWithWhereUniqueWithoutBuisnessCategoryInput>>;
  updateMany?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryUpdateManyWithWhereWithoutBuisnessCategoryInput>>;
  upsert?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryUpsertWithWhereUniqueWithoutBuisnessCategoryInput>>;
};

export type CustomProductFieldForBuisnessCategoryUpdateOneRequiredWithoutValuesNestedInput = {
  connect?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomProductFieldForBuisnessCategoryCreateOrConnectWithoutValuesInput>;
  create?: InputMaybe<CustomProductFieldForBuisnessCategoryCreateWithoutValuesInput>;
  update?: InputMaybe<CustomProductFieldForBuisnessCategoryUpdateWithoutValuesInput>;
  upsert?: InputMaybe<CustomProductFieldForBuisnessCategoryUpsertWithoutValuesInput>;
};

export type CustomProductFieldForBuisnessCategoryUpdateWithWhereUniqueWithoutBuisnessCategoryInput = {
  data: CustomProductFieldForBuisnessCategoryUpdateWithoutBuisnessCategoryInput;
  where: CustomProductFieldForBuisnessCategoryWhereUniqueInput;
};

export type CustomProductFieldForBuisnessCategoryUpdateWithoutBuisnessCategoryInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  values?: InputMaybe<CustomProductFieldForBuisnessCategoryValueUpdateManyWithoutCustomProductFieldForBuisnessCategoryNestedInput>;
};

export type CustomProductFieldForBuisnessCategoryUpdateWithoutValuesInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneRequiredWithoutCustomFieldNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CustomProductFieldForBuisnessCategoryUpsertWithWhereUniqueWithoutBuisnessCategoryInput = {
  create: CustomProductFieldForBuisnessCategoryCreateWithoutBuisnessCategoryInput;
  update: CustomProductFieldForBuisnessCategoryUpdateWithoutBuisnessCategoryInput;
  where: CustomProductFieldForBuisnessCategoryWhereUniqueInput;
};

export type CustomProductFieldForBuisnessCategoryUpsertWithoutValuesInput = {
  create: CustomProductFieldForBuisnessCategoryCreateWithoutValuesInput;
  update: CustomProductFieldForBuisnessCategoryUpdateWithoutValuesInput;
};

export type CustomProductFieldForBuisnessCategoryValue = {
  __typename?: 'CustomProductFieldForBuisnessCategoryValue';
  customProductFieldForBuisnessCategory: CustomProductFieldForBuisnessCategory;
  customProductFieldForBuisnessCategoryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  value: Scalars['JSON']['output'];
};

export type CustomProductFieldForBuisnessCategoryValueCountAggregate = {
  __typename?: 'CustomProductFieldForBuisnessCategoryValueCountAggregate';
  _all: Scalars['Int']['output'];
  customProductFieldForBuisnessCategoryId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type CustomProductFieldForBuisnessCategoryValueCountOrderByAggregateInput = {
  customProductFieldForBuisnessCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type CustomProductFieldForBuisnessCategoryValueCreateInput = {
  customProductFieldForBuisnessCategory: CustomProductFieldForBuisnessCategoryCreateNestedOneWithoutValuesInput;
  id?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutCustomFiledsInput;
  value: Scalars['JSON']['input'];
};

export type CustomProductFieldForBuisnessCategoryValueCreateManyCustomProductFieldForBuisnessCategoryInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  value: Scalars['JSON']['input'];
};

export type CustomProductFieldForBuisnessCategoryValueCreateManyCustomProductFieldForBuisnessCategoryInputEnvelope = {
  data: Array<CustomProductFieldForBuisnessCategoryValueCreateManyCustomProductFieldForBuisnessCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomProductFieldForBuisnessCategoryValueCreateManyInput = {
  customProductFieldForBuisnessCategoryId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  productId: Scalars['String']['input'];
  value: Scalars['JSON']['input'];
};

export type CustomProductFieldForBuisnessCategoryValueCreateManyProductInput = {
  customProductFieldForBuisnessCategoryId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['JSON']['input'];
};

export type CustomProductFieldForBuisnessCategoryValueCreateManyProductInputEnvelope = {
  data: Array<CustomProductFieldForBuisnessCategoryValueCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomProductFieldForBuisnessCategoryValueCreateNestedManyWithoutCustomProductFieldForBuisnessCategoryInput = {
  connect?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueCreateOrConnectWithoutCustomProductFieldForBuisnessCategoryInput>>;
  create?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueCreateWithoutCustomProductFieldForBuisnessCategoryInput>>;
  createMany?: InputMaybe<CustomProductFieldForBuisnessCategoryValueCreateManyCustomProductFieldForBuisnessCategoryInputEnvelope>;
};

export type CustomProductFieldForBuisnessCategoryValueCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueCreateWithoutProductInput>>;
  createMany?: InputMaybe<CustomProductFieldForBuisnessCategoryValueCreateManyProductInputEnvelope>;
};

export type CustomProductFieldForBuisnessCategoryValueCreateOrConnectWithoutCustomProductFieldForBuisnessCategoryInput = {
  create: CustomProductFieldForBuisnessCategoryValueCreateWithoutCustomProductFieldForBuisnessCategoryInput;
  where: CustomProductFieldForBuisnessCategoryValueWhereUniqueInput;
};

export type CustomProductFieldForBuisnessCategoryValueCreateOrConnectWithoutProductInput = {
  create: CustomProductFieldForBuisnessCategoryValueCreateWithoutProductInput;
  where: CustomProductFieldForBuisnessCategoryValueWhereUniqueInput;
};

export type CustomProductFieldForBuisnessCategoryValueCreateWithoutCustomProductFieldForBuisnessCategoryInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  product: ProductCreateNestedOneWithoutCustomFiledsInput;
  value: Scalars['JSON']['input'];
};

export type CustomProductFieldForBuisnessCategoryValueCreateWithoutProductInput = {
  customProductFieldForBuisnessCategory: CustomProductFieldForBuisnessCategoryCreateNestedOneWithoutValuesInput;
  id?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['JSON']['input'];
};

export type CustomProductFieldForBuisnessCategoryValueGroupBy = {
  __typename?: 'CustomProductFieldForBuisnessCategoryValueGroupBy';
  _count?: Maybe<CustomProductFieldForBuisnessCategoryValueCountAggregate>;
  _max?: Maybe<CustomProductFieldForBuisnessCategoryValueMaxAggregate>;
  _min?: Maybe<CustomProductFieldForBuisnessCategoryValueMinAggregate>;
  customProductFieldForBuisnessCategoryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  value: Scalars['JSON']['output'];
};

export type CustomProductFieldForBuisnessCategoryValueListRelationFilter = {
  every?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereInput>;
  none?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereInput>;
  some?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereInput>;
};

export type CustomProductFieldForBuisnessCategoryValueMaxAggregate = {
  __typename?: 'CustomProductFieldForBuisnessCategoryValueMaxAggregate';
  customProductFieldForBuisnessCategoryId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
};

export type CustomProductFieldForBuisnessCategoryValueMaxOrderByAggregateInput = {
  customProductFieldForBuisnessCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
};

export type CustomProductFieldForBuisnessCategoryValueMinAggregate = {
  __typename?: 'CustomProductFieldForBuisnessCategoryValueMinAggregate';
  customProductFieldForBuisnessCategoryId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
};

export type CustomProductFieldForBuisnessCategoryValueMinOrderByAggregateInput = {
  customProductFieldForBuisnessCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
};

export type CustomProductFieldForBuisnessCategoryValueOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CustomProductFieldForBuisnessCategoryValueOrderByWithAggregationInput = {
  _count?: InputMaybe<CustomProductFieldForBuisnessCategoryValueCountOrderByAggregateInput>;
  _max?: InputMaybe<CustomProductFieldForBuisnessCategoryValueMaxOrderByAggregateInput>;
  _min?: InputMaybe<CustomProductFieldForBuisnessCategoryValueMinOrderByAggregateInput>;
  customProductFieldForBuisnessCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type CustomProductFieldForBuisnessCategoryValueOrderByWithRelationInput = {
  customProductFieldForBuisnessCategory?: InputMaybe<CustomProductFieldForBuisnessCategoryOrderByWithRelationInput>;
  customProductFieldForBuisnessCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum CustomProductFieldForBuisnessCategoryValueScalarFieldEnum {
  CustomProductFieldForBuisnessCategoryId = 'customProductFieldForBuisnessCategoryId',
  Id = 'id',
  ProductId = 'productId',
  Value = 'value'
}

export type CustomProductFieldForBuisnessCategoryValueScalarWhereInput = {
  AND?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueScalarWhereInput>>;
  NOT?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueScalarWhereInput>>;
  OR?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueScalarWhereInput>>;
  customProductFieldForBuisnessCategoryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  value?: InputMaybe<JsonFilter>;
};

export type CustomProductFieldForBuisnessCategoryValueScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueScalarWhereWithAggregatesInput>>;
  customProductFieldForBuisnessCategoryId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  value?: InputMaybe<JsonWithAggregatesFilter>;
};

export type CustomProductFieldForBuisnessCategoryValueUpdateInput = {
  customProductFieldForBuisnessCategory?: InputMaybe<CustomProductFieldForBuisnessCategoryUpdateOneRequiredWithoutValuesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutCustomFiledsNestedInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type CustomProductFieldForBuisnessCategoryValueUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type CustomProductFieldForBuisnessCategoryValueUpdateManyWithWhereWithoutCustomProductFieldForBuisnessCategoryInput = {
  data: CustomProductFieldForBuisnessCategoryValueUpdateManyMutationInput;
  where: CustomProductFieldForBuisnessCategoryValueScalarWhereInput;
};

export type CustomProductFieldForBuisnessCategoryValueUpdateManyWithWhereWithoutProductInput = {
  data: CustomProductFieldForBuisnessCategoryValueUpdateManyMutationInput;
  where: CustomProductFieldForBuisnessCategoryValueScalarWhereInput;
};

export type CustomProductFieldForBuisnessCategoryValueUpdateManyWithoutCustomProductFieldForBuisnessCategoryNestedInput = {
  connect?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueCreateOrConnectWithoutCustomProductFieldForBuisnessCategoryInput>>;
  create?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueCreateWithoutCustomProductFieldForBuisnessCategoryInput>>;
  createMany?: InputMaybe<CustomProductFieldForBuisnessCategoryValueCreateManyCustomProductFieldForBuisnessCategoryInputEnvelope>;
  delete?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>>;
  set?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>>;
  update?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueUpdateWithWhereUniqueWithoutCustomProductFieldForBuisnessCategoryInput>>;
  updateMany?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueUpdateManyWithWhereWithoutCustomProductFieldForBuisnessCategoryInput>>;
  upsert?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueUpsertWithWhereUniqueWithoutCustomProductFieldForBuisnessCategoryInput>>;
};

export type CustomProductFieldForBuisnessCategoryValueUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueCreateWithoutProductInput>>;
  createMany?: InputMaybe<CustomProductFieldForBuisnessCategoryValueCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>>;
  set?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>>;
  update?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueUpsertWithWhereUniqueWithoutProductInput>>;
};

export type CustomProductFieldForBuisnessCategoryValueUpdateWithWhereUniqueWithoutCustomProductFieldForBuisnessCategoryInput = {
  data: CustomProductFieldForBuisnessCategoryValueUpdateWithoutCustomProductFieldForBuisnessCategoryInput;
  where: CustomProductFieldForBuisnessCategoryValueWhereUniqueInput;
};

export type CustomProductFieldForBuisnessCategoryValueUpdateWithWhereUniqueWithoutProductInput = {
  data: CustomProductFieldForBuisnessCategoryValueUpdateWithoutProductInput;
  where: CustomProductFieldForBuisnessCategoryValueWhereUniqueInput;
};

export type CustomProductFieldForBuisnessCategoryValueUpdateWithoutCustomProductFieldForBuisnessCategoryInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutCustomFiledsNestedInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type CustomProductFieldForBuisnessCategoryValueUpdateWithoutProductInput = {
  customProductFieldForBuisnessCategory?: InputMaybe<CustomProductFieldForBuisnessCategoryUpdateOneRequiredWithoutValuesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type CustomProductFieldForBuisnessCategoryValueUpsertWithWhereUniqueWithoutCustomProductFieldForBuisnessCategoryInput = {
  create: CustomProductFieldForBuisnessCategoryValueCreateWithoutCustomProductFieldForBuisnessCategoryInput;
  update: CustomProductFieldForBuisnessCategoryValueUpdateWithoutCustomProductFieldForBuisnessCategoryInput;
  where: CustomProductFieldForBuisnessCategoryValueWhereUniqueInput;
};

export type CustomProductFieldForBuisnessCategoryValueUpsertWithWhereUniqueWithoutProductInput = {
  create: CustomProductFieldForBuisnessCategoryValueCreateWithoutProductInput;
  update: CustomProductFieldForBuisnessCategoryValueUpdateWithoutProductInput;
  where: CustomProductFieldForBuisnessCategoryValueWhereUniqueInput;
};

export type CustomProductFieldForBuisnessCategoryValueWhereInput = {
  AND?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueWhereInput>>;
  NOT?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueWhereInput>>;
  OR?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueWhereInput>>;
  customProductFieldForBuisnessCategory?: InputMaybe<CustomProductFieldForBuisnessCategoryRelationFilter>;
  customProductFieldForBuisnessCategoryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  value?: InputMaybe<JsonFilter>;
};

export type CustomProductFieldForBuisnessCategoryValueWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CustomProductFieldForBuisnessCategoryWhereInput = {
  AND?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryWhereInput>>;
  NOT?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryWhereInput>>;
  OR?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryWhereInput>>;
  buisnessCategory?: InputMaybe<BuisnessCategoryRelationFilter>;
  buisnessCategoryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  values?: InputMaybe<CustomProductFieldForBuisnessCategoryValueListRelationFilter>;
};

export type CustomProductFieldForBuisnessCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Employee = {
  __typename?: 'Employee';
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  provider?: Maybe<Provider>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type EmployeeCountAggregate = {
  __typename?: 'EmployeeCountAggregate';
  _all: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type EmployeeCountOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type EmployeeCreateInput = {
  company?: InputMaybe<CompanyCreateNestedOneWithoutEmployeeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  provider?: InputMaybe<ProviderCreateNestedOneWithoutEmployeeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutEmployeeInput;
};

export type EmployeeCreateManyCompanyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type EmployeeCreateManyCompanyInputEnvelope = {
  data: Array<EmployeeCreateManyCompanyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmployeeCreateManyInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type EmployeeCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<EmployeeCreateManyCompanyInputEnvelope>;
};

export type EmployeeCreateNestedOneWithoutProviderInput = {
  connect?: InputMaybe<EmployeeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCreateOrConnectWithoutProviderInput>;
  create?: InputMaybe<EmployeeCreateWithoutProviderInput>;
};

export type EmployeeCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<EmployeeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<EmployeeCreateWithoutUserInput>;
};

export type EmployeeCreateOrConnectWithoutCompanyInput = {
  create: EmployeeCreateWithoutCompanyInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeCreateOrConnectWithoutProviderInput = {
  create: EmployeeCreateWithoutProviderInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeCreateOrConnectWithoutUserInput = {
  create: EmployeeCreateWithoutUserInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeCreateWithoutCompanyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  provider?: InputMaybe<ProviderCreateNestedOneWithoutEmployeeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutEmployeeInput;
};

export type EmployeeCreateWithoutProviderInput = {
  company?: InputMaybe<CompanyCreateNestedOneWithoutEmployeeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutEmployeeInput;
};

export type EmployeeCreateWithoutUserInput = {
  company?: InputMaybe<CompanyCreateNestedOneWithoutEmployeeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  provider?: InputMaybe<ProviderCreateNestedOneWithoutEmployeeInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmployeeGroupBy = {
  __typename?: 'EmployeeGroupBy';
  _count?: Maybe<EmployeeCountAggregate>;
  _max?: Maybe<EmployeeMaxAggregate>;
  _min?: Maybe<EmployeeMinAggregate>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type EmployeeListRelationFilter = {
  every?: InputMaybe<EmployeeWhereInput>;
  none?: InputMaybe<EmployeeWhereInput>;
  some?: InputMaybe<EmployeeWhereInput>;
};

export type EmployeeMaxAggregate = {
  __typename?: 'EmployeeMaxAggregate';
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type EmployeeMaxOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type EmployeeMinAggregate = {
  __typename?: 'EmployeeMinAggregate';
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type EmployeeMinOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type EmployeeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EmployeeOrderByWithAggregationInput = {
  _count?: InputMaybe<EmployeeCountOrderByAggregateInput>;
  _max?: InputMaybe<EmployeeMaxOrderByAggregateInput>;
  _min?: InputMaybe<EmployeeMinOrderByAggregateInput>;
  companyId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type EmployeeOrderByWithRelationInput = {
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  provider?: InputMaybe<ProviderOrderByWithRelationInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type EmployeeRelationFilter = {
  is?: InputMaybe<EmployeeWhereInput>;
  isNot?: InputMaybe<EmployeeWhereInput>;
};

export enum EmployeeScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type EmployeeScalarWhereInput = {
  AND?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  OR?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  companyId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type EmployeeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<EmployeeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<EmployeeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<EmployeeScalarWhereWithAggregatesInput>>;
  companyId?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type EmployeeUpdateInput = {
  company?: InputMaybe<CompanyUpdateOneWithoutEmployeeNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutEmployeeNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutEmployeeNestedInput>;
};

export type EmployeeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeUpdateManyWithWhereWithoutCompanyInput = {
  data: EmployeeUpdateManyMutationInput;
  where: EmployeeScalarWhereInput;
};

export type EmployeeUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmployeeCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<EmployeeCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<EmployeeCreateManyCompanyInputEnvelope>;
  delete?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EmployeeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  set?: InputMaybe<Array<EmployeeWhereUniqueInput>>;
  update?: InputMaybe<Array<EmployeeUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: InputMaybe<Array<EmployeeUpdateManyWithWhereWithoutCompanyInput>>;
  upsert?: InputMaybe<Array<EmployeeUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type EmployeeUpdateOneRequiredWithoutProviderNestedInput = {
  connect?: InputMaybe<EmployeeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCreateOrConnectWithoutProviderInput>;
  create?: InputMaybe<EmployeeCreateWithoutProviderInput>;
  update?: InputMaybe<EmployeeUpdateWithoutProviderInput>;
  upsert?: InputMaybe<EmployeeUpsertWithoutProviderInput>;
};

export type EmployeeUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<EmployeeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EmployeeCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<EmployeeCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<EmployeeUpdateWithoutUserInput>;
  upsert?: InputMaybe<EmployeeUpsertWithoutUserInput>;
};

export type EmployeeUpdateWithWhereUniqueWithoutCompanyInput = {
  data: EmployeeUpdateWithoutCompanyInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeUpdateWithoutCompanyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutEmployeeNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutEmployeeNestedInput>;
};

export type EmployeeUpdateWithoutProviderInput = {
  company?: InputMaybe<CompanyUpdateOneWithoutEmployeeNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutEmployeeNestedInput>;
};

export type EmployeeUpdateWithoutUserInput = {
  company?: InputMaybe<CompanyUpdateOneWithoutEmployeeNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider?: InputMaybe<ProviderUpdateOneWithoutEmployeeNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmployeeUpsertWithWhereUniqueWithoutCompanyInput = {
  create: EmployeeCreateWithoutCompanyInput;
  update: EmployeeUpdateWithoutCompanyInput;
  where: EmployeeWhereUniqueInput;
};

export type EmployeeUpsertWithoutProviderInput = {
  create: EmployeeCreateWithoutProviderInput;
  update: EmployeeUpdateWithoutProviderInput;
};

export type EmployeeUpsertWithoutUserInput = {
  create: EmployeeCreateWithoutUserInput;
  update: EmployeeUpdateWithoutUserInput;
};

export type EmployeeWhereInput = {
  AND?: InputMaybe<Array<EmployeeWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeWhereInput>>;
  OR?: InputMaybe<Array<EmployeeWhereInput>>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  provider?: InputMaybe<ProviderRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type EmployeeWhereUniqueInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type EnumBookingStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<BookingStatus>;
};

export type EnumBookingStatusFilter = {
  equals?: InputMaybe<BookingStatus>;
  in?: InputMaybe<Array<BookingStatus>>;
  not?: InputMaybe<NestedEnumBookingStatusFilter>;
  notIn?: InputMaybe<Array<BookingStatus>>;
};

export type EnumBookingStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumBookingStatusFilter>;
  _min?: InputMaybe<NestedEnumBookingStatusFilter>;
  equals?: InputMaybe<BookingStatus>;
  in?: InputMaybe<Array<BookingStatus>>;
  not?: InputMaybe<NestedEnumBookingStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<BookingStatus>>;
};

export type EnumCompanyRoleNullableFilter = {
  equals?: InputMaybe<CompanyRole>;
  in?: InputMaybe<Array<CompanyRole>>;
  not?: InputMaybe<NestedEnumCompanyRoleNullableFilter>;
  notIn?: InputMaybe<Array<CompanyRole>>;
};

export type EnumCompanyRoleNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumCompanyRoleNullableFilter>;
  _min?: InputMaybe<NestedEnumCompanyRoleNullableFilter>;
  equals?: InputMaybe<CompanyRole>;
  in?: InputMaybe<Array<CompanyRole>>;
  not?: InputMaybe<NestedEnumCompanyRoleNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CompanyRole>>;
};

export type EnumPlanTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<PlanType>;
};

export type EnumPlanTypeFilter = {
  equals?: InputMaybe<PlanType>;
  in?: InputMaybe<Array<PlanType>>;
  not?: InputMaybe<NestedEnumPlanTypeFilter>;
  notIn?: InputMaybe<Array<PlanType>>;
};

export type EnumPlanTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPlanTypeFilter>;
  _min?: InputMaybe<NestedEnumPlanTypeFilter>;
  equals?: InputMaybe<PlanType>;
  in?: InputMaybe<Array<PlanType>>;
  not?: InputMaybe<NestedEnumPlanTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<PlanType>>;
};

export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<SubscriptionStatus>;
};

export type EnumSubscriptionStatusFilter = {
  equals?: InputMaybe<SubscriptionStatus>;
  in?: InputMaybe<Array<SubscriptionStatus>>;
  not?: InputMaybe<NestedEnumSubscriptionStatusFilter>;
  notIn?: InputMaybe<Array<SubscriptionStatus>>;
};

export type EnumSubscriptionStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumSubscriptionStatusFilter>;
  _min?: InputMaybe<NestedEnumSubscriptionStatusFilter>;
  equals?: InputMaybe<SubscriptionStatus>;
  in?: InputMaybe<Array<SubscriptionStatus>>;
  not?: InputMaybe<NestedEnumSubscriptionStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<SubscriptionStatus>>;
};

export type EnumUserAccountStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<UserAccountStatus>;
};

export type EnumUserAccountStatusFilter = {
  equals?: InputMaybe<UserAccountStatus>;
  in?: InputMaybe<Array<UserAccountStatus>>;
  not?: InputMaybe<NestedEnumUserAccountStatusFilter>;
  notIn?: InputMaybe<Array<UserAccountStatus>>;
};

export type EnumUserAccountStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserAccountStatusFilter>;
  _min?: InputMaybe<NestedEnumUserAccountStatusFilter>;
  equals?: InputMaybe<UserAccountStatus>;
  in?: InputMaybe<Array<UserAccountStatus>>;
  not?: InputMaybe<NestedEnumUserAccountStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UserAccountStatus>>;
};

export type EnumUserRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<UserRole>;
};

export type EnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type EnumUserRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserRoleFilter>;
  _min?: InputMaybe<NestedEnumUserRoleFilter>;
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type Event = {
  __typename?: 'Event';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type EventCountAggregate = {
  __typename?: 'EventCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type EventCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EventCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EventGroupBy = {
  __typename?: 'EventGroupBy';
  _count?: Maybe<EventCountAggregate>;
  _max?: Maybe<EventMaxAggregate>;
  _min?: Maybe<EventMinAggregate>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type EventMaxAggregate = {
  __typename?: 'EventMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EventMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EventMinAggregate = {
  __typename?: 'EventMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EventMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EventOrderByWithAggregationInput = {
  _count?: InputMaybe<EventCountOrderByAggregateInput>;
  _max?: InputMaybe<EventMaxOrderByAggregateInput>;
  _min?: InputMaybe<EventMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EventOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum EventScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Slug = 'slug',
  UpdatedAt = 'updatedAt'
}

export type EventScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<EventScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<EventScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<EventScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type EventUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type FetaureCategory = {
  __typename?: 'FetaureCategory';
  _count?: Maybe<FetaureCategoryCount>;
  createdAt: Scalars['DateTime']['output'];
  fetaures: Array<Fetaures>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type FetaureCategoryFetauresArgs = {
  cursor?: InputMaybe<FetauresWhereUniqueInput>;
  distinct?: InputMaybe<Array<FetauresScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FetauresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetauresWhereInput>;
};

export type FetaureCategoryCount = {
  __typename?: 'FetaureCategoryCount';
  fetaures: Scalars['Int']['output'];
};


export type FetaureCategoryCountFetauresArgs = {
  where?: InputMaybe<FetauresWhereInput>;
};

export type FetaureCategoryCountAggregate = {
  __typename?: 'FetaureCategoryCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type FetaureCategoryCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FetaureCategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fetaures?: InputMaybe<FetauresCreateNestedManyWithoutFetaureCategoryInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FetaureCategoryCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FetaureCategoryCreateNestedOneWithoutFetauresInput = {
  connect?: InputMaybe<FetaureCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FetaureCategoryCreateOrConnectWithoutFetauresInput>;
  create?: InputMaybe<FetaureCategoryCreateWithoutFetauresInput>;
};

export type FetaureCategoryCreateOrConnectWithoutFetauresInput = {
  create: FetaureCategoryCreateWithoutFetauresInput;
  where: FetaureCategoryWhereUniqueInput;
};

export type FetaureCategoryCreateWithoutFetauresInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FetaureCategoryGroupBy = {
  __typename?: 'FetaureCategoryGroupBy';
  _count?: Maybe<FetaureCategoryCountAggregate>;
  _max?: Maybe<FetaureCategoryMaxAggregate>;
  _min?: Maybe<FetaureCategoryMinAggregate>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FetaureCategoryMaxAggregate = {
  __typename?: 'FetaureCategoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FetaureCategoryMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FetaureCategoryMinAggregate = {
  __typename?: 'FetaureCategoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FetaureCategoryMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FetaureCategoryOrderByWithAggregationInput = {
  _count?: InputMaybe<FetaureCategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<FetaureCategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<FetaureCategoryMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FetaureCategoryOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  fetaures?: InputMaybe<FetauresOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FetaureCategoryRelationFilter = {
  is?: InputMaybe<FetaureCategoryWhereInput>;
  isNot?: InputMaybe<FetaureCategoryWhereInput>;
};

export enum FetaureCategoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Slug = 'slug',
  UpdatedAt = 'updatedAt'
}

export type FetaureCategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FetaureCategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FetaureCategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FetaureCategoryScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type FetaureCategoryUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  fetaures?: InputMaybe<FetauresUpdateManyWithoutFetaureCategoryNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FetaureCategoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FetaureCategoryUpdateOneRequiredWithoutFetauresNestedInput = {
  connect?: InputMaybe<FetaureCategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FetaureCategoryCreateOrConnectWithoutFetauresInput>;
  create?: InputMaybe<FetaureCategoryCreateWithoutFetauresInput>;
  update?: InputMaybe<FetaureCategoryUpdateWithoutFetauresInput>;
  upsert?: InputMaybe<FetaureCategoryUpsertWithoutFetauresInput>;
};

export type FetaureCategoryUpdateWithoutFetauresInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FetaureCategoryUpsertWithoutFetauresInput = {
  create: FetaureCategoryCreateWithoutFetauresInput;
  update: FetaureCategoryUpdateWithoutFetauresInput;
};

export type FetaureCategoryWhereInput = {
  AND?: InputMaybe<Array<FetaureCategoryWhereInput>>;
  NOT?: InputMaybe<Array<FetaureCategoryWhereInput>>;
  OR?: InputMaybe<Array<FetaureCategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fetaures?: InputMaybe<FetauresListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FetaureCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Fetaures = {
  __typename?: 'Fetaures';
  fetaureCategory: FetaureCategory;
  fetaureCategoryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  info: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type FetauresCountAggregate = {
  __typename?: 'FetauresCountAggregate';
  _all: Scalars['Int']['output'];
  fetaureCategoryId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  info: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type FetauresCountOrderByAggregateInput = {
  fetaureCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  info?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type FetauresCreateInput = {
  fetaureCategory: FetaureCategoryCreateNestedOneWithoutFetauresInput;
  id?: InputMaybe<Scalars['String']['input']>;
  info: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type FetauresCreateManyFetaureCategoryInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  info: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type FetauresCreateManyFetaureCategoryInputEnvelope = {
  data: Array<FetauresCreateManyFetaureCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FetauresCreateManyInput = {
  fetaureCategoryId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  info: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type FetauresCreateNestedManyWithoutFetaureCategoryInput = {
  connect?: InputMaybe<Array<FetauresWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FetauresCreateOrConnectWithoutFetaureCategoryInput>>;
  create?: InputMaybe<Array<FetauresCreateWithoutFetaureCategoryInput>>;
  createMany?: InputMaybe<FetauresCreateManyFetaureCategoryInputEnvelope>;
};

export type FetauresCreateOrConnectWithoutFetaureCategoryInput = {
  create: FetauresCreateWithoutFetaureCategoryInput;
  where: FetauresWhereUniqueInput;
};

export type FetauresCreateWithoutFetaureCategoryInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  info: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type FetauresGroupBy = {
  __typename?: 'FetauresGroupBy';
  _count?: Maybe<FetauresCountAggregate>;
  _max?: Maybe<FetauresMaxAggregate>;
  _min?: Maybe<FetauresMinAggregate>;
  fetaureCategoryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  info: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type FetauresListRelationFilter = {
  every?: InputMaybe<FetauresWhereInput>;
  none?: InputMaybe<FetauresWhereInput>;
  some?: InputMaybe<FetauresWhereInput>;
};

export type FetauresMaxAggregate = {
  __typename?: 'FetauresMaxAggregate';
  fetaureCategoryId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  info?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type FetauresMaxOrderByAggregateInput = {
  fetaureCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  info?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type FetauresMinAggregate = {
  __typename?: 'FetauresMinAggregate';
  fetaureCategoryId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  info?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type FetauresMinOrderByAggregateInput = {
  fetaureCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  info?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type FetauresOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FetauresOrderByWithAggregationInput = {
  _count?: InputMaybe<FetauresCountOrderByAggregateInput>;
  _max?: InputMaybe<FetauresMaxOrderByAggregateInput>;
  _min?: InputMaybe<FetauresMinOrderByAggregateInput>;
  fetaureCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  info?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type FetauresOrderByWithRelationInput = {
  fetaureCategory?: InputMaybe<FetaureCategoryOrderByWithRelationInput>;
  fetaureCategoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  info?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum FetauresScalarFieldEnum {
  FetaureCategoryId = 'fetaureCategoryId',
  Id = 'id',
  Info = 'info',
  Name = 'name'
}

export type FetauresScalarWhereInput = {
  AND?: InputMaybe<Array<FetauresScalarWhereInput>>;
  NOT?: InputMaybe<Array<FetauresScalarWhereInput>>;
  OR?: InputMaybe<Array<FetauresScalarWhereInput>>;
  fetaureCategoryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  info?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type FetauresScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FetauresScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FetauresScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FetauresScalarWhereWithAggregatesInput>>;
  fetaureCategoryId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  info?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type FetauresUpdateInput = {
  fetaureCategory?: InputMaybe<FetaureCategoryUpdateOneRequiredWithoutFetauresNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  info?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FetauresUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  info?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FetauresUpdateManyWithWhereWithoutFetaureCategoryInput = {
  data: FetauresUpdateManyMutationInput;
  where: FetauresScalarWhereInput;
};

export type FetauresUpdateManyWithoutFetaureCategoryNestedInput = {
  connect?: InputMaybe<Array<FetauresWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FetauresCreateOrConnectWithoutFetaureCategoryInput>>;
  create?: InputMaybe<Array<FetauresCreateWithoutFetaureCategoryInput>>;
  createMany?: InputMaybe<FetauresCreateManyFetaureCategoryInputEnvelope>;
  delete?: InputMaybe<Array<FetauresWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FetauresScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FetauresWhereUniqueInput>>;
  set?: InputMaybe<Array<FetauresWhereUniqueInput>>;
  update?: InputMaybe<Array<FetauresUpdateWithWhereUniqueWithoutFetaureCategoryInput>>;
  updateMany?: InputMaybe<Array<FetauresUpdateManyWithWhereWithoutFetaureCategoryInput>>;
  upsert?: InputMaybe<Array<FetauresUpsertWithWhereUniqueWithoutFetaureCategoryInput>>;
};

export type FetauresUpdateWithWhereUniqueWithoutFetaureCategoryInput = {
  data: FetauresUpdateWithoutFetaureCategoryInput;
  where: FetauresWhereUniqueInput;
};

export type FetauresUpdateWithoutFetaureCategoryInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  info?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FetauresUpsertWithWhereUniqueWithoutFetaureCategoryInput = {
  create: FetauresCreateWithoutFetaureCategoryInput;
  update: FetauresUpdateWithoutFetaureCategoryInput;
  where: FetauresWhereUniqueInput;
};

export type FetauresWhereInput = {
  AND?: InputMaybe<Array<FetauresWhereInput>>;
  NOT?: InputMaybe<Array<FetauresWhereInput>>;
  OR?: InputMaybe<Array<FetauresWhereInput>>;
  fetaureCategory?: InputMaybe<FetaureCategoryRelationFilter>;
  fetaureCategoryId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  info?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type FetauresWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Geolocation = {
  __typename?: 'Geolocation';
  company: Company;
  companyId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type GeolocationAvgAggregate = {
  __typename?: 'GeolocationAvgAggregate';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type GeolocationAvgOrderByAggregateInput = {
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type GeolocationCountAggregate = {
  __typename?: 'GeolocationCountAggregate';
  _all: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  latitude: Scalars['Int']['output'];
  longitude: Scalars['Int']['output'];
};

export type GeolocationCountOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type GeolocationCreateInput = {
  company: CompanyCreateNestedOneWithoutGeolocationInput;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type GeolocationCreateManyInput = {
  companyId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type GeolocationCreateNestedOneWithoutCompanyInput = {
  connect?: InputMaybe<GeolocationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GeolocationCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<GeolocationCreateWithoutCompanyInput>;
};

export type GeolocationCreateOrConnectWithoutCompanyInput = {
  create: GeolocationCreateWithoutCompanyInput;
  where: GeolocationWhereUniqueInput;
};

export type GeolocationCreateWithoutCompanyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type GeolocationGroupBy = {
  __typename?: 'GeolocationGroupBy';
  _avg?: Maybe<GeolocationAvgAggregate>;
  _count?: Maybe<GeolocationCountAggregate>;
  _max?: Maybe<GeolocationMaxAggregate>;
  _min?: Maybe<GeolocationMinAggregate>;
  _sum?: Maybe<GeolocationSumAggregate>;
  companyId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type GeolocationMaxAggregate = {
  __typename?: 'GeolocationMaxAggregate';
  companyId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type GeolocationMaxOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type GeolocationMinAggregate = {
  __typename?: 'GeolocationMinAggregate';
  companyId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type GeolocationMinOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type GeolocationOrderByWithAggregationInput = {
  _avg?: InputMaybe<GeolocationAvgOrderByAggregateInput>;
  _count?: InputMaybe<GeolocationCountOrderByAggregateInput>;
  _max?: InputMaybe<GeolocationMaxOrderByAggregateInput>;
  _min?: InputMaybe<GeolocationMinOrderByAggregateInput>;
  _sum?: InputMaybe<GeolocationSumOrderByAggregateInput>;
  companyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type GeolocationOrderByWithRelationInput = {
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type GeolocationRelationFilter = {
  is?: InputMaybe<GeolocationWhereInput>;
  isNot?: InputMaybe<GeolocationWhereInput>;
};

export enum GeolocationScalarFieldEnum {
  CompanyId = 'companyId',
  Id = 'id',
  Latitude = 'latitude',
  Longitude = 'longitude'
}

export type GeolocationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GeolocationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GeolocationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GeolocationScalarWhereWithAggregatesInput>>;
  companyId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  latitude?: InputMaybe<FloatWithAggregatesFilter>;
  longitude?: InputMaybe<FloatWithAggregatesFilter>;
};

export type GeolocationSumAggregate = {
  __typename?: 'GeolocationSumAggregate';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type GeolocationSumOrderByAggregateInput = {
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type GeolocationUpdateInput = {
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutGeolocationNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type GeolocationUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type GeolocationUpdateOneWithoutCompanyNestedInput = {
  connect?: InputMaybe<GeolocationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GeolocationCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<GeolocationCreateWithoutCompanyInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<GeolocationUpdateWithoutCompanyInput>;
  upsert?: InputMaybe<GeolocationUpsertWithoutCompanyInput>;
};

export type GeolocationUpdateWithoutCompanyInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type GeolocationUpsertWithoutCompanyInput = {
  create: GeolocationCreateWithoutCompanyInput;
  update: GeolocationUpdateWithoutCompanyInput;
};

export type GeolocationWhereInput = {
  AND?: InputMaybe<Array<GeolocationWhereInput>>;
  NOT?: InputMaybe<Array<GeolocationWhereInput>>;
  OR?: InputMaybe<Array<GeolocationWhereInput>>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  latitude?: InputMaybe<FloatFilter>;
  longitude?: InputMaybe<FloatFilter>;
};

export type GeolocationWhereUniqueInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedJsonFilter>;
  _min?: InputMaybe<NestedJsonFilter>;
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Location = {
  __typename?: 'Location';
  city: Scalars['String']['output'];
  company: Company;
  companyId: Scalars['String']['output'];
  country: Scalars['String']['output'];
  id: Scalars['String']['output'];
  state: Scalars['String']['output'];
  streetAddress: Scalars['String']['output'];
  zip: Scalars['String']['output'];
};

export type LocationCountAggregate = {
  __typename?: 'LocationCountAggregate';
  _all: Scalars['Int']['output'];
  city: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  country: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  state: Scalars['Int']['output'];
  streetAddress: Scalars['Int']['output'];
  zip: Scalars['Int']['output'];
};

export type LocationCountOrderByAggregateInput = {
  city?: InputMaybe<SortOrder>;
  companyId?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  streetAddress?: InputMaybe<SortOrder>;
  zip?: InputMaybe<SortOrder>;
};

export type LocationCreateInput = {
  city: Scalars['String']['input'];
  company: CompanyCreateNestedOneWithoutLocationInput;
  country: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  state: Scalars['String']['input'];
  streetAddress: Scalars['String']['input'];
  zip: Scalars['String']['input'];
};

export type LocationCreateManyInput = {
  city: Scalars['String']['input'];
  companyId: Scalars['String']['input'];
  country: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  state: Scalars['String']['input'];
  streetAddress: Scalars['String']['input'];
  zip: Scalars['String']['input'];
};

export type LocationCreateNestedOneWithoutCompanyInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LocationCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<LocationCreateWithoutCompanyInput>;
};

export type LocationCreateOrConnectWithoutCompanyInput = {
  create: LocationCreateWithoutCompanyInput;
  where: LocationWhereUniqueInput;
};

export type LocationCreateWithoutCompanyInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  state: Scalars['String']['input'];
  streetAddress: Scalars['String']['input'];
  zip: Scalars['String']['input'];
};

export type LocationGroupBy = {
  __typename?: 'LocationGroupBy';
  _count?: Maybe<LocationCountAggregate>;
  _max?: Maybe<LocationMaxAggregate>;
  _min?: Maybe<LocationMinAggregate>;
  city: Scalars['String']['output'];
  companyId: Scalars['String']['output'];
  country: Scalars['String']['output'];
  id: Scalars['String']['output'];
  state: Scalars['String']['output'];
  streetAddress: Scalars['String']['output'];
  zip: Scalars['String']['output'];
};

export type LocationMaxAggregate = {
  __typename?: 'LocationMaxAggregate';
  city?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type LocationMaxOrderByAggregateInput = {
  city?: InputMaybe<SortOrder>;
  companyId?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  streetAddress?: InputMaybe<SortOrder>;
  zip?: InputMaybe<SortOrder>;
};

export type LocationMinAggregate = {
  __typename?: 'LocationMinAggregate';
  city?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type LocationMinOrderByAggregateInput = {
  city?: InputMaybe<SortOrder>;
  companyId?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  streetAddress?: InputMaybe<SortOrder>;
  zip?: InputMaybe<SortOrder>;
};

export type LocationOrderByWithAggregationInput = {
  _count?: InputMaybe<LocationCountOrderByAggregateInput>;
  _max?: InputMaybe<LocationMaxOrderByAggregateInput>;
  _min?: InputMaybe<LocationMinOrderByAggregateInput>;
  city?: InputMaybe<SortOrder>;
  companyId?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  streetAddress?: InputMaybe<SortOrder>;
  zip?: InputMaybe<SortOrder>;
};

export type LocationOrderByWithRelationInput = {
  city?: InputMaybe<SortOrder>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  streetAddress?: InputMaybe<SortOrder>;
  zip?: InputMaybe<SortOrder>;
};

export type LocationRelationFilter = {
  is?: InputMaybe<LocationWhereInput>;
  isNot?: InputMaybe<LocationWhereInput>;
};

export enum LocationScalarFieldEnum {
  City = 'city',
  CompanyId = 'companyId',
  Country = 'country',
  Id = 'id',
  State = 'state',
  StreetAddress = 'streetAddress',
  Zip = 'zip'
}

export type LocationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LocationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LocationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LocationScalarWhereWithAggregatesInput>>;
  city?: InputMaybe<StringWithAggregatesFilter>;
  companyId?: InputMaybe<StringWithAggregatesFilter>;
  country?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  state?: InputMaybe<StringWithAggregatesFilter>;
  streetAddress?: InputMaybe<StringWithAggregatesFilter>;
  zip?: InputMaybe<StringWithAggregatesFilter>;
};

export type LocationUpdateInput = {
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutLocationNestedInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
  streetAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  zip?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LocationUpdateManyMutationInput = {
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
  streetAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  zip?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LocationUpdateOneWithoutCompanyNestedInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LocationCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<LocationCreateWithoutCompanyInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<LocationUpdateWithoutCompanyInput>;
  upsert?: InputMaybe<LocationUpsertWithoutCompanyInput>;
};

export type LocationUpdateWithoutCompanyInput = {
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  state?: InputMaybe<StringFieldUpdateOperationsInput>;
  streetAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  zip?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LocationUpsertWithoutCompanyInput = {
  create: LocationCreateWithoutCompanyInput;
  update: LocationUpdateWithoutCompanyInput;
};

export type LocationWhereInput = {
  AND?: InputMaybe<Array<LocationWhereInput>>;
  NOT?: InputMaybe<Array<LocationWhereInput>>;
  OR?: InputMaybe<Array<LocationWhereInput>>;
  city?: InputMaybe<StringFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  streetAddress?: InputMaybe<StringFilter>;
  zip?: InputMaybe<StringFilter>;
};

export type LocationWhereUniqueInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type LoginResponsce = {
  __typename?: 'LoginResponsce';
  accessToken?: Maybe<Scalars['String']['output']>;
  isAuthenticated: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<UserForResponsce>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminLogin?: Maybe<LoginResponsce>;
  adminRegister?: Maybe<DefaultResponsce>;
  cancelSubscription?: Maybe<DefaultResponsce>;
  companyLogin?: Maybe<LoginResponsce>;
  companyRegister?: Maybe<DefaultResponsce>;
  createManyBooking: AffectedRowsOutput;
  createManyBuisnessCategory: AffectedRowsOutput;
  createManyBuisnessSubCategory: AffectedRowsOutput;
  createManyCompany: AffectedRowsOutput;
  createManyCustomFieldForProduct: AffectedRowsOutput;
  createManyCustomProductFieldForBuisnessCategory: AffectedRowsOutput;
  createManyCustomProductFieldForBuisnessCategoryValue: AffectedRowsOutput;
  createManyEmployee: AffectedRowsOutput;
  createManyEvent: AffectedRowsOutput;
  createManyFetaureCategory: AffectedRowsOutput;
  createManyFetaures: AffectedRowsOutput;
  createManyGeolocation: AffectedRowsOutput;
  createManyLocation: AffectedRowsOutput;
  createManyOwner: AffectedRowsOutput;
  createManyPlan: AffectedRowsOutput;
  createManyProduct: AffectedRowsOutput;
  createManyProvider: AffectedRowsOutput;
  createManyReview: AffectedRowsOutput;
  createManySiteDesighn: AffectedRowsOutput;
  createManySubscription: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserTokens: AffectedRowsOutput;
  createOneBooking: Booking;
  createOneBuisnessCategory: BuisnessCategory;
  createOneBuisnessSubCategory: BuisnessSubCategory;
  createOneCompany: Company;
  createOneCustomFieldForProduct: CustomFieldForProduct;
  createOneCustomProductFieldForBuisnessCategory: CustomProductFieldForBuisnessCategory;
  createOneCustomProductFieldForBuisnessCategoryValue: CustomProductFieldForBuisnessCategoryValue;
  createOneEmployee: Employee;
  createOneEvent: Event;
  createOneFetaureCategory: FetaureCategory;
  createOneFetaures: Fetaures;
  createOneGeolocation: Geolocation;
  createOneLocation: Location;
  createOneOwner: Owner;
  createOnePlan: Plan;
  createOneProduct: Product;
  createOneProvider: Provider;
  createOneReview: Review;
  createOneSiteDesighn: SiteDesighn;
  createOneSubscription: Subscription;
  createOneUser: User;
  createOneUserTokens: UserTokens;
  createPlan?: Maybe<DefaultResponsce>;
  createSubscription?: Maybe<DefaultResponsce>;
  deleteManyBooking: AffectedRowsOutput;
  deleteManyBuisnessCategory: AffectedRowsOutput;
  deleteManyBuisnessSubCategory: AffectedRowsOutput;
  deleteManyCompany: AffectedRowsOutput;
  deleteManyCustomFieldForProduct: AffectedRowsOutput;
  deleteManyCustomProductFieldForBuisnessCategory: AffectedRowsOutput;
  deleteManyCustomProductFieldForBuisnessCategoryValue: AffectedRowsOutput;
  deleteManyEmployee: AffectedRowsOutput;
  deleteManyEvent: AffectedRowsOutput;
  deleteManyFetaureCategory: AffectedRowsOutput;
  deleteManyFetaures: AffectedRowsOutput;
  deleteManyGeolocation: AffectedRowsOutput;
  deleteManyLocation: AffectedRowsOutput;
  deleteManyOwner: AffectedRowsOutput;
  deleteManyPlan: AffectedRowsOutput;
  deleteManyProduct: AffectedRowsOutput;
  deleteManyProvider: AffectedRowsOutput;
  deleteManyReview: AffectedRowsOutput;
  deleteManySiteDesighn: AffectedRowsOutput;
  deleteManySubscription: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserTokens: AffectedRowsOutput;
  deleteOneBooking?: Maybe<Booking>;
  deleteOneBuisnessCategory?: Maybe<BuisnessCategory>;
  deleteOneBuisnessSubCategory?: Maybe<BuisnessSubCategory>;
  deleteOneCompany?: Maybe<Company>;
  deleteOneCustomFieldForProduct?: Maybe<CustomFieldForProduct>;
  deleteOneCustomProductFieldForBuisnessCategory?: Maybe<CustomProductFieldForBuisnessCategory>;
  deleteOneCustomProductFieldForBuisnessCategoryValue?: Maybe<CustomProductFieldForBuisnessCategoryValue>;
  deleteOneEmployee?: Maybe<Employee>;
  deleteOneEvent?: Maybe<Event>;
  deleteOneFetaureCategory?: Maybe<FetaureCategory>;
  deleteOneFetaures?: Maybe<Fetaures>;
  deleteOneGeolocation?: Maybe<Geolocation>;
  deleteOneLocation?: Maybe<Location>;
  deleteOneOwner?: Maybe<Owner>;
  deleteOnePlan?: Maybe<Plan>;
  deleteOneProduct?: Maybe<Product>;
  deleteOneProvider?: Maybe<Provider>;
  deleteOneReview?: Maybe<Review>;
  deleteOneSiteDesighn?: Maybe<SiteDesighn>;
  deleteOneSubscription?: Maybe<Subscription>;
  deleteOneUser?: Maybe<User>;
  deleteOneUserTokens?: Maybe<UserTokens>;
  forgetPassword?: Maybe<DefaultResponsce>;
  login?: Maybe<LoginResponsce>;
  logout?: Maybe<DefaultResponsce>;
  passwordResetTokenVerify?: Maybe<DefaultResponsce>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  register?: Maybe<DefaultResponsce>;
  resetPassByVerficationLink?: Maybe<DefaultResponsce>;
  updateManyBooking: AffectedRowsOutput;
  updateManyBuisnessCategory: AffectedRowsOutput;
  updateManyBuisnessSubCategory: AffectedRowsOutput;
  updateManyCompany: AffectedRowsOutput;
  updateManyCustomFieldForProduct: AffectedRowsOutput;
  updateManyCustomProductFieldForBuisnessCategory: AffectedRowsOutput;
  updateManyCustomProductFieldForBuisnessCategoryValue: AffectedRowsOutput;
  updateManyEmployee: AffectedRowsOutput;
  updateManyEvent: AffectedRowsOutput;
  updateManyFetaureCategory: AffectedRowsOutput;
  updateManyFetaures: AffectedRowsOutput;
  updateManyGeolocation: AffectedRowsOutput;
  updateManyLocation: AffectedRowsOutput;
  updateManyOwner: AffectedRowsOutput;
  updateManyPlan: AffectedRowsOutput;
  updateManyProduct: AffectedRowsOutput;
  updateManyProvider: AffectedRowsOutput;
  updateManyReview: AffectedRowsOutput;
  updateManySiteDesighn: AffectedRowsOutput;
  updateManySubscription: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserTokens: AffectedRowsOutput;
  updateOneBooking?: Maybe<Booking>;
  updateOneBuisnessCategory?: Maybe<BuisnessCategory>;
  updateOneBuisnessSubCategory?: Maybe<BuisnessSubCategory>;
  updateOneCompany?: Maybe<Company>;
  updateOneCustomFieldForProduct?: Maybe<CustomFieldForProduct>;
  updateOneCustomProductFieldForBuisnessCategory?: Maybe<CustomProductFieldForBuisnessCategory>;
  updateOneCustomProductFieldForBuisnessCategoryValue?: Maybe<CustomProductFieldForBuisnessCategoryValue>;
  updateOneEmployee?: Maybe<Employee>;
  updateOneEvent?: Maybe<Event>;
  updateOneFetaureCategory?: Maybe<FetaureCategory>;
  updateOneFetaures?: Maybe<Fetaures>;
  updateOneGeolocation?: Maybe<Geolocation>;
  updateOneLocation?: Maybe<Location>;
  updateOneOwner?: Maybe<Owner>;
  updateOnePlan?: Maybe<Plan>;
  updateOneProduct?: Maybe<Product>;
  updateOneProvider?: Maybe<Provider>;
  updateOneReview?: Maybe<Review>;
  updateOneSiteDesighn?: Maybe<SiteDesighn>;
  updateOneSubscription?: Maybe<Subscription>;
  updateOneUser?: Maybe<User>;
  updateOneUserTokens?: Maybe<UserTokens>;
  updateProfile?: Maybe<DefaultResponsce>;
  uploadFile?: Maybe<FileUploadResponsce>;
  upsertOneBooking: Booking;
  upsertOneBuisnessCategory: BuisnessCategory;
  upsertOneBuisnessSubCategory: BuisnessSubCategory;
  upsertOneCompany: Company;
  upsertOneCustomFieldForProduct: CustomFieldForProduct;
  upsertOneCustomProductFieldForBuisnessCategory: CustomProductFieldForBuisnessCategory;
  upsertOneCustomProductFieldForBuisnessCategoryValue: CustomProductFieldForBuisnessCategoryValue;
  upsertOneEmployee: Employee;
  upsertOneEvent: Event;
  upsertOneFetaureCategory: FetaureCategory;
  upsertOneFetaures: Fetaures;
  upsertOneGeolocation: Geolocation;
  upsertOneLocation: Location;
  upsertOneOwner: Owner;
  upsertOnePlan: Plan;
  upsertOneProduct: Product;
  upsertOneProvider: Provider;
  upsertOneReview: Review;
  upsertOneSiteDesighn: SiteDesighn;
  upsertOneSubscription: Subscription;
  upsertOneUser: User;
  upsertOneUserTokens: UserTokens;
  verifyEmail?: Maybe<DefaultResponsce>;
};


export type MutationAdminLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationAdminRegisterArgs = {
  input: CreateOneUserArgsCustom;
};


export type MutationCompanyLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCompanyRegisterArgs = {
  input: CreateOneUserArgsCustom;
};


export type MutationCreateManyBookingArgs = {
  data: Array<BookingCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyBuisnessCategoryArgs = {
  data: Array<BuisnessCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyBuisnessSubCategoryArgs = {
  data: Array<BuisnessSubCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCompanyArgs = {
  data: Array<CompanyCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCustomFieldForProductArgs = {
  data: Array<CustomFieldForProductCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCustomProductFieldForBuisnessCategoryArgs = {
  data: Array<CustomProductFieldForBuisnessCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCustomProductFieldForBuisnessCategoryValueArgs = {
  data: Array<CustomProductFieldForBuisnessCategoryValueCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyEmployeeArgs = {
  data: Array<EmployeeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyEventArgs = {
  data: Array<EventCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyFetaureCategoryArgs = {
  data: Array<FetaureCategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyFetauresArgs = {
  data: Array<FetauresCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyGeolocationArgs = {
  data: Array<GeolocationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyLocationArgs = {
  data: Array<LocationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyOwnerArgs = {
  data: Array<OwnerCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPlanArgs = {
  data: Array<PlanCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyProductArgs = {
  data: Array<ProductCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyProviderArgs = {
  data: Array<ProviderCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyReviewArgs = {
  data: Array<ReviewCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManySiteDesighnArgs = {
  data: Array<SiteDesighnCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManySubscriptionArgs = {
  data: Array<SubscriptionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserTokensArgs = {
  data: Array<UserTokensCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneBookingArgs = {
  data: BookingCreateInput;
};


export type MutationCreateOneBuisnessCategoryArgs = {
  data: BuisnessCategoryCreateInput;
};


export type MutationCreateOneBuisnessSubCategoryArgs = {
  data: BuisnessSubCategoryCreateInput;
};


export type MutationCreateOneCompanyArgs = {
  data: CompanyCreateInput;
};


export type MutationCreateOneCustomFieldForProductArgs = {
  data?: InputMaybe<CustomFieldForProductCreateInput>;
};


export type MutationCreateOneCustomProductFieldForBuisnessCategoryArgs = {
  data: CustomProductFieldForBuisnessCategoryCreateInput;
};


export type MutationCreateOneCustomProductFieldForBuisnessCategoryValueArgs = {
  data: CustomProductFieldForBuisnessCategoryValueCreateInput;
};


export type MutationCreateOneEmployeeArgs = {
  data: EmployeeCreateInput;
};


export type MutationCreateOneEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateOneFetaureCategoryArgs = {
  data: FetaureCategoryCreateInput;
};


export type MutationCreateOneFetauresArgs = {
  data: FetauresCreateInput;
};


export type MutationCreateOneGeolocationArgs = {
  data: GeolocationCreateInput;
};


export type MutationCreateOneLocationArgs = {
  data: LocationCreateInput;
};


export type MutationCreateOneOwnerArgs = {
  data: OwnerCreateInput;
};


export type MutationCreateOnePlanArgs = {
  data: PlanCreateInput;
};


export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateOneProviderArgs = {
  data: ProviderCreateInput;
};


export type MutationCreateOneReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationCreateOneSiteDesighnArgs = {
  data: SiteDesighnCreateInput;
};


export type MutationCreateOneSubscriptionArgs = {
  data: SubscriptionCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneUserTokensArgs = {
  data: UserTokensCreateInput;
};


export type MutationCreatePlanArgs = {
  data: PlanCreateInput;
};


export type MutationCreateSubscriptionArgs = {
  plan: Scalars['String']['input'];
};


export type MutationDeleteManyBookingArgs = {
  where?: InputMaybe<BookingWhereInput>;
};


export type MutationDeleteManyBuisnessCategoryArgs = {
  where?: InputMaybe<BuisnessCategoryWhereInput>;
};


export type MutationDeleteManyBuisnessSubCategoryArgs = {
  where?: InputMaybe<BuisnessSubCategoryWhereInput>;
};


export type MutationDeleteManyCompanyArgs = {
  where?: InputMaybe<CompanyWhereInput>;
};


export type MutationDeleteManyCustomFieldForProductArgs = {
  where?: InputMaybe<CustomFieldForProductWhereInput>;
};


export type MutationDeleteManyCustomProductFieldForBuisnessCategoryArgs = {
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereInput>;
};


export type MutationDeleteManyCustomProductFieldForBuisnessCategoryValueArgs = {
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereInput>;
};


export type MutationDeleteManyEmployeeArgs = {
  where?: InputMaybe<EmployeeWhereInput>;
};


export type MutationDeleteManyEventArgs = {
  where?: InputMaybe<EventWhereInput>;
};


export type MutationDeleteManyFetaureCategoryArgs = {
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type MutationDeleteManyFetauresArgs = {
  where?: InputMaybe<FetauresWhereInput>;
};


export type MutationDeleteManyGeolocationArgs = {
  where?: InputMaybe<GeolocationWhereInput>;
};


export type MutationDeleteManyLocationArgs = {
  where?: InputMaybe<LocationWhereInput>;
};


export type MutationDeleteManyOwnerArgs = {
  where?: InputMaybe<OwnerWhereInput>;
};


export type MutationDeleteManyPlanArgs = {
  where?: InputMaybe<PlanWhereInput>;
};


export type MutationDeleteManyProductArgs = {
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationDeleteManyProviderArgs = {
  where?: InputMaybe<ProviderWhereInput>;
};


export type MutationDeleteManyReviewArgs = {
  where?: InputMaybe<ReviewWhereInput>;
};


export type MutationDeleteManySiteDesighnArgs = {
  where?: InputMaybe<SiteDesighnWhereInput>;
};


export type MutationDeleteManySubscriptionArgs = {
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserTokensArgs = {
  where?: InputMaybe<UserTokensWhereInput>;
};


export type MutationDeleteOneBookingArgs = {
  where: BookingWhereUniqueInput;
};


export type MutationDeleteOneBuisnessCategoryArgs = {
  where: BuisnessCategoryWhereUniqueInput;
};


export type MutationDeleteOneBuisnessSubCategoryArgs = {
  where: BuisnessSubCategoryWhereUniqueInput;
};


export type MutationDeleteOneCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type MutationDeleteOneCustomFieldForProductArgs = {
  where: CustomFieldForProductWhereUniqueInput;
};


export type MutationDeleteOneCustomProductFieldForBuisnessCategoryArgs = {
  where: CustomProductFieldForBuisnessCategoryWhereUniqueInput;
};


export type MutationDeleteOneCustomProductFieldForBuisnessCategoryValueArgs = {
  where: CustomProductFieldForBuisnessCategoryValueWhereUniqueInput;
};


export type MutationDeleteOneEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
};


export type MutationDeleteOneEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteOneFetaureCategoryArgs = {
  where: FetaureCategoryWhereUniqueInput;
};


export type MutationDeleteOneFetauresArgs = {
  where: FetauresWhereUniqueInput;
};


export type MutationDeleteOneGeolocationArgs = {
  where: GeolocationWhereUniqueInput;
};


export type MutationDeleteOneLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type MutationDeleteOneOwnerArgs = {
  where: OwnerWhereUniqueInput;
};


export type MutationDeleteOnePlanArgs = {
  where: PlanWhereUniqueInput;
};


export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteOneProviderArgs = {
  where: ProviderWhereUniqueInput;
};


export type MutationDeleteOneReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type MutationDeleteOneSiteDesighnArgs = {
  where: SiteDesighnWhereUniqueInput;
};


export type MutationDeleteOneSubscriptionArgs = {
  where: SubscriptionWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneUserTokensArgs = {
  where: UserTokensWhereUniqueInput;
};


export type MutationForgetPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationPasswordResetTokenVerifyArgs = {
  token: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: CreateOneUserArgsCustom;
};


export type MutationResetPassByVerficationLinkArgs = {
  input: ReesetPassByLinkInput;
};


export type MutationUpdateManyBookingArgs = {
  data: BookingUpdateManyMutationInput;
  where?: InputMaybe<BookingWhereInput>;
};


export type MutationUpdateManyBuisnessCategoryArgs = {
  data: BuisnessCategoryUpdateManyMutationInput;
  where?: InputMaybe<BuisnessCategoryWhereInput>;
};


export type MutationUpdateManyBuisnessSubCategoryArgs = {
  data: BuisnessSubCategoryUpdateManyMutationInput;
  where?: InputMaybe<BuisnessSubCategoryWhereInput>;
};


export type MutationUpdateManyCompanyArgs = {
  data: CompanyUpdateManyMutationInput;
  where?: InputMaybe<CompanyWhereInput>;
};


export type MutationUpdateManyCustomFieldForProductArgs = {
  data: CustomFieldForProductUpdateManyMutationInput;
  where?: InputMaybe<CustomFieldForProductWhereInput>;
};


export type MutationUpdateManyCustomProductFieldForBuisnessCategoryArgs = {
  data: CustomProductFieldForBuisnessCategoryUpdateManyMutationInput;
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereInput>;
};


export type MutationUpdateManyCustomProductFieldForBuisnessCategoryValueArgs = {
  data: CustomProductFieldForBuisnessCategoryValueUpdateManyMutationInput;
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereInput>;
};


export type MutationUpdateManyEmployeeArgs = {
  data: EmployeeUpdateManyMutationInput;
  where?: InputMaybe<EmployeeWhereInput>;
};


export type MutationUpdateManyEventArgs = {
  data: EventUpdateManyMutationInput;
  where?: InputMaybe<EventWhereInput>;
};


export type MutationUpdateManyFetaureCategoryArgs = {
  data: FetaureCategoryUpdateManyMutationInput;
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type MutationUpdateManyFetauresArgs = {
  data: FetauresUpdateManyMutationInput;
  where?: InputMaybe<FetauresWhereInput>;
};


export type MutationUpdateManyGeolocationArgs = {
  data: GeolocationUpdateManyMutationInput;
  where?: InputMaybe<GeolocationWhereInput>;
};


export type MutationUpdateManyLocationArgs = {
  data: LocationUpdateManyMutationInput;
  where?: InputMaybe<LocationWhereInput>;
};


export type MutationUpdateManyOwnerArgs = {
  data: OwnerUpdateManyMutationInput;
  where?: InputMaybe<OwnerWhereInput>;
};


export type MutationUpdateManyPlanArgs = {
  data: PlanUpdateManyMutationInput;
  where?: InputMaybe<PlanWhereInput>;
};


export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: InputMaybe<ProductWhereInput>;
};


export type MutationUpdateManyProviderArgs = {
  data: ProviderUpdateManyMutationInput;
  where?: InputMaybe<ProviderWhereInput>;
};


export type MutationUpdateManyReviewArgs = {
  data: ReviewUpdateManyMutationInput;
  where?: InputMaybe<ReviewWhereInput>;
};


export type MutationUpdateManySiteDesighnArgs = {
  data: SiteDesighnUpdateManyMutationInput;
  where?: InputMaybe<SiteDesighnWhereInput>;
};


export type MutationUpdateManySubscriptionArgs = {
  data: SubscriptionUpdateManyMutationInput;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUserTokensArgs = {
  data: UserTokensUpdateManyMutationInput;
  where?: InputMaybe<UserTokensWhereInput>;
};


export type MutationUpdateOneBookingArgs = {
  data: BookingUpdateInput;
  where: BookingWhereUniqueInput;
};


export type MutationUpdateOneBuisnessCategoryArgs = {
  data: BuisnessCategoryUpdateInput;
  where: BuisnessCategoryWhereUniqueInput;
};


export type MutationUpdateOneBuisnessSubCategoryArgs = {
  data: BuisnessSubCategoryUpdateInput;
  where: BuisnessSubCategoryWhereUniqueInput;
};


export type MutationUpdateOneCompanyArgs = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpdateOneCustomFieldForProductArgs = {
  data: CustomFieldForProductUpdateInput;
  where: CustomFieldForProductWhereUniqueInput;
};


export type MutationUpdateOneCustomProductFieldForBuisnessCategoryArgs = {
  data: CustomProductFieldForBuisnessCategoryUpdateInput;
  where: CustomProductFieldForBuisnessCategoryWhereUniqueInput;
};


export type MutationUpdateOneCustomProductFieldForBuisnessCategoryValueArgs = {
  data: CustomProductFieldForBuisnessCategoryValueUpdateInput;
  where: CustomProductFieldForBuisnessCategoryValueWhereUniqueInput;
};


export type MutationUpdateOneEmployeeArgs = {
  data: EmployeeUpdateInput;
  where: EmployeeWhereUniqueInput;
};


export type MutationUpdateOneEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateOneFetaureCategoryArgs = {
  data: FetaureCategoryUpdateInput;
  where: FetaureCategoryWhereUniqueInput;
};


export type MutationUpdateOneFetauresArgs = {
  data: FetauresUpdateInput;
  where: FetauresWhereUniqueInput;
};


export type MutationUpdateOneGeolocationArgs = {
  data: GeolocationUpdateInput;
  where: GeolocationWhereUniqueInput;
};


export type MutationUpdateOneLocationArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};


export type MutationUpdateOneOwnerArgs = {
  data: OwnerUpdateInput;
  where: OwnerWhereUniqueInput;
};


export type MutationUpdateOnePlanArgs = {
  data: PlanUpdateInput;
  where: PlanWhereUniqueInput;
};


export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateOneProviderArgs = {
  data: ProviderUpdateInput;
  where: ProviderWhereUniqueInput;
};


export type MutationUpdateOneReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpdateOneSiteDesighnArgs = {
  data: SiteDesighnUpdateInput;
  where: SiteDesighnWhereUniqueInput;
};


export type MutationUpdateOneSubscriptionArgs = {
  data: SubscriptionUpdateInput;
  where: SubscriptionWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneUserTokensArgs = {
  data: UserTokensUpdateInput;
  where: UserTokensWhereUniqueInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateOneUserArgsCustom;
  passwordInput: UpdateProfilePaswordArgs;
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUpsertOneBookingArgs = {
  create: BookingCreateInput;
  update: BookingUpdateInput;
  where: BookingWhereUniqueInput;
};


export type MutationUpsertOneBuisnessCategoryArgs = {
  create: BuisnessCategoryCreateInput;
  update: BuisnessCategoryUpdateInput;
  where: BuisnessCategoryWhereUniqueInput;
};


export type MutationUpsertOneBuisnessSubCategoryArgs = {
  create: BuisnessSubCategoryCreateInput;
  update: BuisnessSubCategoryUpdateInput;
  where: BuisnessSubCategoryWhereUniqueInput;
};


export type MutationUpsertOneCompanyArgs = {
  create: CompanyCreateInput;
  update: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpsertOneCustomFieldForProductArgs = {
  create: CustomFieldForProductCreateInput;
  update: CustomFieldForProductUpdateInput;
  where: CustomFieldForProductWhereUniqueInput;
};


export type MutationUpsertOneCustomProductFieldForBuisnessCategoryArgs = {
  create: CustomProductFieldForBuisnessCategoryCreateInput;
  update: CustomProductFieldForBuisnessCategoryUpdateInput;
  where: CustomProductFieldForBuisnessCategoryWhereUniqueInput;
};


export type MutationUpsertOneCustomProductFieldForBuisnessCategoryValueArgs = {
  create: CustomProductFieldForBuisnessCategoryValueCreateInput;
  update: CustomProductFieldForBuisnessCategoryValueUpdateInput;
  where: CustomProductFieldForBuisnessCategoryValueWhereUniqueInput;
};


export type MutationUpsertOneEmployeeArgs = {
  create: EmployeeCreateInput;
  update: EmployeeUpdateInput;
  where: EmployeeWhereUniqueInput;
};


export type MutationUpsertOneEventArgs = {
  create: EventCreateInput;
  update: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpsertOneFetaureCategoryArgs = {
  create: FetaureCategoryCreateInput;
  update: FetaureCategoryUpdateInput;
  where: FetaureCategoryWhereUniqueInput;
};


export type MutationUpsertOneFetauresArgs = {
  create: FetauresCreateInput;
  update: FetauresUpdateInput;
  where: FetauresWhereUniqueInput;
};


export type MutationUpsertOneGeolocationArgs = {
  create: GeolocationCreateInput;
  update: GeolocationUpdateInput;
  where: GeolocationWhereUniqueInput;
};


export type MutationUpsertOneLocationArgs = {
  create: LocationCreateInput;
  update: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};


export type MutationUpsertOneOwnerArgs = {
  create: OwnerCreateInput;
  update: OwnerUpdateInput;
  where: OwnerWhereUniqueInput;
};


export type MutationUpsertOnePlanArgs = {
  create: PlanCreateInput;
  update: PlanUpdateInput;
  where: PlanWhereUniqueInput;
};


export type MutationUpsertOneProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertOneProviderArgs = {
  create: ProviderCreateInput;
  update: ProviderUpdateInput;
  where: ProviderWhereUniqueInput;
};


export type MutationUpsertOneReviewArgs = {
  create: ReviewCreateInput;
  update: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpsertOneSiteDesighnArgs = {
  create: SiteDesighnCreateInput;
  update: SiteDesighnUpdateInput;
  where: SiteDesighnWhereUniqueInput;
};


export type MutationUpsertOneSubscriptionArgs = {
  create: SubscriptionCreateInput;
  update: SubscriptionUpdateInput;
  where: SubscriptionWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserTokensArgs = {
  create: UserTokensCreateInput;
  update: UserTokensUpdateInput;
  where: UserTokensWhereUniqueInput;
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']['input'];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumBookingStatusFilter = {
  equals?: InputMaybe<BookingStatus>;
  in?: InputMaybe<Array<BookingStatus>>;
  not?: InputMaybe<NestedEnumBookingStatusFilter>;
  notIn?: InputMaybe<Array<BookingStatus>>;
};

export type NestedEnumBookingStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumBookingStatusFilter>;
  _min?: InputMaybe<NestedEnumBookingStatusFilter>;
  equals?: InputMaybe<BookingStatus>;
  in?: InputMaybe<Array<BookingStatus>>;
  not?: InputMaybe<NestedEnumBookingStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<BookingStatus>>;
};

export type NestedEnumCompanyRoleNullableFilter = {
  equals?: InputMaybe<CompanyRole>;
  in?: InputMaybe<Array<CompanyRole>>;
  not?: InputMaybe<NestedEnumCompanyRoleNullableFilter>;
  notIn?: InputMaybe<Array<CompanyRole>>;
};

export type NestedEnumCompanyRoleNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumCompanyRoleNullableFilter>;
  _min?: InputMaybe<NestedEnumCompanyRoleNullableFilter>;
  equals?: InputMaybe<CompanyRole>;
  in?: InputMaybe<Array<CompanyRole>>;
  not?: InputMaybe<NestedEnumCompanyRoleNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<CompanyRole>>;
};

export type NestedEnumPlanTypeFilter = {
  equals?: InputMaybe<PlanType>;
  in?: InputMaybe<Array<PlanType>>;
  not?: InputMaybe<NestedEnumPlanTypeFilter>;
  notIn?: InputMaybe<Array<PlanType>>;
};

export type NestedEnumPlanTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPlanTypeFilter>;
  _min?: InputMaybe<NestedEnumPlanTypeFilter>;
  equals?: InputMaybe<PlanType>;
  in?: InputMaybe<Array<PlanType>>;
  not?: InputMaybe<NestedEnumPlanTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<PlanType>>;
};

export type NestedEnumSubscriptionStatusFilter = {
  equals?: InputMaybe<SubscriptionStatus>;
  in?: InputMaybe<Array<SubscriptionStatus>>;
  not?: InputMaybe<NestedEnumSubscriptionStatusFilter>;
  notIn?: InputMaybe<Array<SubscriptionStatus>>;
};

export type NestedEnumSubscriptionStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumSubscriptionStatusFilter>;
  _min?: InputMaybe<NestedEnumSubscriptionStatusFilter>;
  equals?: InputMaybe<SubscriptionStatus>;
  in?: InputMaybe<Array<SubscriptionStatus>>;
  not?: InputMaybe<NestedEnumSubscriptionStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<SubscriptionStatus>>;
};

export type NestedEnumUserAccountStatusFilter = {
  equals?: InputMaybe<UserAccountStatus>;
  in?: InputMaybe<Array<UserAccountStatus>>;
  not?: InputMaybe<NestedEnumUserAccountStatusFilter>;
  notIn?: InputMaybe<Array<UserAccountStatus>>;
};

export type NestedEnumUserAccountStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserAccountStatusFilter>;
  _min?: InputMaybe<NestedEnumUserAccountStatusFilter>;
  equals?: InputMaybe<UserAccountStatus>;
  in?: InputMaybe<Array<UserAccountStatus>>;
  not?: InputMaybe<NestedEnumUserAccountStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UserAccountStatus>>;
};

export type NestedEnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type NestedEnumUserRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserRoleFilter>;
  _min?: InputMaybe<NestedEnumUserRoleFilter>;
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<UserRole>>;
  not?: InputMaybe<NestedEnumUserRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<UserRole>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedJsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableEnumCompanyRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<CompanyRole>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Owner = {
  __typename?: 'Owner';
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type OwnerCountAggregate = {
  __typename?: 'OwnerCountAggregate';
  _all: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type OwnerCountOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OwnerCreateInput = {
  company?: InputMaybe<CompanyCreateNestedOneWithoutOwnerInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutOwnerInput;
};

export type OwnerCreateManyInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type OwnerCreateNestedOneWithoutCompanyInput = {
  connect?: InputMaybe<OwnerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OwnerCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<OwnerCreateWithoutCompanyInput>;
};

export type OwnerCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<OwnerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OwnerCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<OwnerCreateWithoutUserInput>;
};

export type OwnerCreateOrConnectWithoutCompanyInput = {
  create: OwnerCreateWithoutCompanyInput;
  where: OwnerWhereUniqueInput;
};

export type OwnerCreateOrConnectWithoutUserInput = {
  create: OwnerCreateWithoutUserInput;
  where: OwnerWhereUniqueInput;
};

export type OwnerCreateWithoutCompanyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutOwnerInput;
};

export type OwnerCreateWithoutUserInput = {
  company?: InputMaybe<CompanyCreateNestedOneWithoutOwnerInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OwnerGroupBy = {
  __typename?: 'OwnerGroupBy';
  _count?: Maybe<OwnerCountAggregate>;
  _max?: Maybe<OwnerMaxAggregate>;
  _min?: Maybe<OwnerMinAggregate>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type OwnerMaxAggregate = {
  __typename?: 'OwnerMaxAggregate';
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type OwnerMaxOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OwnerMinAggregate = {
  __typename?: 'OwnerMinAggregate';
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type OwnerMinOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OwnerOrderByWithAggregationInput = {
  _count?: InputMaybe<OwnerCountOrderByAggregateInput>;
  _max?: InputMaybe<OwnerMaxOrderByAggregateInput>;
  _min?: InputMaybe<OwnerMinOrderByAggregateInput>;
  companyId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OwnerOrderByWithRelationInput = {
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type OwnerRelationFilter = {
  is?: InputMaybe<OwnerWhereInput>;
  isNot?: InputMaybe<OwnerWhereInput>;
};

export enum OwnerScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type OwnerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OwnerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OwnerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OwnerScalarWhereWithAggregatesInput>>;
  companyId?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type OwnerUpdateInput = {
  company?: InputMaybe<CompanyUpdateOneWithoutOwnerNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutOwnerNestedInput>;
};

export type OwnerUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OwnerUpdateOneWithoutCompanyNestedInput = {
  connect?: InputMaybe<OwnerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OwnerCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<OwnerCreateWithoutCompanyInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<OwnerUpdateWithoutCompanyInput>;
  upsert?: InputMaybe<OwnerUpsertWithoutCompanyInput>;
};

export type OwnerUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<OwnerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OwnerCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<OwnerCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<OwnerUpdateWithoutUserInput>;
  upsert?: InputMaybe<OwnerUpsertWithoutUserInput>;
};

export type OwnerUpdateWithoutCompanyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutOwnerNestedInput>;
};

export type OwnerUpdateWithoutUserInput = {
  company?: InputMaybe<CompanyUpdateOneWithoutOwnerNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OwnerUpsertWithoutCompanyInput = {
  create: OwnerCreateWithoutCompanyInput;
  update: OwnerUpdateWithoutCompanyInput;
};

export type OwnerUpsertWithoutUserInput = {
  create: OwnerCreateWithoutUserInput;
  update: OwnerUpdateWithoutUserInput;
};

export type OwnerWhereInput = {
  AND?: InputMaybe<Array<OwnerWhereInput>>;
  NOT?: InputMaybe<Array<OwnerWhereInput>>;
  OR?: InputMaybe<Array<OwnerWhereInput>>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type OwnerWhereUniqueInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type Plan = {
  __typename?: 'Plan';
  Subscriptions: Array<Subscription>;
  _count?: Maybe<PlanCount>;
  company: Array<Company>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  interval_count: Scalars['Int']['output'];
  is_default: Scalars['Boolean']['output'];
  is_free: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  planType: PlanType;
  price: Scalars['Float']['output'];
  stripe_priceId: Scalars['String']['output'];
  stripe_productId: Scalars['String']['output'];
  trial_days: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type PlanSubscriptionsArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type PlanCompanyArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};

export type PlanAvgAggregate = {
  __typename?: 'PlanAvgAggregate';
  interval_count?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  trial_days?: Maybe<Scalars['Float']['output']>;
};

export type PlanAvgOrderByAggregateInput = {
  interval_count?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  trial_days?: InputMaybe<SortOrder>;
};

export type PlanCount = {
  __typename?: 'PlanCount';
  Subscriptions: Scalars['Int']['output'];
  company: Scalars['Int']['output'];
};


export type PlanCountSubscriptionsArgs = {
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type PlanCountCompanyArgs = {
  where?: InputMaybe<CompanyWhereInput>;
};

export type PlanCountAggregate = {
  __typename?: 'PlanCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  interval_count: Scalars['Int']['output'];
  is_default: Scalars['Int']['output'];
  is_free: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  planType: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  stripe_priceId: Scalars['Int']['output'];
  stripe_productId: Scalars['Int']['output'];
  trial_days: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type PlanCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interval_count?: InputMaybe<SortOrder>;
  is_default?: InputMaybe<SortOrder>;
  is_free?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  planType?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  stripe_priceId?: InputMaybe<SortOrder>;
  stripe_productId?: InputMaybe<SortOrder>;
  trial_days?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PlanCreateInput = {
  Subscriptions?: InputMaybe<SubscriptionCreateNestedManyWithoutPlanInput>;
  company?: InputMaybe<CompanyCreateNestedManyWithoutPlanInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  interval_count?: InputMaybe<Scalars['Int']['input']>;
  is_default: Scalars['Boolean']['input'];
  is_free: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  planType: PlanType;
  price: Scalars['Float']['input'];
  stripe_priceId: Scalars['String']['input'];
  stripe_productId: Scalars['String']['input'];
  trial_days: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PlanCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  interval_count?: InputMaybe<Scalars['Int']['input']>;
  is_default: Scalars['Boolean']['input'];
  is_free: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  planType: PlanType;
  price: Scalars['Float']['input'];
  stripe_priceId: Scalars['String']['input'];
  stripe_productId: Scalars['String']['input'];
  trial_days: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PlanCreateNestedOneWithoutCompanyInput = {
  connect?: InputMaybe<PlanWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlanCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<PlanCreateWithoutCompanyInput>;
};

export type PlanCreateNestedOneWithoutSubscriptionsInput = {
  connect?: InputMaybe<PlanWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlanCreateOrConnectWithoutSubscriptionsInput>;
  create?: InputMaybe<PlanCreateWithoutSubscriptionsInput>;
};

export type PlanCreateOrConnectWithoutCompanyInput = {
  create: PlanCreateWithoutCompanyInput;
  where: PlanWhereUniqueInput;
};

export type PlanCreateOrConnectWithoutSubscriptionsInput = {
  create: PlanCreateWithoutSubscriptionsInput;
  where: PlanWhereUniqueInput;
};

export type PlanCreateWithoutCompanyInput = {
  Subscriptions?: InputMaybe<SubscriptionCreateNestedManyWithoutPlanInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  interval_count?: InputMaybe<Scalars['Int']['input']>;
  is_default: Scalars['Boolean']['input'];
  is_free: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  planType: PlanType;
  price: Scalars['Float']['input'];
  stripe_priceId: Scalars['String']['input'];
  stripe_productId: Scalars['String']['input'];
  trial_days: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PlanCreateWithoutSubscriptionsInput = {
  company?: InputMaybe<CompanyCreateNestedManyWithoutPlanInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  interval_count?: InputMaybe<Scalars['Int']['input']>;
  is_default: Scalars['Boolean']['input'];
  is_free: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  planType: PlanType;
  price: Scalars['Float']['input'];
  stripe_priceId: Scalars['String']['input'];
  stripe_productId: Scalars['String']['input'];
  trial_days: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PlanGroupBy = {
  __typename?: 'PlanGroupBy';
  _avg?: Maybe<PlanAvgAggregate>;
  _count?: Maybe<PlanCountAggregate>;
  _max?: Maybe<PlanMaxAggregate>;
  _min?: Maybe<PlanMinAggregate>;
  _sum?: Maybe<PlanSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  interval_count: Scalars['Int']['output'];
  is_default: Scalars['Boolean']['output'];
  is_free: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  planType: PlanType;
  price: Scalars['Float']['output'];
  stripe_priceId: Scalars['String']['output'];
  stripe_productId: Scalars['String']['output'];
  trial_days: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PlanMaxAggregate = {
  __typename?: 'PlanMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  interval_count?: Maybe<Scalars['Int']['output']>;
  is_default?: Maybe<Scalars['Boolean']['output']>;
  is_free?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planType?: Maybe<PlanType>;
  price?: Maybe<Scalars['Float']['output']>;
  stripe_priceId?: Maybe<Scalars['String']['output']>;
  stripe_productId?: Maybe<Scalars['String']['output']>;
  trial_days?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PlanMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interval_count?: InputMaybe<SortOrder>;
  is_default?: InputMaybe<SortOrder>;
  is_free?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  planType?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  stripe_priceId?: InputMaybe<SortOrder>;
  stripe_productId?: InputMaybe<SortOrder>;
  trial_days?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PlanMinAggregate = {
  __typename?: 'PlanMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  interval_count?: Maybe<Scalars['Int']['output']>;
  is_default?: Maybe<Scalars['Boolean']['output']>;
  is_free?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planType?: Maybe<PlanType>;
  price?: Maybe<Scalars['Float']['output']>;
  stripe_priceId?: Maybe<Scalars['String']['output']>;
  stripe_productId?: Maybe<Scalars['String']['output']>;
  trial_days?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PlanMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interval_count?: InputMaybe<SortOrder>;
  is_default?: InputMaybe<SortOrder>;
  is_free?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  planType?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  stripe_priceId?: InputMaybe<SortOrder>;
  stripe_productId?: InputMaybe<SortOrder>;
  trial_days?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PlanOrderByWithAggregationInput = {
  _avg?: InputMaybe<PlanAvgOrderByAggregateInput>;
  _count?: InputMaybe<PlanCountOrderByAggregateInput>;
  _max?: InputMaybe<PlanMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlanMinOrderByAggregateInput>;
  _sum?: InputMaybe<PlanSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interval_count?: InputMaybe<SortOrder>;
  is_default?: InputMaybe<SortOrder>;
  is_free?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  planType?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  stripe_priceId?: InputMaybe<SortOrder>;
  stripe_productId?: InputMaybe<SortOrder>;
  trial_days?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PlanOrderByWithRelationInput = {
  Subscriptions?: InputMaybe<SubscriptionOrderByRelationAggregateInput>;
  company?: InputMaybe<CompanyOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  interval_count?: InputMaybe<SortOrder>;
  is_default?: InputMaybe<SortOrder>;
  is_free?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  planType?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  stripe_priceId?: InputMaybe<SortOrder>;
  stripe_productId?: InputMaybe<SortOrder>;
  trial_days?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PlanRelationFilter = {
  is?: InputMaybe<PlanWhereInput>;
  isNot?: InputMaybe<PlanWhereInput>;
};

export enum PlanScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  IntervalCount = 'interval_count',
  IsDefault = 'is_default',
  IsFree = 'is_free',
  Name = 'name',
  PlanType = 'planType',
  Price = 'price',
  StripePriceId = 'stripe_priceId',
  StripeProductId = 'stripe_productId',
  TrialDays = 'trial_days',
  UpdatedAt = 'updatedAt'
}

export type PlanScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlanScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlanScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlanScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  interval_count?: InputMaybe<IntWithAggregatesFilter>;
  is_default?: InputMaybe<BoolWithAggregatesFilter>;
  is_free?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  planType?: InputMaybe<EnumPlanTypeWithAggregatesFilter>;
  price?: InputMaybe<FloatWithAggregatesFilter>;
  stripe_priceId?: InputMaybe<StringWithAggregatesFilter>;
  stripe_productId?: InputMaybe<StringWithAggregatesFilter>;
  trial_days?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PlanSumAggregate = {
  __typename?: 'PlanSumAggregate';
  interval_count?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  trial_days?: Maybe<Scalars['Int']['output']>;
};

export type PlanSumOrderByAggregateInput = {
  interval_count?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  trial_days?: InputMaybe<SortOrder>;
};

export enum PlanType {
  Month = 'month',
  Week = 'week',
  Year = 'year'
}

export type PlanUpdateInput = {
  Subscriptions?: InputMaybe<SubscriptionUpdateManyWithoutPlanNestedInput>;
  company?: InputMaybe<CompanyUpdateManyWithoutPlanNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interval_count?: InputMaybe<IntFieldUpdateOperationsInput>;
  is_default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_free?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  planType?: InputMaybe<EnumPlanTypeFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  stripe_priceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  stripe_productId?: InputMaybe<StringFieldUpdateOperationsInput>;
  trial_days?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PlanUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interval_count?: InputMaybe<IntFieldUpdateOperationsInput>;
  is_default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_free?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  planType?: InputMaybe<EnumPlanTypeFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  stripe_priceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  stripe_productId?: InputMaybe<StringFieldUpdateOperationsInput>;
  trial_days?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PlanUpdateOneRequiredWithoutSubscriptionsNestedInput = {
  connect?: InputMaybe<PlanWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlanCreateOrConnectWithoutSubscriptionsInput>;
  create?: InputMaybe<PlanCreateWithoutSubscriptionsInput>;
  update?: InputMaybe<PlanUpdateWithoutSubscriptionsInput>;
  upsert?: InputMaybe<PlanUpsertWithoutSubscriptionsInput>;
};

export type PlanUpdateOneWithoutCompanyNestedInput = {
  connect?: InputMaybe<PlanWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlanCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<PlanCreateWithoutCompanyInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<PlanUpdateWithoutCompanyInput>;
  upsert?: InputMaybe<PlanUpsertWithoutCompanyInput>;
};

export type PlanUpdateWithoutCompanyInput = {
  Subscriptions?: InputMaybe<SubscriptionUpdateManyWithoutPlanNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interval_count?: InputMaybe<IntFieldUpdateOperationsInput>;
  is_default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_free?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  planType?: InputMaybe<EnumPlanTypeFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  stripe_priceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  stripe_productId?: InputMaybe<StringFieldUpdateOperationsInput>;
  trial_days?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PlanUpdateWithoutSubscriptionsInput = {
  company?: InputMaybe<CompanyUpdateManyWithoutPlanNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  interval_count?: InputMaybe<IntFieldUpdateOperationsInput>;
  is_default?: InputMaybe<BoolFieldUpdateOperationsInput>;
  is_free?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  planType?: InputMaybe<EnumPlanTypeFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  stripe_priceId?: InputMaybe<StringFieldUpdateOperationsInput>;
  stripe_productId?: InputMaybe<StringFieldUpdateOperationsInput>;
  trial_days?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PlanUpsertWithoutCompanyInput = {
  create: PlanCreateWithoutCompanyInput;
  update: PlanUpdateWithoutCompanyInput;
};

export type PlanUpsertWithoutSubscriptionsInput = {
  create: PlanCreateWithoutSubscriptionsInput;
  update: PlanUpdateWithoutSubscriptionsInput;
};

export type PlanWhereInput = {
  AND?: InputMaybe<Array<PlanWhereInput>>;
  NOT?: InputMaybe<Array<PlanWhereInput>>;
  OR?: InputMaybe<Array<PlanWhereInput>>;
  Subscriptions?: InputMaybe<SubscriptionListRelationFilter>;
  company?: InputMaybe<CompanyListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  interval_count?: InputMaybe<IntFilter>;
  is_default?: InputMaybe<BoolFilter>;
  is_free?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  planType?: InputMaybe<EnumPlanTypeFilter>;
  price?: InputMaybe<FloatFilter>;
  stripe_priceId?: InputMaybe<StringFilter>;
  stripe_productId?: InputMaybe<StringFilter>;
  trial_days?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PlanWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Product = {
  __typename?: 'Product';
  _count?: Maybe<ProductCount>;
  buisnessCategory?: Maybe<BuisnessCategory>;
  buisnessCategoryId?: Maybe<Scalars['String']['output']>;
  buisnessSubCategory?: Maybe<BuisnessSubCategory>;
  buisnessSubCategoryId?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customFileds: Array<CustomProductFieldForBuisnessCategoryValue>;
  description: Scalars['String']['output'];
  durationPreiod: Scalars['Int']['output'];
  durationType: Scalars['String']['output'];
  id: Scalars['String']['output'];
  images: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  reveiws: Array<Review>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type ProductCustomFiledsArgs = {
  cursor?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereInput>;
};


export type ProductReveiwsArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  durationPreiod?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductAvgOrderByAggregateInput = {
  durationPreiod?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  customFileds: Scalars['Int']['output'];
  reveiws: Scalars['Int']['output'];
};


export type ProductCountCustomFiledsArgs = {
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereInput>;
};


export type ProductCountReveiwsArgs = {
  where?: InputMaybe<ReviewWhereInput>;
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int']['output'];
  buisnessCategoryId: Scalars['Int']['output'];
  buisnessSubCategoryId: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  durationPreiod: Scalars['Int']['output'];
  durationType: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  images: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  slug: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ProductCountOrderByAggregateInput = {
  buisnessCategoryId?: InputMaybe<SortOrder>;
  buisnessSubCategoryId?: InputMaybe<SortOrder>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  durationPreiod?: InputMaybe<SortOrder>;
  durationType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductCreateInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutProductInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutProductInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutProductInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customFileds?: InputMaybe<CustomProductFieldForBuisnessCategoryValueCreateNestedManyWithoutProductInput>;
  description: Scalars['String']['input'];
  durationPreiod: Scalars['Int']['input'];
  durationType: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateManyBuisnessCategoryInput = {
  buisnessSubCategoryId?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  durationPreiod: Scalars['Int']['input'];
  durationType: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateManyBuisnessCategoryInputEnvelope = {
  data: Array<ProductCreateManyBuisnessCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductCreateManyBuisnessSubCategoryInput = {
  buisnessCategoryId?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  durationPreiod: Scalars['Int']['input'];
  durationType: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateManyBuisnessSubCategoryInputEnvelope = {
  data: Array<ProductCreateManyBuisnessSubCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductCreateManyCompanyInput = {
  buisnessCategoryId?: InputMaybe<Scalars['String']['input']>;
  buisnessSubCategoryId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  durationPreiod: Scalars['Int']['input'];
  durationType: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateManyCompanyInputEnvelope = {
  data: Array<ProductCreateManyCompanyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductCreateManyInput = {
  buisnessCategoryId?: InputMaybe<Scalars['String']['input']>;
  buisnessSubCategoryId?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  durationPreiod: Scalars['Int']['input'];
  durationType: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateNestedManyWithoutBuisnessCategoryInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutBuisnessCategoryInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutBuisnessCategoryInput>>;
  createMany?: InputMaybe<ProductCreateManyBuisnessCategoryInputEnvelope>;
};

export type ProductCreateNestedManyWithoutBuisnessSubCategoryInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutBuisnessSubCategoryInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutBuisnessSubCategoryInput>>;
  createMany?: InputMaybe<ProductCreateManyBuisnessSubCategoryInputEnvelope>;
};

export type ProductCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<ProductCreateManyCompanyInputEnvelope>;
};

export type ProductCreateNestedOneWithoutCustomFiledsInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutCustomFiledsInput>;
  create?: InputMaybe<ProductCreateWithoutCustomFiledsInput>;
};

export type ProductCreateNestedOneWithoutReveiwsInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutReveiwsInput>;
  create?: InputMaybe<ProductCreateWithoutReveiwsInput>;
};

export type ProductCreateOrConnectWithoutBuisnessCategoryInput = {
  create: ProductCreateWithoutBuisnessCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutBuisnessSubCategoryInput = {
  create: ProductCreateWithoutBuisnessSubCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutCompanyInput = {
  create: ProductCreateWithoutCompanyInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutCustomFiledsInput = {
  create: ProductCreateWithoutCustomFiledsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutReveiwsInput = {
  create: ProductCreateWithoutReveiwsInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutBuisnessCategoryInput = {
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutProductInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutProductInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customFileds?: InputMaybe<CustomProductFieldForBuisnessCategoryValueCreateNestedManyWithoutProductInput>;
  description: Scalars['String']['input'];
  durationPreiod: Scalars['Int']['input'];
  durationType: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateWithoutBuisnessSubCategoryInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutProductInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutProductInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customFileds?: InputMaybe<CustomProductFieldForBuisnessCategoryValueCreateNestedManyWithoutProductInput>;
  description: Scalars['String']['input'];
  durationPreiod: Scalars['Int']['input'];
  durationType: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateWithoutCompanyInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutProductInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutProductInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customFileds?: InputMaybe<CustomProductFieldForBuisnessCategoryValueCreateNestedManyWithoutProductInput>;
  description: Scalars['String']['input'];
  durationPreiod: Scalars['Int']['input'];
  durationType: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateWithoutCustomFiledsInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutProductInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutProductInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutProductInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  durationPreiod: Scalars['Int']['input'];
  durationType: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutProductInput>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateWithoutReveiwsInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryCreateNestedOneWithoutProductInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryCreateNestedOneWithoutProductInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutProductInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customFileds?: InputMaybe<CustomProductFieldForBuisnessCategoryValueCreateNestedManyWithoutProductInput>;
  description: Scalars['String']['input'];
  durationPreiod: Scalars['Int']['input'];
  durationType: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<ProductCreateimagesInput>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductCreateimagesInput = {
  set: Array<Scalars['String']['input']>;
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
  buisnessCategoryId?: Maybe<Scalars['String']['output']>;
  buisnessSubCategoryId?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  durationPreiod: Scalars['Int']['output'];
  durationType: Scalars['String']['output'];
  id: Scalars['String']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  buisnessCategoryId?: Maybe<Scalars['String']['output']>;
  buisnessSubCategoryId?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  durationPreiod?: Maybe<Scalars['Int']['output']>;
  durationType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductMaxOrderByAggregateInput = {
  buisnessCategoryId?: InputMaybe<SortOrder>;
  buisnessSubCategoryId?: InputMaybe<SortOrder>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  durationPreiod?: InputMaybe<SortOrder>;
  durationType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  buisnessCategoryId?: Maybe<Scalars['String']['output']>;
  buisnessSubCategoryId?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  durationPreiod?: Maybe<Scalars['Int']['output']>;
  durationType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductMinOrderByAggregateInput = {
  buisnessCategoryId?: InputMaybe<SortOrder>;
  buisnessSubCategoryId?: InputMaybe<SortOrder>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  durationPreiod?: InputMaybe<SortOrder>;
  durationType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProductAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductSumOrderByAggregateInput>;
  buisnessCategoryId?: InputMaybe<SortOrderInput>;
  buisnessSubCategoryId?: InputMaybe<SortOrderInput>;
  companyId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  durationPreiod?: InputMaybe<SortOrder>;
  durationType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryOrderByWithRelationInput>;
  buisnessCategoryId?: InputMaybe<SortOrderInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryOrderByWithRelationInput>;
  buisnessSubCategoryId?: InputMaybe<SortOrderInput>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  customFileds?: InputMaybe<CustomProductFieldForBuisnessCategoryValueOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrder>;
  durationPreiod?: InputMaybe<SortOrder>;
  durationType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  reveiws?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
};

export enum ProductScalarFieldEnum {
  BuisnessCategoryId = 'buisnessCategoryId',
  BuisnessSubCategoryId = 'buisnessSubCategoryId',
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Description = 'description',
  DurationPreiod = 'durationPreiod',
  DurationType = 'durationType',
  Id = 'id',
  Images = 'images',
  Name = 'name',
  Price = 'price',
  Slug = 'slug',
  UpdatedAt = 'updatedAt'
}

export type ProductScalarWhereInput = {
  AND?: InputMaybe<Array<ProductScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereInput>>;
  buisnessCategoryId?: InputMaybe<StringNullableFilter>;
  buisnessSubCategoryId?: InputMaybe<StringNullableFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  durationPreiod?: InputMaybe<IntFilter>;
  durationType?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  buisnessCategoryId?: InputMaybe<StringNullableWithAggregatesFilter>;
  buisnessSubCategoryId?: InputMaybe<StringNullableWithAggregatesFilter>;
  companyId?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  durationPreiod?: InputMaybe<IntWithAggregatesFilter>;
  durationType?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  price?: InputMaybe<FloatWithAggregatesFilter>;
  slug?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  durationPreiod?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type ProductSumOrderByAggregateInput = {
  durationPreiod?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type ProductUpdateInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutProductNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutProductNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutProductNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customFileds?: InputMaybe<CustomProductFieldForBuisnessCategoryValueUpdateManyWithoutProductNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  durationPreiod?: InputMaybe<IntFieldUpdateOperationsInput>;
  durationType?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  durationPreiod?: InputMaybe<IntFieldUpdateOperationsInput>;
  durationType?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithWhereWithoutBuisnessCategoryInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutBuisnessSubCategoryInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutCompanyInput = {
  data: ProductUpdateManyMutationInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithoutBuisnessCategoryNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutBuisnessCategoryInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutBuisnessCategoryInput>>;
  createMany?: InputMaybe<ProductCreateManyBuisnessCategoryInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutBuisnessCategoryInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutBuisnessCategoryInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutBuisnessCategoryInput>>;
};

export type ProductUpdateManyWithoutBuisnessSubCategoryNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutBuisnessSubCategoryInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutBuisnessSubCategoryInput>>;
  createMany?: InputMaybe<ProductCreateManyBuisnessSubCategoryInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutBuisnessSubCategoryInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutBuisnessSubCategoryInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutBuisnessSubCategoryInput>>;
};

export type ProductUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProductCreateOrConnectWithoutCompanyInput>>;
  create?: InputMaybe<Array<ProductCreateWithoutCompanyInput>>;
  createMany?: InputMaybe<ProductCreateManyCompanyInputEnvelope>;
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: InputMaybe<Array<ProductUpdateManyWithWhereWithoutCompanyInput>>;
  upsert?: InputMaybe<Array<ProductUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type ProductUpdateOneRequiredWithoutCustomFiledsNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutCustomFiledsInput>;
  create?: InputMaybe<ProductCreateWithoutCustomFiledsInput>;
  update?: InputMaybe<ProductUpdateWithoutCustomFiledsInput>;
  upsert?: InputMaybe<ProductUpsertWithoutCustomFiledsInput>;
};

export type ProductUpdateOneRequiredWithoutReveiwsNestedInput = {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutReveiwsInput>;
  create?: InputMaybe<ProductCreateWithoutReveiwsInput>;
  update?: InputMaybe<ProductUpdateWithoutReveiwsInput>;
  upsert?: InputMaybe<ProductUpsertWithoutReveiwsInput>;
};

export type ProductUpdateWithWhereUniqueWithoutBuisnessCategoryInput = {
  data: ProductUpdateWithoutBuisnessCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutBuisnessSubCategoryInput = {
  data: ProductUpdateWithoutBuisnessSubCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutCompanyInput = {
  data: ProductUpdateWithoutCompanyInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithoutBuisnessCategoryInput = {
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutProductNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutProductNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customFileds?: InputMaybe<CustomProductFieldForBuisnessCategoryValueUpdateManyWithoutProductNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  durationPreiod?: InputMaybe<IntFieldUpdateOperationsInput>;
  durationType?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutBuisnessSubCategoryInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutProductNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutProductNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customFileds?: InputMaybe<CustomProductFieldForBuisnessCategoryValueUpdateManyWithoutProductNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  durationPreiod?: InputMaybe<IntFieldUpdateOperationsInput>;
  durationType?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutCompanyInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutProductNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutProductNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customFileds?: InputMaybe<CustomProductFieldForBuisnessCategoryValueUpdateManyWithoutProductNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  durationPreiod?: InputMaybe<IntFieldUpdateOperationsInput>;
  durationType?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutCustomFiledsInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutProductNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutProductNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutProductNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  durationPreiod?: InputMaybe<IntFieldUpdateOperationsInput>;
  durationType?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutProductNestedInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateWithoutReveiwsInput = {
  buisnessCategory?: InputMaybe<BuisnessCategoryUpdateOneWithoutProductNestedInput>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryUpdateOneWithoutProductNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutProductNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customFileds?: InputMaybe<CustomProductFieldForBuisnessCategoryValueUpdateManyWithoutProductNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  durationPreiod?: InputMaybe<IntFieldUpdateOperationsInput>;
  durationType?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  images?: InputMaybe<ProductUpdateimagesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  slug?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateimagesInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductUpsertWithWhereUniqueWithoutBuisnessCategoryInput = {
  create: ProductCreateWithoutBuisnessCategoryInput;
  update: ProductUpdateWithoutBuisnessCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutBuisnessSubCategoryInput = {
  create: ProductCreateWithoutBuisnessSubCategoryInput;
  update: ProductUpdateWithoutBuisnessSubCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutCompanyInput = {
  create: ProductCreateWithoutCompanyInput;
  update: ProductUpdateWithoutCompanyInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithoutCustomFiledsInput = {
  create: ProductCreateWithoutCustomFiledsInput;
  update: ProductUpdateWithoutCustomFiledsInput;
};

export type ProductUpsertWithoutReveiwsInput = {
  create: ProductCreateWithoutReveiwsInput;
  update: ProductUpdateWithoutReveiwsInput;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  buisnessCategory?: InputMaybe<BuisnessCategoryRelationFilter>;
  buisnessCategoryId?: InputMaybe<StringNullableFilter>;
  buisnessSubCategory?: InputMaybe<BuisnessSubCategoryRelationFilter>;
  buisnessSubCategoryId?: InputMaybe<StringNullableFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customFileds?: InputMaybe<CustomProductFieldForBuisnessCategoryValueListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  durationPreiod?: InputMaybe<IntFilter>;
  durationType?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  reveiws?: InputMaybe<ReviewListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductWhereUniqueInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Provider = {
  __typename?: 'Provider';
  employee: Employee;
  employeeId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  numberofClient: Scalars['Int']['output'];
};

export type ProviderAvgAggregate = {
  __typename?: 'ProviderAvgAggregate';
  numberofClient?: Maybe<Scalars['Float']['output']>;
};

export type ProviderAvgOrderByAggregateInput = {
  numberofClient?: InputMaybe<SortOrder>;
};

export type ProviderCountAggregate = {
  __typename?: 'ProviderCountAggregate';
  _all: Scalars['Int']['output'];
  employeeId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  numberofClient: Scalars['Int']['output'];
};

export type ProviderCountOrderByAggregateInput = {
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  numberofClient?: InputMaybe<SortOrder>;
};

export type ProviderCreateInput = {
  employee: EmployeeCreateNestedOneWithoutProviderInput;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  numberofClient: Scalars['Int']['input'];
};

export type ProviderCreateManyInput = {
  employeeId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  numberofClient: Scalars['Int']['input'];
};

export type ProviderCreateNestedOneWithoutEmployeeInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderCreateOrConnectWithoutEmployeeInput>;
  create?: InputMaybe<ProviderCreateWithoutEmployeeInput>;
};

export type ProviderCreateOrConnectWithoutEmployeeInput = {
  create: ProviderCreateWithoutEmployeeInput;
  where: ProviderWhereUniqueInput;
};

export type ProviderCreateWithoutEmployeeInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  numberofClient: Scalars['Int']['input'];
};

export type ProviderGroupBy = {
  __typename?: 'ProviderGroupBy';
  _avg?: Maybe<ProviderAvgAggregate>;
  _count?: Maybe<ProviderCountAggregate>;
  _max?: Maybe<ProviderMaxAggregate>;
  _min?: Maybe<ProviderMinAggregate>;
  _sum?: Maybe<ProviderSumAggregate>;
  employeeId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  numberofClient: Scalars['Int']['output'];
};

export type ProviderMaxAggregate = {
  __typename?: 'ProviderMaxAggregate';
  employeeId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numberofClient?: Maybe<Scalars['Int']['output']>;
};

export type ProviderMaxOrderByAggregateInput = {
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  numberofClient?: InputMaybe<SortOrder>;
};

export type ProviderMinAggregate = {
  __typename?: 'ProviderMinAggregate';
  employeeId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numberofClient?: Maybe<Scalars['Int']['output']>;
};

export type ProviderMinOrderByAggregateInput = {
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  numberofClient?: InputMaybe<SortOrder>;
};

export type ProviderOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProviderAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProviderCountOrderByAggregateInput>;
  _max?: InputMaybe<ProviderMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProviderMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProviderSumOrderByAggregateInput>;
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  numberofClient?: InputMaybe<SortOrder>;
};

export type ProviderOrderByWithRelationInput = {
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>;
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  numberofClient?: InputMaybe<SortOrder>;
};

export type ProviderRelationFilter = {
  is?: InputMaybe<ProviderWhereInput>;
  isNot?: InputMaybe<ProviderWhereInput>;
};

export enum ProviderScalarFieldEnum {
  EmployeeId = 'employeeId',
  Id = 'id',
  Name = 'name',
  NumberofClient = 'numberofClient'
}

export type ProviderScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProviderScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProviderScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProviderScalarWhereWithAggregatesInput>>;
  employeeId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  numberofClient?: InputMaybe<IntWithAggregatesFilter>;
};

export type ProviderSumAggregate = {
  __typename?: 'ProviderSumAggregate';
  numberofClient?: Maybe<Scalars['Int']['output']>;
};

export type ProviderSumOrderByAggregateInput = {
  numberofClient?: InputMaybe<SortOrder>;
};

export type ProviderUpdateInput = {
  employee?: InputMaybe<EmployeeUpdateOneRequiredWithoutProviderNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numberofClient?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ProviderUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numberofClient?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ProviderUpdateOneWithoutEmployeeNestedInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProviderCreateOrConnectWithoutEmployeeInput>;
  create?: InputMaybe<ProviderCreateWithoutEmployeeInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ProviderUpdateWithoutEmployeeInput>;
  upsert?: InputMaybe<ProviderUpsertWithoutEmployeeInput>;
};

export type ProviderUpdateWithoutEmployeeInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  numberofClient?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ProviderUpsertWithoutEmployeeInput = {
  create: ProviderCreateWithoutEmployeeInput;
  update: ProviderUpdateWithoutEmployeeInput;
};

export type ProviderWhereInput = {
  AND?: InputMaybe<Array<ProviderWhereInput>>;
  NOT?: InputMaybe<Array<ProviderWhereInput>>;
  OR?: InputMaybe<Array<ProviderWhereInput>>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  numberofClient?: InputMaybe<IntFilter>;
};

export type ProviderWhereUniqueInput = {
  employeeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateBooking: AggregateBooking;
  aggregateBuisnessCategory: AggregateBuisnessCategory;
  aggregateBuisnessSubCategory: AggregateBuisnessSubCategory;
  aggregateCompany: AggregateCompany;
  aggregateCustomFieldForProduct: AggregateCustomFieldForProduct;
  aggregateCustomProductFieldForBuisnessCategory: AggregateCustomProductFieldForBuisnessCategory;
  aggregateCustomProductFieldForBuisnessCategoryValue: AggregateCustomProductFieldForBuisnessCategoryValue;
  aggregateEmployee: AggregateEmployee;
  aggregateEvent: AggregateEvent;
  aggregateFetaureCategory: AggregateFetaureCategory;
  aggregateFetaures: AggregateFetaures;
  aggregateGeolocation: AggregateGeolocation;
  aggregateLocation: AggregateLocation;
  aggregateOwner: AggregateOwner;
  aggregatePlan: AggregatePlan;
  aggregateProduct: AggregateProduct;
  aggregateProvider: AggregateProvider;
  aggregateReview: AggregateReview;
  aggregateSiteDesighn: AggregateSiteDesighn;
  aggregateSubscription: AggregateSubscription;
  aggregateUser: AggregateUser;
  aggregateUserTokens: AggregateUserTokens;
  booking?: Maybe<Booking>;
  bookings: Array<Booking>;
  buisnessCategories: Array<BuisnessCategory>;
  buisnessCategory?: Maybe<BuisnessCategory>;
  buisnessSubCategories: Array<BuisnessSubCategory>;
  buisnessSubCategory?: Maybe<BuisnessSubCategory>;
  companies: Array<Company>;
  company?: Maybe<Company>;
  customFieldForProduct?: Maybe<CustomFieldForProduct>;
  customFieldForProducts: Array<CustomFieldForProduct>;
  customProductFieldForBuisnessCategories: Array<CustomProductFieldForBuisnessCategory>;
  customProductFieldForBuisnessCategory?: Maybe<CustomProductFieldForBuisnessCategory>;
  customProductFieldForBuisnessCategoryValue?: Maybe<CustomProductFieldForBuisnessCategoryValue>;
  customProductFieldForBuisnessCategoryValues: Array<CustomProductFieldForBuisnessCategoryValue>;
  employee?: Maybe<Employee>;
  employees: Array<Employee>;
  event?: Maybe<Event>;
  events: Array<Event>;
  fetaureCategories: Array<FetaureCategory>;
  fetaureCategory?: Maybe<FetaureCategory>;
  findFirstBooking?: Maybe<Booking>;
  findFirstBookingOrThrow?: Maybe<Booking>;
  findFirstBuisnessCategory?: Maybe<BuisnessCategory>;
  findFirstBuisnessCategoryOrThrow?: Maybe<BuisnessCategory>;
  findFirstBuisnessSubCategory?: Maybe<BuisnessSubCategory>;
  findFirstBuisnessSubCategoryOrThrow?: Maybe<BuisnessSubCategory>;
  findFirstCompany?: Maybe<Company>;
  findFirstCompanyOrThrow?: Maybe<Company>;
  findFirstCustomFieldForProduct?: Maybe<CustomFieldForProduct>;
  findFirstCustomFieldForProductOrThrow?: Maybe<CustomFieldForProduct>;
  findFirstCustomProductFieldForBuisnessCategory?: Maybe<CustomProductFieldForBuisnessCategory>;
  findFirstCustomProductFieldForBuisnessCategoryOrThrow?: Maybe<CustomProductFieldForBuisnessCategory>;
  findFirstCustomProductFieldForBuisnessCategoryValue?: Maybe<CustomProductFieldForBuisnessCategoryValue>;
  findFirstCustomProductFieldForBuisnessCategoryValueOrThrow?: Maybe<CustomProductFieldForBuisnessCategoryValue>;
  findFirstEmployee?: Maybe<Employee>;
  findFirstEmployeeOrThrow?: Maybe<Employee>;
  findFirstEvent?: Maybe<Event>;
  findFirstEventOrThrow?: Maybe<Event>;
  findFirstFetaureCategory?: Maybe<FetaureCategory>;
  findFirstFetaureCategoryOrThrow?: Maybe<FetaureCategory>;
  findFirstFetaures?: Maybe<Fetaures>;
  findFirstFetauresOrThrow?: Maybe<Fetaures>;
  findFirstGeolocation?: Maybe<Geolocation>;
  findFirstGeolocationOrThrow?: Maybe<Geolocation>;
  findFirstLocation?: Maybe<Location>;
  findFirstLocationOrThrow?: Maybe<Location>;
  findFirstOwner?: Maybe<Owner>;
  findFirstOwnerOrThrow?: Maybe<Owner>;
  findFirstPlan?: Maybe<Plan>;
  findFirstPlanOrThrow?: Maybe<Plan>;
  findFirstProduct?: Maybe<Product>;
  findFirstProductOrThrow?: Maybe<Product>;
  findFirstProvider?: Maybe<Provider>;
  findFirstProviderOrThrow?: Maybe<Provider>;
  findFirstReview?: Maybe<Review>;
  findFirstReviewOrThrow?: Maybe<Review>;
  findFirstSiteDesighn?: Maybe<SiteDesighn>;
  findFirstSiteDesighnOrThrow?: Maybe<SiteDesighn>;
  findFirstSubscription?: Maybe<Subscription>;
  findFirstSubscriptionOrThrow?: Maybe<Subscription>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstUserTokens?: Maybe<UserTokens>;
  findFirstUserTokensOrThrow?: Maybe<UserTokens>;
  findManyFetaures: Array<Fetaures>;
  findManyUserTokens: Array<UserTokens>;
  findUniqueFetaures?: Maybe<Fetaures>;
  findUniqueFetauresOrThrow?: Maybe<Fetaures>;
  findUniqueUserTokens?: Maybe<UserTokens>;
  findUniqueUserTokensOrThrow?: Maybe<UserTokens>;
  geolocation?: Maybe<Geolocation>;
  geolocations: Array<Geolocation>;
  getBooking?: Maybe<Booking>;
  getBuisnessCategory?: Maybe<BuisnessCategory>;
  getBuisnessSubCategory?: Maybe<BuisnessSubCategory>;
  getCompany?: Maybe<Company>;
  getCustomFieldForProduct?: Maybe<CustomFieldForProduct>;
  getCustomProductFieldForBuisnessCategory?: Maybe<CustomProductFieldForBuisnessCategory>;
  getCustomProductFieldForBuisnessCategoryValue?: Maybe<CustomProductFieldForBuisnessCategoryValue>;
  getEmployee?: Maybe<Employee>;
  getEvent?: Maybe<Event>;
  getFetaureCategory?: Maybe<FetaureCategory>;
  getGeolocation?: Maybe<Geolocation>;
  getLocation?: Maybe<Location>;
  getOwner?: Maybe<Owner>;
  getPlan?: Maybe<Plan>;
  getProduct?: Maybe<Product>;
  getProvider?: Maybe<Provider>;
  getReview?: Maybe<Review>;
  getSiteDesighn?: Maybe<SiteDesighn>;
  getSubscription?: Maybe<Subscription>;
  getUser?: Maybe<User>;
  groupByBooking: Array<BookingGroupBy>;
  groupByBuisnessCategory: Array<BuisnessCategoryGroupBy>;
  groupByBuisnessSubCategory: Array<BuisnessSubCategoryGroupBy>;
  groupByCompany: Array<CompanyGroupBy>;
  groupByCustomFieldForProduct: Array<CustomFieldForProductGroupBy>;
  groupByCustomProductFieldForBuisnessCategory: Array<CustomProductFieldForBuisnessCategoryGroupBy>;
  groupByCustomProductFieldForBuisnessCategoryValue: Array<CustomProductFieldForBuisnessCategoryValueGroupBy>;
  groupByEmployee: Array<EmployeeGroupBy>;
  groupByEvent: Array<EventGroupBy>;
  groupByFetaureCategory: Array<FetaureCategoryGroupBy>;
  groupByFetaures: Array<FetauresGroupBy>;
  groupByGeolocation: Array<GeolocationGroupBy>;
  groupByLocation: Array<LocationGroupBy>;
  groupByOwner: Array<OwnerGroupBy>;
  groupByPlan: Array<PlanGroupBy>;
  groupByProduct: Array<ProductGroupBy>;
  groupByProvider: Array<ProviderGroupBy>;
  groupByReview: Array<ReviewGroupBy>;
  groupBySiteDesighn: Array<SiteDesighnGroupBy>;
  groupBySubscription: Array<SubscriptionGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserTokens: Array<UserTokensGroupBy>;
  healthCheck: Scalars['String']['output'];
  location?: Maybe<Location>;
  locations: Array<Location>;
  me?: Maybe<UserForResponsce>;
  meCompany?: Maybe<CompanyUserForResponsce>;
  owner?: Maybe<Owner>;
  owners: Array<Owner>;
  plan?: Maybe<Plan>;
  plans: Array<Plan>;
  product?: Maybe<Product>;
  products: Array<Product>;
  provider?: Maybe<Provider>;
  providers: Array<Provider>;
  review?: Maybe<Review>;
  reviews: Array<Review>;
  siteDesighn?: Maybe<SiteDesighn>;
  siteDesighns: Array<SiteDesighn>;
  subscription?: Maybe<Subscription>;
  subscriptions: Array<Subscription>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateBookingArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>;
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookingWhereInput>;
};


export type QueryAggregateBuisnessCategoryArgs = {
  cursor?: InputMaybe<BuisnessCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<BuisnessCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BuisnessCategoryWhereInput>;
};


export type QueryAggregateBuisnessSubCategoryArgs = {
  cursor?: InputMaybe<BuisnessSubCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<BuisnessSubCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BuisnessSubCategoryWhereInput>;
};


export type QueryAggregateCompanyArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryAggregateCustomFieldForProductArgs = {
  cursor?: InputMaybe<CustomFieldForProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CustomFieldForProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomFieldForProductWhereInput>;
};


export type QueryAggregateCustomProductFieldForBuisnessCategoryArgs = {
  cursor?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereInput>;
};


export type QueryAggregateCustomProductFieldForBuisnessCategoryValueArgs = {
  cursor?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereInput>;
};


export type QueryAggregateEmployeeArgs = {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeWhereInput>;
};


export type QueryAggregateEventArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryAggregateFetaureCategoryArgs = {
  cursor?: InputMaybe<FetaureCategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FetaureCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type QueryAggregateFetauresArgs = {
  cursor?: InputMaybe<FetauresWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FetauresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetauresWhereInput>;
};


export type QueryAggregateGeolocationArgs = {
  cursor?: InputMaybe<GeolocationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GeolocationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GeolocationWhereInput>;
};


export type QueryAggregateLocationArgs = {
  cursor?: InputMaybe<LocationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LocationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LocationWhereInput>;
};


export type QueryAggregateOwnerArgs = {
  cursor?: InputMaybe<OwnerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OwnerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QueryAggregatePlanArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlanOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlanWhereInput>;
};


export type QueryAggregateProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryAggregateProviderArgs = {
  cursor?: InputMaybe<ProviderWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProviderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProviderWhereInput>;
};


export type QueryAggregateReviewArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryAggregateSiteDesighnArgs = {
  cursor?: InputMaybe<SiteDesighnWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SiteDesighnOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SiteDesighnWhereInput>;
};


export type QueryAggregateSubscriptionArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUserTokensArgs = {
  cursor?: InputMaybe<UserTokensWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserTokensOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserTokensWhereInput>;
};


export type QueryBookingArgs = {
  where: BookingWhereUniqueInput;
};


export type QueryBookingsArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookingWhereInput>;
};


export type QueryBuisnessCategoriesArgs = {
  cursor?: InputMaybe<BuisnessCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<BuisnessCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BuisnessCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BuisnessCategoryWhereInput>;
};


export type QueryBuisnessCategoryArgs = {
  where: BuisnessCategoryWhereUniqueInput;
};


export type QueryBuisnessSubCategoriesArgs = {
  cursor?: InputMaybe<BuisnessSubCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<BuisnessSubCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BuisnessSubCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BuisnessSubCategoryWhereInput>;
};


export type QueryBuisnessSubCategoryArgs = {
  where: BuisnessSubCategoryWhereUniqueInput;
};


export type QueryCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type QueryCustomFieldForProductArgs = {
  where: CustomFieldForProductWhereUniqueInput;
};


export type QueryCustomFieldForProductsArgs = {
  cursor?: InputMaybe<CustomFieldForProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomFieldForProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomFieldForProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomFieldForProductWhereInput>;
};


export type QueryCustomProductFieldForBuisnessCategoriesArgs = {
  cursor?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereInput>;
};


export type QueryCustomProductFieldForBuisnessCategoryArgs = {
  where: CustomProductFieldForBuisnessCategoryWhereUniqueInput;
};


export type QueryCustomProductFieldForBuisnessCategoryValueArgs = {
  where: CustomProductFieldForBuisnessCategoryValueWhereUniqueInput;
};


export type QueryCustomProductFieldForBuisnessCategoryValuesArgs = {
  cursor?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereInput>;
};


export type QueryEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
};


export type QueryEmployeesArgs = {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeWhereInput>;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryFetaureCategoriesArgs = {
  cursor?: InputMaybe<FetaureCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<FetaureCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FetaureCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type QueryFetaureCategoryArgs = {
  where: FetaureCategoryWhereUniqueInput;
};


export type QueryFindFirstBookingArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookingWhereInput>;
};


export type QueryFindFirstBookingOrThrowArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookingWhereInput>;
};


export type QueryFindFirstBuisnessCategoryArgs = {
  cursor?: InputMaybe<BuisnessCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<BuisnessCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BuisnessCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BuisnessCategoryWhereInput>;
};


export type QueryFindFirstBuisnessCategoryOrThrowArgs = {
  cursor?: InputMaybe<BuisnessCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<BuisnessCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BuisnessCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BuisnessCategoryWhereInput>;
};


export type QueryFindFirstBuisnessSubCategoryArgs = {
  cursor?: InputMaybe<BuisnessSubCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<BuisnessSubCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BuisnessSubCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BuisnessSubCategoryWhereInput>;
};


export type QueryFindFirstBuisnessSubCategoryOrThrowArgs = {
  cursor?: InputMaybe<BuisnessSubCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<BuisnessSubCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BuisnessSubCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BuisnessSubCategoryWhereInput>;
};


export type QueryFindFirstCompanyArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryFindFirstCompanyOrThrowArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryFindFirstCustomFieldForProductArgs = {
  cursor?: InputMaybe<CustomFieldForProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomFieldForProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomFieldForProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomFieldForProductWhereInput>;
};


export type QueryFindFirstCustomFieldForProductOrThrowArgs = {
  cursor?: InputMaybe<CustomFieldForProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomFieldForProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomFieldForProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomFieldForProductWhereInput>;
};


export type QueryFindFirstCustomProductFieldForBuisnessCategoryArgs = {
  cursor?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereInput>;
};


export type QueryFindFirstCustomProductFieldForBuisnessCategoryOrThrowArgs = {
  cursor?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereInput>;
};


export type QueryFindFirstCustomProductFieldForBuisnessCategoryValueArgs = {
  cursor?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereInput>;
};


export type QueryFindFirstCustomProductFieldForBuisnessCategoryValueOrThrowArgs = {
  cursor?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereInput>;
};


export type QueryFindFirstEmployeeArgs = {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeWhereInput>;
};


export type QueryFindFirstEmployeeOrThrowArgs = {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeWhereInput>;
};


export type QueryFindFirstEventArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryFindFirstEventOrThrowArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryFindFirstFetaureCategoryArgs = {
  cursor?: InputMaybe<FetaureCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<FetaureCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FetaureCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type QueryFindFirstFetaureCategoryOrThrowArgs = {
  cursor?: InputMaybe<FetaureCategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<FetaureCategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FetaureCategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type QueryFindFirstFetauresArgs = {
  cursor?: InputMaybe<FetauresWhereUniqueInput>;
  distinct?: InputMaybe<Array<FetauresScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FetauresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetauresWhereInput>;
};


export type QueryFindFirstFetauresOrThrowArgs = {
  cursor?: InputMaybe<FetauresWhereUniqueInput>;
  distinct?: InputMaybe<Array<FetauresScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FetauresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetauresWhereInput>;
};


export type QueryFindFirstGeolocationArgs = {
  cursor?: InputMaybe<GeolocationWhereUniqueInput>;
  distinct?: InputMaybe<Array<GeolocationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GeolocationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GeolocationWhereInput>;
};


export type QueryFindFirstGeolocationOrThrowArgs = {
  cursor?: InputMaybe<GeolocationWhereUniqueInput>;
  distinct?: InputMaybe<Array<GeolocationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GeolocationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GeolocationWhereInput>;
};


export type QueryFindFirstLocationArgs = {
  cursor?: InputMaybe<LocationWhereUniqueInput>;
  distinct?: InputMaybe<Array<LocationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LocationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LocationWhereInput>;
};


export type QueryFindFirstLocationOrThrowArgs = {
  cursor?: InputMaybe<LocationWhereUniqueInput>;
  distinct?: InputMaybe<Array<LocationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LocationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LocationWhereInput>;
};


export type QueryFindFirstOwnerArgs = {
  cursor?: InputMaybe<OwnerWhereUniqueInput>;
  distinct?: InputMaybe<Array<OwnerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OwnerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QueryFindFirstOwnerOrThrowArgs = {
  cursor?: InputMaybe<OwnerWhereUniqueInput>;
  distinct?: InputMaybe<Array<OwnerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OwnerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QueryFindFirstPlanArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlanScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlanOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlanWhereInput>;
};


export type QueryFindFirstPlanOrThrowArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlanScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlanOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlanWhereInput>;
};


export type QueryFindFirstProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindFirstProductOrThrowArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryFindFirstProviderArgs = {
  cursor?: InputMaybe<ProviderWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProviderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProviderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProviderWhereInput>;
};


export type QueryFindFirstProviderOrThrowArgs = {
  cursor?: InputMaybe<ProviderWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProviderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProviderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProviderWhereInput>;
};


export type QueryFindFirstReviewArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryFindFirstReviewOrThrowArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryFindFirstSiteDesighnArgs = {
  cursor?: InputMaybe<SiteDesighnWhereUniqueInput>;
  distinct?: InputMaybe<Array<SiteDesighnScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SiteDesighnOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SiteDesighnWhereInput>;
};


export type QueryFindFirstSiteDesighnOrThrowArgs = {
  cursor?: InputMaybe<SiteDesighnWhereUniqueInput>;
  distinct?: InputMaybe<Array<SiteDesighnScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SiteDesighnOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SiteDesighnWhereInput>;
};


export type QueryFindFirstSubscriptionArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type QueryFindFirstSubscriptionOrThrowArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserTokensArgs = {
  cursor?: InputMaybe<UserTokensWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserTokensScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserTokensOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserTokensWhereInput>;
};


export type QueryFindFirstUserTokensOrThrowArgs = {
  cursor?: InputMaybe<UserTokensWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserTokensScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserTokensOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserTokensWhereInput>;
};


export type QueryFindManyFetauresArgs = {
  cursor?: InputMaybe<FetauresWhereUniqueInput>;
  distinct?: InputMaybe<Array<FetauresScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FetauresOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetauresWhereInput>;
};


export type QueryFindManyUserTokensArgs = {
  cursor?: InputMaybe<UserTokensWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserTokensScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserTokensOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserTokensWhereInput>;
};


export type QueryFindUniqueFetauresArgs = {
  where: FetauresWhereUniqueInput;
};


export type QueryFindUniqueFetauresOrThrowArgs = {
  where: FetauresWhereUniqueInput;
};


export type QueryFindUniqueUserTokensArgs = {
  where: UserTokensWhereUniqueInput;
};


export type QueryFindUniqueUserTokensOrThrowArgs = {
  where: UserTokensWhereUniqueInput;
};


export type QueryGeolocationArgs = {
  where: GeolocationWhereUniqueInput;
};


export type QueryGeolocationsArgs = {
  cursor?: InputMaybe<GeolocationWhereUniqueInput>;
  distinct?: InputMaybe<Array<GeolocationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GeolocationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GeolocationWhereInput>;
};


export type QueryGetBookingArgs = {
  where: BookingWhereUniqueInput;
};


export type QueryGetBuisnessCategoryArgs = {
  where: BuisnessCategoryWhereUniqueInput;
};


export type QueryGetBuisnessSubCategoryArgs = {
  where: BuisnessSubCategoryWhereUniqueInput;
};


export type QueryGetCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type QueryGetCustomFieldForProductArgs = {
  where: CustomFieldForProductWhereUniqueInput;
};


export type QueryGetCustomProductFieldForBuisnessCategoryArgs = {
  where: CustomProductFieldForBuisnessCategoryWhereUniqueInput;
};


export type QueryGetCustomProductFieldForBuisnessCategoryValueArgs = {
  where: CustomProductFieldForBuisnessCategoryValueWhereUniqueInput;
};


export type QueryGetEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
};


export type QueryGetEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryGetFetaureCategoryArgs = {
  where: FetaureCategoryWhereUniqueInput;
};


export type QueryGetGeolocationArgs = {
  where: GeolocationWhereUniqueInput;
};


export type QueryGetLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type QueryGetOwnerArgs = {
  where: OwnerWhereUniqueInput;
};


export type QueryGetPlanArgs = {
  where: PlanWhereUniqueInput;
};


export type QueryGetProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryGetProviderArgs = {
  where: ProviderWhereUniqueInput;
};


export type QueryGetReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type QueryGetSiteDesighnArgs = {
  where: SiteDesighnWhereUniqueInput;
};


export type QueryGetSubscriptionArgs = {
  where: SubscriptionWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGroupByBookingArgs = {
  by: Array<BookingScalarFieldEnum>;
  having?: InputMaybe<BookingScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<BookingOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookingWhereInput>;
};


export type QueryGroupByBuisnessCategoryArgs = {
  by: Array<BuisnessCategoryScalarFieldEnum>;
  having?: InputMaybe<BuisnessCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<BuisnessCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BuisnessCategoryWhereInput>;
};


export type QueryGroupByBuisnessSubCategoryArgs = {
  by: Array<BuisnessSubCategoryScalarFieldEnum>;
  having?: InputMaybe<BuisnessSubCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<BuisnessSubCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BuisnessSubCategoryWhereInput>;
};


export type QueryGroupByCompanyArgs = {
  by: Array<CompanyScalarFieldEnum>;
  having?: InputMaybe<CompanyScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryGroupByCustomFieldForProductArgs = {
  by: Array<CustomFieldForProductScalarFieldEnum>;
  having?: InputMaybe<CustomFieldForProductScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CustomFieldForProductOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomFieldForProductWhereInput>;
};


export type QueryGroupByCustomProductFieldForBuisnessCategoryArgs = {
  by: Array<CustomProductFieldForBuisnessCategoryScalarFieldEnum>;
  having?: InputMaybe<CustomProductFieldForBuisnessCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryWhereInput>;
};


export type QueryGroupByCustomProductFieldForBuisnessCategoryValueArgs = {
  by: Array<CustomProductFieldForBuisnessCategoryValueScalarFieldEnum>;
  having?: InputMaybe<CustomProductFieldForBuisnessCategoryValueScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CustomProductFieldForBuisnessCategoryValueOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomProductFieldForBuisnessCategoryValueWhereInput>;
};


export type QueryGroupByEmployeeArgs = {
  by: Array<EmployeeScalarFieldEnum>;
  having?: InputMaybe<EmployeeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmployeeWhereInput>;
};


export type QueryGroupByEventArgs = {
  by: Array<EventScalarFieldEnum>;
  having?: InputMaybe<EventScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<EventOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryGroupByFetaureCategoryArgs = {
  by: Array<FetaureCategoryScalarFieldEnum>;
  having?: InputMaybe<FetaureCategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FetaureCategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetaureCategoryWhereInput>;
};


export type QueryGroupByFetauresArgs = {
  by: Array<FetauresScalarFieldEnum>;
  having?: InputMaybe<FetauresScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FetauresOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FetauresWhereInput>;
};


export type QueryGroupByGeolocationArgs = {
  by: Array<GeolocationScalarFieldEnum>;
  having?: InputMaybe<GeolocationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GeolocationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GeolocationWhereInput>;
};


export type QueryGroupByLocationArgs = {
  by: Array<LocationScalarFieldEnum>;
  having?: InputMaybe<LocationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LocationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LocationWhereInput>;
};


export type QueryGroupByOwnerArgs = {
  by: Array<OwnerScalarFieldEnum>;
  having?: InputMaybe<OwnerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OwnerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QueryGroupByPlanArgs = {
  by: Array<PlanScalarFieldEnum>;
  having?: InputMaybe<PlanScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlanOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlanWhereInput>;
};


export type QueryGroupByProductArgs = {
  by: Array<ProductScalarFieldEnum>;
  having?: InputMaybe<ProductScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryGroupByProviderArgs = {
  by: Array<ProviderScalarFieldEnum>;
  having?: InputMaybe<ProviderScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProviderOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProviderWhereInput>;
};


export type QueryGroupByReviewArgs = {
  by: Array<ReviewScalarFieldEnum>;
  having?: InputMaybe<ReviewScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryGroupBySiteDesighnArgs = {
  by: Array<SiteDesighnScalarFieldEnum>;
  having?: InputMaybe<SiteDesighnScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SiteDesighnOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SiteDesighnWhereInput>;
};


export type QueryGroupBySubscriptionArgs = {
  by: Array<SubscriptionScalarFieldEnum>;
  having?: InputMaybe<SubscriptionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByUserTokensArgs = {
  by: Array<UserTokensScalarFieldEnum>;
  having?: InputMaybe<UserTokensScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserTokensOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserTokensWhereInput>;
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type QueryLocationsArgs = {
  cursor?: InputMaybe<LocationWhereUniqueInput>;
  distinct?: InputMaybe<Array<LocationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LocationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LocationWhereInput>;
};


export type QueryOwnerArgs = {
  where: OwnerWhereUniqueInput;
};


export type QueryOwnersArgs = {
  cursor?: InputMaybe<OwnerWhereUniqueInput>;
  distinct?: InputMaybe<Array<OwnerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OwnerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QueryPlanArgs = {
  where: PlanWhereUniqueInput;
};


export type QueryPlansArgs = {
  cursor?: InputMaybe<PlanWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlanScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlanOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlanWhereInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryProviderArgs = {
  where: ProviderWhereUniqueInput;
};


export type QueryProvidersArgs = {
  cursor?: InputMaybe<ProviderWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProviderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProviderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProviderWhereInput>;
};


export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type QueryReviewsArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QuerySiteDesighnArgs = {
  where: SiteDesighnWhereUniqueInput;
};


export type QuerySiteDesighnsArgs = {
  cursor?: InputMaybe<SiteDesighnWhereUniqueInput>;
  distinct?: InputMaybe<Array<SiteDesighnScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SiteDesighnOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SiteDesighnWhereInput>;
};


export type QuerySubscriptionArgs = {
  where: SubscriptionWhereUniqueInput;
};


export type QuerySubscriptionsArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type ReesetPassByLinkInput = {
  confirmPass: Scalars['String']['input'];
  newPass: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type Review = {
  __typename?: 'Review';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  star: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type ReviewAvgAggregate = {
  __typename?: 'ReviewAvgAggregate';
  star?: Maybe<Scalars['Float']['output']>;
};

export type ReviewAvgOrderByAggregateInput = {
  star?: InputMaybe<SortOrder>;
};

export type ReviewCountAggregate = {
  __typename?: 'ReviewCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  message: Scalars['Int']['output'];
  productId: Scalars['Int']['output'];
  star: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ReviewCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  star?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReviewCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  product: ProductCreateNestedOneWithoutReveiwsInput;
  star: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutReveiwsInput;
};

export type ReviewCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  star: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type ReviewCreateManyProductInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  star: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type ReviewCreateManyProductInputEnvelope = {
  data: Array<ReviewCreateManyProductInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  star: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReviewCreateManyUserInputEnvelope = {
  data: Array<ReviewCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReviewCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutProductInput>>;
  createMany?: InputMaybe<ReviewCreateManyProductInputEnvelope>;
};

export type ReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReviewCreateManyUserInputEnvelope>;
};

export type ReviewCreateOrConnectWithoutProductInput = {
  create: ReviewCreateWithoutProductInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateWithoutProductInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  star: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutReveiwsInput;
};

export type ReviewCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  product: ProductCreateNestedOneWithoutReveiwsInput;
  star: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReviewGroupBy = {
  __typename?: 'ReviewGroupBy';
  _avg?: Maybe<ReviewAvgAggregate>;
  _count?: Maybe<ReviewCountAggregate>;
  _max?: Maybe<ReviewMaxAggregate>;
  _min?: Maybe<ReviewMinAggregate>;
  _sum?: Maybe<ReviewSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  star: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type ReviewListRelationFilter = {
  every?: InputMaybe<ReviewWhereInput>;
  none?: InputMaybe<ReviewWhereInput>;
  some?: InputMaybe<ReviewWhereInput>;
};

export type ReviewMaxAggregate = {
  __typename?: 'ReviewMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  star?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReviewMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  star?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReviewMinAggregate = {
  __typename?: 'ReviewMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  star?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReviewMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  star?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReviewOrderByWithAggregationInput = {
  _avg?: InputMaybe<ReviewAvgOrderByAggregateInput>;
  _count?: InputMaybe<ReviewCountOrderByAggregateInput>;
  _max?: InputMaybe<ReviewMaxOrderByAggregateInput>;
  _min?: InputMaybe<ReviewMinOrderByAggregateInput>;
  _sum?: InputMaybe<ReviewSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  star?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReviewOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  star?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ReviewScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Message = 'message',
  ProductId = 'productId',
  Star = 'star',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ReviewScalarWhereInput = {
  AND?: InputMaybe<Array<ReviewScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReviewScalarWhereInput>>;
  OR?: InputMaybe<Array<ReviewScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  star?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReviewScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ReviewScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ReviewScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ReviewScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  message?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  star?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ReviewSumAggregate = {
  __typename?: 'ReviewSumAggregate';
  star?: Maybe<Scalars['Int']['output']>;
};

export type ReviewSumOrderByAggregateInput = {
  star?: InputMaybe<SortOrder>;
};

export type ReviewUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutReveiwsNestedInput>;
  star?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutReveiwsNestedInput>;
};

export type ReviewUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  star?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReviewUpdateManyWithWhereWithoutProductInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithWhereWithoutUserInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutProductInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutProductInput>>;
  createMany?: InputMaybe<ReviewCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutProductInput>>;
  upsert?: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ReviewUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReviewCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReviewCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReviewScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  update?: InputMaybe<Array<ReviewUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ReviewUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ReviewUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ReviewUpdateWithWhereUniqueWithoutProductInput = {
  data: ReviewUpdateWithoutProductInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithoutProductInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  star?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutReveiwsNestedInput>;
};

export type ReviewUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutReveiwsNestedInput>;
  star?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReviewUpsertWithWhereUniqueWithoutProductInput = {
  create: ReviewCreateWithoutProductInput;
  update: ReviewUpdateWithoutProductInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  update: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUserIdProductIdCompoundUniqueInput = {
  productId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  star?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  userId_productId?: InputMaybe<ReviewUserIdProductIdCompoundUniqueInput>;
};

export type SiteDesighn = {
  __typename?: 'SiteDesighn';
  company: Company;
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  primarycolor: Scalars['String']['output'];
  secondarcolor: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SiteDesighnCountAggregate = {
  __typename?: 'SiteDesighnCountAggregate';
  _all: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  primarycolor: Scalars['Int']['output'];
  secondarcolor: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type SiteDesighnCountOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  primarycolor?: InputMaybe<SortOrder>;
  secondarcolor?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SiteDesighnCreateInput = {
  company: CompanyCreateNestedOneWithoutSiteDesighnInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  primarycolor: Scalars['String']['input'];
  secondarcolor: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SiteDesighnCreateManyInput = {
  companyId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  primarycolor: Scalars['String']['input'];
  secondarcolor: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SiteDesighnCreateNestedOneWithoutCompanyInput = {
  connect?: InputMaybe<SiteDesighnWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SiteDesighnCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<SiteDesighnCreateWithoutCompanyInput>;
};

export type SiteDesighnCreateOrConnectWithoutCompanyInput = {
  create: SiteDesighnCreateWithoutCompanyInput;
  where: SiteDesighnWhereUniqueInput;
};

export type SiteDesighnCreateWithoutCompanyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  primarycolor: Scalars['String']['input'];
  secondarcolor: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SiteDesighnGroupBy = {
  __typename?: 'SiteDesighnGroupBy';
  _count?: Maybe<SiteDesighnCountAggregate>;
  _max?: Maybe<SiteDesighnMaxAggregate>;
  _min?: Maybe<SiteDesighnMinAggregate>;
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  primarycolor: Scalars['String']['output'];
  secondarcolor: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SiteDesighnMaxAggregate = {
  __typename?: 'SiteDesighnMaxAggregate';
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  primarycolor?: Maybe<Scalars['String']['output']>;
  secondarcolor?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SiteDesighnMaxOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  primarycolor?: InputMaybe<SortOrder>;
  secondarcolor?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SiteDesighnMinAggregate = {
  __typename?: 'SiteDesighnMinAggregate';
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  primarycolor?: Maybe<Scalars['String']['output']>;
  secondarcolor?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SiteDesighnMinOrderByAggregateInput = {
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  primarycolor?: InputMaybe<SortOrder>;
  secondarcolor?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SiteDesighnOrderByWithAggregationInput = {
  _count?: InputMaybe<SiteDesighnCountOrderByAggregateInput>;
  _max?: InputMaybe<SiteDesighnMaxOrderByAggregateInput>;
  _min?: InputMaybe<SiteDesighnMinOrderByAggregateInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  primarycolor?: InputMaybe<SortOrder>;
  secondarcolor?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SiteDesighnOrderByWithRelationInput = {
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  primarycolor?: InputMaybe<SortOrder>;
  secondarcolor?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SiteDesighnRelationFilter = {
  is?: InputMaybe<SiteDesighnWhereInput>;
  isNot?: InputMaybe<SiteDesighnWhereInput>;
};

export enum SiteDesighnScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Primarycolor = 'primarycolor',
  Secondarcolor = 'secondarcolor',
  UpdatedAt = 'updatedAt'
}

export type SiteDesighnScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SiteDesighnScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SiteDesighnScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SiteDesighnScalarWhereWithAggregatesInput>>;
  companyId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  primarycolor?: InputMaybe<StringWithAggregatesFilter>;
  secondarcolor?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type SiteDesighnUpdateInput = {
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutSiteDesighnNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  primarycolor?: InputMaybe<StringFieldUpdateOperationsInput>;
  secondarcolor?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SiteDesighnUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  primarycolor?: InputMaybe<StringFieldUpdateOperationsInput>;
  secondarcolor?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SiteDesighnUpdateOneWithoutCompanyNestedInput = {
  connect?: InputMaybe<SiteDesighnWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SiteDesighnCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<SiteDesighnCreateWithoutCompanyInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<SiteDesighnUpdateWithoutCompanyInput>;
  upsert?: InputMaybe<SiteDesighnUpsertWithoutCompanyInput>;
};

export type SiteDesighnUpdateWithoutCompanyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  primarycolor?: InputMaybe<StringFieldUpdateOperationsInput>;
  secondarcolor?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SiteDesighnUpsertWithoutCompanyInput = {
  create: SiteDesighnCreateWithoutCompanyInput;
  update: SiteDesighnUpdateWithoutCompanyInput;
};

export type SiteDesighnWhereInput = {
  AND?: InputMaybe<Array<SiteDesighnWhereInput>>;
  NOT?: InputMaybe<Array<SiteDesighnWhereInput>>;
  OR?: InputMaybe<Array<SiteDesighnWhereInput>>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  primarycolor?: InputMaybe<StringFilter>;
  secondarcolor?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SiteDesighnWhereUniqueInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  company?: Maybe<Company>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  plan: Plan;
  planId: Scalars['String']['output'];
  status: SubscriptionStatus;
  stripe_subscriptionId: Scalars['String']['output'];
  subscription_end?: Maybe<Scalars['DateTime']['output']>;
  subscription_time?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type SubscriptionCountAggregate = {
  __typename?: 'SubscriptionCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  planId: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  stripe_subscriptionId: Scalars['Int']['output'];
  subscription_end: Scalars['Int']['output'];
  subscription_time: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type SubscriptionCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  planId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  stripe_subscriptionId?: InputMaybe<SortOrder>;
  subscription_end?: InputMaybe<SortOrder>;
  subscription_time?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionCreateInput = {
  company?: InputMaybe<CompanyCreateNestedOneWithoutSubscriptionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  plan: PlanCreateNestedOneWithoutSubscriptionsInput;
  status: SubscriptionStatus;
  stripe_subscriptionId: Scalars['String']['input'];
  subscription_end?: InputMaybe<Scalars['DateTime']['input']>;
  subscription_time?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutSubscriptionInput;
};

export type SubscriptionCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  planId: Scalars['String']['input'];
  status: SubscriptionStatus;
  stripe_subscriptionId: Scalars['String']['input'];
  subscription_end?: InputMaybe<Scalars['DateTime']['input']>;
  subscription_time?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type SubscriptionCreateManyPlanInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status: SubscriptionStatus;
  stripe_subscriptionId: Scalars['String']['input'];
  subscription_end?: InputMaybe<Scalars['DateTime']['input']>;
  subscription_time?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type SubscriptionCreateManyPlanInputEnvelope = {
  data: Array<SubscriptionCreateManyPlanInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubscriptionCreateNestedManyWithoutPlanInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubscriptionCreateOrConnectWithoutPlanInput>>;
  create?: InputMaybe<Array<SubscriptionCreateWithoutPlanInput>>;
  createMany?: InputMaybe<SubscriptionCreateManyPlanInputEnvelope>;
};

export type SubscriptionCreateNestedOneWithoutCompanyInput = {
  connect?: InputMaybe<SubscriptionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubscriptionCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<SubscriptionCreateWithoutCompanyInput>;
};

export type SubscriptionCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<SubscriptionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubscriptionCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<SubscriptionCreateWithoutUserInput>;
};

export type SubscriptionCreateOrConnectWithoutCompanyInput = {
  create: SubscriptionCreateWithoutCompanyInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionCreateOrConnectWithoutPlanInput = {
  create: SubscriptionCreateWithoutPlanInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionCreateOrConnectWithoutUserInput = {
  create: SubscriptionCreateWithoutUserInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionCreateWithoutCompanyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  plan: PlanCreateNestedOneWithoutSubscriptionsInput;
  status: SubscriptionStatus;
  stripe_subscriptionId: Scalars['String']['input'];
  subscription_end?: InputMaybe<Scalars['DateTime']['input']>;
  subscription_time?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutSubscriptionInput;
};

export type SubscriptionCreateWithoutPlanInput = {
  company?: InputMaybe<CompanyCreateNestedOneWithoutSubscriptionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  status: SubscriptionStatus;
  stripe_subscriptionId: Scalars['String']['input'];
  subscription_end?: InputMaybe<Scalars['DateTime']['input']>;
  subscription_time?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutSubscriptionInput;
};

export type SubscriptionCreateWithoutUserInput = {
  company?: InputMaybe<CompanyCreateNestedOneWithoutSubscriptionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  plan: PlanCreateNestedOneWithoutSubscriptionsInput;
  status: SubscriptionStatus;
  stripe_subscriptionId: Scalars['String']['input'];
  subscription_end?: InputMaybe<Scalars['DateTime']['input']>;
  subscription_time?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SubscriptionGroupBy = {
  __typename?: 'SubscriptionGroupBy';
  _count?: Maybe<SubscriptionCountAggregate>;
  _max?: Maybe<SubscriptionMaxAggregate>;
  _min?: Maybe<SubscriptionMinAggregate>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  planId: Scalars['String']['output'];
  status: SubscriptionStatus;
  stripe_subscriptionId: Scalars['String']['output'];
  subscription_end?: Maybe<Scalars['DateTime']['output']>;
  subscription_time?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type SubscriptionListRelationFilter = {
  every?: InputMaybe<SubscriptionWhereInput>;
  none?: InputMaybe<SubscriptionWhereInput>;
  some?: InputMaybe<SubscriptionWhereInput>;
};

export type SubscriptionMaxAggregate = {
  __typename?: 'SubscriptionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<SubscriptionStatus>;
  stripe_subscriptionId?: Maybe<Scalars['String']['output']>;
  subscription_end?: Maybe<Scalars['DateTime']['output']>;
  subscription_time?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SubscriptionMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  planId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  stripe_subscriptionId?: InputMaybe<SortOrder>;
  subscription_end?: InputMaybe<SortOrder>;
  subscription_time?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionMinAggregate = {
  __typename?: 'SubscriptionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  planId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<SubscriptionStatus>;
  stripe_subscriptionId?: Maybe<Scalars['String']['output']>;
  subscription_end?: Maybe<Scalars['DateTime']['output']>;
  subscription_time?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SubscriptionMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  planId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  stripe_subscriptionId?: InputMaybe<SortOrder>;
  subscription_end?: InputMaybe<SortOrder>;
  subscription_time?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SubscriptionOrderByWithAggregationInput = {
  _count?: InputMaybe<SubscriptionCountOrderByAggregateInput>;
  _max?: InputMaybe<SubscriptionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SubscriptionMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  planId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  stripe_subscriptionId?: InputMaybe<SortOrder>;
  subscription_end?: InputMaybe<SortOrderInput>;
  subscription_time?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionOrderByWithRelationInput = {
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  plan?: InputMaybe<PlanOrderByWithRelationInput>;
  planId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  stripe_subscriptionId?: InputMaybe<SortOrder>;
  subscription_end?: InputMaybe<SortOrderInput>;
  subscription_time?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionRelationFilter = {
  is?: InputMaybe<SubscriptionWhereInput>;
  isNot?: InputMaybe<SubscriptionWhereInput>;
};

export enum SubscriptionScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  PlanId = 'planId',
  Status = 'status',
  StripeSubscriptionId = 'stripe_subscriptionId',
  SubscriptionEnd = 'subscription_end',
  SubscriptionTime = 'subscription_time',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type SubscriptionScalarWhereInput = {
  AND?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  OR?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  planId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumSubscriptionStatusFilter>;
  stripe_subscriptionId?: InputMaybe<StringFilter>;
  subscription_end?: InputMaybe<DateTimeNullableFilter>;
  subscription_time?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SubscriptionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SubscriptionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SubscriptionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SubscriptionScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  planId?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<EnumSubscriptionStatusWithAggregatesFilter>;
  stripe_subscriptionId?: InputMaybe<StringWithAggregatesFilter>;
  subscription_end?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  subscription_time?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export enum SubscriptionStatus {
  Active = 'active',
  Canceled = 'canceled',
  Incomplete = 'incomplete',
  IncompleteExpired = 'incomplete_expired',
  PastDue = 'past_due',
  Paused = 'paused',
  Pending = 'pending',
  RenewNeeded = 'renew_needed',
  Trialing = 'trialing',
  Unpaid = 'unpaid'
}

export type SubscriptionUpdateInput = {
  company?: InputMaybe<CompanyUpdateOneWithoutSubscriptionNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  plan?: InputMaybe<PlanUpdateOneRequiredWithoutSubscriptionsNestedInput>;
  status?: InputMaybe<EnumSubscriptionStatusFieldUpdateOperationsInput>;
  stripe_subscriptionId?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription_end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subscription_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubscriptionNestedInput>;
};

export type SubscriptionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumSubscriptionStatusFieldUpdateOperationsInput>;
  stripe_subscriptionId?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription_end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subscription_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
  data: SubscriptionUpdateManyMutationInput;
  where: SubscriptionScalarWhereInput;
};

export type SubscriptionUpdateManyWithoutPlanNestedInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubscriptionCreateOrConnectWithoutPlanInput>>;
  create?: InputMaybe<Array<SubscriptionCreateWithoutPlanInput>>;
  createMany?: InputMaybe<SubscriptionCreateManyPlanInputEnvelope>;
  delete?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  update?: InputMaybe<Array<SubscriptionUpdateWithWhereUniqueWithoutPlanInput>>;
  updateMany?: InputMaybe<Array<SubscriptionUpdateManyWithWhereWithoutPlanInput>>;
  upsert?: InputMaybe<Array<SubscriptionUpsertWithWhereUniqueWithoutPlanInput>>;
};

export type SubscriptionUpdateOneWithoutCompanyNestedInput = {
  connect?: InputMaybe<SubscriptionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubscriptionCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<SubscriptionCreateWithoutCompanyInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<SubscriptionUpdateWithoutCompanyInput>;
  upsert?: InputMaybe<SubscriptionUpsertWithoutCompanyInput>;
};

export type SubscriptionUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<SubscriptionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubscriptionCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<SubscriptionCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<SubscriptionUpdateWithoutUserInput>;
  upsert?: InputMaybe<SubscriptionUpsertWithoutUserInput>;
};

export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
  data: SubscriptionUpdateWithoutPlanInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpdateWithoutCompanyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  plan?: InputMaybe<PlanUpdateOneRequiredWithoutSubscriptionsNestedInput>;
  status?: InputMaybe<EnumSubscriptionStatusFieldUpdateOperationsInput>;
  stripe_subscriptionId?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription_end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subscription_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubscriptionNestedInput>;
};

export type SubscriptionUpdateWithoutPlanInput = {
  company?: InputMaybe<CompanyUpdateOneWithoutSubscriptionNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumSubscriptionStatusFieldUpdateOperationsInput>;
  stripe_subscriptionId?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription_end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subscription_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubscriptionNestedInput>;
};

export type SubscriptionUpdateWithoutUserInput = {
  company?: InputMaybe<CompanyUpdateOneWithoutSubscriptionNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  plan?: InputMaybe<PlanUpdateOneRequiredWithoutSubscriptionsNestedInput>;
  status?: InputMaybe<EnumSubscriptionStatusFieldUpdateOperationsInput>;
  stripe_subscriptionId?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription_end?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  subscription_time?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
  create: SubscriptionCreateWithoutPlanInput;
  update: SubscriptionUpdateWithoutPlanInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpsertWithoutCompanyInput = {
  create: SubscriptionCreateWithoutCompanyInput;
  update: SubscriptionUpdateWithoutCompanyInput;
};

export type SubscriptionUpsertWithoutUserInput = {
  create: SubscriptionCreateWithoutUserInput;
  update: SubscriptionUpdateWithoutUserInput;
};

export type SubscriptionWhereInput = {
  AND?: InputMaybe<Array<SubscriptionWhereInput>>;
  NOT?: InputMaybe<Array<SubscriptionWhereInput>>;
  OR?: InputMaybe<Array<SubscriptionWhereInput>>;
  company?: InputMaybe<CompanyRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  plan?: InputMaybe<PlanRelationFilter>;
  planId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumSubscriptionStatusFilter>;
  stripe_subscriptionId?: InputMaybe<StringFilter>;
  subscription_end?: InputMaybe<DateTimeNullableFilter>;
  subscription_time?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SubscriptionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  stripe_subscriptionId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** New user data */
export type UpdateOneUserArgsCustom = {
  avater?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** New user data */
export type UpdateProfilePaswordArgs = {
  newPassword?: InputMaybe<Scalars['String']['input']>;
  oldPassword?: InputMaybe<Scalars['String']['input']>;
  updatePassword: Scalars['Boolean']['input'];
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  avater?: Maybe<Scalars['String']['output']>;
  booking: Array<Booking>;
  company?: Maybe<Company>;
  companyRole?: Maybe<CompanyRole>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  employee?: Maybe<Employee>;
  firstname: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastname: Scalars['String']['output'];
  owner?: Maybe<Owner>;
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  reveiws: Array<Review>;
  role: UserRole;
  status: UserAccountStatus;
  subscription?: Maybe<Subscription>;
  updatedAt: Scalars['DateTime']['output'];
};


export type UserBookingArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookingWhereInput>;
};


export type UserReveiwsArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};

export enum UserAccountStatus {
  Active = 'active',
  Banned = 'banned',
  PaymentMethodNeeded = 'payment_method_needed',
  PlanSubscriptionNeeded = 'plan_subscription_needed',
  VerifyEmail = 'verify_email'
}

export type UserCount = {
  __typename?: 'UserCount';
  booking: Scalars['Int']['output'];
  reveiws: Scalars['Int']['output'];
};


export type UserCountBookingArgs = {
  where?: InputMaybe<BookingWhereInput>;
};


export type UserCountReveiwsArgs = {
  where?: InputMaybe<ReviewWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  avater: Scalars['Int']['output'];
  companyRole: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  firstname: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lastname: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  phoneNumber: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  avater?: InputMaybe<SortOrder>;
  companyRole?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  booking?: InputMaybe<BookingCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUserInput>;
  companyRole?: InputMaybe<CompanyRole>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutUserInput>;
  firstname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastname: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutUserInput>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role: UserRole;
  status?: InputMaybe<UserAccountStatus>;
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateManyInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  companyRole?: InputMaybe<CompanyRole>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role: UserRole;
  status?: InputMaybe<UserAccountStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateNestedOneWithoutBookingInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookingInput>;
  create?: InputMaybe<UserCreateWithoutBookingInput>;
};

export type UserCreateNestedOneWithoutCompanyInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<UserCreateWithoutCompanyInput>;
};

export type UserCreateNestedOneWithoutEmployeeInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEmployeeInput>;
  create?: InputMaybe<UserCreateWithoutEmployeeInput>;
};

export type UserCreateNestedOneWithoutOwnerInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOwnerInput>;
  create?: InputMaybe<UserCreateWithoutOwnerInput>;
};

export type UserCreateNestedOneWithoutReveiwsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReveiwsInput>;
  create?: InputMaybe<UserCreateWithoutReveiwsInput>;
};

export type UserCreateNestedOneWithoutSubscriptionInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSubscriptionInput>;
  create?: InputMaybe<UserCreateWithoutSubscriptionInput>;
};

export type UserCreateOrConnectWithoutBookingInput = {
  create: UserCreateWithoutBookingInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCompanyInput = {
  create: UserCreateWithoutCompanyInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEmployeeInput = {
  create: UserCreateWithoutEmployeeInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutOwnerInput = {
  create: UserCreateWithoutOwnerInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReveiwsInput = {
  create: UserCreateWithoutReveiwsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSubscriptionInput = {
  create: UserCreateWithoutSubscriptionInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutBookingInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUserInput>;
  companyRole?: InputMaybe<CompanyRole>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutUserInput>;
  firstname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastname: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutUserInput>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role: UserRole;
  status?: InputMaybe<UserAccountStatus>;
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutCompanyInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  booking?: InputMaybe<BookingCreateNestedManyWithoutUserInput>;
  companyRole?: InputMaybe<CompanyRole>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutUserInput>;
  firstname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastname: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutUserInput>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role: UserRole;
  status?: InputMaybe<UserAccountStatus>;
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutEmployeeInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  booking?: InputMaybe<BookingCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUserInput>;
  companyRole?: InputMaybe<CompanyRole>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastname: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutUserInput>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role: UserRole;
  status?: InputMaybe<UserAccountStatus>;
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutOwnerInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  booking?: InputMaybe<BookingCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUserInput>;
  companyRole?: InputMaybe<CompanyRole>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutUserInput>;
  firstname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role: UserRole;
  status?: InputMaybe<UserAccountStatus>;
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutReveiwsInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  booking?: InputMaybe<BookingCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUserInput>;
  companyRole?: InputMaybe<CompanyRole>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutUserInput>;
  firstname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastname: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutUserInput>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role: UserRole;
  status?: InputMaybe<UserAccountStatus>;
  subscription?: InputMaybe<SubscriptionCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutSubscriptionInput = {
  avater?: InputMaybe<Scalars['String']['input']>;
  booking?: InputMaybe<BookingCreateNestedManyWithoutUserInput>;
  company?: InputMaybe<CompanyCreateNestedOneWithoutUserInput>;
  companyRole?: InputMaybe<CompanyRole>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  employee?: InputMaybe<EmployeeCreateNestedOneWithoutUserInput>;
  firstname: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lastname: Scalars['String']['input'];
  owner?: InputMaybe<OwnerCreateNestedOneWithoutUserInput>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reveiws?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role: UserRole;
  status?: InputMaybe<UserAccountStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserForResponsce = {
  __typename?: 'UserForResponsce';
  avater?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  avater?: Maybe<Scalars['String']['output']>;
  companyRole?: Maybe<CompanyRole>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastname: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role: UserRole;
  status: UserAccountStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avater?: Maybe<Scalars['String']['output']>;
  companyRole?: Maybe<CompanyRole>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
  status?: Maybe<UserAccountStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  avater?: InputMaybe<SortOrder>;
  companyRole?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avater?: Maybe<Scalars['String']['output']>;
  companyRole?: Maybe<CompanyRole>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
  status?: Maybe<UserAccountStatus>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinOrderByAggregateInput = {
  avater?: InputMaybe<SortOrder>;
  companyRole?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  avater?: InputMaybe<SortOrderInput>;
  companyRole?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  avater?: InputMaybe<SortOrderInput>;
  booking?: InputMaybe<BookingOrderByRelationAggregateInput>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyRole?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>;
  firstname?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastname?: InputMaybe<SortOrder>;
  owner?: InputMaybe<OwnerOrderByWithRelationInput>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrderInput>;
  reveiws?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  subscription?: InputMaybe<SubscriptionOrderByWithRelationInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserRole {
  Admin = 'admin',
  Company = 'company',
  Public = 'public',
  Superadmin = 'superadmin'
}

export enum UserScalarFieldEnum {
  Avater = 'avater',
  CompanyRole = 'companyRole',
  CreatedAt = 'createdAt',
  Email = 'email',
  Firstname = 'firstname',
  Id = 'id',
  Lastname = 'lastname',
  Password = 'password',
  PhoneNumber = 'phoneNumber',
  Role = 'role',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  avater?: InputMaybe<StringNullableWithAggregatesFilter>;
  companyRole?: InputMaybe<EnumCompanyRoleNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstname?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lastname?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  phoneNumber?: InputMaybe<StringNullableWithAggregatesFilter>;
  role?: InputMaybe<EnumUserRoleWithAggregatesFilter>;
  status?: InputMaybe<EnumUserAccountStatusWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserTokens = {
  __typename?: 'UserTokens';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type UserTokensCountAggregate = {
  __typename?: 'UserTokensCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserTokensCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserTokensCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type UserTokensCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type UserTokensGroupBy = {
  __typename?: 'UserTokensGroupBy';
  _count?: Maybe<UserTokensCountAggregate>;
  _max?: Maybe<UserTokensMaxAggregate>;
  _min?: Maybe<UserTokensMinAggregate>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type UserTokensMaxAggregate = {
  __typename?: 'UserTokensMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserTokensMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserTokensMinAggregate = {
  __typename?: 'UserTokensMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserTokensMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserTokensOrderByWithAggregationInput = {
  _count?: InputMaybe<UserTokensCountOrderByAggregateInput>;
  _max?: InputMaybe<UserTokensMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserTokensMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserTokensOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserTokensScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Token = 'token',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserTokensScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserTokensScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserTokensScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserTokensScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserTokensUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserTokensUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserTokensWhereInput = {
  AND?: InputMaybe<Array<UserTokensWhereInput>>;
  NOT?: InputMaybe<Array<UserTokensWhereInput>>;
  OR?: InputMaybe<Array<UserTokensWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserTokensWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutUserNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUserNestedInput>;
  companyRole?: InputMaybe<NullableEnumCompanyRoleFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateOneWithoutUserNestedInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutUserNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserAccountStatusFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyRole?: InputMaybe<NullableEnumCompanyRoleFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserAccountStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutBookingNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookingInput>;
  create?: InputMaybe<UserCreateWithoutBookingInput>;
  update?: InputMaybe<UserUpdateWithoutBookingInput>;
  upsert?: InputMaybe<UserUpsertWithoutBookingInput>;
};

export type UserUpdateOneRequiredWithoutCompanyNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCompanyInput>;
  create?: InputMaybe<UserCreateWithoutCompanyInput>;
  update?: InputMaybe<UserUpdateWithoutCompanyInput>;
  upsert?: InputMaybe<UserUpsertWithoutCompanyInput>;
};

export type UserUpdateOneRequiredWithoutEmployeeNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEmployeeInput>;
  create?: InputMaybe<UserCreateWithoutEmployeeInput>;
  update?: InputMaybe<UserUpdateWithoutEmployeeInput>;
  upsert?: InputMaybe<UserUpsertWithoutEmployeeInput>;
};

export type UserUpdateOneRequiredWithoutOwnerNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOwnerInput>;
  create?: InputMaybe<UserCreateWithoutOwnerInput>;
  update?: InputMaybe<UserUpdateWithoutOwnerInput>;
  upsert?: InputMaybe<UserUpsertWithoutOwnerInput>;
};

export type UserUpdateOneRequiredWithoutReveiwsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReveiwsInput>;
  create?: InputMaybe<UserCreateWithoutReveiwsInput>;
  update?: InputMaybe<UserUpdateWithoutReveiwsInput>;
  upsert?: InputMaybe<UserUpsertWithoutReveiwsInput>;
};

export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSubscriptionInput>;
  create?: InputMaybe<UserCreateWithoutSubscriptionInput>;
  update?: InputMaybe<UserUpdateWithoutSubscriptionInput>;
  upsert?: InputMaybe<UserUpsertWithoutSubscriptionInput>;
};

export type UserUpdateWithoutBookingInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUserNestedInput>;
  companyRole?: InputMaybe<NullableEnumCompanyRoleFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateOneWithoutUserNestedInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutUserNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserAccountStatusFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCompanyInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutUserNestedInput>;
  companyRole?: InputMaybe<NullableEnumCompanyRoleFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateOneWithoutUserNestedInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutUserNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserAccountStatusFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutEmployeeInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutUserNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUserNestedInput>;
  companyRole?: InputMaybe<NullableEnumCompanyRoleFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutUserNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserAccountStatusFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutOwnerInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutUserNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUserNestedInput>;
  companyRole?: InputMaybe<NullableEnumCompanyRoleFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateOneWithoutUserNestedInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserAccountStatusFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutReveiwsInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutUserNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUserNestedInput>;
  companyRole?: InputMaybe<NullableEnumCompanyRoleFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateOneWithoutUserNestedInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutUserNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserAccountStatusFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSubscriptionInput = {
  avater?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  booking?: InputMaybe<BookingUpdateManyWithoutUserNestedInput>;
  company?: InputMaybe<CompanyUpdateOneWithoutUserNestedInput>;
  companyRole?: InputMaybe<NullableEnumCompanyRoleFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  employee?: InputMaybe<EmployeeUpdateOneWithoutUserNestedInput>;
  firstname?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastname?: InputMaybe<StringFieldUpdateOperationsInput>;
  owner?: InputMaybe<OwnerUpdateOneWithoutUserNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phoneNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reveiws?: InputMaybe<ReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumUserAccountStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutBookingInput = {
  create: UserCreateWithoutBookingInput;
  update: UserUpdateWithoutBookingInput;
};

export type UserUpsertWithoutCompanyInput = {
  create: UserCreateWithoutCompanyInput;
  update: UserUpdateWithoutCompanyInput;
};

export type UserUpsertWithoutEmployeeInput = {
  create: UserCreateWithoutEmployeeInput;
  update: UserUpdateWithoutEmployeeInput;
};

export type UserUpsertWithoutOwnerInput = {
  create: UserCreateWithoutOwnerInput;
  update: UserUpdateWithoutOwnerInput;
};

export type UserUpsertWithoutReveiwsInput = {
  create: UserCreateWithoutReveiwsInput;
  update: UserUpdateWithoutReveiwsInput;
};

export type UserUpsertWithoutSubscriptionInput = {
  create: UserCreateWithoutSubscriptionInput;
  update: UserUpdateWithoutSubscriptionInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avater?: InputMaybe<StringNullableFilter>;
  booking?: InputMaybe<BookingListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyRole?: InputMaybe<EnumCompanyRoleNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  firstname?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastname?: InputMaybe<StringFilter>;
  owner?: InputMaybe<OwnerRelationFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  reveiws?: InputMaybe<ReviewListRelationFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  status?: InputMaybe<EnumUserAccountStatusFilter>;
  subscription?: InputMaybe<SubscriptionRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type DefaultResponsce = {
  __typename?: 'defaultResponsce';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type FileUploadResponsce = {
  __typename?: 'fileUploadResponsce';
  file?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type BookingsQueryVariables = Exact<{
  where?: InputMaybe<BookingWhereInput>;
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput> | BookingOrderByWithRelationInput>;
  cursor?: InputMaybe<BookingWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  distinct?: InputMaybe<Array<BookingScalarFieldEnum> | BookingScalarFieldEnum>;
}>;


export type BookingsQuery = { __typename?: 'Query', bookings: Array<{ __typename?: 'Booking', bookingDate: any, bookingTime: any, id: string, createdAt: any, note?: string | null, status: BookingStatus, user: { __typename?: 'User', firstname: string, lastname: string, email: string } }> };

export type CreateOneCompanyMutationVariables = Exact<{
  data: CompanyCreateInput;
}>;


export type CreateOneCompanyMutation = { __typename?: 'Mutation', createOneCompany: { __typename?: 'Company', id: string } };

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type UploadFileMutation = { __typename?: 'Mutation', uploadFile?: { __typename?: 'fileUploadResponsce', message: string, success: boolean, file?: string | null } | null };

export type CompanyRegisterMutationVariables = Exact<{
  input: CreateOneUserArgsCustom;
}>;


export type CompanyRegisterMutation = { __typename?: 'Mutation', companyRegister?: { __typename: 'defaultResponsce', message: string, success: boolean } | null };

export type MeCompanyQueryVariables = Exact<{ [key: string]: never; }>;


export type MeCompanyQuery = { __typename?: 'Query', meCompany?: { __typename?: 'CompanyUserForResponsce', avater?: string | null, email?: string | null, firstname?: string | null, id?: string | null, lastname?: string | null, role?: string | null, status: string, phoneNumber?: string | null, company?: { __typename?: 'Company', id: string, fetaureImage: string, buisnessCategoryId?: string | null, logo: string, name: string, slug: string } | null } | null };

export type CompanyLoginMutationVariables = Exact<{
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type CompanyLoginMutation = { __typename?: 'Mutation', companyLogin?: { __typename?: 'LoginResponsce', accessToken?: string | null, isAuthenticated: boolean, message: string, success: boolean, user?: { __typename?: 'UserForResponsce', id?: string | null } | null } | null };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken?: string | null };

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateOneUserArgsCustom;
  passwordInput: UpdateProfilePaswordArgs;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile?: { __typename?: 'defaultResponsce', message: string, success: boolean } | null };


export const BookingsDocument = gql`
    query Bookings($where: BookingWhereInput, $orderBy: [BookingOrderByWithRelationInput!], $cursor: BookingWhereUniqueInput, $take: Int, $skip: Int, $distinct: [BookingScalarFieldEnum!]) {
  bookings(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    bookingDate
    bookingTime
    id
    createdAt
    note
    status
    user {
      firstname
      lastname
      email
    }
  }
}
    `;

/**
 * __useBookingsQuery__
 *
 * To run a query within a React component, call `useBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookingsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useBookingsQuery(baseOptions?: Apollo.QueryHookOptions<BookingsQuery, BookingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookingsQuery, BookingsQueryVariables>(BookingsDocument, options);
      }
export function useBookingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookingsQuery, BookingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookingsQuery, BookingsQueryVariables>(BookingsDocument, options);
        }
export function useBookingsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BookingsQuery, BookingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BookingsQuery, BookingsQueryVariables>(BookingsDocument, options);
        }
export type BookingsQueryHookResult = ReturnType<typeof useBookingsQuery>;
export type BookingsLazyQueryHookResult = ReturnType<typeof useBookingsLazyQuery>;
export type BookingsSuspenseQueryHookResult = ReturnType<typeof useBookingsSuspenseQuery>;
export type BookingsQueryResult = Apollo.QueryResult<BookingsQuery, BookingsQueryVariables>;
export const CreateOneCompanyDocument = gql`
    mutation CreateOneCompany($data: CompanyCreateInput!) {
  createOneCompany(data: $data) {
    id
  }
}
    `;
export type CreateOneCompanyMutationFn = Apollo.MutationFunction<CreateOneCompanyMutation, CreateOneCompanyMutationVariables>;

/**
 * __useCreateOneCompanyMutation__
 *
 * To run a mutation, you first call `useCreateOneCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCompanyMutation, { data, loading, error }] = useCreateOneCompanyMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneCompanyMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneCompanyMutation, CreateOneCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneCompanyMutation, CreateOneCompanyMutationVariables>(CreateOneCompanyDocument, options);
      }
export type CreateOneCompanyMutationHookResult = ReturnType<typeof useCreateOneCompanyMutation>;
export type CreateOneCompanyMutationResult = Apollo.MutationResult<CreateOneCompanyMutation>;
export type CreateOneCompanyMutationOptions = Apollo.BaseMutationOptions<CreateOneCompanyMutation, CreateOneCompanyMutationVariables>;
export const UploadFileDocument = gql`
    mutation UploadFile($file: Upload!) {
  uploadFile(file: $file) {
    message
    success
    file
  }
}
    `;
export type UploadFileMutationFn = Apollo.MutationFunction<UploadFileMutation, UploadFileMutationVariables>;

/**
 * __useUploadFileMutation__
 *
 * To run a mutation, you first call `useUploadFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFileMutation, { data, loading, error }] = useUploadFileMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadFileMutation(baseOptions?: Apollo.MutationHookOptions<UploadFileMutation, UploadFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadFileMutation, UploadFileMutationVariables>(UploadFileDocument, options);
      }
export type UploadFileMutationHookResult = ReturnType<typeof useUploadFileMutation>;
export type UploadFileMutationResult = Apollo.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = Apollo.BaseMutationOptions<UploadFileMutation, UploadFileMutationVariables>;
export const CompanyRegisterDocument = gql`
    mutation CompanyRegister($input: CreateOneUserArgsCustom!) {
  companyRegister(input: $input) {
    __typename
    message
    success
  }
}
    `;
export type CompanyRegisterMutationFn = Apollo.MutationFunction<CompanyRegisterMutation, CompanyRegisterMutationVariables>;

/**
 * __useCompanyRegisterMutation__
 *
 * To run a mutation, you first call `useCompanyRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompanyRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [companyRegisterMutation, { data, loading, error }] = useCompanyRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCompanyRegisterMutation(baseOptions?: Apollo.MutationHookOptions<CompanyRegisterMutation, CompanyRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompanyRegisterMutation, CompanyRegisterMutationVariables>(CompanyRegisterDocument, options);
      }
export type CompanyRegisterMutationHookResult = ReturnType<typeof useCompanyRegisterMutation>;
export type CompanyRegisterMutationResult = Apollo.MutationResult<CompanyRegisterMutation>;
export type CompanyRegisterMutationOptions = Apollo.BaseMutationOptions<CompanyRegisterMutation, CompanyRegisterMutationVariables>;
export const MeCompanyDocument = gql`
    query MeCompany {
  meCompany {
    avater
    email
    firstname
    id
    lastname
    role
    status
    phoneNumber
    company {
      id
      fetaureImage
      buisnessCategoryId
      logo
      name
      slug
    }
  }
}
    `;

/**
 * __useMeCompanyQuery__
 *
 * To run a query within a React component, call `useMeCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeCompanyQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeCompanyQuery(baseOptions?: Apollo.QueryHookOptions<MeCompanyQuery, MeCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeCompanyQuery, MeCompanyQueryVariables>(MeCompanyDocument, options);
      }
export function useMeCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeCompanyQuery, MeCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeCompanyQuery, MeCompanyQueryVariables>(MeCompanyDocument, options);
        }
export function useMeCompanySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeCompanyQuery, MeCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeCompanyQuery, MeCompanyQueryVariables>(MeCompanyDocument, options);
        }
export type MeCompanyQueryHookResult = ReturnType<typeof useMeCompanyQuery>;
export type MeCompanyLazyQueryHookResult = ReturnType<typeof useMeCompanyLazyQuery>;
export type MeCompanySuspenseQueryHookResult = ReturnType<typeof useMeCompanySuspenseQuery>;
export type MeCompanyQueryResult = Apollo.QueryResult<MeCompanyQuery, MeCompanyQueryVariables>;
export const CompanyLoginDocument = gql`
    mutation CompanyLogin($password: String!, $email: String!) {
  companyLogin(password: $password, email: $email) {
    accessToken
    isAuthenticated
    message
    success
    user {
      id
    }
  }
}
    `;
export type CompanyLoginMutationFn = Apollo.MutationFunction<CompanyLoginMutation, CompanyLoginMutationVariables>;

/**
 * __useCompanyLoginMutation__
 *
 * To run a mutation, you first call `useCompanyLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompanyLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [companyLoginMutation, { data, loading, error }] = useCompanyLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCompanyLoginMutation(baseOptions?: Apollo.MutationHookOptions<CompanyLoginMutation, CompanyLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompanyLoginMutation, CompanyLoginMutationVariables>(CompanyLoginDocument, options);
      }
export type CompanyLoginMutationHookResult = ReturnType<typeof useCompanyLoginMutation>;
export type CompanyLoginMutationResult = Apollo.MutationResult<CompanyLoginMutation>;
export type CompanyLoginMutationOptions = Apollo.BaseMutationOptions<CompanyLoginMutation, CompanyLoginMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken {
  refreshToken
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($input: UpdateOneUserArgsCustom!, $passwordInput: UpdateProfilePaswordArgs!) {
  updateProfile(input: $input, passwordInput: $passwordInput) {
    message
    success
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *      passwordInput: // value for 'passwordInput'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;