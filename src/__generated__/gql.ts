import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  I18NLocaleCode: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AboutSection = {
  __typename?: 'AboutSection';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<AboutSectionRelationResponseCollection>;
  portrait: UploadFileEntityResponse;
  text: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AboutSectionEntity = {
  __typename?: 'AboutSectionEntity';
  attributes?: Maybe<AboutSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AboutSectionEntityResponse = {
  __typename?: 'AboutSectionEntityResponse';
  data?: Maybe<AboutSectionEntity>;
};

export type AboutSectionInput = {
  portrait?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type AboutSectionRelationResponseCollection = {
  __typename?: 'AboutSectionRelationResponseCollection';
  data: Array<AboutSectionEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactLink = {
  __typename?: 'ContactLink';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  svg: UploadFileEntityResponse;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type ContactLinkEntity = {
  __typename?: 'ContactLinkEntity';
  attributes?: Maybe<ContactLink>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContactLinkEntityResponse = {
  __typename?: 'ContactLinkEntityResponse';
  data?: Maybe<ContactLinkEntity>;
};

export type ContactLinkEntityResponseCollection = {
  __typename?: 'ContactLinkEntityResponseCollection';
  data: Array<ContactLinkEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContactLinkFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ContactLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactLinkFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type ContactLinkInput = {
  svg?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type ContentReleasesRelease = {
  __typename?: 'ContentReleasesRelease';
  actions?: Maybe<ContentReleasesReleaseActionRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  releasedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentReleasesReleaseAction = {
  __typename?: 'ContentReleasesReleaseAction';
  contentType: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  entry?: Maybe<GenericMorph>;
  release?: Maybe<ContentReleasesReleaseEntityResponse>;
  type: Enum_Contentreleasesreleaseaction_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContentReleasesReleaseActionEntity = {
  __typename?: 'ContentReleasesReleaseActionEntity';
  attributes?: Maybe<ContentReleasesReleaseAction>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseActionEntityResponse = {
  __typename?: 'ContentReleasesReleaseActionEntityResponse';
  data?: Maybe<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseActionEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionEntityResponseCollection';
  data: Array<ContentReleasesReleaseActionEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseActionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  contentType?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  release?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseActionInput = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  release?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Enum_Contentreleasesreleaseaction_Type>;
};

export type ContentReleasesReleaseActionRelationResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionRelationResponseCollection';
  data: Array<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseEntity = {
  __typename?: 'ContentReleasesReleaseEntity';
  attributes?: Maybe<ContentReleasesRelease>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseEntityResponse = {
  __typename?: 'ContentReleasesReleaseEntityResponse';
  data?: Maybe<ContentReleasesReleaseEntity>;
};

export type ContentReleasesReleaseEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseEntityResponseCollection';
  data: Array<ContentReleasesReleaseEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseFiltersInput = {
  actions?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  releasedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseInput = {
  actions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  releasedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Contentreleasesreleaseaction_Type {
  Publish = 'publish',
  Unpublish = 'unpublish'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type General = {
  __typename?: 'General';
  FormSentFailureMessage: Scalars['String']['output'];
  FormSentSuccessMessage: Scalars['String']['output'];
  OgDescription?: Maybe<Scalars['String']['output']>;
  OgImage: UploadFileEntityResponse;
  SeoDescription?: Maybe<Scalars['String']['output']>;
  SeoTitle?: Maybe<Scalars['String']['output']>;
  SeoUrl?: Maybe<Scalars['String']['output']>;
  SkillsDefaultSubtitle?: Maybe<Scalars['String']['output']>;
  SkillsDefaultTitle?: Maybe<Scalars['String']['output']>;
  SkillsIntroHeadline: Scalars['String']['output'];
  SkillsIntroText: Scalars['String']['output'];
  TimelineIntroHeadline: Scalars['String']['output'];
  WebsiteTitle: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<GeneralRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GeneralEntity = {
  __typename?: 'GeneralEntity';
  attributes?: Maybe<General>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type GeneralEntityResponse = {
  __typename?: 'GeneralEntityResponse';
  data?: Maybe<GeneralEntity>;
};

export type GeneralInput = {
  FormSentFailureMessage?: InputMaybe<Scalars['String']['input']>;
  FormSentSuccessMessage?: InputMaybe<Scalars['String']['input']>;
  OgDescription?: InputMaybe<Scalars['String']['input']>;
  OgImage?: InputMaybe<Scalars['ID']['input']>;
  SeoDescription?: InputMaybe<Scalars['String']['input']>;
  SeoTitle?: InputMaybe<Scalars['String']['input']>;
  SeoUrl?: InputMaybe<Scalars['String']['input']>;
  SkillsDefaultSubtitle?: InputMaybe<Scalars['String']['input']>;
  SkillsDefaultTitle?: InputMaybe<Scalars['String']['input']>;
  SkillsIntroHeadline?: InputMaybe<Scalars['String']['input']>;
  SkillsIntroText?: InputMaybe<Scalars['String']['input']>;
  TimelineIntroHeadline?: InputMaybe<Scalars['String']['input']>;
  WebsiteTitle?: InputMaybe<Scalars['String']['input']>;
};

export type GeneralRelationResponseCollection = {
  __typename?: 'GeneralRelationResponseCollection';
  data: Array<GeneralEntity>;
};

export type GenericMorph = AboutSection | ContactLink | ContentReleasesRelease | ContentReleasesReleaseAction | General | I18NLocale | Project | ProjectLink | ProjectsSection | Section | Skill | TimelineItem | TypewriterSection | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAboutSectionLocalization?: Maybe<AboutSectionEntityResponse>;
  createContactLink?: Maybe<ContactLinkEntityResponse>;
  createContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  createContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  createGeneralLocalization?: Maybe<GeneralEntityResponse>;
  createProject?: Maybe<ProjectEntityResponse>;
  createProjectLink?: Maybe<ProjectLinkEntityResponse>;
  createProjectLocalization?: Maybe<ProjectEntityResponse>;
  createProjectsSectionLocalization?: Maybe<ProjectsSectionEntityResponse>;
  createSection?: Maybe<SectionEntityResponse>;
  createSectionLocalization?: Maybe<SectionEntityResponse>;
  createSkill?: Maybe<SkillEntityResponse>;
  createSkillLocalization?: Maybe<SkillEntityResponse>;
  createTimelineItem?: Maybe<TimelineItemEntityResponse>;
  createTimelineItemLocalization?: Maybe<TimelineItemEntityResponse>;
  createTypewriterSectionLocalization?: Maybe<TypewriterSectionEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAboutSection?: Maybe<AboutSectionEntityResponse>;
  deleteContactLink?: Maybe<ContactLinkEntityResponse>;
  deleteContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  deleteContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  deleteGeneral?: Maybe<GeneralEntityResponse>;
  deleteProject?: Maybe<ProjectEntityResponse>;
  deleteProjectLink?: Maybe<ProjectLinkEntityResponse>;
  deleteProjectsSection?: Maybe<ProjectsSectionEntityResponse>;
  deleteSection?: Maybe<SectionEntityResponse>;
  deleteSkill?: Maybe<SkillEntityResponse>;
  deleteTimelineItem?: Maybe<TimelineItemEntityResponse>;
  deleteTypewriterSection?: Maybe<TypewriterSectionEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutSection?: Maybe<AboutSectionEntityResponse>;
  updateContactLink?: Maybe<ContactLinkEntityResponse>;
  updateContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  updateContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGeneral?: Maybe<GeneralEntityResponse>;
  updateProject?: Maybe<ProjectEntityResponse>;
  updateProjectLink?: Maybe<ProjectLinkEntityResponse>;
  updateProjectsSection?: Maybe<ProjectsSectionEntityResponse>;
  updateSection?: Maybe<SectionEntityResponse>;
  updateSkill?: Maybe<SkillEntityResponse>;
  updateTimelineItem?: Maybe<TimelineItemEntityResponse>;
  updateTypewriterSection?: Maybe<TypewriterSectionEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAboutSectionLocalizationArgs = {
  data?: InputMaybe<AboutSectionInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateContactLinkArgs = {
  data: ContactLinkInput;
};


export type MutationCreateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
};


export type MutationCreateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
};


export type MutationCreateGeneralLocalizationArgs = {
  data?: InputMaybe<GeneralInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateProjectArgs = {
  data: ProjectInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateProjectLinkArgs = {
  data: ProjectLinkInput;
};


export type MutationCreateProjectLocalizationArgs = {
  data?: InputMaybe<ProjectInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateProjectsSectionLocalizationArgs = {
  data?: InputMaybe<ProjectsSectionInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSectionArgs = {
  data: SectionInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSectionLocalizationArgs = {
  data?: InputMaybe<SectionInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSkillArgs = {
  data: SkillInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSkillLocalizationArgs = {
  data?: InputMaybe<SkillInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTimelineItemArgs = {
  data: TimelineItemInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTimelineItemLocalizationArgs = {
  data?: InputMaybe<TimelineItemInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateTypewriterSectionLocalizationArgs = {
  data?: InputMaybe<TypewriterSectionInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAboutSectionArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteContactLinkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentReleasesReleaseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentReleasesReleaseActionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGeneralArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteProjectLinkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProjectsSectionArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteSectionArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteSkillArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteTimelineItemArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteTypewriterSectionArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAboutSectionArgs = {
  data: AboutSectionInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateContactLinkArgs = {
  data: ContactLinkInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGeneralArgs = {
  data: GeneralInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateProjectArgs = {
  data: ProjectInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateProjectLinkArgs = {
  data: ProjectLinkInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProjectsSectionArgs = {
  data: ProjectsSectionInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateSectionArgs = {
  data: SectionInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateSkillArgs = {
  data: SkillInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateTimelineItemArgs = {
  data: TimelineItemInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateTypewriterSectionArgs = {
  data: TypewriterSectionInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Project = {
  __typename?: 'Project';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  end?: Maybe<Scalars['Date']['output']>;
  header_image?: Maybe<UploadFileEntityResponse>;
  links?: Maybe<ProjectLinkRelationResponseCollection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ProjectRelationResponseCollection>;
  seo_image?: Maybe<UploadFileEntityResponse>;
  seo_title?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['Date']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  technologies?: Maybe<SkillRelationResponseCollection>;
  title?: Maybe<Scalars['String']['output']>;
  tldr?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  work_hours?: Maybe<Scalars['Float']['output']>;
};


export type ProjectLinksArgs = {
  filters?: InputMaybe<ProjectLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProjectLocalizationsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProjectTechnologiesArgs = {
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectEntity = {
  __typename?: 'ProjectEntity';
  attributes?: Maybe<Project>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProjectEntityResponse = {
  __typename?: 'ProjectEntityResponse';
  data?: Maybe<ProjectEntity>;
};

export type ProjectEntityResponseCollection = {
  __typename?: 'ProjectEntityResponseCollection';
  data: Array<ProjectEntity>;
  meta: ResponseCollectionMeta;
};

export type ProjectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  end?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  links?: InputMaybe<ProjectLinkFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ProjectFiltersInput>;
  not?: InputMaybe<ProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  seo_title?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  start?: InputMaybe<DateFilterInput>;
  summary?: InputMaybe<StringFilterInput>;
  technologies?: InputMaybe<SkillFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  tldr?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  work_hours?: InputMaybe<FloatFilterInput>;
};

export type ProjectInput = {
  end?: InputMaybe<Scalars['Date']['input']>;
  header_image?: InputMaybe<Scalars['ID']['input']>;
  links?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  seo_image?: InputMaybe<Scalars['ID']['input']>;
  seo_title?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Date']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  technologies?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  tldr?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  work_hours?: InputMaybe<Scalars['Float']['input']>;
};

export type ProjectLink = {
  __typename?: 'ProjectLink';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  svg: UploadFileEntityResponse;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type ProjectLinkEntity = {
  __typename?: 'ProjectLinkEntity';
  attributes?: Maybe<ProjectLink>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProjectLinkEntityResponse = {
  __typename?: 'ProjectLinkEntityResponse';
  data?: Maybe<ProjectLinkEntity>;
};

export type ProjectLinkEntityResponseCollection = {
  __typename?: 'ProjectLinkEntityResponseCollection';
  data: Array<ProjectLinkEntity>;
  meta: ResponseCollectionMeta;
};

export type ProjectLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProjectLinkFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ProjectLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProjectLinkFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ProjectLinkInput = {
  svg?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectLinkRelationResponseCollection = {
  __typename?: 'ProjectLinkRelationResponseCollection';
  data: Array<ProjectLinkEntity>;
};

export type ProjectRelationResponseCollection = {
  __typename?: 'ProjectRelationResponseCollection';
  data: Array<ProjectEntity>;
};

export type ProjectsSection = {
  __typename?: 'ProjectsSection';
  Headline: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ProjectsSectionRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProjectsSectionEntity = {
  __typename?: 'ProjectsSectionEntity';
  attributes?: Maybe<ProjectsSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProjectsSectionEntityResponse = {
  __typename?: 'ProjectsSectionEntityResponse';
  data?: Maybe<ProjectsSectionEntity>;
};

export type ProjectsSectionInput = {
  Headline?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectsSectionRelationResponseCollection = {
  __typename?: 'ProjectsSectionRelationResponseCollection';
  data: Array<ProjectsSectionEntity>;
};

export type Query = {
  __typename?: 'Query';
  aboutSection?: Maybe<AboutSectionEntityResponse>;
  contactLink?: Maybe<ContactLinkEntityResponse>;
  contactLinks?: Maybe<ContactLinkEntityResponseCollection>;
  contentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  contentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  contentReleasesReleaseActions?: Maybe<ContentReleasesReleaseActionEntityResponseCollection>;
  contentReleasesReleases?: Maybe<ContentReleasesReleaseEntityResponseCollection>;
  general?: Maybe<GeneralEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  project?: Maybe<ProjectEntityResponse>;
  projectLink?: Maybe<ProjectLinkEntityResponse>;
  projectLinks?: Maybe<ProjectLinkEntityResponseCollection>;
  projects?: Maybe<ProjectEntityResponseCollection>;
  projectsSection?: Maybe<ProjectsSectionEntityResponse>;
  section?: Maybe<SectionEntityResponse>;
  sections?: Maybe<SectionEntityResponseCollection>;
  skill?: Maybe<SkillEntityResponse>;
  skills?: Maybe<SkillEntityResponseCollection>;
  timelineItem?: Maybe<TimelineItemEntityResponse>;
  timelineItems?: Maybe<TimelineItemEntityResponseCollection>;
  typewriterSection?: Maybe<TypewriterSectionEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAboutSectionArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryContactLinkArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContactLinksArgs = {
  filters?: InputMaybe<ContactLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContentReleasesReleaseArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContentReleasesReleasesArgs = {
  filters?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGeneralArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryProjectLinkArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectLinksArgs = {
  filters?: InputMaybe<ProjectLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProjectsSectionArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QuerySectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QuerySectionsArgs = {
  filters?: InputMaybe<SectionFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySkillArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QuerySkillsArgs = {
  filters?: InputMaybe<SkillFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTimelineItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryTimelineItemsArgs = {
  filters?: InputMaybe<TimelineItemFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTypewriterSectionArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Section = {
  __typename?: 'Section';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<SectionRelationResponseCollection>;
  name?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SectionLocalizationsArgs = {
  filters?: InputMaybe<SectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionEntity = {
  __typename?: 'SectionEntity';
  attributes?: Maybe<Section>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SectionEntityResponse = {
  __typename?: 'SectionEntityResponse';
  data?: Maybe<SectionEntity>;
};

export type SectionEntityResponseCollection = {
  __typename?: 'SectionEntityResponseCollection';
  data: Array<SectionEntity>;
  meta: ResponseCollectionMeta;
};

export type SectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<SectionFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SectionFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SectionInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type SectionRelationResponseCollection = {
  __typename?: 'SectionRelationResponseCollection';
  data: Array<SectionEntity>;
};

export type Skill = {
  __typename?: 'Skill';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<SkillRelationResponseCollection>;
  name: Scalars['String']['output'];
  priority?: Maybe<Scalars['Int']['output']>;
  proficiency: Scalars['Int']['output'];
  summary: Scalars['String']['output'];
  svg?: Maybe<UploadFileEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};


export type SkillLocalizationsArgs = {
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SkillEntity = {
  __typename?: 'SkillEntity';
  attributes?: Maybe<Skill>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SkillEntityResponse = {
  __typename?: 'SkillEntityResponse';
  data?: Maybe<SkillEntity>;
};

export type SkillEntityResponseCollection = {
  __typename?: 'SkillEntityResponseCollection';
  data: Array<SkillEntity>;
  meta: ResponseCollectionMeta;
};

export type SkillFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SkillFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<SkillFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SkillFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SkillFiltersInput>>>;
  priority?: InputMaybe<IntFilterInput>;
  proficiency?: InputMaybe<IntFilterInput>;
  summary?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type SkillInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  proficiency?: InputMaybe<Scalars['Int']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  svg?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SkillRelationResponseCollection = {
  __typename?: 'SkillRelationResponseCollection';
  data: Array<SkillEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineItem = {
  __typename?: 'TimelineItem';
  company: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<TimelineItemRelationResponseCollection>;
  position: Scalars['String']['output'];
  responsibilities?: Maybe<Scalars['JSON']['output']>;
  startDate: Scalars['Date']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type TimelineItemLocalizationsArgs = {
  filters?: InputMaybe<TimelineItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TimelineItemEntity = {
  __typename?: 'TimelineItemEntity';
  attributes?: Maybe<TimelineItem>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TimelineItemEntityResponse = {
  __typename?: 'TimelineItemEntityResponse';
  data?: Maybe<TimelineItemEntity>;
};

export type TimelineItemEntityResponseCollection = {
  __typename?: 'TimelineItemEntityResponseCollection';
  data: Array<TimelineItemEntity>;
  meta: ResponseCollectionMeta;
};

export type TimelineItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TimelineItemFiltersInput>>>;
  company?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<TimelineItemFiltersInput>;
  not?: InputMaybe<TimelineItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TimelineItemFiltersInput>>>;
  position?: InputMaybe<StringFilterInput>;
  responsibilities?: InputMaybe<JsonFilterInput>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type TimelineItemInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  responsibilities?: InputMaybe<Scalars['JSON']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineItemRelationResponseCollection = {
  __typename?: 'TimelineItemRelationResponseCollection';
  data: Array<TimelineItemEntity>;
};

export type TypewriterSection = {
  __typename?: 'TypewriterSection';
  ScreenReaderText: Scalars['String']['output'];
  TypewriterLines?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<TypewriterSectionRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TypewriterSectionEntity = {
  __typename?: 'TypewriterSectionEntity';
  attributes?: Maybe<TypewriterSection>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TypewriterSectionEntityResponse = {
  __typename?: 'TypewriterSectionEntityResponse';
  data?: Maybe<TypewriterSectionEntity>;
};

export type TypewriterSectionInput = {
  ScreenReaderText?: InputMaybe<Scalars['String']['input']>;
  TypewriterLines?: InputMaybe<Scalars['JSON']['input']>;
};

export type TypewriterSectionRelationResponseCollection = {
  __typename?: 'TypewriterSectionRelationResponseCollection';
  data: Array<TypewriterSectionEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;