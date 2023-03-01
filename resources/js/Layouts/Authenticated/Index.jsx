import Sidebar from '@/Layouts/Authenticated/Sidebar'
import Topbar from '@/Layouts/Authenticated/Topbar'

export default function Authenticated({children}) {
    return (
        <>
        {/* <body> */}
            {/* Start:Sidebar */}
            <Sidebar />
            {/* End:Sidebar */}

            <section id="content">
                {/* Start:Topbar */}
                <Topbar />
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