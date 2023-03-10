import SideBar from "../components/SideBar"
import {SessionProvider} from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import "../styles/globals.css";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";
import ClientProvider from "../components/ClientProvider";
// Server Components can be a async functions
//Client component can be a async function
//Session provider helps
//Once I logged in there will be a ession 
//And once I logged out there will be no session

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session=await getServerSession(authOptions);
  //console.log(session);
  //^ After adding all when clicked block go to google console.com
  //search project add local host
  //add error auth from the page
  
  return (
    <html>
      <head />
     <body>
        <SessionProvider session={session}>
          {!session ? (
           <Login/>
          ): (
            
        <div className="flex">
        {/* Sidebar */}
        {/* Adding mobile view responsiveness and screen view */}
        <div className="bg-[#202123] max-width-xs h-screen overflow-y-auto md:min-w-[20rem]">
          <SideBar/>
          </div>
        
          {/* Client Provider -Notifications*/}
          <ClientProvider/>

        <div className="bg-[#343541] flex-1">{children}</div>
          </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
