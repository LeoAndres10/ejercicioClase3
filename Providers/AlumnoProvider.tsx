import {useContext, useState } from "react";
import { Plantilla } from "../Modelos/Plantilla";
import { View, ViewComponent } from "react-native";
import { Alumno } from "../Modelos/Alumno";
import { ContextAlumno } from "../Contexto/ContextAlumno";

export default function AlumnoProvider({children}: Plantilla){

    const [listaAlumnos,setListaAlumnos ]= useState<Alumno[]>([]);

    function agregarListaAlumno(alumnoObjeto: Alumno){
        setListaAlumnos([...listaAlumnos,alumnoObjeto]);
    }

    return(

        <ContextAlumno.Provider value={{listaAlumnos,agregarListaAlumno}}>
            {children}
        </ContextAlumno.Provider>
    )

   
}
export function useAlumno(){
    return useContext(ContextAlumno)
}