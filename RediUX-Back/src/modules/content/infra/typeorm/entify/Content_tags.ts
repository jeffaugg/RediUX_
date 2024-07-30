import { PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

class Content_tags {
  @PrimaryColumn()
    id: string

  content_id: string

  tag_id: string

  @CreateDateColumn()
    created_at: Date

  @UpdateDateColumn()
    updated_at: Date
}

export { Content_tags }
