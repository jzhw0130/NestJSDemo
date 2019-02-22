import {Injectable, NestMiddleware, MiddlewareConsumer, MiddlewareFunction} from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    resolve(...args: any[]): MiddlewareFunction {
        console.log(`Load logger middleware : ${JSON.stringify(args)}`);
        return (req, res, next) => {
            console.log(`Path(${req.url}) trigger middleware`);
            next();
        };
    }
}
