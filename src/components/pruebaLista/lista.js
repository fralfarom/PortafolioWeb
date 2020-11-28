import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

class MediaCard extends React.Component {

  render() {
    return (
      <Fragment>
        <Card style={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              style={{ height: 140 }}
              image="https://lh3.googleusercontent.com/proxy/udUzzQ-pp_Z065PiZ2rPNc3skf4MHEL0uQfr6qq8hnzIcAMXWJ5SaE0ZvSscc8MmK5lH3nsEBJ3uAZ_k5qNLy7N-kEJ4P1xlVbJ2ihKZBcobj-uWcFj3CJLBpBk"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
            </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
          </Button>
            <Button size="small" color="primary">
              Learn More
          </Button>
          </CardActions>
        </Card>
        <br />
      </Fragment>
    );
  }
}

export default MediaCard;
