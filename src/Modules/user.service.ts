import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private index: number = 0;

    checkHealth(module) {
        console.log(`${module} is health, index: ${this.index}`);
        this.index++;
    }

    userLogin() {
        return {
            status: 'OK',
        };
    }
}
