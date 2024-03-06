import VideoSplash from "@/components/VideoSplash";
import React from "react";
import Image from "next/image";
const videosrc =
  "https://ygrygectjhacikpwtrna.supabase.co/storage/v1/object/public/Pictures/Lib/website-reel.mp4?t=2024-02-20T17%3A13%3A26.196Z";
const logosrc =
  "https://ygrygectjhacikpwtrna.supabase.co/storage/v1/object/public/Pictures/Lib/HeaderLogo.png?t=2024-02-20T16%3A15%3A12.685Z";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="max-w-screen-2xl">
        <VideoSplash videoSrc={videosrc} />
      </section>
      <section className="flex max-w-full justify-center py-12">
        <div className="flex-row">
          <Image src={logosrc} alt="logo" width={600} height={400} />
          <p className="absolute left-1/2 mt-auto text-sm font-thin italic text-yellow-200">
            WE ENVISION, CREATE, AND EXECUTE
          </p>
        </div>
      </section>
      <section>
        <div className="text-center font-mono text-7xl ">Concepts</div>
      </section>
    </div>
  );
};

export default HomePage;
