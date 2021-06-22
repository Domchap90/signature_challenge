import { React, useState } from 'react';

export const FileUpload = () => {
    const [file, setFile] = useState();
    const [isSelected, setIsSelected] = useState();

    const handleSubmit = () => {
        
    }

	return(

        <div>
            <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>

    )

}