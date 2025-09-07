import Hero from "../../components/Hero";
import AllPosts from "../../components/AllPosts";
import matter from "gray-matter";

import {postsObject} from "../../data/posts";

const Posts=(props)=>{
    
    //const postArr=Object.values(postsObject);

    return (<>
        <Hero />
        <AllPosts posts={props.mdArr}/>
    </>)
}

export default Posts;

const getStaticProps=(context)=>{

    const fs = require("fs");
    const path = require ("path");
    
    const readMarkdowns=()=>{

        const strArr=fs.readdirSync(path.join(process.cwd(), "markdown"), "utf-8");

        const retArr=strArr.map((f)=>{
            
            const contentStr=fs.readFileSync(path.join(process.cwd(), "markdown", f), "utf-8");
            
            const {data, content}= matter(contentStr);
            
            const post={...data, content};
            
            return post
        });

        return retArr;
    }

    const mdArr=readMarkdowns();

    if (!mdArr || mdArr.length===0){
        return ({
            notFound:true
        })
    }

    console.log(mdArr);

    return({
        props:{
            mdArr
        }
    })

}

export {getStaticProps}