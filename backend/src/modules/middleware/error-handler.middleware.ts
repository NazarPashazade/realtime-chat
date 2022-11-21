import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utilities/custom-error.model";


export function errorHandlerMiddleware(
    err: TypeError | CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) {

    let customError = err;

    const isCustomError = err instanceof CustomError;

    if (!isCustomError) {
        customError = new CustomError('Something happened wrong...');
    }

    console.log(customError);
    
    res.status((customError as CustomError).status).send(customError);
};

