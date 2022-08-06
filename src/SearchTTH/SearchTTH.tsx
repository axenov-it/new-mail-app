/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from '@mui/material/Button';


export const SearchTTH = () => {
    return (
        <div css={css`
          Button {
            margin-right: 20px;
          }
        `}>
            <Button variant="contained">Проверить ТТH</Button>
            <Button variant="contained">Список отделений</Button>
        </div>
    )
}