import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('tags')
class Tag {
    @PrimaryColumn()
      id: string

    @Column()
      name: string
}
