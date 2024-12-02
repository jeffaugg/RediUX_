import { ITag } from "../../infra/typeorm/entity/interface/ITag";

interface CreateContentDTO {
  title: string;
  autor: string;
  description: string;
  link: string;
  media_type: string;
  tags: ITag[];
}

export { CreateContentDTO };
