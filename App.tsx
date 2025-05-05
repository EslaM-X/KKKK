import React, { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import { initializePiSDK } from '@/utils/pi-sdk';
import { AdminLogin } from '@/components/admin/AdminLogin';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { AdminRoute } from '@/components/admin/AdminRoute';

import AppProvider from "./contexts/AppProvider";
import { MobileNavigation, MobileNavbar } from "./frontend"; 
import { useIsMobile } from "./frontend/hooks/use-mobile";
import { useLanguage } from "./contexts/LanguageContext";
import LoadingSpinner from "./components/ui/loading-spinner";
import ErrorFallback from "./components/ui/error-fallback";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Restaurants = lazy(() => import("./pages/Restaurants"));
const RestaurantDetails = lazy(() => import("./pages/RestaurantDetails"));
const Wallet = lazy(() => import("./pages/Wallet"));
const PiWallet = lazy(() => import("./pages/PiWallet"));
const Rewards = lazy(() => import("./pages/Rewards"));
const Orders = lazy(() => import("./pages/Orders"));
const Cart = lazy(() => import("./pages/Cart"));
const HomeFood = lazy(() => import("./pages/HomeFood"));
const FoodProviderDetails = lazy(() => import("./pages/FoodProviderDetails"));
const AddFoodListing = lazy(() => import("./pages/AddFoodListing"));
const PiPaymentDemo = lazy(() => import("./pages/PiPaymentDemo"));
const RestaurantDashboard = lazy(() => import("./pages/RestaurantDashboard"));
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const AdminUsers = lazy(() => import("./pages/admin/AdminUsers"));
const AdminRestaurants = lazy(() => import("./pages/admin/AdminRestaurants"));
const AdminOrders = lazy(() => import("./pages/admin/AdminOrders"));
const AdminPayments = lazy(() => import("./pages/admin/AdminPayments"));
const AdminStatistics = lazy(() => import("./pages/admin/AdminStatistics"));
const AdminSettings = lazy(() => import("./pages/admin/AdminSettings"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Configure the QueryClient with Pi Network styling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
      suspense: true, // Enable suspense mode
    },
  },
});

const AppContent = () => {
  const { dir } = useLanguage();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const initSDK = async () => {
      try {
        await initializePiSDK();
      } catch (error) {
        console.error('Failed to initialize Pi SDK:', error);
      }
    };

    initSDK();
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/95 text-foreground pb-16 md:pb-0" dir={dir}>
      <BrowserRouter>
        <MobileNavbar />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/restaurants/:id" element={<RestaurantDetails />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/pi-wallet" element={<PiWallet />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/homefood" element={<HomeFood />} />
              <Route path="/homefood/:id" element={<FoodProviderDetails />} />
              <Route path="/homefood/add" element={<AddFoodListing />} />
              <Route path="/pi-payment" element={<PiPaymentDemo />} />
              <Route path="/restaurant-dashboard" element={<RestaurantDashboard />} />
              
              {/* Admin routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="restaurants" element={<AdminRestaurants />} />
                <Route path="home-providers" element={<AdminRestaurants />} />
                <Route path="orders" element={<AdminOrders />} />
                <Route path="payments" element={<AdminPayments />} />
                <Route path="statistics" element={<AdminStatistics />} />
                <Route path="settings" element={<AdminSettings />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        
        {/* Show mobile navigation on mobile devices */}
        {isMobile && <MobileNavigation />}
      </BrowserRouter>
    </div>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner position="top-right" theme="system" />
          <AppProvider>
            <AppContent />
          </AppProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
