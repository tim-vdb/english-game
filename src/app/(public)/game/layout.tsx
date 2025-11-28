import { SidebarProvider } from "@/components/ui/sidebar";
import { UserProvider } from "@/context/UserContext";
import { AppSidebar } from "@/features/Sidebar/components/AppSidebar";
import { extractRouterConfig } from "uploadthing/server";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { Toaster } from "sonner";
import Footer from "@/widgets/Public/Footer";
import { ThemeProvider } from "@/components/ux/theme-provider";
import { getUser } from "@/lib/auth-session";
import HeaderGame from "@/features/game/header/HeaderGame";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const user = await getUser();

    return (
        <>
            <NextSSRPlugin
                /**
                 * The `extractRouterConfig` will extract **only** the route configs
                 * from the router to prevent additional information from being
                 * leaked to the client. The data passed to the client is the same
                 * as if you were to fetch `/api/uploadthing` directly.
                 */
                routerConfig={extractRouterConfig(ourFileRouter)}
            />
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <UserProvider user={user}>
                    <SidebarProvider defaultOpen={true}>
                        <AppSidebar />
                        <div className="flex flex-1 font-inter antialiased">
                            <div className="flex flex-1 flex-col gap-12">
                                <HeaderGame />
                                <div className="min-h-screen mt-20">
                                    {children}
                                </div>
                                <Footer />
                            </div>
                        </div>
                    </SidebarProvider>
                    <Toaster />
                </UserProvider>
            </ThemeProvider>
        </>
    );
}
