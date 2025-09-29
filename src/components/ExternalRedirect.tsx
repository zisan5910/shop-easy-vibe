import React, { useState, useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const ExternalRedirect: React.FC = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Detect if opened from external app
    const isExternalApp = () => {
      const referrer = document.referrer;
      const userAgent = navigator.userAgent;
      
      // Check if opened from Facebook, Messenger, WhatsApp, Instagram, etc.
      const externalApps = [
        'fb://', 'facebook.com', 'messenger.com', 'whatsapp.com', 
        'instagram.com', 'm.facebook.com', 'lm.facebook.com'
      ];
      
      // Check if coming from these apps or if user agent suggests in-app browser
      const isFromExternalApp = externalApps.some(app => 
        referrer.includes(app) || userAgent.includes('FBAN') || 
        userAgent.includes('FBAV') || userAgent.includes('Instagram')
      );

      return isFromExternalApp;
    };

    // Show prompt only once per session
    if (isExternalApp() && !sessionStorage.getItem('redirectPromptShown')) {
      setShowPrompt(true);
      sessionStorage.setItem('redirectPromptShown', 'true');
    }
  }, []);

  const handleOpenInChrome = () => {
    const currentUrl = window.location.href;
    // Try to open in Chrome (Android) or Safari (iOS)
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile, try to open in default browser
      window.open(currentUrl, '_blank');
    } else {
      // For desktop, try to open in Chrome
      window.open(`googlechrome://${currentUrl}`, '_self');
      // Fallback to regular browser
      setTimeout(() => {
        window.open(currentUrl, '_blank');
      }, 1000);
    }
    
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-sm mx-auto">
        <CardContent className="p-6 text-center space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-inter font-semibold text-lg mb-2">
                Better Experience
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                সেরা অভিজ্ঞতার জন্য Chrome-এ খুলুন।
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPrompt(false)}
              className="p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <Button
            onClick={handleOpenInChrome}
            className="w-full bg-primary hover:bg-primary-hover text-primary-foreground flex items-center justify-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Open in Chrome
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};