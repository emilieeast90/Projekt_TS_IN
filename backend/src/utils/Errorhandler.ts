class Error {
    status: number;
}

class HttpException extends Error {
    message: string;
    constructor(status: number, message: string) {
        super();
        this.status = status;
        this.message = message;
    }
}
let error = new HttpException(404, "Error")
