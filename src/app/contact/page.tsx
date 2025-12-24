'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Users, Building, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        contactMethod: 'email'
      })
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-h2 font-bold mb-4">
              Hubungi <span className="text-gradient">Kami</span>
            </h1>
            <p className="text-h3 text-muted-foreground max-w-3xl mx-auto">
              Kami siap membantu kebutuhan alat tulis dan gambar untuk bisnis Anda. 
              Hubungi tim profesional kami untuk konsultasi dan pemesanan.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-h4 font-semibold mb-2">Telepon</h3>
            <p className="text-body text-muted-foreground mb-1">0823-8246-6172</p>
            <p className="text-small text-muted-foreground">Senin - Sabtu, 08:00 - 17:00</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-h4 font-semibold mb-2">Email</h3>
            <p className="text-body text-muted-foreground mb-1">info@kencanaduaputra.co.id</p>
            <p className="text-small text-muted-foreground">Respon dalam 24 jam</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-h4 font-semibold mb-2">Alamat</h3>
            <p className="text-body text-muted-foreground mb-1">Tangerang, Banten</p>
            <p className="text-small text-muted-foreground">Ruko 92 Avenix, Blok F No. 7</p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-h4 font-semibold mb-2">Live Chat</h3>
            <p className="text-body text-muted-foreground mb-1">Online Sekarang</p>
            <p className="text-small text-muted-foreground">Chat langsung dengan tim kami</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-h2 font-semibold mb-6">Kirim Pesan</h2>
            
            {submitStatus === 'success' && (
              <div className="bg-success/10 border border-success/20 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-success mr-2" />
                  <span className="text-success font-medium">Pesan berhasil dikirim!</span>
                </div>
                <p className="text-sm text-success/80 mt-1">
                  Kami akan menghubungi Anda segera.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-body font-medium mb-2">Nama Lengkap *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-body font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-body font-medium mb-2">Nomor Telepon *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
                <div>
                  <label className="block text-body font-medium mb-2">Perusahaan</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nama perusahaan (opsional)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-body font-medium mb-2">Subjek Pesan *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Pilih subjek</option>
                  <option value="inquiry">Informasi Produk</option>
                  <option value="order">Pemesanan</option>
                  <option value="support">Dukungan Teknis</option>
                  <option value="complaint">Keluhan</option>
                  <option value="partnership">Kerjasama</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-body font-medium mb-2">Pesan *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tuliskan pesan Anda..."
                ></textarea>
              </div>

              <div>
                <label className="block text-body font-medium mb-2">Preferensi Kontak</label>
                <select
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="email">Email</option>
                  <option value="phone">Telepon</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="any">Metode apa saja</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary px-6 py-4 rounded-lg font-semibold flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Office Information */}
          <div>
            <h2 className="text-h2 font-semibold mb-6">Informasi Kantor</h2>
            
            <div className="bg-gradient-primary p-8 rounded-xl text-white mb-8">
              <h3 className="text-h3 font-bold mb-4">Kantor Pusat</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">PT KENCANA DUA PUTRA</p>
                    <p className="text-sm opacity-90">
                      Ruko 92 Avenix, Blok F No. 7<br />
                      Jl. Raya Cisauk, Desa/Kelurahan Sampora<br />
                      Kec. Cisauk, Kab. Tangerang, Provinsi Banten
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-2">Jam Operasional</p>
                    <div className="text-sm space-y-1 opacity-90">
                      <div className="flex justify-between">
                        <span>Senin - Jumat:</span>
                        <span>08:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sabtu:</span>
                        <span>08:00 - 12:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Minggu:</span>
                        <span>Tutup</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-h4 font-semibold mb-4">Kontak Cepat</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                  <div>
                    <p className="font-medium">Sales</p>
                    <p className="text-sm text-muted-foreground">0823-8246-6172</p>
                  </div>
                  <button className="btn-primary px-4 py-2 rounded-lg text-sm">
                    <Phone className="w-4 h-4 mr-1" />
                    Hubungi
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                  <div>
                    <p className="font-medium">Customer Service</p>
                    <p className="text-sm text-muted-foreground">0823-8246-6173</p>
                  </div>
                  <button className="btn-primary px-4 py-2 rounded-lg text-sm">
                    <Phone className="w-4 h-4 mr-1" />
                    Hubungi
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-surface rounded-lg">
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">0823-8246-6174</p>
                  </div>
                  <button className="btn-primary px-4 py-2 rounded-lg text-sm">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Chat
                  </button>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 bg-warning/10 border border-warning/20 rounded-lg p-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-warning mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-warning mb-1">Kontak Darurat</p>
                  <p className="text-sm text-warning/80">
                    Untuk keperluan mendesak di luar jam kerja, silakan hubungi nomor darurat kami.
                  </p>
                  <p className="text-sm font-medium text-warning mt-2">0823-8246-6175</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-surface-subtle py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold mb-4">
              Pertanyaan yang <span className="text-gradient">Sering Diajukan</span>
            </h2>
            <p className="text-body text-muted-foreground">
              Temukan jawaban untuk pertanyaan umum tentang layanan kami.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-h4 font-semibold mb-3">Bagaimana cara melakukan pemesanan?</h3>
              <p className="text-body text-muted-foreground">
                Anda dapat memesan melalui website, telepon, email, atau datang langsung ke kantor kami. 
                Tim kami akan membantu Anda memilih produk yang tepat dan mengatur pengiriman.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-h4 font-semibold mb-3">Apakah ada minimum order?</h3>
              <p className="text-body text-muted-foreground">
                Minimum order Rp 500.000 untuk pengiriman gratis. Untuk order di bawah jumlah tersebut, 
                dikenakan biaya pengiriman sesuai jarak.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-h4 font-semibold mb-3">Berapa lama pengiriman?</h3>
              <p className="text-body text-muted-foreground">
                Same day delivery untuk order sebelum pukul 12:00, next day delivery untuk order setelahnya. 
                Pengiriman ke luar kota membutuhkan 2-3 hari kerja.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-h4 font-semibold mb-3">Apakah ada garansi produk?</h3>
              <p className="text-body text-muted-foreground">
                Ya, semua produk memiliki garansi resmi dari produsen. Kami juga menerima pengembalian 
                dalam 7 hari jika produk cacat atau tidak sesuai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold text-center mb-8">
            Lokasi <span className="text-gradient">Kami</span>
          </h2>
          <div className="bg-surface rounded-xl border border-border overflow-hidden" style={{ height: '400px' }}>
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-h4 font-medium mb-2">Peta Lokasi</p>
                <p className="text-body">
                  Ruko 92 Avenix, Blok F No. 7, Jl. Raya Cisauk, Tangerang
                </p>
                <button className="btn-primary mt-4 px-6 py-2 rounded-lg">
                  Buka di Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-small text-muted-foreground mb-4">
              © 2024 PT KENCANA DUA PUTRA. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="/" className="text-small text-muted-foreground hover:text-primary transition-colors">
                ← Kembali ke Beranda
              </a>
              <a href="/privacy" className="text-small text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-small text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}