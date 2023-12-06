

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('portfolio')
export class PortfolioEntity {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  title: string | undefined;

  @Column()
  description: string | undefined;

  @Column()
  imageUrl: string | undefined;

  @Column({ default: false })
  hidden: boolean | undefined;

  @Column()
  customerLink: string | undefined;
}
