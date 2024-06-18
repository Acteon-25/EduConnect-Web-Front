import React, { useState, useEffect, useContext } from 'react';
import { PDFDownloadLink, View, Document } from '@react-pdf/renderer';
import { AuthContext } from '../context/AuthContext';
import ComprobantePdf from '../components/ComprobantePdf';


function MiMembresiaPage() {
    const { user } = useContext(AuthContext);
    const [membresia, setMembresia] = useState(null);
    const [pago, setPago] = useState(null);
    const [error, setError] = useState(null);
    const [pdfBlob, setPdfBlob] = useState(null);

    useEffect(() => {
        const fetchMembresiaData = async () => {
            try {
                const response = await obtenerDatosComprobante();
                setMembresia(response.data.membresia);
                setPago(response.data.pago);

                // Obtener el PDF como blob
                const pdfResponse = await obtenerComprobanteMembresia();
                setPdfBlob(new Blob([pdfResponse.data], { type: 'application/pdf' }));
            } catch (error) {
                setError(error.message);
            }
        };

        if (user) {
            fetchMembresiaData();
        }
    }, [user]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!membresia || !pago || !pdfBlob) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>Mi Membresía</h1>
            {/* ... otros detalles de la membresía ... */}

            <PDFDownloadLink document={<ComprobantePdf membresia={membresia} pago={pago} />} fileName="comprobante.pdf">
                {({ loading }) => (loading ? 'Generando comprobante...' : 'Descargar Comprobante')}
            </PDFDownloadLink>

            {/* Mostrar el PDF en la página */}
            <div style={{ height: '800px', width: '100%' }}>
                <Document file={pdfBlob}>
                    <Page pageNumber={1} />
                </Document>
            </div>
        </div>
    );
}

export default MiMembresiaPage;