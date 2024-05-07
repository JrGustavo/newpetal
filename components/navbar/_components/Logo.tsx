import Image from "next/image";
import Link from "next/link";


export const Logo = () => {
    return (
        <div>
        <Link href={"/"}>
            <Image
            src="/images/logos/LogoBlack.png"
            alt="Logo"
            width={150}
            height={150}
            className="w-40"
            />
        </Link>
        </div>
    );
};

