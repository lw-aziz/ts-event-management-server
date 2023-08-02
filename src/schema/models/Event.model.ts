import { Table, Column, Model, ForeignKey, BelongsTo, PrimaryKey, IsAfter, DataType, CreatedAt } from 'sequelize-typescript';
import User from './User.model';
import { Optional } from 'sequelize';

interface EventAttributes {
  readonly id: typeof DataType.UUID;
  title: string;
  description: string;
  eventDate: Date;
  userId: typeof DataType.UUID;
  readonly createdAt: Date;

  getUser(): Promise<User>;
}
export interface EventInput extends Optional<Omit<EventAttributes, 'id' | 'createdAt' | 'getUser'>, 'description'> { }

export interface EventOutput extends EventAttributes { }

@Table({
  timestamps: true,
  paranoid: true,
  modelName: 'Event',
  tableName: 'events',
  underscored: true,
})
export default class Event extends Model implements EventAttributes {

  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4
  })
  id!: typeof DataType.UUID;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  title !: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  eventDate!: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
  })
  userId!: typeof DataType.UUID;

  @CreatedAt
  createdAt!: Date;


  @BelongsTo(() => User, 'userId')
  user!: User;

  public async getUser(): Promise<User> {
    return this.user;
  }
};