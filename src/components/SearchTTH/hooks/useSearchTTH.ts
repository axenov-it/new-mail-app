import { useState } from "react";

interface fields {
  DocumentNumber: number;
  Phone: string;
}

export const useSearchTTH = () => {
  const useSubmitSearchTTH = (event: any) => {
    event.preventDefault();

    const TTH = event.target.documentNumber.value;
    const Phone = event.target.phone.value;

    fetch("https://api.novaposhta.ua/v2.0/json/", {
      method: "POST",
      body: JSON.stringify({
        apiKey: "d691ccc341cb4cede40808d048e32783",
        modelName: "TrackingDocument",
        calledMethod: "getStatusDocuments",
        methodProperties: {
          Documents: [
            {
              DocumentNumber: TTH,
              Phone: Phone,
            },
          ],
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
      });
  };

  return {
    useSubmitSearchTTH,
  };
};
