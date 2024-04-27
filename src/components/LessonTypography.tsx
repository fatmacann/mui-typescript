import { Typography } from '@mui/material';

export const LessonTypography = () => {
  return (
    <div>
    <Typography variant='body1'> Body1 Lorem ipsum dolor sit amet, consectetur
    </Typography>
    <Typography variant='body2'> body2 Lorem ipsum dolor sit amet, consectetur
    </Typography>
    <Typography variant='h1'> h1 görünüm</Typography>
    <Typography variant='h2'> h2 görünüm</Typography>
    <Typography variant='h3'> h3 görünüm</Typography>
    <Typography variant='h4'> h4 görünüm</Typography>
    <Typography variant='h5'> h5 görünüm</Typography>
    <Typography variant='h6'> h6 görünüm</Typography>
    <Typography variant='h1' component='h4'> h1 görünüm</Typography>
    <Typography variant='h1' component='h4' align='left'> h1 görünüm</Typography>
    <Typography variant='h1' component='h4' align='right'> h1 görünüm</Typography>
    <Typography variant='subtitle1'> alt baslık1</Typography>    
    <Typography variant='subtitle2'> alt baslık2</Typography>   
    </div>

    
  )
}
//variantla css özelliklerinin kazanmasını bekleriz