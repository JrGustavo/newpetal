"use client"

import React, {useState} from "react";

import {
    AlignJustify,
    BarChart,
    Building2,
    Camera,
    Code, Code2Icon,
    DollarSign,
    Download,
    GraduationCap,
    Headphones,
    Home, Info,
    LibrarySquare,
    LifeBuoy, Newspaper,
    PaintBucket,
    Settings,
    Smile,
    Sparkles, UserCircle2,
    UserPlus


} from "lucide-react"


interface MenuItem{
    title: string
    menu: string
    options: {label:string, emoji:React.ReactElement, href: string }[]
}



const items : MenuItem[] = [
    {
        title: "Use Cases",
        menu: "use-cases",
        options: [
            {
                label: "Team Alignment",
                emoji: <UserPlus className="text-orange-500" />,
                href: "/team-alignment",
            },
            {
                label: "Sales",
                emoji: <DollarSign className="text-green-500" />,
                href: "/sales",
            },
            {
                label: "Engineering",
                emoji: <Code className="text-blue-500" />,
                href: "/engineering",
            },
            {
                label: "Design",
                emoji: <PaintBucket className="text-indigo-500" />,
                href: "/design",
            },
            {
                label: "Marketing",
                emoji: <BarChart className="text-rose-500" />,
                href: "/marketing",
            },
            {
                label: "Customer Support",
                emoji: <Headphones className="text-orange-500" />,
                href: "/customer-support",
            },
            {
                label: "Product Management",
                emoji: <Settings className="text-gray-500" />,
                href: "/product-management",
            },
            {
                label: "Education",
                emoji: <GraduationCap className="text-green-500" />,
                href: "/education",
            },
        ],
    },

    {
        title: "For Business",
        menu: "for-business",
        options: [
            {
                label: "Bird AI",
                emoji: <Sparkles className="text-indigo-500" />,
                href: "/bird-ai",
            },
            {
                label: "Enterprise",
                emoji: <Building2 className="text-green-500" />,
                href: "/enterprise",
            },
            {
                label: "Bird HQ",
                emoji: <Home className="text-blue-500" />,
                href: "/",
            },
            {
                label: "Customers",
                emoji: <Smile className="text-indigo-500" />,
                href: "/",
            },
            {
                label: "Security",
                emoji: <Code className="text-rose-500" />,
                href: "/",
            },
            {
                label: "Video Hosting",
                emoji: <Camera className="text-orange-500" />,
                href: "/",
            },
            {
                label: "Video Library",
                emoji: <LibrarySquare className="text-amber-500" />,
                href: "/",
            },
        ],
    },
    {
        title: "Resources",
        menu: "resources",
        options: [
            {
                label: "Blog",
                emoji: <AlignJustify className="text-orange-500" />,
                href: "/",
            },
            {
                label: "Help & Support",
                emoji: <LifeBuoy className="text-green-500" />,
                href: "/",
            },
            {
                label: "Download",
                emoji: <Download className="text-blue-500" />,
                href: "/",
            },
            {
                label: "BirdSDK",
                emoji: <Code2Icon className="text-rose-500" />,
                href: "/",
            },
            {
                label: "Screen Recorder",
                emoji: <Headphones className="text-orange-500" />,
                href: "/screen-recorder",
            },
            {
                label: "Community",
                emoji: <GraduationCap className="text-green-500" />,
                href: "/",
            },
        ],
    },
    {
        title: "Company",
        menu: "company",
        options: [
            {
                label: "About Us",
                emoji: <Info className="text-red-500" />,
                href: "/about-us",
            },
            {
                label: "Careers",
                emoji: <UserCircle2 className="text-green-500" />,
                href: "/careers",
            },
            {
                label: "Newsroom",
                emoji: <Newspaper className="text-blue-500" />,
                href: "/newsroom",
            },
        ],
    },

];


export const NavigationMenuBar = () => {

    const [activeMenu, setActiveMenu] = useState<string  | null>(null);


    return (
        <>
        Hola
        </>
    );
};