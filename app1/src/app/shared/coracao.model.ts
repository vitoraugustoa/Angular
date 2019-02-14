
export class Coracao {

    constructor(
        public cheio: boolean,
        public urlCoracaoCheio = '/src/assets/img/coracao_cheio.png',
        public urlCoracaoVazio = '/src/assets/img/coracao_vazio.png'
        ) {}

        public exibirCoracao(): string {
            if (this.cheio) {
                return this.urlCoracaoCheio;
            } else {
                return this.urlCoracaoVazio;
            }
        }
}