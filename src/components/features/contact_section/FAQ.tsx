import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How can I get started with learning Sáo Trúc?',
      answer:
        'Simply create a free account and start with our Foundation course. No musical background required! You can use any device with a microphone for our AI feedback feature.',
    },
    {
      question: 'Do you offer refunds for premium subscriptions?',
      answer:
        "Yes, we offer a 30-day money-back guarantee for all premium subscriptions. If you're not satisfied with your learning experience, contact us for a full refund.",
    },
    {
      question: "Can I learn if I don't own a Sáo Trúc yet?",
      answer:
        'You can start with our theory lessons and breathing exercises. We also provide recommendations for purchasing authentic Sáo Trúc instruments from trusted craftsmen.',
    },
    {
      question: 'Is there a mobile app available?',
      answer:
        'Yes! Our mobile app is available for both iOS and Android. You can practice anywhere with offline lesson downloads and real-time AI feedback.',
    },
    {
      question: 'How does the AI feedback work?',
      answer:
        "Our AI analyzes your playing through your device microphone, providing real-time feedback on pitch accuracy, rhythm, tone quality, and breath control. It's like having a personal instructor available 24/7.",
    },
    {
      question: 'Do you offer live lessons or just recorded content?',
      answer:
        'We offer both! Premium members get access to monthly live masterclasses with expert instructors, plus our full library of self-paced recorded lessons.',
    },
    {
      question: "What's included in the community features?",
      answer:
        'Our community includes discussion forums, peer feedback sessions, monthly challenges, and the ability to share your progress with fellow learners worldwide.',
    },
    {
      question: 'Can I switch between subscription plans?',
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle, and we'll prorate any differences.",
    },
  ];

  return (
    <section className="py-24 bg-surface-light dark:bg-background-dark transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-300">
            Find answers to common questions about LenFolk and learning Sáo Trúc
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-200"
              >
                <span className="font-bold text-text-main dark:text-white pr-8">
                  {faq.question}
                </span>
                <span
                  className={`material-symbols-outlined text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-text-muted dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
          <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-text-muted dark:text-gray-400 mb-6">
            Can't find what you're looking for? Our support team is here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300">
              Contact Support
            </button>
            <button className="px-6 py-3 bg-white dark:bg-surface-dark border-2 border-gray-200 dark:border-white/10 hover:border-primary dark:hover:border-primary text-text-main dark:text-white font-bold rounded-xl transition-all duration-300">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
