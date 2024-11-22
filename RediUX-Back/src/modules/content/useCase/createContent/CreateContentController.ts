import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateContentUseCase } from "./CreateContentUseCase";
import { CreateContentDTO } from "./CreateContentDTO";

class CreateContentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: CreateContentDTO = request.body;

    const createContentUseCase = container.resolve(CreateContentUseCase);

    try {
      const content = await createContentUseCase.execute(data);

      return response.status(201).json(content);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}

export { CreateContentController };
