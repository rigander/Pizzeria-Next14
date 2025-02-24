import './global.css'

function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <div className='main-wrapper'>

            {children}

        </div>
        </body>
        </html>
    )
}
export default RootLayout
