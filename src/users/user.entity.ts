import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
@Entity()
export class User {
    @Expose()
    @PrimaryGeneratedColumn()
    id: number;

    @Expose()
    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

    @Expose()
    @Column()
    firstName: string;

    @Expose()
    @Column()
    lastName: string;

    @Expose()
    @Column({type: 'datetime', nullable: false, default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;

    @Expose()
    @Column({ default: true })
    isActive: boolean;

    @Expose()
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}