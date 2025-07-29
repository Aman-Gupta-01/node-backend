import constants from "../constant.js";

export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : constants.SERVER_ERROR;

    switch ( statusCode ) {
        case constants.VALIDATION_ERROR:
            res.status(statusCode).json({
                title: "Validation failed", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.status(statusCode).json({
                title: "Not found", 
                message: err.message, 
                stackTrace: err.stack
            
            });
            break;
        case constants.UNAUTHORIZED:
            res.status(statusCode).json({
                title: "Unauthorized", 
                message: err.message, 
                stackTrace: err.stack
            
            });
            break;
        case constants.FORBIDDEN:
            res.status(statusCode).json({
                title: "You dont have access", 
                message: err.message, 
                stackTrace: err.stack
            
            });
            break;
        case constants.SERVER_ERROR:
            res.status(statusCode).json({
                title: "Something went wrong", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
        default: 
        console.log("No error, All fine");
        break;
        
    }
};