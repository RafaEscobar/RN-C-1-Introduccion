// Interfaz ReqResInterface
export interface ReqResInterface {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    /* 
        Es recomendable cambiar 'Dump[]' que es lo que nos arroja el typado automatico
        por aquello que vamos a obtener, en este caso, una lista de usuarios, quedando
        como:: Usuario[]
    */
    data:        Usuario[];
    support:     Support;
}
// Interfaz Usuario
export interface Usuario {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
    
}

export interface Support {
    url:  string;
    text: string;
}
