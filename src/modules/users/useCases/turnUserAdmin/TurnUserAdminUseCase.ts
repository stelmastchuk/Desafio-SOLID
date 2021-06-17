import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  private usersRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User {
    const useridAlreadyExists = this.usersRepository.findById(user_id);

    if (!useridAlreadyExists) {
      throw new Error("User id already no exists");
    }

    return this.usersRepository.turnAdmin(useridAlreadyExists);
  }
}

export { TurnUserAdminUseCase };
