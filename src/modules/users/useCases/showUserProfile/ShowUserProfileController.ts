import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  private showUserProfileUseCase: ShowUserProfileUseCase;
  constructor(showUserProfileUseCase: ShowUserProfileUseCase) {
    this.showUserProfileUseCase = showUserProfileUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      return response.json(
        this.showUserProfileUseCase.execute({
          user_id,
        })
      );
    } catch (Error) {
      return response.status(404).json({ error: Error.message });
    }
  }
}

export { ShowUserProfileController };
