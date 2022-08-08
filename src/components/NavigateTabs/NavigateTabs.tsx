import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabPanel } from './views'
import { useNavigate } from './hooks'



export function NavigateTabs() {
    const { a11yProps, handleChange, value } = useNavigate();

    return (
        <Box sx={{ width: '100%' }}>
            <Box>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Поиск ТТН" {...a11yProps(0)} />
                    <Tab label="Список отделений" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Поиск ТТН
            </TabPanel>
            <TabPanel value={value} index={1}>
                Список отделений
            </TabPanel>
        </Box>
    );
}
