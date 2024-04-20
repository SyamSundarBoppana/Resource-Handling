import { Client } from "src/client/entity/client.entity";
import { Resource } from "src/resource/entity/resource.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from "typeorm";

@Entity()
export class Project{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    clientName: string;

    @Column()
    projectTitle:string;

    @Column()
    projectDescription: string;

    @Column()
    startDate:string;

    @Column()
    endDate: string;

    @Column({name:'client_id'})
    clientId: number;

    @ManyToOne(() => Client, (client) => client.projects)
    @JoinColumn({name:'client_id'})
    client: Client

    @OneToMany(()=>Resource, (resource)=>resource.project)
    resources:Resource[]
}