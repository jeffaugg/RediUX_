import { inject, injectable } from "tsyringe";
import { IContentRepository } from "../../repository/interface/IContentRepository";
import { Tag } from "../../infra/typeorm/entity/Tag";
import { ITagRepository } from "../../repository/interface/ITagRepository";
import { AppError } from "../../../../shared/erros/AppError";

interface IRequest {
  title: string;
  autor: string;
  description: string;
  link: string;
  media_type: string;
  tags: Tag[];
}

@injectable()
class CreateContentUseCase {
  constructor(
    @inject("ContentRepository")
    private contentRepository: IContentRepository,
    @inject("TagRepository")
    private tagRepository: ITagRepository,
  ) {}

  // this method creates a new content in the database
  async execute({
    title,
    autor,
    description,
    link,
    media_type,
    tags,
  }: IRequest) {
    for (const tag of tags) {
      const existingTag = await this.tagRepository.findByName(tag.name);

      if (!existingTag) {
        throw new AppError(`A tag '${tag.name}' não existe no sistema`, 400);
      }
    }

    const content = await this.contentRepository.create({
      title,
      autor,
      description,
      link,
      media_type,
      tags,
    });

    return content;
  }
}

export { CreateContentUseCase };
