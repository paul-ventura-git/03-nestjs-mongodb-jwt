/* eslint-disable prettier/prettier */
import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class Post {
  @ObjectIdColumn() // Unique for MongoDB
  id: ObjectId;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: false })
  isPublished: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: null, nullable: true })
  updatedAt: Date;
}
