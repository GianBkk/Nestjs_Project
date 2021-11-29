import { DetailsEntity } from "src/details/details.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SwitchEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    ip: string;

    @Column()
    oid:string;

    @Column()
    oiddesc:string;

    @Column()
    oidnum:string;

    @Column()
    oidtime:string;

    @Column()
    date:number;

    @OneToMany(() => DetailsEntity, details => details.switches)
    details : DetailsEntity[];

    
}