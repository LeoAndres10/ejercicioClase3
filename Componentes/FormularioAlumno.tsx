import { View,Text } from "react-native";
import { ContextAlumno } from "../Contexto/ContextAlumno";
import {useAlumno} from "../Providers/AlumnoProvider";

export default function FormularioAlumno(){
 const {agregarListaAlumno, listaAlumnos} = useAlumno();
 return (
    <View>
     
      {
        listaAlumnos.map((item)=>(
            <Text key={item.id}> ID: {item.id} / Nombre: {item.nombre} </Text>
        ))
      }
    </View>
  )
}