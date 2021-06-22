import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const wrapperStyle = {
    padding: '50px 25%'
}

const styles = StyleSheet.create({
    page: {
        width: '50vw',
        height: 'calc(50vw / 0.706)',
        display: 'grid',
        gridRowGap: 50,
        backgroundColor: '#E4E4E4',
        border: '1px solid black'
    },
    center: {
        display: 'grid',
        alignContent: 'center'
      
    },
    image: {
        width: '50%',
        height: 'calc(50% / 3)',
        objectFit: 'scale-down'
    }
  });

export const PDFDoc = (props) => {
    const signature = props.signature;
    const isUpload = props.isUpload
    console.log(`signature is ${signature}`)
    return (
        <div id="pdfWrapper" style={wrapperStyle}>
            <Document>
                <Page size="A4" style={styles.page} >
                
                    <Text style={styles.center} >PDF with signature</Text>
                    <View>
                        Signature: {isUpload?
                            <img src={signature} style={styles.image} alt="Uploaded signature" />:
                            signature
                            }
                    </View>
                </Page>
            </Document>
        </div>
    );
}