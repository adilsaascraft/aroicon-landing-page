import Image from "next/image";
import Link from "next/link";
import { Apple, Play } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-10 md:pt-28 md:pb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          AROICON 2025 KOLKATA
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        <span className="text-indigo-600 hover:indigo-700 text-bold">27th - 30th November 2025 | Biswa Bangla Convention Centre</span><br />
        45TH ANNUAL CONFERENCE OF ASSOCIATION OF
RADIATION ONCOLOGISTS OF INDIA
Hosted By AROI West Bengal Chapter
        </p>

        {/* Store Buttons */}
        <div className="flex gap-4 mb-10">
          {/* App Store */}
          <Link
            href="https://apps.apple.com/in/app/aroicon/id6755627728"
            target="_blank"
            className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl shadow hover:scale-105 transition-all duration-200"
          >
            <Image src="/apple.png" alt="appstore" width={40} height={40} />
            <span className="text-left leading-tight">
              <span className="text-xs">Download on the</span>
              <br />
              <span className="text-base font-semibold">App Store</span>
            </span>
          </Link>

          {/* Play Store */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.ashishsingh.AROICON"
            target="_blank"
            className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl shadow hover:scale-105 transition-all duration-200"
          >
            <Image src="/google.png" alt="playstore" width={40} height={40} />
            <span className="text-left leading-tight">
              <span className="text-xs">GET IT ON</span>
              <br />
              <span className="text-base font-semibold">Google Play</span>
            </span>
          </Link>
        </div>

        {/* Banner Image */}
        <div className="w-full">
          <Image
            src="/mobile.png"
            alt="Mobile App Banner"
            width={1400}
            height={800}
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-gray-900 text-white text-center text-sm md:text-base shadow-inner">
        <p className="tracking-wide">
          Powered by{" "}
          <span className="font-semibold text-indigo-400">SaaScraft Studio India Pvt. Ltd.</span>
        </p>
      </footer>
    </div>
  );
}
