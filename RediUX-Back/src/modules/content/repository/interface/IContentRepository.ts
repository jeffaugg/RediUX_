import { Content } from "../../infra/typeorm/entity/Content";

interface IcreateContentDTO {
  title: string;
  autor: string;
  description: string;
  link: string;
  media_type: string;
}

interface IContentRepository {
  create({
    title,
    autor,
    description,
    link,
    media_type,
  }: IcreateContentDTO): Promise<Content>;

  update(
    id: number,
    data: {
      title?: string;
      autor?: string;
      description?: string;
      link?: string;
      media_type?: string;
    },
  ): Promise<Content>;

  list(data: { id?: number; title?: string }): Promise<Content[]>;

  delete(id: number): Promise<void>;
}

export { IContentRepository, IcreateContentDTO };
