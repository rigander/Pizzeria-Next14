import '@/app/global.scss'
import Layout from "@/modules/Layout";
function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    )
}
export default RootLayout
