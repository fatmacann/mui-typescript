import { Button, Stack, ButtonGroup } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export const LessonButton = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Button variant='text'> text</Button>
        <Button variant='outlined'>outlined</Button>
        <Button variant='contained'>contained</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant='text' color='primary'> text</Button>
        <Button variant='text' color='secondary'> text</Button>
        <Button variant='text' color='success'> text</Button>
        <Button variant='text' color='error'> text</Button>
        <Button variant='text' color='warning'> text</Button>
      </Stack>
      <Stack direction="row" display="block">
        <Button variant='outlined' size='small'>outlined</Button>
        <Button variant='outlined' size='medium'>outlined</Button>
        <Button variant='outlined' size='large'>outlined</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <AcUnitIcon color='secondary'/>
        <Button variant='contained' color='success' startIcon={<AcUnitIcon/>} > ekle </Button>
        <Button variant='contained' color='success' endIcon={<AcUnitIcon/>} onClick={()=>alert('tıklandı!')}> ekle </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <ButtonGroup>
          <Button variant='outlined'>tıkla</Button>
          <Button variant='outlined'>tıkla</Button>
          <Button variant='outlined'>tıkla</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row" spacing={2}>
        <ButtonGroup orientation='vertical' color='error' size='small'>
          <Button variant='outlined'>tıkla</Button>
          <Button variant='outlined'>tıkla</Button>
          <Button variant='outlined'>tıkla</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  )
}
