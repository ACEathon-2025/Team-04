import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BackToTop from "@/components/BackToTop";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load below-the-fold components for better performance
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Benefits = lazy(() => import("@/components/Benefits"));
const FutureScope = lazy(() => import("@/components/FutureScope"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionSkeleton = () => (
  <div className="py-20 px-6">
    <div className="container mx-auto">
      <Skeleton className="h-12 w-64 mx-auto mb-8" />
      <Skeleton className="h-6 w-96 mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-64 rounded-2xl" />
        ))}
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Benefits />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FutureScope />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Footer />
        </Suspense>
      </main>
      <BackToTop />
    </div>
  );
};

export default Index;
