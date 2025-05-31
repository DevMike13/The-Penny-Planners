import TrumpIntro from "../components/intro/TrumpIntro";
import Footer from "../components/footer/Footer";
import TrumpParamsContent from "../components/trump/TrumpParamsContent";
import React, { Suspense } from "react";

const Spinner = () => (
    <div className="flex justify-center items-center h-screen">
      <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
    </div>
);

const page = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <TrumpIntro />
      <Suspense fallback={<Spinner />}>
        <TrumpParamsContent />
      <Footer />
      </Suspense>
    </div>
  )
}

export default page