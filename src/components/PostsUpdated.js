import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardStyle: {
    maxWidth: 345,
  },
}));

const PostsUpdated = ({ posts, loading }) => {
  const classes = useStyles();

  // jsonを3区切りにする関数
  const devideJSON = (data) => {
    let newData = [];
    let innerList = [];

    for (let i = 0; i < data.length + 1; i++) {
      if (i % 3 === 0) {
        innerList = [];
      }
      innerList.push(data[i]);
      if (i % 3 === 2) {
        newData.push(innerList);
      }
    }
    return newData;
  };

  function FormRow(props) {
    const { data } = props;
    return (
      <React.Fragment>
        {data.map((d) => (
          <Grid item xs={4}>
            <Card className={classes.cardStyle}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="/static/images/cards/demo1.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
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
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  posts = devideJSON(posts);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {posts.map((post) => (
          <Grid container item xs={12} spacing={3}>
            <FormRow data={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PostsUpdated;
