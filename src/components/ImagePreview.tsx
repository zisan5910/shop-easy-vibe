import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImagePreviewProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative group">
        <img
          src={src}
          alt={alt}
          className={className}
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(true)}
          className="absolute inset-0 bg-black/0 hover:bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
        >
          <Eye className="h-6 w-6" />
        </Button>
      </div>

      {/* Full screen preview modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};