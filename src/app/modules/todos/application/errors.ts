export class TooLongError extends Error {
  constructor(message = 'too long') {
    super(message)
  }
}

export class TooMoreTagsError extends Error {
  constructor(message = 'too more tags') {
    super(message)
  }
}
