import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function LoginLayout({
  children
}: {
  children: React.ReactNode;
})
{
  const sessions = await auth()
  if (sessions?.user)
  {
    redirect('/')
  }
  return (
    <div>
      <main className="flex justify-center">
        <div className="w-full sm:w-[350px] px-10">
          {children}
        </div>
      </main>
    </div>
  );
}