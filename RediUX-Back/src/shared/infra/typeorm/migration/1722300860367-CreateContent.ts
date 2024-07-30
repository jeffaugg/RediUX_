import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateContent1722300860367 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'content',
                    columns: [
                        {
                            name: 'id',
                            type: 'int',
                            isPrimary: true,
                            generationStrategy: 'increment',
                        },
                        {
                            name: 'title',
                            type: 'varchar',
                        },
                        {
                            name: 'autor',
                            type: 'varchar',
                        },
                        {
                            name: 'description',
                            type: 'varchar',
                        },
                        {
                            name: 'link',
                            type: 'varchar',
                        },
                        {
                            name: 'media_type',
                            type: 'enum',
                            enum: ['Book', 'Podcast', 'Article', 'Vídeo'],
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()",
                        },
                        {
                            name: "updated_at",
                            type: "timestamp",
                            default: "now()",
                        },
                        
                    ],
                },
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('content')
    }

}
