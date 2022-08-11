import { useState } from "react";

interface fields {
    DocumentNumber: number;
    Phone: string
}

const initialErrors = {
    DocumentNumber: false,
}

export const useSearchTTH = () => {
   const [errors, setErrors] = useState(initialErrors)

   const resetErrors = () => setErrors(initialErrors);

   const validate = (fields: fields) => {
    let isValid = true;

    resetErrors();

    const newErrors = {...initialErrors}

    // if(!/^[0-9]{14}$/.test(fields.DocumentNumber)){
    //     newErrors.DocumentNumber = true;
    //     isValid = false;
    // }

    setErrors(newErrors)

    return isValid;
   }
    
    const useSubmitSearchTTH = (event:any) =>{
        event.preventDefault();

        const TTH = event.target.DocumentNumber.value;
        const Phone = event.target.Phone.value;

        //if(!validate({DocumentNumber: event.target.DocumentNumber.value})) return;
        
//59000842722895 ТТН для проверки 380979851103

        fetch("https://api.novaposhta.ua/v2.0/json/", {
        method: "POST",
        body: JSON.stringify({
            apiKey: "d691ccc341cb4cede40808d048e32783",
            modelName: "TrackingDocument",
            calledMethod: "getStatusDocuments",
            methodProperties: {
                "Documents": [
                    {
                        DocumentNumber: TTH,
                        Phone: Phone
                    },
                    
                ]
            },
        }),
        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result.data);
            
        });
        
    }
  

    return {
        useSubmitSearchTTH,
        errors,
    }
}