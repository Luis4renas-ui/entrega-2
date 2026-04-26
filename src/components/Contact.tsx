import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 font-semibold text-lg mb-2">PONTE EN CONTACTO</p>
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle">
            ¿Preguntas? Estamos aquí para ayudarte. Completa el formulario o comunícate directamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold-100">
                  <Phone className="h-6 w-6 text-gold-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Teléfono</h3>
                <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">Disponible lun-dom, 10am-9pm</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold-100">
                  <Mail className="h-6 w-6 text-gold-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600 mt-1">info@arepavibe.com</p>
                <p className="text-sm text-gray-500">Respuesta en menos de 2 horas</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gold-100">
                  <MapPin className="h-6 w-6 text-gold-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Ubicación</h3>
                <p className="text-gray-600 mt-1">123 Avenida Gastronómica</p>
                <p className="text-sm text-gray-500">Miami, FL 33101</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Síguenos</h3>
              <div className="flex gap-4">
                {['fb', 'ig', 'tw', 'yt'].map((social) => (
                  <button
                    key={social}
                    className="h-12 w-12 rounded-lg bg-gold-100 text-gold-600 hover:bg-gold-200 transition-colors duration-300 flex items-center justify-center font-semibold"
                  >
                    {social.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-gold-50 to-corn-50 rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Juan Pérez"
                    className="w-full px-4 py-3 rounded-lg border border-gold-200 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Tu Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="juan@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gold-200 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Tu Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Cuéntanos qué necesitas..."
                    className="w-full px-4 py-3 rounded-lg border border-gold-200 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar Mensaje
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="p-4 bg-green-100 border border-green-400 rounded-lg text-green-800 text-center">
                    ¡Mensaje enviado! Te contactaremos pronto.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
