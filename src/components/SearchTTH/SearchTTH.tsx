/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSearchTTH } from "./hooks";

export const SearchTTH = () => {
  const { useSubmitSearchTTH } = useSearchTTH();

  return (
    <form
      onSubmit={useSubmitSearchTTH}
      css={css`
        display: flex;
        justify-content: space-around;
        .MuiInputBase-root {
          min-width: 250px;
        }
        .MuiButton-root {
          min-width: 200px;
          height: 50px;
          margin-top: 40px;
          background-color: red;
          font-size: 16px;
          font-weight: bold;
          border-radius: 10px;
        }
        @media (max-width: 500px) {
          display: flex;
          flex-direction: column;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 20px;
        `}
      >
        <TextField
          id="outlined-basic"
          label="Введіть ТТН"
          placeholder="20400048799000"
          variant="outlined"
          name="documentNumber"
        />

        <TextField
          id="outlined-basic"
          label="Номер телефону"
          placeholder="380600000000"
          variant="outlined"
          name="phone"
        />
      </div>

      <Button type="submit" variant="contained" size="large">
        Знайти
      </Button>
    </form>
  );
};
