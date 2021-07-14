import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
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
            <Paper className={classes.paper}>{d.id}</Paper>
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
