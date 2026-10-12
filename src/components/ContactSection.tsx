import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink,
  Globe,
  Sparkles,
  PhoneCall,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState<'University Admissions' | 'SQA / React Project' | 'General Collaboration'>('University Admissions');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(PROFILE_INFO.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          category: category,
          message: message,
          _subject: `New Porte Jai.edu Inquiry: [${category}] from ${name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage('Form submission encountered an issue. You can still email directly.');
      }
    } catch (err) {
      // If network / adblocker interferes with external API, fallback gracefully
      setStatus('error');
      setErrorMessage('Network connection to email service timed out. Please send directly via email client.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`[${category}] Inquiry from ${name || 'Prospective Student/Client'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCategory: ${category}\n\nMessage:\n${message}\n\n--\nSent to ${PROFILE_INFO.email}`
    );
    window.location.href = `mailto:${PROFILE_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-300">Junaid Jesan</span>
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Reach out for foreign university counseling inquiries, technical test automation projects (Playwright / SQA), or React web development discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Direct Email</h3>
                  <a 
                    href={`mailto:${PROFILE_INFO.email}`}
                    className="text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {PROFILE_INFO.email}
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Feel free to email directly for urgent counseling appointments, spot admission requests, or technical consulting.
              </p>
            </div>

            {/* Location & Role */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Office & Operations</h3>
                  <div className="text-sm text-slate-300">Dhaka, Bangladesh</div>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Founder — Porte Jai.edu
              </p>
            </div>

            {/* Social Channels Grid */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <h3 className="font-bold text-white text-sm mb-4">Official Social Profiles</h3>
              <div className="grid grid-cols-2 gap-2.5">
                {PROFILE_INFO.socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                        {soc.name}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 truncate max-w-[90px]">
                        {soc.handle}
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div>
                  <h3 className="font-bold text-white text-lg">Send a Message or Consultation Inquiry</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Delivers directly to {PROFILE_INFO.email}</p>
                </div>
                <span className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <MessageSquare className="w-4 h-4" />
                </span>
              </div>

              {status === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you! Your inquiry has been sent directly to{' '}
                    <span className="text-emerald-400 font-mono font-medium">{PROFILE_INFO.email}</span>. Junaid will review your message and get back to you shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="px-4 py-2 rounded-lg bg-slate-900 text-slate-300 text-xs hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleMailtoFallback}
                        className="px-2.5 py-1 rounded bg-amber-500 text-slate-950 font-semibold text-[11px] shrink-0 hover:bg-amber-400 transition-colors"
                      >
                        Send via Email App
                      </button>
                    </div>
                  )}

                  {/* Topic Select */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Inquiry Subject
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {(['University Admissions', 'SQA / React Project', 'General Collaboration'] as const).map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setCategory(cat)}
                          className={`p-2 rounded-xl text-xs font-medium transition-all ${
                            category === cat 
                              ? 'bg-blue-600 text-white font-bold' 
                              : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Shakib Ahmed"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="shakib@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Message body */}
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Message Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      disabled={isSubmitting}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your study abroad goals, academic background, or technical inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Delivering to {PROFILE_INFO.email}...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send to {PROFILE_INFO.email}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
