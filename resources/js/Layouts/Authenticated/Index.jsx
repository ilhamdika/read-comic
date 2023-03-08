import Sidebar from '@/Layouts/Authenticated/Sidebar'
import Topbar from '@/Layouts/Authenticated/Topbar'

export default function Authenticated({auth, children}) {
    return (
        <>
        {/* <body> */}
            {/* Start:Sidebar */}
            <Sidebar auth={auth}/>
            {/* End:Sidebar */}

            <section id="content">
                {/* Start:Topbar */}
                <Topbar name={auth.user.name}/>
                <main>{children}</main>
            </section>
            {/* Start:Content */}
                {/* Start:Topbar */}
                {/* End:Topbar */}
            {/* End:Content */}
            
        {/* </body> */}
        </>
    )
}