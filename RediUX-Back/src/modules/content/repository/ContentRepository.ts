import { In, Repository } from "typeorm";
import { Content } from "../infra/typeorm/entity/Content";
import {
  IContentRepository,
  IcreateContentDTO,
} from "./interface/IContentRepository";
import { AppDataSource } from "../../../data-source";
import { Tag } from "../infra/typeorm/entity/Tag";
import { AppError } from "../../../shared/erros/AppError";

class ContentRepository implements IContentRepository {
  private repository: Repository<Content>;
  private tagRepository: Repository<Tag>;
  constructor() {
    this.repository = AppDataSource.getRepository(Content);
    this.tagRepository = AppDataSource.getRepository(Tag);
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
    tags,
  }: IcreateContentDTO): Promise<Content> {
    const content = this.repository.create({
      title,
      autor,
      description,
      link,
      media_type,
    });

    if (tags && tags.length > 0) {
      const tagEntities = await this.tagRepository.find({
        where: {
          id: In(tags.map((tag) => tag.id)),
        },
      });
      content.tags = tagEntities;
    }

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
      tags?: Tag[];
    },
  ): Promise<Content> {
    const content = await this.repository.findOne({
      where: { id },
      relations: ["tags"],
    });

    if (!content) {
      throw new AppError("The content does not exist");
    }

    if (data.title !== undefined) content.title = data.title;
    if (data.autor !== undefined) content.autor = data.autor;
    if (data.description !== undefined) content.description = data.description;
    if (data.link !== undefined) content.link = data.link;
    if (data.media_type !== undefined) content.media_type = data.media_type;

    if (data.tags) {
      const tagIds = data.tags.map((tag) => tag.id); //join all ids

      const tagEntities = await this.tagRepository.find({
        where: {
          id: In(tagIds), //TypeORM function that creates a SQL condition to search for records with 'id' present in a list.
        },
      });

      content.tags = tagEntities;
    }

    await this.repository.save(content);

    return content;
  }

  /* 
  this method returns a list of contents based on the id or title passed as a parameter
  if no parameter is passed, it returns all contents
  */
  async list(data: {
    id?: number;
    title?: string;
    page?: number;
    limit?: number;
    tag_id?: number;
  }): Promise<Content[]> {
    const { id, title, page = 1, limit = 10, tag_id } = data;

    const queryBuilder = this.repository.createQueryBuilder("content");

    queryBuilder.leftJoinAndSelect("content.tags", "tag");

    if (tag_id) {
      queryBuilder.andWhere("tag.id = :tag_id", { tag_id });
    }

    if (id) {
      queryBuilder.andWhere("content.id = :id", { id });
    } else if (title) {
      queryBuilder.andWhere("content.title LIKE :title", {
        title: `%${title}%`,
      });
    }
    if (page && limit) {
      const offset = (page - 1) * limit;
      queryBuilder.skip(offset).take(limit);
    }

    const contents = await queryBuilder.getMany();
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
