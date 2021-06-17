import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  private createUserUseCase: CreateUserUseCase;
  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    try {
      return response
        .status(201)
        .json(this.createUserUseCase.execute({ name, email }));
    } catch (Error) {
      return response.status(400).json({ error: Error.message });
    }
  }
}
export { CreateUserController };
