import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import jsPDF from "jspdf";
import { calligraffitti, openSans } from '../custom_fonts.js'


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
    imageInPDF: {
        width: '50%',
        height: 'calc(50% / 3)',
        objectFit: 'scale-down'
    }
    
  });


export const PDFDoc = (props) => {

    const signature = props.signature;
    const isUpload = props.isUpload;
    
    function getImageData(url)
     {
        var image;
        return new Promise((resolve, reject) => {

            image = document.createElement("img");
            image.setAttribute('crossOrigin', 'anonymous'); //getting images from external domain

            image.onload = function() {
                console.log('onload entered')
                var canvas = document.createElement('canvas');
                canvas.width = this.naturalWidth;
                canvas.height = this.naturalHeight; 

                //next three lines for white background in case png has a transparent background
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = '#fff';  /// set white fill style
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.drawImage(this, 0, 0);
                resolve(canvas.toDataURL('image/jpg'));
            };
            image.src = url;
        });
    }

    const generatePDF = async () => {

        var doc = new jsPDF('p', 'px');
        const title = 'PDF with signature';

        doc.addFileToVFS('OpenSans-Regular.ttf', openSans);
        doc.addFont('OpenSans-Regular.ttf', 'Open-Sans-Regular', 'normal');
        doc.setFont('OpenSans-Regular', 'normal');
        doc.setFontSize(40);

        // Center title across x axis 
        var titleWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        var titleOffset = (doc.internal.pageSize.width - titleWidth) / 2;
        
        doc.text(titleOffset, 100, title);
        doc.setFontSize(25);
        doc.text(35, 325, 'Signature:')
        
        if (isUpload) {
            let sig_data = await getImageData(signature);
            doc.addImage(sig_data, 'JPEG', 150, 250, 225, 75);
        } else {
            doc.addFileToVFS('Calligraffitti-Regular.ttf', calligraffitti);
            doc.addFont('Calligraffitti-Regular.ttf', 'Calligraffitti-Regular', 'normal');
            doc.setFont('Calligraffitti-Regular', 'normal');
            doc.setFontSize(25);
            doc.text(150, 325, signature);
        }
        doc.save('generated.pdf');
    }

    generatePDF();
    
    return (
        <div >
            
        </div>
    );
}