import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./packagetab.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Gold Package" style={{color:'#9112c7'}} {...a11yProps(0)} />
          <Tab label="Silver Package"style={{color:'#9112c7'}} {...a11yProps(1)} />
          <Tab label="Bronze Package"style={{color:'#9112c7'}} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      ✔️ Exclusive access to the best seats in the house for prime views of the stage and performances.<br></br><br></br>
      ✔️ Curated selection of gourmet delicacies and premium beverages at the dedicated Gold Lounge.<br></br><br></br>
      ✔️ VIP treatment with fast-track entry, dedicated parking, and personalized concierge service.<br></br><br></br>
      ✔️ Special commemorative gift to cherish the memories of the event.<br></br><br></br>
      ✔️ Luxury and opulence throughout the entire experience.<br></br>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div>
  ✔️ Upgraded event experience with reserved seats offering excellent views of the stage.<br /><br />
  ✔️ Access to the Silver Lounge for relaxation and a variety of food and beverage options.<br /><br />
  ✔️ Dedicated customer service assistance for a smooth and enjoyable event experience.<br /><br />
  ✔️ Opportunity to capture the spirit of the 70's with a themed souvenir.<br /><br />
  ✔️ Balance of premium amenities and affordability.<br /><br />
</div>

      </TabPanel>
      <TabPanel value={value} index={2}>
      <div>
  ✔️ Affordable option to attend the Back to 70's event in Sri Lanka.<br /><br />
  ✔️ Allocated seats providing a great view of the performances.<br /><br />
  ✔️ Access to food and beverage stalls offering a range of delicious options.<br /><br />
  ✔️ Opportunity to make memories with friends and loved ones while grooving to the iconic tunes of the 70's.<br /><br />
  ✔️ Unique keepsake as a reminder of participation in this groovy event.<br /><br />
</div>

      </TabPanel>
    </Box>
  );
}
