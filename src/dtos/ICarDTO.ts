export interface ICarDTO {
    id: string;
    model: string;
    color: string;
    creation_year: number;
    model_year: number;
    transmissionId: string;
    brandId: string;
    Brands: Datam;
    Transmissions: Datam;
}

export interface Datam {
    id: string;
    name: string;
    description: string;
}
