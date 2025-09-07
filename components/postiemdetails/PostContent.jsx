import classes from "./postContent.module.css";
import SinglePostHeader from "./SinglePostHeader";
import ReactMarkdown from "react-markdown";

import Image from "next/image";

const PostContent=({post})=>{

    const customR={
        image:(image)=>{
            return (<Image src={`/images/posts-images/${image.src}`} alt={image.alt} width={600} height={300}/>)
        }
    }

    return (<article className={classes.content}>
        <SinglePostHeader post={post}/>
        <ReactMarkdown renderer={customR}>{post.content}</ReactMarkdown>
        
    </article>)
}

export default PostContent;