import Head from "next/head";
import Header from "../components/Header";
import SideBarLeft from "../components/SideBarLeft";
import { getSession } from 'next-auth/react'
import Login from "../components/Login";
import MainContent from "../components/MainContent";
import { CgSidebarRight } from "react-icons/cg";
import SideBarRight from "../components/SideBarRight";

const HomePage = ({session}) => {

    if(!session) {
        return <Login/>
    }

    return (
        <>
            <Head>
                <title>Facebook Clone</title>
                <meta name="description" content="Created by Almeyda"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header component */}
            <Header />
            {/* Main content */}
            <main className="flex bg-gray-100">
                {/* Left component */}
                <SideBarLeft/>
                {/* Center Component */}
                <MainContent/>
                {/* Right Component */}
                <SideBarRight/>
            </main>
        </>
    );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    return {
        props: {session},
    }
}

export default HomePage;