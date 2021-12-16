export interface MateriaResponse {
    
    ok: boolean;
    nombreMateria?: string;
    horario?: string;
    cupos?: number;
    grupo?: number;
    msg?: string;

};

export interface Materias {
    
    _id: string;
    nombreMateria: string;
    horario: string;
    cupos: number;
    grupo: number;
    professorName: string;

};