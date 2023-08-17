/**
 * Enum representing commonly used HTTP status codes.
 */
export enum HttpStatus {
  /** The server has received the request headers and the client should proceed to send the request body. */
  Continue = 100,
  /** The server is willing to switch protocols. */
  SwitchingProtocols = 101,
  /** The request has succeeded. */
  OK = 200,
  /** The request has been fulfilled and resulted in a new resource being created. */
  Created = 201,
  /** The request has been accepted for processing, but the processing has not been completed. */
  Accepted = 202,
  /** The server successfully processed the request and there is no additional content to send. */
  NoContent = 204,
  /** The requested page has been permanently moved to another location. */
  MovedPermanently = 301,
  /** The requested page has been temporarily moved to another location. */
  Found = 302,
  /** The response to the request can be found under another URI using a GET method. */
  SeeOther = 303,
  /** The client has performed a conditional GET request and the resource has not been modified. */
  NotModified = 304,
  /** The requested page has been temporarily moved to another location. */
  TemporaryRedirect = 307,
  /** The requested page has been permanently moved to another location. */
  PermanentRedirect = 308,
  /** The server cannot or will not process the request due to an apparent client error. */
  BadRequest = 400,
  /** Authentication is required and has failed or has not been provided. */
  Unauthorized = 401,
  /** The client does not have permission to access the requested resource. */
  Forbidden = 403,
  /** The server cannot find the requested resource. */
  NotFound = 404,
  /** The method specified in the request is not allowed for the resource. */
  MethodNotAllowed = 405,
  /** The request could not be completed due to a conflict with the current state of the resource. */
  Conflict = 409,
  /** The requested resource is no longer available and has been permanently removed. */
  Gone = 410,
  /** An error occurred on the server. */
  InternalServerError = 500,
}
