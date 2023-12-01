export function throwError(error: unknown, additionalMessage: string): never {
  if (error instanceof Error) {
    throw new Error(`${additionalMessage}: ${error.message}`);
  }
  throw new Error("Default error");
}
