import { useEffect, useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";
import { Alumno } from "../Modelos/Alumno";
import { useAlumno } from "../Providers/AlumnoProvider";


export default function AlumnoComponent(){
    const {agregarListaAlumno, listaAlumnos} = useAlumno();
    const [id, setId]= useState<string>('');
const [nombre, setNombre]= useState<string>('');

function agregarAlumnoIndividual(){

    let alumno: Alumno={
        id:parseInt(id),
        nombre:nombre
    }

    agregarListaAlumno(alumno);

    Alert.alert('Alumno Ingresado Exitosamente');
}

useEffect(()=>{
    console.log(listaAlumnos)
})
return(
    <View>
        <TextInput
        placeholder="Agregar nombre del alumno" value={nombre} onChangeText={setNombre}
        ></TextInput>
        <TextInput
        placeholder="Agregar ID" value={id.toString()} onChangeText={()=>setId}
        ></TextInput>

        <Button title="Agregar Alumno" onPress={agregarAlumnoIndividual}></Button>
    </View>
)
}