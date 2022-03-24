import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // eslint-disable-next-line no-empty
    const newUser: User = new User();

    Object.assign(newUser, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(newUser);

    return newUser;
  }

  findById(id: string): User | undefined {
    const findById = this.users.find((user) => user.id === id);

    if (!findById) {
      throw new Error("User does not exists...");
    }

    return findById;
  }

  findByEmail(email: string): User | undefined {
    const findByEmail = this.users.find((user) => user.email === email);

    return findByEmail;
  }

  turnAdmin(receivedUser: User): User {
    const userProfile = receivedUser;

    userProfile.admin = true;

    return userProfile;
  }

  list(): User[] {
    const allUsers = this.users;

    return allUsers;
  }
}

export { UsersRepository };
