import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity ({name: "tb_turma"})
export class Turma{

    @PrimaryGeneratedColumn()
    id:number

    @IsNotEmpty()
    @Column({length:500, nullable: false})
    descricao: string

    @IsNotEmpty()
    @Column({nullable: false})
    isAtivo: boolean



    
}