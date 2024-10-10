import { CreateUserUseCase } from "../modules/users/useCases/createUser/CreateUserUseCase";
import { CreateUserDTO } from "../modules/users/useCases/createUser/CreateUserDTO";
import { IUserRepo } from "../modules/users/repos/userRepo";
import { UserEmail } from "../modules/users/domain/userEmail";
import { UserPassword } from "../modules/users/domain/userPassword";
import { UserName } from "../modules/users/domain/userName";
import { User } from "../modules/users/domain/user";
import { CreateUserErrors } from "../modules/users/useCases/createUser/CreateUserErrors";
import { Result } from "../shared/core/Result";
import { AppError } from "../shared/core/AppError";

const mockUserRepo: jest.Mocked<IUserRepo> = {
  exists: jest.fn(),
  getUserByUserName: jest.fn(),
  save: jest.fn(),
};

const createUserUseCase = new CreateUserUseCase(mockUserRepo);

describe("CreateUserUseCase", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("T1-should return EmailAlreadyExistsError if email already exists", async () => {
    mockUserRepo.exists.mockResolvedValueOnce(true);

    const request: CreateUserDTO = {
      username: "testuser",
      email: "testuser@test.com",
      password: "password123",
    };

    const result = await createUserUseCase.execute(request);

    expect(result.isLeft()).toBe(true);
    expect(result.value).toBeInstanceOf(CreateUserErrors.EmailAlreadyExistsError);
  });

  test("T2-should return UsernameTakenError if username is already taken", async () => {
    mockUserRepo.exists.mockResolvedValueOnce(false);
    mockUserRepo.getUserByUserName.mockResolvedValueOnce({} as User);

    const request: CreateUserDTO = {
      username: "testuser",
      email: "testuser@test.com",
      password: "password123",
    };

    const result = await createUserUseCase.execute(request);

    expect(result.isLeft()).toBe(true);
    expect(result.value).toBeInstanceOf(CreateUserErrors.UsernameTakenError);
  });

  Test("T3-should create a user successfully", async () => {
    mockUserRepo.exists.mockResolvedValueOnce(false);
    mockUserRepo.getUserByUserName.mockResolvedValueOnce(null);
    mockUserRepo.save.mockResolvedValueOnce();

    const request: CreateUserDTO = {
      username: "testuser",
      email: "testuser@test.com",
      password: "password123",
    };

    const result = await createUserUseCase.execute(request);

    expect(result.isRight()).toBe(true);
    expect(result.value).toEqual(Result.ok<void>());
    expect(mockUserRepo.save).toHaveBeenCalled();
  });

  test("t4-should return UnexpectedError if an error occurs", async () => {
    mockUserRepo.exists.mockRejectedValueOnce(new Error("Unexpected error"));

    const request: CreateUserDTO = {
      username: "testuser",
      email: "testuser@test.com",
      password: "password123",
    };

    const result = await createUserUseCase.execute(request);

    expect(result.isLeft()).toBe(true);
    expect(result.value).toBeInstanceOf(AppError.UnexpectedError);
  });
});
