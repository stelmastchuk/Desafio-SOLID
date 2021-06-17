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
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const userid = this.users.find((user) => user.id === id);

    return userid;
  }

  findByEmail(email: string): User | undefined {
    const useremail = this.users.find((user) => user.email === email);

    return useremail;
  }

  turnAdmin(receivedUser: User): User {
    const user = receivedUser;

    if (user.admin !== false) {
      user.admin = false;
      user.updated_at = new Date();
    }

    user.admin = true;
    user.updated_at = new Date();

    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
