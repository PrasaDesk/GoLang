export class HTTP_STATUS {
    static readonly HTTP_OK = 200;
    static readonly HTTP_CREATED = 201;
    static readonly HTTP_ACCEPTED = 202;

    static readonly HTTP_MULTIPLE_CHOICES = 300;

    static readonly HTTP_BAD_REQUEST = 400;
    static readonly HTTP_UNAUTHRIZED = 401;
    static readonly HTTP_PAYMENT_REQUIRED = 402;
    static readonly HTTP_FORBIDEN = 403;
    static readonly HTTP_NOT_FOUND = 404;

    static readonly HTTP_INTERNAL_ERROR = 500;

    static isSuccess = (code:number)=> code >= this.HTTP_OK && code < this.HTTP_MULTIPLE_CHOICES;
}