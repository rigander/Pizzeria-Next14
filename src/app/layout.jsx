import '../styles/global.css'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <div className='main-wrapper'>
            <Header/>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
    )
}
export default RootLayout
