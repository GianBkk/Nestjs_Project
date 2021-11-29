import { Connection } from 'typeorm';
import { DetailsEntity } from './details.entity';


export const DetailsProvider = [
  {
    provide: 'DETAILS_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(DetailsEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];