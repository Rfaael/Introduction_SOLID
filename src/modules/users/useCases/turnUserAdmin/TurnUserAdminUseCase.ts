import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    try {
      const user = this.usersRepository.findById(user_id);

      user.admin = true;

      return user;
    } catch (error) {
      throw new Error("error mensage");
    }
  }
}

export { TurnUserAdminUseCase };
