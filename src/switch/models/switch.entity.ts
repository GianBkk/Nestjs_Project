import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('switch_model')
export class SwitchModelEntity {
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