import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";

function Router() {
  return (
    <div className="min-h-screen flex flex-col page-container bg-dots">
      <Navbar />
      <main className="flex-grow relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-24 h-24 bg-amber-100/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-40 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
