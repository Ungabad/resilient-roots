import React from "react";
import DonateComponent from "../components/Donate";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AppProvider } from "@/contexts/AppContext";

export default function DonatePage() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <DonateComponent />
        <Footer />
      </div>
    </AppProvider>
  );
}