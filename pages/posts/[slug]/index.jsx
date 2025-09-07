import PostContent from "../../../components/postiemdetails/PostContent";
import matter from "gray-matter";

import Head from "next/head";

const Post=(props)=>{
    
    return (<>
                <Head>
                    <title>{props.mdDoc.title}</title>
                    <meta name="description" content={props.mdDoc.excerpt}></meta>
                </Head>
                <PostContent post={props.mdDoc}/>
            </>)
}

export default Post;

const getStaticPaths=(context)=>{

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

    return({
        paths:mdArr.map((mdDoc)=>{
            return ({
                params:{
                    slug:mdDoc.slug
                }
            })
        }),
        fallback:false
    })


}

const getStaticProps=(context)=>{

    const slug=context.params.slug;

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

    const mdDoc=mdArr.find((md)=>{return md.slug===slug});

    if (!mdDoc){
        return ({
            notFound:true
        })
    }

    console.log("mdDoc", mdDoc);

    return ({
        props:{
            mdDoc
        },
        revalidate:3600
    })

}

export {getStaticProps, getStaticPaths}