export interface Foto {
    descricaoFoto: string;
    fotoUUID: number;
    latitude: number;
    longitude: number;
    avaria: string;
    tipoVeiculo: string;
    image64: string;
    dataHora: string;
    codigoUsuario: string;
    tfoid: number;
}

export class Foto2 {
    private descricaoFoto: string;
    private fotoUUID: number;
    private latitude: number;
    private longitude: number;
    private avaria: string;
    private tipoVeiculo: string;
    private image64: string;
    private dataHora: string;
    private codigoUsuario: string;
    private tfoid: number;

    public getDescricaoFoto(): string {
        return this.descricaoFoto;
    }

    public setDescricaoFoto(descricaoFoto: string): void {
        this.descricaoFoto = descricaoFoto;
    }

    public getFotoUUID(): number {
        return this.fotoUUID;
    }

    public setFotoUUID(fotoUUID: number): void {
        this.fotoUUID = fotoUUID;
    }

    public getLatitude(): number {
        return this.latitude;
    }

    public setLatitude(latitude: number): void {
        this.latitude = latitude;
    }

    public getLongitude(): number {
        return this.longitude;
    }

    public setLongitude(longitude: number): void {
        this.longitude = longitude;
    }

    public getAvaria(): string {
        return this.avaria;
    }

    public setAvaria(avaria: string): void {
        this.avaria = avaria;
    }

    public getTipoVeiculo(): string {
        return this.tipoVeiculo;
    }

    public setTipoVeiculo(tipoVeiculo: string): void {
        this.tipoVeiculo = tipoVeiculo;
    }

    public getImage64(): string {
        return this.image64;
    }

    public setImage64(image64: string): void {
        this.image64 = image64;
    }

    public getDataHora(): string {
        return this.dataHora;
    }

    public setDataHora(dataHora: string): void {
        this.dataHora = dataHora;
    }

    public getCodigoUsuario(): string {
        return this.codigoUsuario;
    }

    public setCodigoUsuario(codigoUsuario: string): void {
        this.codigoUsuario = codigoUsuario;
    }

    public getTfoid(): number {
        return this.tfoid;
    }

    public setTfoid(tfoid: number): void {
        this.tfoid = tfoid;
    }
  
}