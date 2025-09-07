import Link from "next/link";
import Image from "next/image";
import classes from "./postitem.module.css";

const PostItem=({post})=>{

    const formattedDate=new Date(post.date).toLocaleDateString("en-GB", {
        day:"2-digit",
        month:"long",
        year:"numeric"
    })

    return (<li className={classes.post}>
        <Link href={{
            pathname:`/posts/${post.slug}`
        }}>
            <div className={classes.image}>
                <Image src={`/images/posts-images/${post.image}`} alt="" width={300} height={200} layout="responsive"/>
            </div>
            <div className={classes.content}>
                <h3>{post.title}</h3>
                <time>{formattedDate}</time>
                <p>{post.excerpt}</p>
            </div>
        </Link>
    </li>)
}

export default PostItem