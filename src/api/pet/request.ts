/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { petRequester as requester, type AxiosRequestConfig } from '../http'
import type { GetPetFindByStatusItems, ApiResponse, Pet, Order, User } from './definition'

/** @description request parameter type for apiPetPostPetPetIdUploadImage */
interface ApiPetPostPetPetIdUploadImageOption {
  /**
   * @description
   *   ID of pet to update
   * @format int64
   */
  path: {
    /**
        @description
          ID of pet to update
        @format int64 */
    petId: number
  }
}

/** @description request parameter type for apiPetPostPetPetIdUploadImage */
interface ApiPetPostPetPetIdUploadImageOption {
  /**
   * @description
   *   Additional data to pass to server
   */
  formData?: {
    /**
        @description
          Additional data to pass to server */
    additionalMetadata: string
    /**
        @description
          file to upload */
    file: File
  }
}

/** @description response type for apiPetPostPetPetIdUploadImage */
interface ApiPetPostPetPetIdUploadImageResponse {
  /**
   * @description
   *   successful operation
   */
  200: ApiResponse
}

type ApiPetPostPetPetIdUploadImageResponseSuccess = ApiPetPostPetPetIdUploadImageResponse[200]
/**
 * @description
 *   uploads an image
 * @tags pet
 * @produces application/json
 * @consumes multipart/form-data
 */
