import PostItem from "./PostItem";

import classes from "./postgrid.module.css";

const PostGrid=({posts})=>{
    return (<ul className={classes.grid}>{
        posts.map((e, indx)=>{
            return (<PostItem key={indx} post={e}/>)
        })
    }</ul>)
}

export default PostGrid