import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 } from "uuid";
@Entity()
export class Food {
    @PrimaryGeneratedColumn('uuid')
    uid: string;
    @Column({unique: true})
    title: string;
    @Column({ nullable: true})
    description: string;
    @Column({default: true})
    active: boolean
    constructor() {
        if(!this.uid) this.uid = v4();
    }
}
