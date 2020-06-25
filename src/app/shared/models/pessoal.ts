import { Curso } from './curso';
import { Afastamento } from 'src/app/shared/models/afastamento';
import { Endereco } from './endereco';
import { Licenca } from './licenca';

export class Pessoal {
      id: string;
      matricula: number;
      nomeGuerra: string;
      quadro: string;
      postoGraduacao: string;
      dataIngresso: Date;
      siape: string;
      bienalValidade: Date;
      tafData: Date;
      genero: string;
      dataNascimento: Date;
      nome: string;
      cpf: string;
      endereco: Endereco;
      cnhValidade: Date;
      categoria: string;
      transferido: boolean;
      afastamentos: Afastamento[];
      licencas: Licenca[];
      cursos: Curso[];

}
