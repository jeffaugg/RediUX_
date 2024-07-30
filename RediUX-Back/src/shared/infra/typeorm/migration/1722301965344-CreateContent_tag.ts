import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateContentTag1722301965344 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'content_tag',
                    columns: [
                        {
                            name: 'content_id',
                            type: 'int',
                        },
                        {
                            name: 'tag_id',
                            type: 'int',
                        },
                    ],
                    foreignKeys: [
                        {
                            name: 'FKContent',
                            referencedTableName: 'content',
                            referencedColumnNames: ['id'],
                            columnNames: ['content_id'],
                            onDelete: 'CASCADE',
                            onUpdate: 'CASCADE',
                        },
                        {
                            name: 'FKTag',
                            referencedTableName: 'tags',
                            referencedColumnNames: ['id'],
                            columnNames: ['tag_id'],
                            onDelete: 'CASCADE',
                            onUpdate: 'CASCADE',
                        },
                    ],
                },
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('content_tag')
    }

}
