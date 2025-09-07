import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts";
import {postsObject} from "../data/posts";

import matter from "gray-matter";
import fmatter from "front-matter";

const Home=(props)=>{
    /*
    const postArr=Object.values(postsObject);

    const postArrFeatured=postArr.filter((e)=>{
        return e.isFeatured
    })
    */
    return (<>
        <Hero />
        <FeaturedPosts posts={props.mdArr}/>
    </>)
}

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

        const retFArr=retArr.filter((p)=>{return p.isFeatured})
        
        return retFArr;
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

export default Home;

export {getStaticProps}