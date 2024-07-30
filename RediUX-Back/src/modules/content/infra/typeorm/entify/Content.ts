import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('content')
class Content {
    @PrimaryColumn()
      id: string

    @Column()
      title: string

    @Column()
      autor: string

    @Column()
      description: string

    @Column()
      link: string

    @Column()
      media_type: string
}

export { Content }
