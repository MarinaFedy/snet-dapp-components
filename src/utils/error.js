import { APIError } from "./API";
import ValidationError from "./validationError";
import BlockChainError from "./BlockChainError";

export const checkIfKnownError = error =>
  error instanceof APIError ||
  error instanceof ValidationError ||
  error instanceof BlockChainError ||
  error instanceof GrpcError ||
  error instanceof MetamaskError;

export class GrpcError extends Error {
  constructor(message) {
    super(message);
    this.name = "GrpcError";
  }
}

export class MetamaskError extends Error {
  constructor(message) {
    super(message);
    this.name = "MetamaskError";
  }
}
