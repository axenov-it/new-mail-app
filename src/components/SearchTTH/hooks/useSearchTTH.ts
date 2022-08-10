import { useState } from "react";

interface fields {
    DocumentNumber: string;
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

    if(!/^[0-9]{14}$/.test(fields.DocumentNumber)){
        newErrors.DocumentNumber = true;
        isValid = false;
    }

    setErrors(newErrors)

    return isValid;
   }
    
    const useSubmitSearchTTH = (event:any) =>{
        event.preventDefault();

        //if(validate({DocumentNumber: event.target.DocumentNumber.value})) return;
        
        fetch("https://api.novaposhta.ua/v2.0/json/", {
        method: "POST",
        body: JSON.stringify({
            apiKey: "d691ccc341cb4cede40808d048e32783",
            modelName: "TrackingDocument",
            calledMethod: "getStatusDocuments",
            methodProperties: {
                "Documents" : [
                    {
                    "DocumentNumber":"20400048799000",
                    "Phone":"380600000000"
                    }
                    ,
                    {
                    "DocumentNumber":"20400048799001",
                    "Phone":"380600000000"
                    }
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