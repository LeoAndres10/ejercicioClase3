import { createContext } from "react";
import { Alumno } from "../Modelos/Alumno";

export const ContextAlumno= createContext({
    listaAlumnos: [] as Alumno[],
    agregarListaAlumno:(alumno:Alumno)=>{}
});