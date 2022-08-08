/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const Page = ({ children }: Props) => (
    <div css={css`
        max-width: 800px;
        margin: auto;
    `}>{children}</div>
)

