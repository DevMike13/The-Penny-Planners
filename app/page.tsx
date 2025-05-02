import Intro from "./components/intro/Intro";
import Footer from "./components/footer/Footer";
import SearchParamsContent from "./components/search/SearchParamsContent";
import React, { Suspense } from "react";

const Spinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
  </div>
);

export default function Home() {

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <Intro />
      <Suspense fallback={<Spinner />}>
        <SearchParamsContent />
      <Footer />
      </Suspense>
    </div>
  );
}
