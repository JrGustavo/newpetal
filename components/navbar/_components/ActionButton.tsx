"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "@/components/navbar/_components/DropDown";

const ActionButtons = () => {

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    }

    const closeDropdown = () => {
        setDropdownVisible(false);
    }



    return (
        <div
            className="
    flex
    items-center
    md:justify-end
    md:space-x-6
    sm:px-10

    "
        >
            <div className="flex xl:space-x-6">
                <Link
                    href={"/pricing"}
                    className="
            xl:flex
            items-center
            hidden

            "
                >
                    <div className="font-light flex">Recursos</div>
                </Link>

                <Link
                    href={"/sign-in"}
                    className="
            xl:flex
            items-center
            hidden

            "
                >
                    <div className="font-light flex xl:w-12">Tarifas</div>
                </Link>


            </div>

            <div className="flex lg:space-x-4 items-center">

                <Link href={"/free"}>
                    <Button
                        className="
                hidden
                md:flex
                text-md
                font-light
                rounded-[40px]
                border-4
                border-[#0070F3]
                py-6
                bg-[#0070F3]
                hover:scale-110
                transition-all
                duration-300
                shadow-md
                hover:shadow-[#0070F3]

                ">
                        Contactar con ventas
                    </Button>
                </Link>
                <Link href={"/contact"}>
                    <Button
                        className="
              hidden
              text-[#F9F8F5]
              text-md
              font-light
              bg-[#0B051D]
              p-6
               rounded-[40px]
               hover:scale-110
               transition-all
               duration-300
               shadow-md
               md:hidden
               lg:flex
               hover:shadow-[#0070F3]
                ">
                        Iniciar sesión
                    </Button>
                </Link>

            </div>

            {isDropdownVisible && (
                <div
                    onClick={toggleDropdown}
                    className="
             bg-[#565add]
             p-3
             rounded-full
             xl:hidden
             ">
                    <X className="h-6 w-6 text-[#eff0ff] items-center justify-center rounded-full" />
                </div>
            )}
            {!isDropdownVisible && (
                <div
                    onClick={toggleDropdown}
                    className="bg-[#eff0ff] p-3 rounded-full xl:hidden">
                    <AlignJustify className="h-6 w-6 text-[#565add] items-center justify-center rounded-full" />

                </div>
            )}

            {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}


        </div>
    );
};

export default ActionButtons;