import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AlumnoProvider from './Providers/AlumnoProvider';
import AlumnoComponent from './Componentes/AlumnoComponent';
import FormularioAlumno from './Componentes/FormularioAlumno';

export default function App() {

  return(
  <View style={styles.container}>


      

        <AlumnoProvider>
          <AlumnoComponent></AlumnoComponent>
          <FormularioAlumno></FormularioAlumno>
        </AlumnoProvider>

     


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
