import Image from "next/image";
import classes from "./singlePostHeader.module.css";

const SinglePostHeader=({post})=>{

    //console.log(post);

    return (<header className={classes.header}>
        <h1>{post.title}</h1>
        <Image src={`/images/posts-images/${post.image}`} alt="image" width={300} height={300}/>
    </header>)
}

export default SinglePostHeader;
