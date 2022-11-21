import { NextFunction, Request, Response } from "express"


export const globalCatchFn = (fn: any) => {
    function finalFn(req: Request, res: Response, next: NextFunction) {
        try {
            fn(req, res, next)
        } catch (error) {
            next(error)
        }
    }

    return finalFn;
}
