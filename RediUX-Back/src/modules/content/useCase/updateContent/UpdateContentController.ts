import { Request, Response } from "express";
import { UpdateContentUseCase } from "./UpdateContentUseCase";
import { container } from "tsyringe";
import { SchemaContent } from "../../infra/zod/SchemaContent";

class UpdateContentController {
  async updateContent(req: Request, res: Response): Promise<Response> {
    const updateContentUseCase = container.resolve(UpdateContentUseCase);

    try {
      const { id } = req.params;
      const { title, autor, description, link, media_type, tags } =
        SchemaContent.parse(req.body);

      const idInt = parseInt(id, 10);
      if (isNaN(idInt)) {
        return res.status(400).json({ message: "ID must be a number" });
      }

      const updatedContent = await updateContentUseCase.execute(idInt, {
        title,
        autor,
        description,
        link,
        media_type,
        tags,
      });

      return res.status(200).json(updatedContent);
    } catch (error: any) {
      console.error(error);
      return res
        .status(500)
        .json({ message: error.message || "Internal Server Error", error });
    }
  }
}

export { UpdateContentController };
