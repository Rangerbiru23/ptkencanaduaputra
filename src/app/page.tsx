'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Package, Truck, Users, Award, ChevronRight, CheckCircle } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">KD</span>
              </div>
              <div className="ml-3">
                <h1 className="text-h3 font-bold text-gradient">PT KENCANA DUA PUTRA</h1>
                <p className="text-small text-muted-foreground">Distributor Alat Tulis & Gambar</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-body font-medium hover:text-primary transition-colors">Beranda</a>
              <a href="#tentang" className="text-body font-medium hover:text-primary transition-colors">Tentang</a>
              <a href="#produk" className="text-body font-medium hover:text-primary transition-colors">Produk</a>
              <a href="#layanan" className="text-body font-medium hover:text-primary transition-colors">Layanan</a>
              <a href="#kontak" className="text-body font-medium hover:text-primary transition-colors">Kontak</a>
              <button className="btn-primary px-6 py-2 rounded-lg font-medium">
                Hubungi Kami
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-surface transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-surface border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#beranda" className="block px-3 py-2 rounded-lg text-body font-medium hover:bg-surface-subtle transition-colors">Beranda</a>
              <a href="#tentang" className="block px-3 py-2 rounded-lg text-body font-medium hover:bg-surface-subtle transition-colors">Tentang</a>
              <a href="#produk" className="block px-3 py-2 rounded-lg text-body font-medium hover:bg-surface-subtle transition-colors">Produk</a>
              <a href="#layanan" className="block px-3 py-2 rounded-lg text-body font-medium hover:bg-surface-subtle transition-colors">Layanan</a>
              <a href="#kontak" className="block px-3 py-2 rounded-lg text-body font-medium hover:bg-surface-subtle transition-colors">Kontak</a>
              <button className="w-full mt-2 btn-primary px-4 py-2 rounded-lg font-medium">
                Hubungi Kami
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-secondary opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-display mb-6">
                Distributor <span className="text-gradient">Alat Tulis & Gambar</span> Terpercaya di Indonesia
              </h1>
              <p className="text-h3 text-muted-foreground mb-8">
                PT KENCANA DUA PUTRA - Solusi lengkap untuk kebutuhan alat tulis dan gambar kantor, sekolah, dan industri Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center">
                  Lihat Katalog
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="btn-secondary px-8 py-4 rounded-lg font-semibold text-lg">
                  Hubungi Sales
                </button>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-primary/10 rounded-full border-2 border-background flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-small text-muted-foreground">500+ Pelanggan Puas</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/logo.png"
                alt="PT KENCANA DUA PUTRA"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-surface-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-h3 font-bold text-primary mb-2">1000+</h3>
              <p className="text-body text-muted-foreground">Jenis Produk</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-h3 font-bold text-primary mb-2">24 Jam</h3>
              <p className="text-body text-muted-foreground">Pengiriman Cepat</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-h3 font-bold text-primary mb-2">500+</h3>
              <p className="text-body text-muted-foreground">Pelanggan Setia</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-h3 font-bold text-primary mb-2">15 Tahun</h3>
              <p className="text-body text-muted-foreground">Pengalaman</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Tentang <span className="text-gradient">PT KENCANA DUA PUTRA</span></h2>
            <p className="text-h3 text-muted-foreground max-w-3xl mx-auto">
              Distributor terpercaya untuk alat tulis dan gambar dengan pengalaman lebih dari 15 tahun melayani berbagai kebutuhan bisnis dan institusi.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card-hover bg-card p-8 rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-h3 font-semibold mb-4">Produk Lengkap</h3>
              <p className="text-body text-muted-foreground mb-4">
                Menyediakan berbagai macam alat tulis dan gambar dari merek ternama dengan kualitas terjamin.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-small text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  Pensil dan pulpen
                </li>
                <li className="flex items-center text-small text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  Kertas dan buku
                </li>
                <li className="flex items-center text-small text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  Alat gambar teknis
                </li>
              </ul>
            </div>

            <div className="card-hover bg-card p-8 rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-h3 font-semibold mb-4">Pengiriman Cepat</h3>
              <p className="text-body text-muted-foreground mb-4">
                Sistem distribusi yang efisien memastikan pesanan Anda sampai tepat waktu dengan aman.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-small text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  Same day delivery
                </li>
                <li className="flex items-center text-small text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  Tracking real-time
                </li>
                <li className="flex items-center text-small text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  Asuransi pengiriman
                </li>
              </ul>
            </div>

            <div className="card-hover bg-card p-8 rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-h3 font-semibold mb-4">Kualitas Terjamin</h3>
              <p className="text-body text-muted-foreground mb-4">
                Semua produk yang kami jual memiliki jaminan kualitas dan keaslian dari produsen resmi.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-small text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  Produk original
                </li>
                <li className="flex items-center text-small text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  Garansi resmi
                </li>
                <li className="flex items-center text-small text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  Harga kompetitif
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-20 bg-surface-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Produk <span className="text-gradient">Unggulan</span></h2>
            <p className="text-h3 text-muted-foreground max-w-3xl mx-auto">
              Berbagai macam alat tulis dan gambar untuk memenuhi kebutuhan bisnis dan institusi Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Pensil & Pulpen", desc: "Berbagai merek berkualitas", items: "150+ jenis" },
              { name: "Kertas & Buku", desc: "Kualitas premium untuk semua kebutuhan", items: "200+ jenis" },
              { name: "Alat Gambar", desc: "Peralatan teknis dan profesional", items: "100+ jenis" },
              { name: "Kantor Supplies", desc: "Perlengkapan kantor lengkap", items: "300+ jenis" },
              { name: "Art Supplies", desc: "Alat seni dan kreatif", items: "180+ jenis" },
              { name: "Storage", desc: "Penyimpanan dokumen dan alat tulis", items: "80+ jenis" },
              { name: "Printer Supplies", desc: "Tinta, toner, dan kertas printer", items: "120+ jenis" },
              { name: "Custom Items", desc: "Branding dan souvenir", items: "50+ jenis" }
            ].map((product, index) => (
              <div key={index} className="card-hover bg-card p-6 rounded-xl border border-border cursor-pointer">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-h3 font-semibold mb-2">{product.name}</h3>
                <p className="text-small text-muted-foreground mb-3">{product.desc}</p>
                <p className="text-caption text-primary font-medium">{product.items}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-4 rounded-lg font-semibold">
              Lihat Semua Produk
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Layanan <span className="text-gradient">Profesional</span></h2>
            <p className="text-h3 text-muted-foreground max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan untuk mendukung kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold mb-2">Konsultasi Produk</h3>
                    <p className="text-body text-muted-foreground">
                      Tim ahli kami siap membantu Anda memilih produk yang tepat sesuai kebutuhan bisnis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold mb-2">Pengiriman Terjadwal</h3>
                    <p className="text-body text-muted-foreground">
                      Layanan pengiriman rutin dengan jadwal yang disesuaikan dengan kebutuhan operasional Anda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold mb-2">Custom Branding</h3>
                    <p className="text-body text-muted-foreground">
                      Layanan custom branding untuk alat tulis dan merchandise dengan logo perusahaan Anda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold mb-2">Support 24/7</h3>
                    <p className="text-body text-muted-foreground">
                      Tim customer service kami siap membantu Anda kapan saja dibutuhkan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary p-8 rounded-2xl text-white">
              <h3 className="text-h2 font-bold mb-6">Butuh Bantuan?</h3>
              <p className="text-body mb-8 opacity-90">
                Tim profesional kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan alat tulis dan gambar.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">0823-8246-6172</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">info@kencanaduaputra.co.id</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Tangerang, Banten</span>
                </div>
              </div>
              <button className="w-full mt-8 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Hubungi Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-surface-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Hubungi <span className="text-gradient">Kami</span></h2>
            <p className="text-h3 text-muted-foreground max-w-3xl mx-auto">
              Siap melayani kebutuhan alat tulis dan gambar untuk bisnis Anda.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-h3 font-semibold mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Alamat</h4>
                    <p className="text-body text-muted-foreground">
                      Ruko 92 Avenix, Blok F No. 7, Jl. Raya Cisauk, Desa/Kelurahan Sampora, Kec. Cisauk, Kab. Tangerang, Provinsi Banten
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telepon</h4>
                    <p className="text-body text-muted-foreground">0823-8246-6172</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-body text-muted-foreground">info@kencanaduaputra.co.id</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Jam Operasional</h4>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="flex justify-between mb-2">
                    <span className="text-body">Senin - Jumat</span>
                    <span className="text-body font-medium">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-body">Sabtu</span>
                    <span className="text-body font-medium">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-body">Minggu</span>
                    <span className="text-body font-medium">Tutup</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-h3 font-semibold mb-6">Kirim Pesan</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-body font-medium mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-body font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-body font-medium mb-2">Subjek</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Subjek pesan"
                  />
                </div>
                <div>
                  <label className="block text-body font-medium mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tuliskan pesan Anda..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary px-6 py-3 rounded-lg font-semibold">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KD</span>
                </div>
                <div className="ml-2">
                  <h3 className="text-h3 font-bold text-gradient">PT KENCANA DUA PUTRA</h3>
                </div>
              </div>
              <p className="text-small text-muted-foreground">
                Distributor terpercaya alat tulis dan gambar untuk kebutuhan bisnis dan institusi.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigasi</h4>
              <ul className="space-y-2">
                <li><a href="#beranda" className="text-small text-muted-foreground hover:text-primary transition-colors">Beranda</a></li>
                <li><a href="#tentang" className="text-small text-muted-foreground hover:text-primary transition-colors">Tentang</a></li>
                <li><a href="#produk" className="text-small text-muted-foreground hover:text-primary transition-colors">Produk</a></li>
                <li><a href="#layanan" className="text-small text-muted-foreground hover:text-primary transition-colors">Layanan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-small text-muted-foreground hover:text-primary transition-colors">Konsultasi Produk</a></li>
                <li><a href="#" className="text-small text-muted-foreground hover:text-primary transition-colors">Pengiriman</a></li>
                <li><a href="#" className="text-small text-muted-foreground hover:text-primary transition-colors">Custom Branding</a></li>
                <li><a href="#" className="text-small text-muted-foreground hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2">
                <li className="text-small text-muted-foreground">0823-8246-6172</li>
                <li className="text-small text-muted-foreground">info@kencanaduaputra.co.id</li>
                <li className="text-small text-muted-foreground">Tangerang, Banten</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-small text-muted-foreground mb-4 md:mb-0">
                © 2024 PT KENCANA DUA PUTRA. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="/privacy" className="text-small text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-small text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}