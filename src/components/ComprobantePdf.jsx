import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4',
      padding: 30,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 18,
      marginBottom: 10,
    },
    text: {
      marginBottom: 5,
    },
  });
  
function ComprobantePdf({ membresia, pago }) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Comprobante de Pago</Text>
            
            <Text style={styles.subtitle}>Datos del Cliente:</Text>
            <Text style={styles.text}>Nombre: {membresia.usuario.nombre}</Text>
            <Text style={styles.text}>Correo electrónico: {membresia.usuario.correoElectronico}</Text>
  
            <Text style={styles.subtitle}>Detalles de la Membresía:</Text>
            <Text style={styles.text}>Tipo de membresía: {membresia.tipoMembresia}</Text>
            <Text style={styles.text}>Fecha de inicio: {membresia.fechaInicio}</Text>
            <Text style={styles.text}>Fecha de fin: {membresia.fechaFin}</Text>
  
            <Text style={styles.subtitle}>Detalles del Pago:</Text>
            <Text style={styles.text}>ID de pago: {pago.idPago}</Text>
            <Text style={styles.text}>Monto: {pago.monto}</Text>
            <Text style={styles.text}>Fecha: {pago.fecha}</Text>
          </View>
        </Page>
      </Document>
    );
  }
  
  export default ComprobantePdf;