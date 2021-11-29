import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SwitchEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

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

    
}