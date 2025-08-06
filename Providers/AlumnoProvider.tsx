import {useContext, useState } from "react";
import { Plantilla } from "../Modelos/Plantilla";
import { View, ViewComponent } from "react-native";
import { Alumno } from "../Modelos/Alumno";
import { ContextAlumno } from "../Contexto/ContextAlumno";

export default function AlumnoProvider({children}: Plantilla){

    const [listaAlumnos,setListaAlumnos ]= useState<Alumno[]>([{'id':1,'nombre':'Juan'},
        {'id':2,'nombre':'Jose'},{'id':3,'nombre':'Pedro'},{'id':4,'nombre':'Ismael'},
        {'id':5,'nombre':'Ramon'},{'id':6,'nombre':'Jose'},{'id':7,'nombre':'Victor'},{'id':8,'nombre':'Ariel'},
        {'id':9,'nombre':'Andres'},{'id':10,'nombre':'Arturo'}]);

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