import {ReactNode} from "react"
import Header from "./Header/index"
import Footer from "./Footer/index"
interface LayoutI{
children: ReactNode
}
const Layout=({children}:LayoutI)=>{
    return <div className="position-relative">
                <Header />
                <main className="min-vh-100">
                {children}
                </main>
                <Footer/>
        </div>
 }
 export default Layout