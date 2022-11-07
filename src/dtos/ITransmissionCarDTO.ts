export interface ITransmissionCarDTO {
    id: string;
    name: string;
    Cars: Car[];
}

export interface Car {
    id: string;
    model: string;
    color: string;
    creation_year: number;
    model_year: number;
    transmissionId: string;
    brandId: string;
}