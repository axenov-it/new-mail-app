import { useAppDispatch, setInfo } from "../../../redux";
import { TTHInfoState } from "../../../redux";

interface fields {
  DocumentNumber: number;
  Phone: string;
}

export const useSearchTTH = () => {
  const dispatch = useAppDispatch();

  const onSearchInfoTTH = (ttnInfo: TTHInfoState) => {
    dispatch(setInfo(ttnInfo));
  };

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
        const dataTTH = result.data ? result.data[0] : {};

        dispatch(
          setInfo({
            number: dataTTH.Number,
            recipientAddress: dataTTH.RecipientAddress,
            status: dataTTH.Status,
            warehouseSender: dataTTH.WarehouseSender,
          })
        );
      });
  };

  return {
    useSubmitSearchTTH,
  };
};
