import classes from "./hero.module.css";
import Image from "next/image";

const Hero=()=>{
    return(<section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/img_self_202508_andorra.jpg" alt="author-img" height={300} width={300} ></Image>
        </div>
        <h1>I am Drifter</h1>
        <p>I blog about general physics</p>
    </section>)
}

export default Hero;