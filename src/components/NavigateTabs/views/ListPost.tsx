import { useEffect, useState } from "react";

export const ListPost = (): any => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetch("https://api.novaposhta.ua/v2.0/json/", {
      method: "POST",
      body: JSON.stringify({
        apiKey: "d691ccc341cb4cede40808d048e32783",
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
          Page: "1",
          Limit: "50",
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setAddresses(result.data);
      });
  }, []);

  return addresses.map((address: any) => (
    <p key={address.SiteKey}>{address.Description}</p>
  ));
};
