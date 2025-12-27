import Image from "next/image";
import Link from "next/link";
import FooterMenu from "@/components/Footer/FooterMenu";
import FooterIcons from "@/components/Footer/FooterIcons";

const FooterTop = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-20">
            <div className="flex items-center mb-6 md:mb-0">
                <Link href="/" aria-label="Przejdź do strony głównej">
                    <Image
                        src="/footer_logo.svg"
                        alt="Logo"
                        width={113}
                        height={32}
                        priority
                    />
                </Link>
            </div>
            <FooterMenu />
            <FooterIcons />
        </div>
    );
};

export default FooterTop;