import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTag1722301730214 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'tags',
                    columns: [
                        {
                            name: 'id',
                            type: 'int',
                            isPrimary: true,
                            generationStrategy: 'increment',
                        },
                        {
                            name: 'name',
                            type: 'varchar',
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()",
                        },                        
                    ],
                },
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tags')
    }

}
