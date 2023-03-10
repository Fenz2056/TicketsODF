import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EsUsuario } from "../models/user.module";

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    private baseUrl: string = 'http://localhost:3000/enquiry'
    constructor(private http: HttpClient){}
    EsPostearResgistro (registerObj: EsUsuario) {
        return this.http.post<EsUsuario>(`${this.baseUrl}`,registerObj)
    }

    EsObtenerRegistroUsuario() {
        return this.http.get<EsUsuario[]>(`${this.baseUrl}`)
    }

    EsActulizarRegistroUsuario (registerObj: EsUsuario, id:number) {
        return this.http.put<EsUsuario>(`${this.baseUrl}/${id}`,registerObj)
    }

    EsElminarRegistroUsuario (id:number) {
        return this.http.delete<EsUsuario>(`${this.baseUrl}/${id}`)
    }

    EsObtenerRegistroUsuarioPorID (id:number) {
        return this.http.get<EsUsuario>(`${this.baseUrl}/${id}`)
    }

}