import React, { ReactNode } from "react";
import Header from "@/Components/Header"; // Pastikan Header ada di folder Components

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
