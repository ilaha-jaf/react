import {useEffect} from "react"
import {useState} from "react"
import Layout from "../../components/Layout/index"

const Loading=()=> <div>loading...</div>

const Dashboard=()=>{

   const [isLoading, setIsloading]=useState(false)
   useEffect(()=>{
         console.log("my dashboard mounted");
   }, [])

   useEffect(()=>{

      setIsloading(true)

      setTimeout(() => {
         setIsloading(false)
      }, 3000);
   }, [setIsloading])

   useEffect(()=>{
         console.log("component updated");
  
   }, [isLoading])

   return (
      <Layout>
<h1>Welcome to the Dashboard</h1>
<div className="card">
<div className="card-header">
   User information
</div>
<div className="card-body">
{isLoading ? <Loading /> : (
                        <p>This is some text within a card body.</p>
                    )}
</div>
   </div>
   </Layout>
   )
}
export default Dashboard