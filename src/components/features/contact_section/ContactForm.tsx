import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-24 bg-white dark:bg-surface-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content - Contact Info */}
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">
              We're Here to Help
            </h2>
            <p className="text-lg text-text-muted dark:text-gray-300 mb-8 leading-relaxed">
              Whether you're a complete beginner or looking to perfect your
              technique, our team is ready to support your musical journey.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    mail
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white mb-1">
                    Email Us
                  </h4>
                  <a
                    href="mailto:hello@lenfolk.com"
                    className="text-primary hover:underline"
                  >
                    hello@lenfolk.com
                  </a>
                  <p className="text-sm text-text-muted dark:text-gray-400 mt-1">
                    For general inquiries and support
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    forum
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white mb-1">
                    Community Forum
                  </h4>
                  <a href="#" className="text-primary hover:underline">
                    Join our Discord
                  </a>
                  <p className="text-sm text-text-muted dark:text-gray-400 mt-1">
                    Connect with fellow learners
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    location_on
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white mb-1">
                    Office Location
                  </h4>
                  <p className="text-text-muted dark:text-gray-300">
                    District 1, Ho Chi Minh City
                  </p>
                  <p className="text-text-muted dark:text-gray-300">Vietnam</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-text-main dark:text-white mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white dark:bg-background-dark border border-gray-200 dark:border-white/10 rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-text-main dark:text-white text-xl">
                    link
                  </span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white dark:bg-background-dark border border-gray-200 dark:border-white/10 rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-text-main dark:text-white text-xl">
                    chat
                  </span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white dark:bg-background-dark border border-gray-200 dark:border-white/10 rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-text-main dark:text-white text-xl">
                    video_library
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-surface-light dark:bg-background-dark border border-gray-100 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-text-main dark:text-white mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-bold text-text-main dark:text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-xl text-text-main dark:text-white placeholder-text-muted dark:placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-bold text-text-main dark:text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-xl text-text-main dark:text-white placeholder-text-muted dark:placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-bold text-text-main dark:text-white mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-xl text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                  <option value="press">Press & Media</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-bold text-text-main dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-xl text-text-main dark:text-white placeholder-text-muted dark:placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Message
              </button>

              {/* Privacy Notice */}
              <p className="text-xs text-text-muted dark:text-gray-400 text-center">
                By submitting this form, you agree to our privacy policy. We'll
                never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
