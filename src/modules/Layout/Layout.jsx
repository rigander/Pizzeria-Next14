import React from "react";
import Header from "@/modules/Layout/Header";
import Footer from "@/modules/Layout/Footer";

function Layout({children}){
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
export default Layout
