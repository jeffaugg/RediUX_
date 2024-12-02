import { inject, injectable } from "tsyringe";
import { Content } from "../../infra/typeorm/entity/Content";
import { IContentRepository } from "../../repository/interface/IContentRepository";
import { AppError } from "../../../../shared/erros/AppError";
import { Tag } from "../../infra/typeorm/entity/Tag";

@injectable()
class UpdateContentUseCase {
  constructor(
    @inject("ContentRepository")
    private contentRepository: IContentRepository,
  ) {}

  // this method updates the content based on the id passed as a parameter
  async execute(
    id: number,
    data: {
      title?: string;
      autor?: string;
      description?: string;
      link?: string;
      media_type?: string;
      tags?: Tag[];
    },
  ): Promise<Content> {
    const contentUpdated = await this.contentRepository.update(id, data);

    if (!contentUpdated) {
      throw new AppError("Content not found");
    }
    return contentUpdated;
  }
}

export { UpdateContentUseCase };
