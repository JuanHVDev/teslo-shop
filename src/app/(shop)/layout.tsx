import { Footer, Sidebar, TopMenu } from "@/components";

export default function ShopLayout({
  children
}: {
  children: React.ReactNode;
})
{
  return (
    <div>
      <main className="min-h-screen">
        <Sidebar />
        <TopMenu />
        <div className="px-0 sm:px-10">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}