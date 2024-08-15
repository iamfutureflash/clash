import Image from "next/image";
const HeroSection = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div>
                <Image src="/banner.svg" width={600} height={600} alt="banner_img" />
            </div>
        </div>
    );
}

export default HeroSection;