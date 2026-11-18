import { useEffect, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy, Send, X } from 'lucide-react';
import { CONTACT_TOPICS, PROFILE } from '../data';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(CONTACT_TOPICS[0]);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  // No backend needed: this opens the visitor's email app with the message filled in.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    const subject = `${topic}: message from ${name.trim()}`;
    const body = `${message.trim()}\n\nFrom: ${name.trim()} (${email.trim()})`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
          onClick={handleResetAndClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl rounded-[32px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 sm:p-10 text-[#D7E2EA] my-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <button
              type="button"
              onClick={handleResetAndClose}
              aria-label="Close contact dialog"
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <h2
              id="contact-modal-title"
              className="hero-heading font-black uppercase tracking-tight leading-none text-4xl sm:text-5xl mb-3"
            >
              Let&rsquo;s talk
            </h2>
            <p className="text-sm sm:text-base font-light text-[#D7E2EA]/70 mb-6">
              Internship, project or just a hello. Write to me below.
            </p>

            <div className="flex items-center justify-between gap-3 rounded-2xl border border-[#D7E2EA]/15 bg-[#141414] px-4 py-3 mb-6">
              <span className="text-xs sm:text-sm tracking-wide text-[#D7E2EA] break-all">
                {PROFILE.email}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#D7E2EA]/80 hover:text-white cursor-pointer whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </>
                )}
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center">
                <p className="text-xl font-medium uppercase tracking-wider text-white mb-2">
                  Opening your email app
                </p>
                <p className="text-sm font-light text-[#D7E2EA]/70 mb-6">
                  Your message is filled in. Press send in your email app. If nothing
                  opened, copy my address above and write to me directly.
                </p>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-xs uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
                >
                  Back to portfolio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1.5 text-xs uppercase tracking-widest text-[#D7E2EA]/70">
                    Name
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="rounded-xl border border-[#D7E2EA]/20 bg-[#141414] px-4 py-3 text-sm text-white placeholder:text-[#D7E2EA]/30 focus:border-[#D7E2EA] focus:outline-none"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5 text-xs uppercase tracking-widest text-[#D7E2EA]/70">
                    Email
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="rounded-xl border border-[#D7E2EA]/20 bg-[#141414] px-4 py-3 text-sm text-white placeholder:text-[#D7E2EA]/30 focus:border-[#D7E2EA] focus:outline-none"
                    />
                  </label>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/70">
                    What is this about?
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {CONTACT_TOPICS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setTopic(opt)}
                        aria-pressed={topic === opt}
                        className={`rounded-lg px-3 py-1.5 text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                          topic === opt
                            ? 'bg-[#D7E2EA] text-[#0C0C0C] font-medium'
                            : 'border border-[#D7E2EA]/20 text-[#D7E2EA]/70 hover:border-[#D7E2EA]/50'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex flex-col gap-1.5 text-xs uppercase tracking-widest text-[#D7E2EA]/70">
                  Message
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me a bit about what you have in mind..."
                    className="rounded-xl border border-[#D7E2EA]/20 bg-[#141414] px-4 py-3 text-sm text-white placeholder:text-[#D7E2EA]/30 focus:border-[#D7E2EA] focus:outline-none resize-none"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full text-white font-medium uppercase tracking-widest px-8 py-3.5 text-xs sm:text-sm cursor-pointer transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow:
                      '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                    outline: '2px solid #FFFFFF',
                    outlineOffset: '-3px',
                  }}
                >
                  <Send className="h-4 w-4" />
                  Send message
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
