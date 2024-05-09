/* eslint-disable prettier/prettier */
import { ObjectId } from 'mongodb';
import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity{
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  username: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({type: 'timestamp'})
  createdAt: Date;
}