import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/Notification";
const ContactForm=()=>{

    const [isSubmitting, setIsSubmitting]=useState(false);
    const [notificationStatus, setNotificationStatus]=useState({
        title:"",
        msg:"",
        status:""
    });

    useEffect(()=>{
        
        if (notificationStatus.status==="Success" || notificationStatus.status==="Error"){
            const timer=setTimeout(()=>{
                setNotificationStatus({
                    title:"",
                    msg:"",
                    status:""
                })
                return (()=>{
                    clearTimeout(timer)
                })
            },3000)
        }
    
    }, [notificationStatus])


    return (<section className={classes.contact}>
        <h2>How can I help?</h2>
        <form className={classes.form} onSubmit={async (evt)=>{

            evt.preventDefault();

            setIsSubmitting(true);

            setNotificationStatus({
                title:"Notification status",
                msg:"Contacting database",
                status:"Pending"
            });
            
            const formData=new FormData(evt.target);
            const userIput=Object.fromEntries(formData.entries());
            
                try {
                        const resp=await fetch("http://localhost:3000/api/postComment", {
                            method:"POST",
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body:JSON.stringify(userIput)
                        });

                        if (!resp.ok){
                            throw new Error("API call failed. Error in inserting comment");
                        }

                        if (resp.status!==200){
                            throw new Error("API returned error status. Error in inserting comment");
                        }

                        const respData=await resp.json();

                        setIsSubmitting(false);

                        setNotificationStatus({
                        title:"Notification status",
                        msg:"Contact successfully saved",
                        status:"Success"
                        });

                        evt.target.reset();

                } catch (error) {
                    console.log(error.message);
                    setIsSubmitting(false);
                    setNotificationStatus({
                            title:"Notification status",
                            msg:"Some error happened",
                            status:"Error"
                            });
                }            


        }}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="userEmail">Your email</label>
                    <input type="email" id="userEmail" name="userE" required/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="userName">Your name</label>
                    <input type="text" id="userName" name="userN" required/>
                </div>
            </div>
            <div className={classes.control}>
                    <label>Your comment</label>
                    <textarea id="userComment" name="userC" rows="5"/>
            </div>
            <div className={classes.action}>
                <button type="submit">{isSubmitting?`Submitting...`:`Submit`}</button>
            </div>
            {
                notificationStatus.status!==""&&<Notification notificationState={notificationStatus}/>
            }
            
        </form>
    </section>)
}

export default ContactForm