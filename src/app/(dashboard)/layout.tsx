import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className = 'h-screen flex'> {/* div for the whole page */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">{/* left hand side sidebar div - creates resonsiveness using tailwind css*/}
          <Link 
            href="/" 
            className="flex items-center justify-center lg:justify-start gap-2"
          > {/* Creating the logo link to root page */}
            <Image src="/logo.png" alt='logo' width={32} height={32}/> {/* Creating the logo image */}
            <span className="hidden lg:block">LMS</span> {/* Creating name to be displaed for larger screens and hides otherwise*/}
          </Link>
          <Menu/> {/* display the menu component on the sidebar */}
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll"> {/*Right side div*/}
          <Navbar/>
          {children}
        </div>
      </div>
    );
  }