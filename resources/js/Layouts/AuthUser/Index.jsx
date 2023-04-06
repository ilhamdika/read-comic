import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

export default function UserAuthenticated ({children}){
    return (
        <>

        <NavigationBar/>
        <main>
            <article>
                {children}
            </article>
        </main>

        <Footer/>
        </>
    )
}