import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="300"
        image={props.image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <Button size="small" color="primary">
        <LinkedInIcon></LinkedInIcon>
      </Button>
      <Button size="small" color="primary">
        <GitHubIcon></GitHubIcon>
      </Button>
    </Card>
  );
}
