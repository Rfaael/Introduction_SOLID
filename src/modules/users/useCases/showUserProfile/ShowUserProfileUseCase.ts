import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const ifUserExists = this.usersRepository.findById(user_id);

    // eslint-disable-next-line no-empty
    if (!ifUserExists) {
      throw new Error("User not found!");
    }

    return ifUserExists;
  }
}

export { ShowUserProfileUseCase };
