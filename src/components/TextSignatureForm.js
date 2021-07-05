import { useState } from 'react';
import { PDFDoc } from './PDFDoc';
import { formStyle } from './FileUploadForm.js'
import { Button, Container, Input } from '@material-ui/core';
import { PDFViewer } from '@react-pdf/renderer';


export const TextSignatureForm = () => {
    const [text, setText] = useState('');
    const [signature, setSignature] = useState("");
    const [createPDF, setCreatePDF] = useState(false);
    const [prompt, setPrompt] = useState("Please enter your signature to add.")

    const handleChange = (e) => {

        setText(e.target.value)

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if (text.length) {
            setPrompt("");
            setCreatePDF(true);
            setSignature(text);
        } else
            setPrompt("The signature cannot be empty.");
    }

	return(

        <form onSubmit={handleSubmit} style={formStyle.form}>

            <Container>
                
                <Input type="text" onChange={handleChange} />
                
            </Container>            

            <Container>
                <Button type="submit" variant="contained" >Create PDF</Button>
            </Container>
            
            {createPDF && 
                <PDFDoc signature={signature} isUpload={false} /> 
            }

            {prompt && <p>{prompt}</p>}
        </form>

    );

}