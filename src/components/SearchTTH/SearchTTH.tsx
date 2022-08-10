/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSearchTTH } from "./hooks";

export const SearchTTH = () => {
  const { useSubmitSearchTTH, errors } = useSearchTTH();

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
          background-color: red;
          font-size: 16px;
          font-weight: bold;
          border-radius: 10px;
        }
      `}
    >
      <TextField
        error={errors.DocumentNumber}
        id="outlined-basic"
        label="Введіть ТТН"
        variant="outlined"
      />
      <Button type="submit" variant="contained" size="large">
        Знайти
      </Button>
    </form>
  );
};
