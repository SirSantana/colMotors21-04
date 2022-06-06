import { Grid } from "@material-ui/core";
import PostCo from "./Post";
import PostCreador from "./PostCreados";
import useStyles from "./styles";

export default function PrevPosts({ posts }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.divPrevPosts} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {posts?.map((Post) => (
          <Grid key={Post._id} item xs={12} sm={12} lg={4} md={6}>
            <PostCreador OnePost={Post} />
          </Grid>
        ))}
      </div>
    </>
  );
}
