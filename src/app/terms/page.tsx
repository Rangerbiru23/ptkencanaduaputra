import { FileText, ShoppingCart, Users, AlertCircle, CheckCircle, Scale } from 'lucide-react'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-h2 font-bold">Terms & Conditions</h1>
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
            <h2 className="text-h3 font-semibold mb-4 text-primary">Syarat dan Ketentuan Penggunaan</h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              Selamat datang di PT KENCANA DUA PUTRA. Dengan mengakses dan menggunakan website dan layanan kami, 
              Anda setuju untuk terikat oleh syarat dan ketentuan ini. Harap baca dengan seksama sebelum 
              menggunakan layanan kami.
            </p>
          </div>

          <div className="space-y-8">
            {/* Definisi */}
            <section>
              <h2 className="text-h3 font-semibold mb-4">Definisi</h2>
              <div className="bg-surface-subtle p-6 rounded-lg">
                <ul className="space-y-2 text-body text-muted-foreground">
                  <li><strong>"Perusahaan"</strong> - PT KENCANA DUA PUTRA, penyedia layanan distribusi alat tulis dan gambar</li>
                  <li><strong>"Pelanggan"</strong> - Individu atau perusahaan yang menggunakan layanan kami</li>
                  <li><strong>"Produk"</strong> - Alat tulis, alat gambar, dan stationery yang kami jual</li>
                  <li><strong>"Layanan"</strong> - Penjualan, pengiriman, dan dukungan terkait produk</li>
                  <li><strong>"Website"</strong> - Platform online kami di kencanaduaputra.co.id</li>
                  <li><strong>"Pesanan"</strong> - Permintaan pembelian produk dari Pelanggan</li>
                </ul>
              </div>
            </section>

            {/* Jangkauan Layanan */}
            <section>
              <div className="flex items-center mb-4">
                <ShoppingCart className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-h3 font-semibold">Jangkauan Layanan</h2>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-h4 font-medium mb-3">Produk yang Tersedia</h3>
                <p className="text-body text-muted-foreground mb-4">
                  Kami menyediakan berbagai macam produk:
                </p>
                <ul className="space-y-2 text-body text-muted-foreground ml-6">
                  <li>• Alat tulis kantor (pensil, pulpen, marker, dll)</li>
                  <li>• Kertas dan buku (berbagai ukuran dan kualitas)</li>
                  <li>• Alat gambar teknis (penggaris, jangka, dll)</li>
                  <li>• Perlengkapan kantor (stapler, laminator, dll)</li>
                  <li>• Printer supplies (tinta, toner, kertas)</li>
                  <li>• Art supplies dan creative materials</li>
                </ul>
                
                <h3 className="text-h4 font-medium mb-3 mt-6">Area Layanan</h3>
                <p className="text-body text-muted-foreground">
                  Kami melayani area: Tangerang, Jakarta, Bogor, Depok, Bekasi, dan sekitarnya. 
                  Untuk area lainnya, silakan hubungi kami untuk informasi pengiriman.
                </p>
              </div>
            </section>

            {/* Pemesanan dan Pembayaran */}
            <section>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-h3 font-semibold">Pemesanan dan Pembayaran</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-surface p-4 rounded-lg border-l-4 border-primary">
                  <h4 className="font-medium mb-2">Proses Pemesanan</h4>
                  <ul className="text-small text-muted-foreground space-y-1">
                    <li>• Pesanan dapat dilakukan melalui website, telepon, atau email</li>
                    <li>• Minimum order Rp 500.000 untuk pengiriman gratis</li>
                    <li>• Konfirmasi pesanan akan dikirimkan melalui email</li>
                    <li>• Pesanan akan diproses setelah pembayaran dikonfirmasi</li>
                  </ul>
                </div>
                
                <div className="bg-surface p-4 rounded-lg border-l-4 border-primary">
                  <h4 className="font-medium mb-2">Metode Pembayaran</h4>
                  <ul className="text-small text-muted-foreground space-y-1">
                    <li>• Transfer bank (BCA, Mandiri, BNI)</li>
                    <li>• Virtual account</li>
                    <li>• E-wallet (OVO, GoPay, DANA)</li>
                    <li>• Kredit (untuk pelanggan korporat yang memenuhi syarat)</li>
                    <li>• COD (Cash on Delivery) untuk area tertentu</li>
                  </ul>
                </div>
                
                <div className="bg-surface p-4 rounded-lg border-l-4 border-primary">
                  <h4 className="font-medium mb-2">Syarat Pembayaran</h4>
                  <ul className="text-small text-muted-foreground space-y-1">
                    <li>• Pembayaran harus dilakukan maksimal 2x24 jam setelah pemesanan</li>
                    <li>• Untuk pelanggan korporat, tersedia termin pembayaran 30 hari</li>
                    <li>• Pembayaran terlambat akan dikenakan denda 2% per bulan</li>
                    <li>• Pesanan akan dibatalkan otomatis jika tidak ada pembayaran</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pengiriman */}
            <section>
              <h2 className="text-h3 font-semibold mb-4">Pengiriman dan Pengembalian</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-h4 font-medium mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-success mr-2" />
                    Pengiriman
                  </h3>
                  <ul className="text-small text-muted-foreground space-y-2">
                    <li>• Same day delivery untuk order sebelum 12:00</li>
                    <li>• Next day delivery untuk order setelah 12:00</li>
                    <li>• Free shipping untuk minimum order Rp 500.000</li>
                    <li>• Tracking number akan dikirimkan via email</li>
                    <li>• Asuransi pengiriman tersedia dengan biaya tambahan</li>
                  </ul>
                </div>
                
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-h4 font-medium mb-3 flex items-center">
                    <AlertCircle className="w-5 h-5 text-warning mr-2" />
                    Pengembalian
                  </h3>
                  <ul className="text-small text-muted-foreground space-y-2">
                    <li>• Pengembalian dalam 7 hari setelah penerimaan</li>
                    <li>• Produk harus dalam kondisi asli dan tidak terpakai</li>
                    <li>• Biaya pengiriman pengembalian ditanggung pembeli</li>
                    <li>• Refund akan diproses dalam 3-5 hari kerja</li>
                    <li>• Produk sale atau clearance tidak dapat dikembalikan</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Harga dan Ketersediaan */}
            <section>
              <h2 className="text-h3 font-semibold mb-4">Harga dan Ketersediaan</h2>
              <div className="bg-gradient-primary/10 p-6 rounded-lg border border-primary/20">
                <ul className="space-y-3 text-body text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Harga yang tercantum dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Ketersediaan produk tidak dijamin dan dapat berubah sewaktu-waktu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Harga sudah termasuk PPN 11% (kecuali disebutkan lain)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Kami berhak menolak pesanan karena kesalahan harga atau ketersediaan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Discount khusus untuk pembelian quantity dan pelanggan tetap</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Kewajiban Pelanggan */}
            <section>
              <h2 className="text-h3 font-semibold mb-4">Kewajiban Pelanggan</h2>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-body text-muted-foreground mb-4">
                  Sebagai Pelanggan, Anda setuju untuk:
                </p>
                <ul className="space-y-3 text-body text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Memberikan informasi yang akurat dan lengkap saat pemesanan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Melakukan pembayaran sesuai dengan syarat yang ditentukan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Tidak menggunakan produk untuk tujuan ilegal atau melanggar hukum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Memeriksa produk saat penerimaan dan melaporkan kerusakan dalam 24 jam</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Respect terhadap staff dan properti perusahaan</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Hak Kekayaan Intelektual */}
            <section>
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-h3 font-semibold">Hak Kekayaan Intelektual</h2>
              </div>
              <p className="text-body text-muted-foreground mb-4">
                Semua konten di website kami, termasuk namun tidak terbatas pada:
              </p>
              <ul className="space-y-2 text-body text-muted-foreground ml-6 mb-4">
                <li>• Desain website dan layout</li>
                <li>• Produk images dan deskripsi</li>
                <li>• Logo dan merek dagang</li>
                <li>• Dokumen dan materi marketing</li>
              </ul>
              <p className="text-body text-muted-foreground">
                Merupakan milik PT KENCANA DUA PUTRA dan dilindungi oleh hukum hak cipta. 
                Dilarang keras menyalin, mendistribusikan, atau menggunakan konten tanpa izin tertulis.
              </p>
            </section>

            {/* Pembatasan Tanggung Jawab */}
            <section>
              <h2 className="text-h3 font-semibold mb-4">Pembatasan Tanggung Jawab</h2>
              <div className="bg-warning/10 p-6 rounded-lg border border-warning/20">
                <p className="text-body text-muted-foreground mb-4">
                  PT KENCANA DUA PUTRA tidak bertanggung jawab atas:
                </p>
                <ul className="space-y-2 text-body text-muted-foreground">
                  <li>• Kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li>• Keterlambatan pengiriman karena force majeure (bencana alam, kerusuhan, dll)</li>
                  <li>• Kerusakan produk setelah diterima oleh pelanggan</li>
                  <li>• Kesalahan penggunaan produk oleh pelanggan</li>
                  <li>• Gangguan teknis atau maintenance website</li>
                </ul>
                <p className="text-body text-muted-foreground mt-4">
                  Tanggung jawab maksimal kami adalah nilai pembelian produk yang bersangkutan.
                </p>
              </div>
            </section>

            {/* Privasi dan Data */}
            <section>
              <h2 className="text-h3 font-semibold mb-4">Privasi dan Data Pribadi</h2>
              <p className="text-body text-muted-foreground mb-4">
                Perlindungan data pribadi Anda adalah prioritas kami. Penggunaan data pribadi 
                diatur dalam Privacy Policy kami yang dapat diakses di:
              </p>
              <div className="bg-surface p-4 rounded-lg">
                <a href="/privacy" className="text-primary hover:underline">
                  kencanaduaputra.co.id/privacy
                </a>
              </div>
            </section>

            {/* Terminasi */}
            <section>
              <h2 className="text-h3 font-semibold mb-4">Terminasi</h2>
              <p className="text-body text-muted-foreground mb-4">
                Kami berhak untuk:
              </p>
              <ul className="space-y-2 text-body text-muted-foreground ml-6">
                <li>• Menangguhkan atau mengakhiri akses Anda ke layanan kami</li>
                <li>• Membatalkan pesanan jika terjadi pelanggaran syarat dan ketentuan</li>
                <li>• Menolak layanan kepada siapa pun dengan alasan yang sah</li>
              </ul>
            </section>

            {/* Perubahan Syarat */}
            <section>
              <h2 className="text-h3 font-semibold mb-4">Perubahan Syarat dan Ketentuan</h2>
              <p className="text-body text-muted-foreground">
                PT KENCANA DUA PUTRA berhak mengubah syarat dan ketentuan ini sewaktu-waktu. 
                Perubahan akan berlaku efektif setelah dipublikasikan di website. 
                Penggunaan layanan berlanjut setelah perubahan dianggap sebagai penerimaan terhadap syarat yang baru.
              </p>
            </section>

            {/* Kontak */}
            <section>
              <h2 className="text-h3 font-semibold mb-4">Hubungi Kami</h2>
              <div className="bg-gradient-primary p-8 rounded-xl text-white">
                <p className="text-body mb-6 opacity-90">
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
                </p>
                <div className="space-y-3">
                  <div>
                    <strong>Email:</strong> legal@kencanaduaputra.co.id
                  </div>
                  <div>
                    <strong>Telepon:</strong> 0823-8246-6172
                  </div>
                  <div>
                    <strong>Alamat:</strong> Ruko 92 Avenix, Blok F No. 7, Jl. Raya Cisauk, 
                    Desa/Kelurahan Sampora, Kec. Cisauk, Kab. Tangerang, Provinsi Banten
                  </div>
                </div>
              </div>
            </section>

            {/* Hukum yang Berlaku */}
            <section>
              <h2 className="text-h3 font-semibold mb-4">Hukum yang Berlaku</h2>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-body text-muted-foreground">
                  Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                  Setiap sengketa yang timbul dari atau berhubungan dengan syarat dan ketentuan ini 
                  akan diselesaikan melalui perundingan baik-baik. Jika tidak mencapai kesepakatan, 
                  sengketa akan diselesaikan melalui Pengadilan Negeri Tangerang.
                </p>
              </div>
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
              <a href="/privacy" className="text-small text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}