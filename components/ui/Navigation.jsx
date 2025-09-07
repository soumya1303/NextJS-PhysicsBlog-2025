import Link from "next/link";
import Logo from "./Logo";
import classes from "./navigation.module.css";

const Navigation=()=>{

    return (
        <header className={classes.header}>
            <Link href="/"><Logo/></Link>
            <nav>
                <ul>
                    <li><Link href={{
                        pathname:"/"
                    }}>Home</Link></li>
                    <li><Link href={{
                        pathname:"/posts"
                    }}>All posts</Link></li>
                    <li><Link href={{
                        pathname:"/contact"
                    }}>Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    )

}

export default Navigation;