/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabPanel } from "./views";
import { useNavigate } from "./hooks";
import { ListPost } from "./views";
import { SearchTTH } from "../SearchTTH";
import { ListInfo } from "../ListInfo";

export function NavigateTabs() {
  const { a11yProps, handleChange, value } = useNavigate();

  return (
    <Box
      css={css`
        .MuiTabs-flexContainer {
          width: 100%;
          justify-content: center;
          margin-top: 50px;
        }
        .MuiTabs-indicator {
          background: red;
        }
        .Mui-selected {
          color: black !important;
          font-weight: bold;
        }
        .MuiTab-root {
          font-size: 18px;
        }
      `}
    >
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Відстежити ТТН" {...a11yProps(0)} />
          <Tab label="Перелік відділень" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SearchTTH />
        <ListInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <ListPost />
        </div>
      </TabPanel>
    </Box>
  );
}
