import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  private listAllUsersUseCase: ListAllUsersUseCase;
  constructor(listAllUsersUseCase: ListAllUsersUseCase) {
    this.listAllUsersUseCase = listAllUsersUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      if (Array.isArray(user_id)) {
        const result = user_id.map((id) =>
          this.listAllUsersUseCase.execute({ user_id: id })
        );
        return response.json(result);
      }
      return response.json(this.listAllUsersUseCase.execute({ user_id }));
    } catch (Error) {
      return response.status(400).json({ error: Error.message });
    }
  }
}

export { ListAllUsersController };
