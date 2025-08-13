
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle, AlertCircle, User } from 'lucide-react';

export const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      setSubmitStatus('error');
      setMessage('Please fill in both name and email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setMessage('');

    try {
      // API endpoint - change this to your backend URL
      const API_URL = process.env.NODE_ENV === 'production' 
        ? 'https://your-backend-domain.com' 
        : 'http://localhost:5001';

      const response = await fetch(`${API_URL}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setMessage(data.message || 'Thank you for subscribing! Check your email for a welcome message.');
        setFormData({ name: '', email: '' });
      } else {
        throw new Error(data.message || 'Failed to subscribe');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      
      if (error instanceof Error) {
        setSubmitStatus('error');
        setMessage(error.message || 'Sorry, there was an error processing your subscription. Please try again.');
      } else {
        setSubmitStatus('error');
        setMessage('Network error. Please check your connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => {
    setSubmitStatus('idle');
    setMessage('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
          <Mail className="mr-2 h-4 w-4" />
          Newsletter
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Join Our Mailing List
        </h2>

        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join our mailing list to be the first to know about our services, special programs,
          testimonies, and ways to grow in faith together.
        </p>

        {/* Status Message */}
        {submitStatus !== 'idle' && (
          <div className={`max-w-md mx-auto mb-6 p-4 rounded-lg flex items-center gap-3 ${
            submitStatus === 'success' 
              ? 'bg-green-500/20 border border-green-500/30 text-green-200' 
              : 'bg-red-500/20 border border-red-500/30 text-red-200'
          }`}>
            {submitStatus === 'success' ? (
              <CheckCircle className="h-5 w-5 text-green-400" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-400" />
            )}
            <span className="text-sm">{message}</span>
            <button 
              onClick={resetStatus}
              className="ml-auto text-xs opacity-70 hover:opacity-100"
            >
              ×
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="pl-10 px-4 py-3 rounded-full border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10 px-4 py-3 rounded-full border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
