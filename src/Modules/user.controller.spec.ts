import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserContoller', () => {
    let userController: UserController;

    beforeEach(async () => {
        const user: TestingModule = await  Test.createTestingModule({
            controllers: [UserController],
            providers: [UserService],
        }).compile();

        userController = user.get<UserController>(UserController);
    });

    describe('login', () => {
        it('login success', () => {
            const result = userController.userLogin();
            expect(result.status).toBe('OK');
        });
    });
});
