import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('usersAdmin')
class UserAdmin {
    @PrimaryColumn()
      id: string

    @Column()
      email: string

    @Column()
      password: string
}

export { UserAdmin }
