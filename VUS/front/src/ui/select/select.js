// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { useState } from 'react';
// import ListDivider1 from '../divider1/divider1';

//   export default function SelectLabels() {
//   const [age, setAge] = React.useState('');

//   const [open, setOpen] = useState(false)
//   const [oupen, setOupen] = useState(false)
//   const [openAuth, setOpenAuth] = useState(false)

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, minWidth: 200 }}>
//         <InputLabel id="demo-simple-select-helper-label">Группа</InputLabel>
//         <Select
//           labelId="demo-simple-select-helper-label"
//           id="demo-simple-select-helper"
//           value={age}
//           label="Группа"
//           onChange={handleChange}
//         >
//           <MenuItem value={1} onClick={() => setOpen(true)} on>ТОР-224</MenuItem>
//           <MenuItem value={2} onClick={() => setOupen(true)} on>ЮР-616</MenuItem>
//           <MenuItem value={3} onClick={() => setOpenAuth(true)} on>ЭБ-152</MenuItem>
//         </Select>
//     <ListDivider1 open={open}/>
//       </FormControl>
     

//     </div>
//   );
// }



import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useState } from 'react';
import ListDivider1 from '../divider1/divider1';


export default function NativeSelectDemo() {
  
  const [open, setOpen] = useState(false)
     const [oupen, setOupen] = useState(false)
     const [openAuth, setOpenAuth] = useState(false)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Age
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10} onClick={() => setOpen(true)}>Ten</option>
          <option value={20} onClick={() => setOupen(true)}>Twenty</option>
          <option value={30} onClick={() => setOpenAuth(true)}>Thirty</option>
        </NativeSelect>
      </FormControl>
      <ListDivider1 open={setOpen}/>
    </Box>
  );
}