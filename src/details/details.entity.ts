import { SwitchEntity } from "src/switch/switch.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DetailsEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    oid:string;

    @Column()
    oiddesc:string;

    @Column()
    oidtime:string;

    @Column()
    timestamp:Date;

    @ManyToOne(() => SwitchEntity, switches => switches.details, {onDelete: 'CASCADE'})
    switches:SwitchEntity;

    
}