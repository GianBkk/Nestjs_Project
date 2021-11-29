import { Connection } from 'typeorm';
import { SwitchEntity } from './switch.entity';


export const SwitchProvider = [
  {
    provide: 'SWITCH_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(SwitchEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];