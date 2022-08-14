/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useListInfo } from "./hooks";

export const ListInfo = () => {
  const { number, status, recipientAddress, warehouseSender } = useListInfo();

  if (!number) return <></>;

  return (
    <div
      css={css`
        max-width: 500px;
        margin: auto;
        border: 1px solid #00000078;
        margin-top: 50px;
        padding: 10px 20px;
        p {
          font-size: 16px;
        }
      `}
    >
      <p>Номер ТТН: {number}</p>
      <p>Статус: {status}</p>
      <p>Адреса відправника: {warehouseSender}</p>
      <p>Адреса отримувача: {recipientAddress}</p>
    </div>
  );
};
