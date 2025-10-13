import React, { ReactNode } from "react";
import Header from "./Header"; // Pastikan Header ada di folder Components
import { Head } from "@inertiajs/react";
import { title } from "process";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
