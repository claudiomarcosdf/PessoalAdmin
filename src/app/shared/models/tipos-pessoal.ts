export class TiposPessoal {

      getQuadros() {

            return [
               {id: 1, sigla: 'QOPM'},
               {id: 2, sigla: 'QOPME'},
               {id: 3, sigla: 'QPPMC'},
               {id: 4, sigla: 'QPPME'}
            ];
      }

      getPatente() {

            return [
               {id: 1, sigla: 'TC'},
               {id: 2, sigla: 'MAJ'},
               {id: 3, sigla: 'CAP'},
               {id: 4, sigla: '1º TEN'},
               {id: 4, sigla: '2º TEN'},
               {id: 4, sigla: 'ST'},
               {id: 4, sigla: '1º SGT'},
               {id: 4, sigla: '2º SGT'},
               {id: 4, sigla: '3º SGT'},
               {id: 4, sigla: 'CB'},
               {id: 4, sigla: 'SD'}
            ];
      }

      getGenero() {

            return [
               {valor: 'M', descricao: 'Masculino'},
               {valor: 'F', descricao: 'Feminino'}
            ];
      }
}

