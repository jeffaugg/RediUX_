import { container } from "tsyringe";

import { ContentRepository } from "../../modules/content/repository/ContentRepository";
import { IContentRepository } from "../../modules/content/repository/interface/IContentRepository";

container.registerSingleton<IContentRepository>(
  "ContentRepository",
  ContentRepository,
);
