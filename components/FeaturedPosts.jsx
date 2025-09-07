import classes from "./featuredposts.module.css";

import PostGrid from "./PostGrid";

const FeaturedPosts=({posts})=>{
    return(<section className={classes.latest}>
        <h2>Featured posts</h2>
        <PostGrid posts={posts}/>
    </section>)
}

export default FeaturedPosts;