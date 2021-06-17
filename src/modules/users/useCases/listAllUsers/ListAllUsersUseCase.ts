import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  private usersRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User[] {
    const userAdminAlreadyExists = this.usersRepository.findById(user_id);

    if (!userAdminAlreadyExists) {
      throw new Error("User not exists");
    }

    if (userAdminAlreadyExists.admin === false) {
      throw new Error("User not admin");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
