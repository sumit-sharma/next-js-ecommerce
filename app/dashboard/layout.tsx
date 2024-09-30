import DashboardNavbar from "@/components/dashbaord/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (

          <div className="font-sans text-base font-normal text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900">
            <div className="wrapper overflow-x-hidden">
            {/* sidebar */}
                <aside className="fixed w-64 bg-amber-50 md:ms-0 h-screen">

                </aside>
                <div className="md:ms-64 ms-0 flex flex-col min-h-screen me-0">
                  <DashboardNavbar />
                  <main className="mx-auto py-2 sm:px-2">
                    <div className="mx-auto py-2 sm:px-2">
                    {children}  

                    </div>

                  </main>

                </div>
            </div>
          </div>
  
    )
  }