import React, { useState } from 'react';
import { TopNavigation, BottomNavigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Facebook, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import zupraMartLogo from '@/assets/zuprmart-logo.png';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { showAlert } = useApp();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.message) {
      showAlert('Please fill in all required fields', 'error');
      return;
    }

    // Email functionality
    const emailBody = `Name: ${formData.name}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const mailtoLink = `mailto:zupramart@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Contact Form Submission'
      )}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
    } else {
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=zupramart@gmail.com&su=${encodeURIComponent(
        formData.subject || 'Contact Form Submission'
      )}&body=${encodeURIComponent(emailBody)}`;
      window.open(gmailLink, '_blank');
    }

    setIsSubmitted(true);
    showAlert('Email client opened! Please send your message.', 'success');

    setFormData({
      name: '',
      phone: '',
      subject: '',
      message: ''
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleCall = () => {
    window.open('tel:+8809638845910', '_self');
  };

  const handleFacebook = () => {
    window.open('https://facebook.com/ZupraMart', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation 
        title="Contact Us" 
        showBack={true} 
        showSearch={false}
        showWishlist={false}
        showCart={false}
      />
      
      <main className="pb-20 md:pb-8">
        <section className="container mx-auto px-4 py-6 space-y-6">
          {/* Logo and Welcome Section */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-card border-4 border-primary/10">
                <img 
                  src={zupraMartLogo} 
                  alt="ZupraMart Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="font-inter font-bold text-2xl text-foreground">ZupraMart</h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              We're here to help you with any questions or concerns. Feel free to reach out to us anytime.
            </p>
          </div>

          {isSubmitted && (
            <div className="p-4 bg-green-100 text-green-800 rounded-lg flex items-center gap-2 mb-4">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Message prepared successfully! Please send from your email client.</span>
            </div>
          )}

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-inter text-lg">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+880 123 456 789"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="font-inter text-lg flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button 
                  onClick={handleCall}
                  className="bg-success hover:bg-success/90 text-success-foreground flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
                
                <Button 
                  onClick={() => window.open('mailto:zupramart@gmail.com', '_blank')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </Button>
                
                <Button 
                  onClick={handleFacebook}
                  className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white flex items-center gap-2"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </Button>
              </div>
              
              <div className="space-y-2 text-sm text-muted-foreground text-center">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>zupramart@gmail.com</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="font-inter text-lg">Business Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Saturday - Thursday:</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday:</span>
                  <span>2:00 PM - 9:00 PM</span>
                </div>
                <div className="text-xs text-muted-foreground mt-4">
                  * Customer service available during business hours
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Contact;
