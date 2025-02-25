import React from "react";
import Header from "@/modules/Layout/Header";
import Footer from "@/modules/Layout/Footer";

function Layout({children}){

    const styles = {
        width: '1380px',
        backgroundColor: '#FFFFFF',
        margin: '0 auto',
    }

    return (
        <div>
            <Header />
            <main style={styles}>{children}</main>
            <Footer />
        </div>
    )
}
export default Layout
