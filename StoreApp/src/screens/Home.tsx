import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, ScrollView, View, Platform } from 'react-native';
import { ManifestForm } from '../types/ManifestForm';
import { useMediaQuery } from 'react-responsive';
import { Button } from 'react-native-paper';

const HomeScreen: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // Detecta si es una pantalla grande

  const [formData, setFormData] = useState<ManifestForm>({
    fechaRecoleccion: '',
    numeroManifiesto: 0,
    razonSocial: '',
    municipio: '',
    estado: '',
    transporte: '',
    operador: '',
    fechaEntrega: '',
    numeroPlacas: 0,
    recat: 0,
    fechaEntregaSucursal: '',
    observaciones: '',
  });

  // Función para manejar cambios en los inputs
  const handleChange = (name: keyof ManifestForm, value: string | number) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={isDesktop ? styles.row : {}}> 
          <View style={styles.column}>
            <Text style={styles.label}>Fecha de Recolección</Text>
            <TextInput 
              style={styles.input} 
              value={formData.fechaRecoleccion}
              onChangeText={(value) => handleChange('fechaRecoleccion', value)}
              placeholder="Fecha de Recolección"
            />
          </View>

          <View style={styles.column}>
            <Text style={styles.label}>Número de Manifiesto</Text>
            <TextInput 
              style={styles.input} 
              value={String(formData.numeroManifiesto)} 
              onChangeText={(value) => handleChange('numeroManifiesto', Number(value))}
              placeholder="Número de Manifiesto"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.column}>
            <Text style={styles.label}>Razón Social</Text>
            <TextInput 
              style={styles.input} 
              value={formData.razonSocial}
              onChangeText={(value) => handleChange('razonSocial', value)}
              placeholder="Razón Social"
            />
          </View>
      

      
          <View style={styles.column}>
            <Text style={styles.label}>Municipio</Text>
            <TextInput 
              style={styles.input} 
              value={formData.municipio}
              onChangeText={(value) => handleChange('municipio', value)}
              placeholder="Municipio"
            />
          </View>

          <View style={styles.column}>
            <Text style={styles.label}>Estado</Text>
            <TextInput 
              style={styles.input} 
              value={formData.estado}
              onChangeText={(value) => handleChange('estado', value)}
              placeholder="Estado"
            />
          </View>

          <View style={styles.column}>
            <Text style={styles.label}>Transporte</Text>
            <TextInput 
              style={styles.input} 
              value={formData.transporte}
              onChangeText={(value) => handleChange('transporte', value)}
              placeholder="Transporte"
            />
          </View>
        </View>

        <View style={isDesktop ? styles.buttonWrapper : {}}>
          <Button 
            style={styles.buttonContainer}
            icon="camera" 
            mode="text"
            buttonColor='#04AA6D'
            textColor='white'
            onPress={handleSubmit}>
                  Guardar
          </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  column: {
    flexBasis: '30%',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonContainer:{
    marginTop: 16,
    borderRadius: 8,
  },
  buttonWrapper:{
      width: '100%',
      alignItems: 'center',
  }
});

export default HomeScreen;
