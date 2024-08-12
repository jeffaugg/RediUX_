import { Repository } from "typeorm";
import { Content } from "../infra/typeorm/entity/Content";
import {
  IContentRepository,
  IcreateContentDTO,
} from "./interface/IContentRepository";
import { AppDataSource } from "../../../data-source";

class ContentRepository implements IContentRepository {
  private repository: Repository<Content>;
  constructor() {
    this.repository = AppDataSource.getRepository(Content);
  }

  /*
  this method creates a new content in the database
  */
  async create({
    title,
    autor,
    description,
    link,
    media_type,
  }: IcreateContentDTO): Promise<Content> {
    const content = this.repository.create({
      title,
      autor,
      description,
      link,
      media_type,
    });

    await this.repository.save(content);
    return content;
  }

  /*
  this method updates the content based on the id passed as a parameter
  */

  async update(
    id: number,
    data: {
      title?: string;
      autor?: string;
      description?: string;
      link?: string;
      media_type?: string;
    },
  ): Promise<Content> {
    await this.repository.update(id, data);

    return await this.repository.findOneBy({ id });
  }

  /* 
  this method returns a list of contents based on the id or title passed as a parameter
  if no parameter is passed, it returns all contents
  */
  async list(data: { id?: number; title?: string }): Promise<Content[]> {
    const { id, title } = data;
    const contents = await this.repository
      .createQueryBuilder("content")
      .where(id ? { id } : {})
      .andWhere(title ? { title } : {})
      .getMany();

    return contents;
  }

  /*
  this method deletes a content based on the id passed as a parameter
  */
  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

export { ContentRepository };
