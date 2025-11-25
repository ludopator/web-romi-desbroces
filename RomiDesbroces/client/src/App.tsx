import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import AvisoLegal from "@/pages/AvisoLegal";
import Privacidad from "@/pages/Privacidad";
import NotFound from "@/pages/not-found";

function AppRoutes() {
  return (
    <WouterRouter base="/web-romi-desbroces">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/aviso-legal" component={AvisoLegal} />
        <Route path="/privacidad" component={Privacidad} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRoutes />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

