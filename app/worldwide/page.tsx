import WorldwideIntro from "../components/intro/WorldwideIntro";
import Footer from "../components/footer/Footer";
import WorldwideParamsContent from "../components/worldwide/WorldwideParamsContent";
import React, { Suspense } from "react";

const Spinner = () => (
    <div className="flex justify-center items-center h-screen">
      <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
    </div>
);

const page = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <WorldwideIntro />
      <Suspense fallback={<Spinner />}>
        <WorldwideParamsContent />
      <Footer />
      </Suspense>
    </div>
  )
}

export default page