import { React, useState, useEffect } from 'react';
import { PDFDoc } from './PDFDoc';
import { Button, Container } from '@material-ui/core';

const formStyle = {

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
    const [isSelected, setIsSelected] = useState(false);
    const [currentSelection, setCurrentSelection] = useState(<p>Nothing selected</p>);

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        setIsSelected(true);
        console.log('file object: ', file)
    }

    useEffect(() => {
        if (file != null)
            setCurrentSelection(<img src={file} style={imageDisplayStyle} alt="Currently selected signature" />);
            
    }, [file])

	return(

        <div style={formStyle.form}>

            <Container maxWidthSm>

                <Button variant="contained" component="label">
                    Upload Signature
                    <input type="file" onChange={handleChange} hidden />
                </Button>
                
            </Container>

            <Container>
                {currentSelection}
            </Container>
            

            <Container>
                <Button variant="contained" onClick={handleSubmit} >Create PDF</Button>
            </Container>
            
            {isSelected? 
                <PDFDoc signature={file} isUpload={true} /> : <p>Please Chose a file to upload</p>
            }
        </div>

    );

}