/*
const fs=require("fs");
const path=require("path");
const matter=require("gray-matter");
*/



import fs from "fs";
import path from "path";
import matter from "gray-matter";

const readMarkdown=(fname)=>{

    fs.readFile(path.join(process.cwd(), "markdown", fname), (err, str)=>{

        if (err){
            console.log(err);
            return {}
        }

        [data, content]=matter(str);
        return {...data, content}
    })

}

const readMarkdowns=()=>{

    fs.readdir(path.join(process.cwd(), "markdown"), (err, strArr)=>{
        if (err){
            console.log(err);
            return []
        }
        retArr=strArr.map((f)=>{
            return readMarkdown(f)
        })
        return retArr
    })

}

const readFeaturedMarkdowns=()=>{

    fs.readdir(path.join(process.cwd(), "markdown"), (err, strArr)=>{
        if (err){
            console.log(err);
            return []
        }
        const retArr=strArr.map((f)=>{
            return readMarkdown(f)
        })
        
        const retFArr= retArr.filter((md)=>{return md.isFeatured})
        
        return retFArr
    })

}

export {readMarkdowns, readFeaturedMarkdowns}