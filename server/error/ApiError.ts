class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message);
    // this.message = message
    this.status = status
  }

  static badRequest(message: string) {
    console.log(message)
    return new ApiError(404, message)
  }

  static internal(message: string) {
    return new ApiError(500, message)
  }

  static forbidden(message: string) {
    return new ApiError(403, message)
  }
}

export default ApiError