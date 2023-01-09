import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Turma } from "../entities/turma.entity";

@Injectable()
export class TurmaService {
    constructor(
        @InjectRepository(Turma)
        private turmaRepository: Repository<Turma>
    ) { }

    async findAll(): Promise<Turma[]> {
        return await this.turmaRepository.find();
    }

    async findById(id: number): Promise<Turma> {

        let turma = await this.turmaRepository.findOne({
            where: {
                id
            }
        });

        if (!turma)
            throw new HttpException('Turma não encontrada!', HttpStatus.NOT_FOUND);

        return turma;
    }

    async findByDescricao(descricao: string): Promise<Turma[]> {
        return await this.turmaRepository.find({
            where: {
                descricao: ILike(`%${descricao}%`)
            }
        })
    }
    async create(turma: Turma): Promise<Turma> {
        return await this.turmaRepository.save(turma)
    }

    async update(turma: Turma): Promise<Turma> {
        let buscarturma = await this.findById(turma.id)

        if (!turma || !turma.id)
            throw new HttpException('Turma não existe', HttpStatus.NOT_FOUND)

        return await this.turmaRepository.save(turma)
    }

    async delete(id: number): Promise<DeleteResult> {
        let buscarturma = await this.findById(id)

        if (!buscarturma)
            throw new HttpException('Turma não encontrado!', HttpStatus.NOT_FOUND)

        return await this.turmaRepository.delete(id)
    }
}