export const apiPetPostPetPetIdUploadImage = (
  option: ApiPetPostPetPetIdUploadImageOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiPetPostPetPetIdUploadImageResponseSuccess>(
    '/pet/:petId/uploadImage',
    { method: 'post', ...option },
    config,
  )

type ApiPetPutPetOption = Pet

/** @description response type for apiPetPutPet */
interface ApiPetPutPetResponse {
  /**
   * @description
   *   Invalid ID supplied
   */
  400: any
  /**
   * @description
   *   Pet not found
   */
  404: any
  /**
   * @description
   *   Validation exception
   */
  405: any
}

type ApiPetPutPetResponseSuccess = any
/**
 * @description
 *   Update an existing pet
 * @tags pet
 * @produces application/json,application/xml
 * @consumes application/json,application/xml
 */
export const apiPetPutPet = (option?: ApiPetPutPetOption, config?: AxiosRequestConfig) =>
  requester<ApiPetPutPetResponseSuccess>('/pet', { method: 'put', body: option }, config)

type ApiPetPostPetOption = Pet

/** @description response type for apiPetPostPet */
interface ApiPetPostPetResponse {
  /**
   * @description
   *   Invalid input
   */
  405: any
}

type ApiPetPostPetResponseSuccess = any
/**
 * @description
 *   Add a new pet to the store
 * @tags pet
 * @produces application/json,application/xml
 * @consumes application/json,application/xml
 */
export const apiPetPostPet = (option?: ApiPetPostPetOption, config?: AxiosRequestConfig) =>
  requester<ApiPetPostPetResponseSuccess>('/pet', { method: 'post', body: option }, config)

type ApiPetGetPetFindByStatusOption = {
  /**
    @description
      Status values that need to be considered for filter */
  status: Array<GetPetFindByStatusItems>
}

/** @description response type for apiPetGetPetFindByStatus */
interface ApiPetGetPetFindByStatusResponse {
  /**
   * @description
   *   successful operation
   */
  200: Array<Pet>
  /**
   * @description
   *   Invalid status value
   */
  400: any
}

type ApiPetGetPetFindByStatusResponseSuccess = ApiPetGetPetFindByStatusResponse[200]
/**
 * @description
 *   Multiple status values can be provided with comma separated strings
 *   Finds Pets by status
 * @tags pet
 * @produces application/json,application/xml
 */
export const apiPetGetPetFindByStatus = (option?: ApiPetGetPetFindByStatusOption, config?: AxiosRequestConfig) =>
  requester<ApiPetGetPetFindByStatusResponseSuccess>('/pet/findByStatus', { method: 'get', query: option }, config)

type ApiPetGetPetPetIdOption = {
  /**
    @description
      ID of pet to return
    @format int64 */
  petId: number
}

/** @description response type for apiPetGetPetPetId */
interface ApiPetGetPetPetIdResponse {
  /**
   * @description
   *   successful operation
   */
  200: Pet
  /**
   * @description
   *   Invalid ID supplied
   */
  400: any
  /**
   * @description
   *   Pet not found
   */
  404: any
}

type ApiPetGetPetPetIdResponseSuccess = ApiPetGetPetPetIdResponse[200]
/**
 * @description
 *   Returns a single pet
 *   Find pet by ID
 * @tags pet
 * @produces application/json,application/xml
 */
export const apiPetGetPetPetId = (option?: ApiPetGetPetPetIdOption, config?: AxiosRequestConfig) =>
  requester<ApiPetGetPetPetIdResponseSuccess>('/pet/:petId', { method: 'get', path: option }, config)

/** @description request parameter type for apiPetPostPetPetId */
interface ApiPetPostPetPetIdOption {
  /**
   * @description
   *   ID of pet that needs to be updated
   * @format int64
   */
  path: {
    /**
        @description
          ID of pet that needs to be updated
        @format int64 */
    petId: number
  }
}

/** @description request parameter type for apiPetPostPetPetId */
interface ApiPetPostPetPetIdOption {
  /**
   * @description
   *   Updated name of the pet
   */
  formData?: {
    /**
        @description
          Updated name of the pet */
    name: string
    /**
        @description
          Updated status of the pet */
    status: string
  }
}

/** @description response type for apiPetPostPetPetId */
interface ApiPetPostPetPetIdResponse {
  /**
   * @description
   *   Invalid input
   */
  405: any
}

type ApiPetPostPetPetIdResponseSuccess = any
/**
 * @description
 *   Updates a pet in the store with form data
 * @tags pet
 * @produces application/json,application/xml
 * @consumes application/x-www-form-urlencoded
 */
export const apiPetPostPetPetId = (option: ApiPetPostPetPetIdOption, config?: AxiosRequestConfig) =>
  requester<ApiPetPostPetPetIdResponseSuccess>('/pet/:petId', { method: 'post', ...option }, config)

/** @description request parameter type for apiPetDeletePetPetId */
interface ApiPetDeletePetPetIdOption {
  header?: {
    api_key: string
  }
}

/** @description request parameter type for apiPetDeletePetPetId */
interface ApiPetDeletePetPetIdOption {
  /**
   * @description
   *   Pet id to delete
   * @format int64
   */
  path: {
    /**
        @description
          Pet id to delete
        @format int64 */
    petId: number
  }
}

/** @description response type for apiPetDeletePetPetId */
interface ApiPetDeletePetPetIdResponse {
  /**
   * @description
   *   Invalid ID supplied
   */
  400: any
  /**
   * @description
   *   Pet not found
   */
  404: any
}

type ApiPetDeletePetPetIdResponseSuccess = any
/**
 * @description
 *   Deletes a pet
 * @tags pet
 * @produces application/json,application/xml
 */
export const apiPetDeletePetPetId = (option: ApiPetDeletePetPetIdOption, config?: AxiosRequestConfig) =>
  requester<ApiPetDeletePetPetIdResponseSuccess>('/pet/:petId', { method: 'delete', ...option }, config)

/** @description response type for apiPetGetStoreInventory */
interface ApiPetGetStoreInventoryResponse {
  /**
   * @description
   *   successful operation
   */
  200: {
    [propertyName: string]: number
  }
}

type ApiPetGetStoreInventoryResponseSuccess = ApiPetGetStoreInventoryResponse[200]
/**
 * @description
 *   Returns a map of status codes to quantities
 *   Returns pet inventories by status
 * @tags store
 * @produces application/json
 */
export const apiPetGetStoreInventory = (config?: AxiosRequestConfig) =>
  requester<ApiPetGetStoreInventoryResponseSuccess>('/store/inventory', { method: 'get' }, config)

type ApiPetPostStoreOrderOption = Order

/** @description response type for apiPetPostStoreOrder */
interface ApiPetPostStoreOrderResponse {
  /**
   * @description
   *   successful operation
   */
  200: Order
  /**
   * @description
   *   Invalid Order
   */
  400: any
}

type ApiPetPostStoreOrderResponseSuccess = ApiPetPostStoreOrderResponse[200]
/**
 * @description
 *   Place an order for a pet
 * @tags store
 * @produces application/json,application/xml
 * @consumes application/json
 */
export const apiPetPostStoreOrder = (option?: ApiPetPostStoreOrderOption, config?: AxiosRequestConfig) =>
  requester<ApiPetPostStoreOrderResponseSuccess>('/store/order', { method: 'post', body: option }, config)

type ApiPetGetStoreOrderOrderIdOption = {
  /**
    @description
      ID of pet that needs to be fetched
    @format int64 */
  orderId: number
}

/** @description response type for apiPetGetStoreOrderOrderId */
interface ApiPetGetStoreOrderOrderIdResponse {
  /**
   * @description
   *   successful operation
   */
  200: Order
  /**
   * @description
   *   Invalid ID supplied
   */
  400: any
  /**
   * @description
   *   Order not found
   */
  404: any
}

type ApiPetGetStoreOrderOrderIdResponseSuccess = ApiPetGetStoreOrderOrderIdResponse[200]
/**
 * @description
 *   For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 *   Find purchase order by ID
 * @tags store
 * @produces application/json,application/xml
 */
export const apiPetGetStoreOrderOrderId = (option?: ApiPetGetStoreOrderOrderIdOption, config?: AxiosRequestConfig) =>
  requester<ApiPetGetStoreOrderOrderIdResponseSuccess>('/store/order/:orderId', { method: 'get', path: option }, config)

type ApiPetDeleteStoreOrderOrderIdOption = {
  /**
    @description
      ID of the order that needs to be deleted
    @format int64 */
  orderId: number
}

/** @description response type for apiPetDeleteStoreOrderOrderId */
interface ApiPetDeleteStoreOrderOrderIdResponse {
  /**
   * @description
   *   Invalid ID supplied
   */
  400: any
  /**
   * @description
   *   Order not found
   */
  404: any
}

type ApiPetDeleteStoreOrderOrderIdResponseSuccess = any
/**
 * @description
 *   For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 *   Delete purchase order by ID
 * @tags store
 * @produces application/json,application/xml
 */
export const apiPetDeleteStoreOrderOrderId = (
  option?: ApiPetDeleteStoreOrderOrderIdOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiPetDeleteStoreOrderOrderIdResponseSuccess>(
    '/store/order/:orderId',
    { method: 'delete', path: option },
    config,
  )

type ApiPetPostUserCreateWithListOption = Array<User>

/** @description response type for apiPetPostUserCreateWithList */
interface ApiPetPostUserCreateWithListResponse {
  /**
   * @description
   *   successful operation
   */
  default: any
}

type ApiPetPostUserCreateWithListResponseSuccess = ApiPetPostUserCreateWithListResponse['default']
/**
 * @description
 *   Creates list of users with given input array
 * @tags user
 * @produces application/json,application/xml
 * @consumes application/json
 */
export const apiPetPostUserCreateWithList = (
  option?: ApiPetPostUserCreateWithListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiPetPostUserCreateWithListResponseSuccess>(
    '/user/createWithList',
    { method: 'post', body: option },
    config,
  )

type ApiPetGetUserUsernameOption = {
  /**
    @description
      The name that needs to be fetched. Use user1 for testing.  */
  username: string
}

/** @description response type for apiPetGetUserUsername */
interface ApiPetGetUserUsernameResponse {
  /**
   * @description
   *   successful operation
   */
  200: User
  /**
   * @description
   *   Invalid username supplied
   */
  400: any
  /**
   * @description
   *   User not found
   */
  404: any
}

type ApiPetGetUserUsernameResponseSuccess = ApiPetGetUserUsernameResponse[200]
/**
 * @description
 *   Get user by user name
 * @tags user
 * @produces application/json,application/xml
 */
export const apiPetGetUserUsername = (option?: ApiPetGetUserUsernameOption, config?: AxiosRequestConfig) =>
  requester<ApiPetGetUserUsernameResponseSuccess>('/user/:username', { method: 'get', path: option }, config)

/** @description request parameter type for apiPetPutUserUsername */
interface ApiPetPutUserUsernameOption {
  /**
   * @description
   *   name that need to be updated
   */
  path: {
    /**
        @description
          name that need to be updated */
    username: string
  }
}

/** @description request parameter type for apiPetPutUserUsername */
interface ApiPetPutUserUsernameOption {
  /**
   * @description
   *   Updated user object
   */
  body: User
}

/** @description response type for apiPetPutUserUsername */
interface ApiPetPutUserUsernameResponse {
  /**
   * @description
   *   Invalid user supplied
   */
  400: any
  /**
   * @description
   *   User not found
   */
  404: any
}

type ApiPetPutUserUsernameResponseSuccess = any
/**
 * @description
 *   This can only be done by the logged in user.
 *   Updated user
 * @tags user
 * @produces application/json,application/xml
 * @consumes application/json
 */
export const apiPetPutUserUsername = (option: ApiPetPutUserUsernameOption, config?: AxiosRequestConfig) =>
  requester<ApiPetPutUserUsernameResponseSuccess>('/user/:username', { method: 'put', ...option }, config)

type ApiPetDeleteUserUsernameOption = {
  /**
    @description
      The name that needs to be deleted */
  username: string
}

/** @description response type for apiPetDeleteUserUsername */
interface ApiPetDeleteUserUsernameResponse {
  /**
   * @description
   *   Invalid username supplied
   */
  400: any
  /**
   * @description
   *   User not found
   */
  404: any
}

type ApiPetDeleteUserUsernameResponseSuccess = any
/**
 * @description
 *   This can only be done by the logged in user.
 *   Delete user
 * @tags user
 * @produces application/json,application/xml
 */
export const apiPetDeleteUserUsername = (option?: ApiPetDeleteUserUsernameOption, config?: AxiosRequestConfig) =>
  requester<ApiPetDeleteUserUsernameResponseSuccess>('/user/:username', { method: 'delete', path: option }, config)

type ApiPetGetUserLoginOption = {
  /**
    @description
      The user name for login */
  username: string
  /**
    @description
      The password for login in clear text */
  password: string
}

/** @description response type for apiPetGetUserLogin */
interface ApiPetGetUserLoginResponse {
  /**
   * @description
   *   successful operation
   */
  200: string
  /**
   * @description
   *   Invalid username/password supplied
   */
  400: any
}

type ApiPetGetUserLoginResponseSuccess = ApiPetGetUserLoginResponse[200]
/**
 * @description
 *   Logs user into the system
 * @tags user
 * @produces application/json,application/xml
 */
export const apiPetGetUserLogin = (option?: ApiPetGetUserLoginOption, config?: AxiosRequestConfig) =>
  requester<ApiPetGetUserLoginResponseSuccess>('/user/login', { method: 'get', query: option }, config)

/** @description response type for apiPetGetUserLogout */
interface ApiPetGetUserLogoutResponse {
  /**
   * @description
   *   successful operation
   */
  default: any
}

type ApiPetGetUserLogoutResponseSuccess = ApiPetGetUserLogoutResponse['default']
/**
 * @description
 *   Logs out current logged in user session
 * @tags user
 * @produces application/json,application/xml
 */
export const apiPetGetUserLogout = (config?: AxiosRequestConfig) =>
  requester<ApiPetGetUserLogoutResponseSuccess>('/user/logout', { method: 'get' }, config)

type ApiPetPostUserCreateWithArrayOption = Array<User>

/** @description response type for apiPetPostUserCreateWithArray */
interface ApiPetPostUserCreateWithArrayResponse {
  /**
   * @description
   *   successful operation
   */
  default: any
}

type ApiPetPostUserCreateWithArrayResponseSuccess = ApiPetPostUserCreateWithArrayResponse['default']
/**
 * @description
 *   Creates list of users with given input array
 * @tags user
 * @produces application/json,application/xml
 * @consumes application/json
 */
export const apiPetPostUserCreateWithArray = (
  option?: ApiPetPostUserCreateWithArrayOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiPetPostUserCreateWithArrayResponseSuccess>(
    '/user/createWithArray',
    { method: 'post', body: option },
    config,
  )

type ApiPetPostUserOption = User

/** @description response type for apiPetPostUser */
interface ApiPetPostUserResponse {
  /**
   * @description
   *   successful operation
   */
  default: any
}

type ApiPetPostUserResponseSuccess = ApiPetPostUserResponse['default']
/**
 * @description
 *   This can only be done by the logged in user.
 *   Create user
 * @tags user
 * @produces application/json,application/xml
 * @consumes application/json
 */
export const apiPetPostUser = (option?: ApiPetPostUserOption, config?: AxiosRequestConfig) =>
  requester<ApiPetPostUserResponseSuccess>('/user', { method: 'post', body: option }, config)
