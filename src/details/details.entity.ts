import { SwitchEntity } from "src/switch/switch.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DetailsEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    desc:string;

    @Column()
    time:string;

    @Column()
    timestamp:Date;

    @ManyToOne(() => SwitchEntity, switches => switches.details, {onDelete: 'CASCADE'})
    switches:SwitchEntity;

    
}