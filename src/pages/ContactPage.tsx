import React, { useState } from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { Reveal } from "../components/Reveal";
import { Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "../components/Icons";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="pt-28 pb-20 px-6 sm:px-10 lg:px-16 xl:px-20 min-h-screen text-left">
      <div className="w-full">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

        <Reveal>
          <div className="mb-12">
            <span className="text-violet-400 text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-2">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
              Contact Me
            </h1>
            <p className="text-gray-400 text-base">
              Let's discuss your next project, freelance opportunity, or collaboration
            </p>
          </div>
        </Reveal>

        {/* Contact Page Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact info */}
          <Reveal className="space-y-8">
            <div className="glass-panel rounded-3xl p-8 sm:p-12 space-y-6">
              <h2 className="text-2xl font-extrabold text-white mb-2">Let's talk</h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Have a project in mind or want to work together? Feel free to reach out. I'm always open to discussing new web applications and digital ideas.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/[0.06] text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="text-lg">✉️</span>
                  <div>
                    <div className="text-xs text-gray-400">Email</div>
                    <a href="mailto:hello@gopalparmar.com" className="font-semibold hover:text-violet-400 text-white text-decoration-none">
                      hello@gopalparmar.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-lg">📞</span>
                  <div>
                    <div className="text-xs text-gray-400">Phone</div>
                    <div className="font-semibold text-white">+91 12345 67890</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-lg">📍</span>
                  <div>
                    <div className="text-xs text-gray-400">Location</div>
                    <div className="font-semibold text-white">Rajkot, India</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-lg">Availability</span>
                  <div>
                    <div className="font-semibold text-green-400">🟢 Open for work</div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-6 border-t border-white/[0.06]">
                <div className="text-xs text-gray-400 mb-3">Connect on social media:</div>
                <div className="flex items-center gap-3">
                  {[
                    { Icon: GithubIcon, href: "https://github.com" },
                    { Icon: LinkedinIcon, href: "https://linkedin.com" },
                    { Icon: TwitterIcon, href: "https://twitter.com" },
                    { Icon: MailIcon, href: "mailto:hello@gopalparmar.com" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-white/[0.07] border border-white/10 hover:bg-violet-600 hover:border-violet-500 text-gray-300 hover:text-white flex items-center justify-center transition-all hover:-translate-y-1 shadow-md"
                    >
                      <s.Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Send me a message form */}
          <Reveal delay={150}>
            <div className="glass-panel rounded-3xl p-8 sm:p-12 shadow-2xl relative">
              <h2 className="text-2xl font-extrabold text-white mb-6">Send me a message</h2>

              {submitted ? (
                <div className="bg-violet-600/20 border border-violet-500/40 rounded-2xl p-8 text-center space-y-3 animate-floaty">
                  <CheckCircle2 size={48} className="text-violet-400 mx-auto" />
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-sm text-gray-300">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="Project Inquiry / Job Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your message details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-violet-600 to-indigo-700 hover:from-violet-500 hover:to-indigo-600 text-white font-semibold text-base py-4 rounded-xl transition-all shadow-xl shadow-violet-600/35 flex items-center justify-center gap-2 cursor-pointer border-none"
                  >
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
