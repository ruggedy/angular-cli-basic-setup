import { DBSchema } from '@ngrx/db';

export const schema: DBSchema = {
    version: 1,
    name: 'eatsafe',
    stores: {
        user: {
            autoIncrement: true,
            primaryKey: 'id'
        }
    }
}