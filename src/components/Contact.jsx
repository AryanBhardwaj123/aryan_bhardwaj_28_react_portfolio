import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    // Appending subject to message for backend compatibility
                    message: `Subject: ${formData.subject}\n\n${formData.message}`,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setStatusMessage('Message sent successfully! I will get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setStatusMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setStatusMessage('Failed to connect to the server. Please check your connection.');
            console.error('Contact Error:', error);
        }
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="glass p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:border-primary/30 transition-colors">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
                                <p className="text-gray-400">aryan.dev@example.com</p>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:border-primary/30 transition-colors">
                            <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">Phone</h3>
                                <p className="text-gray-400">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:border-primary/30 transition-colors">
                            <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">Location</h3>
                                <p className="text-gray-400">Bangalore, India</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="glass p-8 rounded-2xl border border-white/5"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                    className="w-full px-4 py-3 rounded-lg bg-darker border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg bg-darker border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-lg bg-darker border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Your message here..."
                                    className="w-full px-4 py-3 rounded-lg bg-darker border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <>Sending... <Loader2 className="animate-spin" size={20} /></>
                                ) : (
                                    <>Send Message <Send size={20} /></>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="text-green-500 text-center flex items-center justify-center gap-2 mt-2">
                                    <CheckCircle size={18} /> {statusMessage}
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="text-red-500 text-center flex items-center justify-center gap-2 mt-2">
                                    <XCircle size={18} /> {statusMessage}
                                </div>
                            )}
                        </form>
                    </motion.div>

                </div>

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500">
                    <p>© 2024 Aryan. Built with React & Tailwind CSS.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
