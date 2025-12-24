import { Shield, Eye, Lock, UserCheck } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-h2 font-bold">Privacy Policy</h1>
              <p className="text-body text-muted-foreground">PT KENCANA DUA PUTRA</p>
            </div>
          </div>
          <p className="text-small text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-card p-8 rounded-xl border border-border mb-8">
            <h2 className="text-h3 font-semibold mb-4 text-primary">Komitmen Privasi Kami</h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              Di PT KENCANA DUA PUTRA, kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
              Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, 
              dan membagikan informasi pribadi Anda saat menggunakan layanan kami.
            </p>
          </div>

          <div className="space-y-8">
            {/* Informasi yang Kami Kumpulkan */}
            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-h3 font-semibold">Informasi yang Kami Kumpulkan</h2>
              </div>
              
              <div className="bg-surface-subtle p-6 rounded-lg mb-6">
                <h3 className="text-h4 font-medium mb-3">Informasi Pribadi</h3>
                <ul className="space-y-2 text-body text-muted-foreground">
                  <li>• Nama lengkap dan informasi identitas</li>
                  <li>• Alamat email dan nomor telepon</li>
                  <li>• Alamat pengiriman dan penagihan</li>
                  <li>• Informasi perusahaan atau organisasi</li>
                  <li>• Nomor NPWP (untuk faktur pajak)</li>
                </ul>
              </div>

              <div className="bg-surface-subtle p-6 rounded-lg">
                <h3 className="text-h4 font-medium mb-3">Informasi Transaksional</h3>
                <ul className="space-y-2 text-body text-muted-foreground">
                  <li>• Riwayat pesanan dan pembelian</li>
                  <li>• Metode pembayaran yang digunakan</li>
                  <li>• Preferensi produk dan kategori</li>
                  <li>• Frekuensi pembelian</li>
                  <li>• Informasi pengiriman dan logistik</li>
                </ul>
              </div>
            </section>

            {/* Penggunaan Informasi */}
            <section>
              <div className="flex items-center mb-4">
                <UserCheck className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-h3 font-semibold">Penggunaan Informasi</h2>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-body text-muted-foreground mb-4">
                  Kami menggunakan informasi pribadi Anda untuk:
                </p>
                <ul className="space-y-3 text-body text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Memproses dan mengelola pesanan Anda</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Menyediakan layanan pelanggan dan dukungan teknis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Mengirimkan informasi produk dan penawaran khusus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Memproses pembayaran dan faktur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Meningkatkan kualitas produk dan layanan kami</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Mematuhi kewajiban hukum dan peraturan</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Perlindungan Data */}
            <section>
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-h3 font-semibold">Keamanan Data</h2>
              </div>
              
              <div className="bg-gradient-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-body text-muted-foreground mb-4">
                  PT KENCANA DUA PUTRA mengimplementasikan berbagai langkah keamanan untuk melindungi informasi pribadi Anda:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Keamanan Teknis</h4>
                    <ul className="text-small text-muted-foreground space-y-1">
                      <li>• Enkripsi data end-to-end</li>
                      <li>• Firewall yang kuat</li>
                      <li>• Sistem deteksi intrusi</li>
                      <li>• Backup data terenkripsi</li>
                    </ul>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Keamanan Organisasi</h4>
                    <ul className="text-small text-muted-foreground space-y-1">
                      <li>• Akses terbatas untuk otorisasi</li>
                      <li>• Pelatihan keamanan rutin</li>
                      <li>• Audit keamanan berkala</li>
                      <li>• Kebijakan password yang kuat</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Berbagi Informasi */}
            <section>
              <h2 className="text-h3 font-semibold mb-4">Pembagian Informasi</h2>
              <p className="text-body text-muted-foreground mb-6">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                untuk keperluan marketing tanpa persetujuan Anda. Kami hanya akan membagikan informasi dalam:
              </p>
              
              <div className="space-y-4">
                <div className="bg-surface p-4 rounded-lg border-l-4 border-primary">
                  <h4 className="font-medium mb-2">Penyedia Layanan</h4>
                  <p className="text-small text-muted-foreground">
                    Partner tepercaya yang membantu kami mengoperasikan bisnis, seperti penyedia 
                    pengiriman, payment gateway, dan layanan cloud.
                  </p>
                </div>
                <div className="bg-surface p-4 rounded-lg border-l-4 border-primary">
                  <h4 className="font-medium mb-2">Kewajiban Hukum</h4>
                  <p className="text-small text-muted-foreground">
                    Jika diwajibkan oleh hukum, perintah pengadilan, atau permintaan dari 
                    pemerintah yang berwenang.
                  </p>
                </div>
                <div className="bg-surface p-4 rounded-lg border-l-4 border-primary">
                  <h4 className="font-medium mb-2">Transfer Bisnis</h4>
                  <p className="text-small text-muted-foreground">
                    Dalam kasus merger, akuisisi, atau penjualan aset, informasi pelanggan 
                    dapat menjadi bagian dari aset yang ditransfer.
                  </p>
                </div>
              </div>
            </section>

            {/* Hak Pengguna */}
            <section>
              <h2 className="text-h3 font-semibold mb-4">Hak Anda Sebagai Pengguna</h2>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-body text-muted-foreground mb-4">
                  Anda memiliki hak untuk:
                </p>
                <ul className="space-y-3 text-body text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span><strong>Mengakses</strong> - Meminta salinan data pribadi yang kami simpan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span><strong>Koreksi</strong> - Memperbaiki data pribadi yang tidak akurat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span><strong>Hapus</strong> - Meminta penghapusan data pribadi Anda</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span><strong>Batasi</strong> - Membatasi pengolahan data pribadi Anda</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span><strong>Portabilitas</strong> - Meminta transfer data ke pihak lain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span><strong>Menolak</strong> - Menolak pengolahan data untuk tujuan tertentu</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Kebijakan Retensi */}
            <section>
              <h2 className="text-h3 font-semibold mb-4">Retensi Data</h2>
              <p className="text-body text-muted-foreground mb-4">
                Kami menyimpan informasi pribadi Anda hanya selama diperlukan untuk:
              </p>
              <ul className="space-y-2 text-body text-muted-foreground ml-6">
                <li>• Memenuhi tujuan pengumpulan data</li>
                <li>• Mematuhi kewajiban hukum dan peraturan</li>
                <li>• Menyelesaikan sengketa dan menegakkan perjanjian</li>
                <li>• Memenuhi kebutuhan bisnis yang sah</li>
              </ul>
              <p className="text-body text-muted-foreground mt-4">
                Secara umum, data pelanggan disimpan minimal 5 tahun dari transaksi terakhir 
                sesuai dengan peraturan perpajakan dan audit di Indonesia.
              </p>
            </section>

            {/* Kontak */}
            <section>
              <h2 className="text-h3 font-semibold mb-4">Hubungi Kami</h2>
              <div className="bg-gradient-primary p-8 rounded-xl text-white">
                <p className="text-body mb-6 opacity-90">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin 
                  menggunakan hak privasi Anda, silakan hubungi kami:
                </p>
                <div className="space-y-3">
                  <div>
                    <strong>Email:</strong> privacy@kencanaduaputra.co.id
                  </div>
                  <div>
                    <strong>Telepon:</strong> 0823-8246-6172
                  </div>
                  <div>
                    <strong>Alamat:</strong> Ruko 92 Avenix, Blok F No. 7, Jl. Raya Cisauk, 
                    Desa/Kelurahan Sampora, Kec. Cisauk, Kab. Tangerang, Provinsi Banten
                  </div>
                </div>
                <p className="text-small mt-6 opacity-80">
                  Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.
                </p>
              </div>
            </section>

            {/* Update Policy */}
            <section>
              <h2 className="text-h3 font-semibold mb-4">Pembaruan Kebijakan</h2>
              <p className="text-body text-muted-foreground">
                Kebijakan privasi ini dapat diperbarui dari waktu ke waktu untuk mencerminkan 
                perubahan dalam praktik kami atau perubahan peraturan yang berlaku. 
                Kami akan memberitahukan perubahan material melalui website atau email.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-small text-muted-foreground mb-4">
              © 2024 PT KENCANA DUA PUTRA. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="/" className="text-small text-muted-foreground hover:text-primary transition-colors">
                ← Kembali ke Beranda
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