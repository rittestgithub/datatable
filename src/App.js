import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import './App.css';
import { ButtonGroup, FormControlLabel, Stack, TextField } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Checkbox from '@mui/material/Checkbox';
import { FavoriteBorder } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';



function App() {
  return (
    <>
      <h1>Text button</h1>
      <Button>Click Me</Button>
      <Button color="secondary">send</Button>
      <Button color="primary" href="https://google.com">link</Button>
      <Button disabled>link</Button>

      <h1>contained button</h1>
    <Button variant="contained">Click me</Button>
      <Button variant="contained" color="secondary">Click me</Button>
      <Button variant="contained" color="secondary" href="https://google.com">Link</Button>
      <Button variant="contained" disabled>disabled</Button>

      <h1>outlined button</h1>
      <Button variant="outlined">Click me</Button>
      <Button variant="outlined" color="secondary">Click me</Button>
      <Button variant="outlined" color="secondary" href="https://google.com">Link</Button>
      <Button variant="outlined" disabled>disabled</Button>

      <h1>size button</h1>
      <Button variant="outlined" size="small">Click me</Button>
      <Button variant="outlined" color="secondary" size="medium">Click me</Button>
      <Button variant="outlined" color="secondary" size="large" href="https://google.com">Link</Button>
      <Button variant="outlined" disabled size="small">disabled</Button>

      <h1>button with Icon</h1>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
      <Button variant="contained" color="warning" endIcon={<DeleteIcon />}>Delete</Button>

      <h1>Icon Button</h1>
      <IconButton color="secondary">
        <DeleteIcon />
      </IconButton>

      <h1>custom Button</h1>
      <Button variant="contained" style={{ backgroundColor: 'green' }}>Custom 1</Button>
      <Button variant="contained" sx={{ backgroundColor: 'pink' }}>Custom 2</Button>

      <h1>Button with click event</h1>
      <Button variant="contained" onClick={() => console.log('Button Clicked')}>Click me</Button>

      <h1>Button group</h1>
      <ButtonGroup variant='text'>
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>

      </ButtonGroup>

      <h1>vertical Button group</h1>
      <ButtonGroup variant='text' orientation='vertical'>
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>

      </ButtonGroup>

      <h1>floating action button</h1>
      <Fab color='secondary'>R</Fab>
      <Fab color="primary"><AddIcon /></Fab>
      <Fab color="secondary"><EditIcon /></Fab>
      <Fab color='extended'><NavigationIcon /></Fab>
      <Fab disabled><FavoriteIcon /></Fab>

      <h1>Checkbox</h1>
      <Checkbox />
      <Checkbox checked />
      <Checkbox checked={true} color='success' />
      <Checkbox defaultChecked indeterminate />
      <Checkbox defaultChecked indeterminate />
      <Checkbox icon={<FavoriteBorder />} />
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon />} />
      <Checkbox onChange={() => console.log("cheked done")} />
      <FormControlLabel control={<Checkbox />} label='India' />
      <FormControlLabel control={<Checkbox />} label='India' labelPlacement='top' />
      <FormControlLabel control={<Checkbox />} label='India' labelPlacement='bottom' />
      <FormControlLabel control={<Checkbox />} label='start' labelPlacement='start' />
      <FormControlLabel control={<Checkbox />} label='bottom' labelPlacement='bottom' />
      <FormControlLabel control={<Checkbox />} label='end' labelPlacement='end' />


      <h1>Radio button</h1>
      <Radio value='male' name='radio-button' />
      <Radio value='female' name='radio-button' />
      <FormControlLabel control={<Radio />} label='female' />
      <FormControlLabel control={<Radio />} label='male' />
      <FormControlLabel control={<Radio />} label='other' />

      <h1>Rating</h1>
      <Rating />
      <Rating value={3} readOnly />
      <Rating defaultValue={2.5} precision={0.5} />

      <h1>slider</h1>
      <Slider />
      <Slider value={5} color='secondary' />
      <Slider defaultvalue={30} color='secondary' />
      <Box sx={{ height: 300 }}>
        <Slider orientation='vertical' defaultvalue={30} color='secondary' />

      </Box>


      <h1>switch </h1>
      <Switch />
      <Switch defaultChecked />
      <Switch disabled defaultChecked />
      <FormControlLabel control={<Switch />} label='Dark' />


      <h1>textfield</h1>
      <TextField label='name' />
      <TextField label='standard' variant='standard'/>
      <TextField label='outlined' variant='outlined'/>
      <TextField label='filled' variant='filled'/>

      <h1>stack</h1>
      <Stack spacing={2} direction='row'>
       <Button variant="contained">Click me</Button>
      <Button variant="contained" color="secondary">Click me</Button>
      <Button variant="contained" color="secondary" href="https://google.com">Link</Button>
      <Button variant="contained" disabled>disabled</Button>
      </Stack>

      <h1>key/props</h1>
      <Box textAlign="left">hello</Box>
      <Box textAlign="center">hello</Box>
      <Box textAlign="right">hello</Box>

  
  </>

  )


}

export default App;
