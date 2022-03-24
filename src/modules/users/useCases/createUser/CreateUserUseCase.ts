import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const ifUserExists = this.usersRepository.findByEmail(email);

    if (ifUserExists) {
      throw new Error("Mensagem de erro");
    }

    const createAnewUser = this.usersRepository.create({ name, email });

    return createAnewUser;
  }
}

export { CreateUserUseCase };
