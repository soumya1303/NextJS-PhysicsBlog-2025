const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER}=require("next/constants");

module.exports = (phase)=>{

    if (phase===PHASE_DEVELOPMENT_SERVER){
        return (
            {
                env: {
                mongo_conn_str:"mongodb://127.0.0.1:27017/",
                mongo_schema:"fs25DB"
                }
            }
        )
    }

    return (    
        {
            env: {
                mongo_conn_str:"mongodb+srv://db-user:password0@cluster0.9sys7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
                mongo_schema:"fs25DB"
                }
        }
        )
}

