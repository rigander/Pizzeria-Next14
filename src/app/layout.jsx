import '@/app/global.scss'
import Layout from "@/modules/Layout";
function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="app-wrapper">
                    <Layout>{children}</Layout>
                </div>
            </body>
        </html>
    );
}
export default RootLayout;
