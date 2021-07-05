import { React, useState, useEffect } from 'react';
import { PDFDoc } from './PDFDoc';
import { Button, Container } from '@material-ui/core';
import { PDFViewer } from '@react-pdf/renderer';

export const formStyle = {

    form : {
        display: 'grid',
        gridRowGap: 20,
        padding: '20px 0px'
    },
    input: {
        alignContent: 'center'
    }

}

const imageDisplayStyle = {
    
    width: '50vw',
    height: 'calc(50vw / 3)',
    objectFit: 'scale-down'

}

export const FileUploadForm = () => {
    const [file, setFile] = useState();
    const [createPDF, setCreatePDF] = useState(false);
    const [currentSelection, setCurrentSelection] = useState('');
    const [uploadErr, setUploadErr]  = useState('');

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if (currentSelection) {
            setUploadErr('');
            setCreatePDF(true);
        } else {
            console.log('currentSelection = ', currentSelection)
            setUploadErr('Please chose a file to upload');
        }
        
    }

    useEffect(() => {
        if (file != null)
            setCurrentSelection(<img src={file} style={imageDisplayStyle} alt="Currently selected signature" />);
        
        // createPDF back to false to ensure pdfs aren't created every time file changes 
        setCreatePDF(false);  

    }, [file])

	return(

        <form onSubmit={handleSubmit} style={formStyle.form}>

            <Container>

                <Button variant="contained" component="label" >
                    Upload Signature
                    <input type="file" onChange={handleChange} hidden />
                </Button>
                
            </Container>

            <Container>
                {currentSelection? currentSelection: <p>Nothing selected</p>}
            </Container>
            

            <Container>
                <Button type="submit" variant="contained" >Create PDF</Button>
            </Container>
            
            {createPDF && 
                <PDFDoc signature={file} isUpload={true} /> } 

            {uploadErr &&
                <p id="upload_error" style={{color: 'red'}}>{uploadErr}</p>}

        </form>

    );

}