import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  private turnUserAdminUseCase: TurnUserAdminUseCase;
  constructor(turnUserAdminUseCase: TurnUserAdminUseCase) {
    this.turnUserAdminUseCase = turnUserAdminUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      return response.json(this.turnUserAdminUseCase.execute({ user_id }));
    } catch (Error) {
      return response.status(404).json({ error: Error.message });
    }
  }
}

export { TurnUserAdminController };
