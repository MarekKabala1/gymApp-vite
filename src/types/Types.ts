export interface UserMetadata {
  [propName: string]: any;
}

export interface AppMetadata {
  [propName: string]: any;
}

export interface Identity {
  connection: string;
  user_id: string;
  provider: string;
  isSocial: boolean;
  access_token?: string | undefined;
  profileData?:
  | {
    email?: string | undefined;
    email_verified?: boolean | undefined;
    name?: string | undefined;
    phone_number?: string | undefined;
    phone_verified?: boolean | undefined;
    request_language?: string | undefined;
    sub?: string | undefined;
  }
  | undefined;
}

export interface User<A = AppMetadata, U = UserMetadata> {
  email?: string | undefined;
  email_verified?: boolean | undefined;
  username?: string | undefined;
  phone_number?: string | undefined;
  phone_verified?: boolean | undefined;
  user_id?: string | undefined;
  _id?: string | undefined;
  sub?: string | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  identities?: Identity[] | undefined;
  app_metadata?: A | undefined;
  user_metadata?: U | undefined;
  picture?: string | undefined;
  name?: string | undefined;
  nickname?: string | undefined;
  multifactor?: string[] | undefined;
  last_ip?: string | undefined;
  last_login?: string | undefined;
  last_password_reset?: string | undefined;
  logins_count?: number | undefined;
  blocked?: boolean | undefined;
  given_name?: string | undefined;
  family_name?: string | undefined;
}
export interface GetUserData {
  user?: User<AppMetadata, UserMetadata>;
  isAuthenticated?: boolean;
  isLoading?: boolean;
}


// export interface DbUserData extends User {
//   userName: string;
//   height: number;
//   weight: number;
//   gender: ['Male', 'Female', 'Other']
// }

export interface DbUserData extends User {
  userName: string | FormDataEntryValue;
  height: number | FormDataEntryValue;
  weight: number | FormDataEntryValue;
  gender: ['Male', 'Female', 'Other'] | FormDataEntryValue;
  age?: number;
}