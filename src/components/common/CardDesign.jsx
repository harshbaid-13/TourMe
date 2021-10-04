import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Places from './Places';
function CardDesign({place}) {
    return (
        
        <Card sx={{ maxWidth: 700}} elevation={6} >
      <CardMedia
        component="img"
        height="200"
        
        image={place.photo?place.photo.images.large.url:"https://media-cdn.tripadvisor.com/media/photo-s/12/33/a4/ac/interiors.jpg"}
        alt={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
            <Typography component="legend">
                Prices
            </Typography>
            <Typography gutterBottom variant="subtitle1">
                {place.price_level}
            </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" my={2}>
            <Typography component="legend">
                Ranking
            </Typography>
            <Typography gutterBottom variant="subtitle1">
                {place.ranking}
            </Typography>
        </Box>
        {place.address && 
        (<Typography gutterBottom variant="body2" color="textSecondary">
            <LocationOnIcon />
            {place.address}
        </Typography>)
        }
      </CardContent>
      <CardActions>
        
        <Button size="small" color="primary" onClick={() => window.open(place.website, '__blank')}>
          Website
        </Button>
      </CardActions>
    </Card>
    
    )
}

export default CardDesign