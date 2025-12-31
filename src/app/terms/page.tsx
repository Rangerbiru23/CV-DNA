'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, AlertCircle, CheckCircle, Gavel, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DNA</span>
              </div>
              <span className="font-bold text-xl text-slate-900">CV DNA</span>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ketentuan penggunaan layanan CV DNA untuk perdagangan tekstil dan digital marketing
            </p>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900">
                  <Gavel className="w-5 h-5 mr-2 text-emerald-600" />
                  Penerimaan Syarat dan Ketentuan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Dengan mengakses dan menggunakan website dan layanan CV DNA, Anda setuju untuk terikat 
                  oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian manapun dari 
                  ketentuan ini, Anda tidak boleh menggunakan layanan kami.
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-semibold text-slate-800 mb-2">Definisi:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li><strong>"Perusahaan":</strong> CV DNA</li>
                    <li><strong>"Layanan":</strong> Perdagangan tekstil dan jasa digital marketing</li>
                    <li><strong>"Pengguna":</strong> Individu atau entitas yang menggunakan layanan kami</li>
                    <li><strong>"Produk":</strong> Barang tekstil dan jasa Meta Ads yang kami tawarkan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900">
                  <CheckCircle className="w-5 h-5 mr-2 text-emerald-600" />
                  Layanan Perdagangan Tekstil
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  CV DNA menyediakan layanan perdagangan besar barang tekstil dengan ketentuan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Kualitas Produk:</strong> Semua produk tekstil yang kami sediakan telah melalui 
                  proses quality control yang ketat sesuai standar industri</li>
                  <li><strong>Spesifikasi Produk:</strong> Informasi mengenai komposisi bahan, ukuran, dan 
                  karakteristik produk akan disediakan secara transparan</li>
                  <li><strong>Harga dan Pembayaran:</strong> Harga yang tercantum adalah harga grosir dan 
                  dapat berubah sesuai kondisi pasar</li>
                  <li><strong>Pengiriman:</strong> Pengiriman akan dilakukan sesuai dengan kesepakatan dan 
                  waktu yang telah ditentukan</li>
                  <li><strong>Garansi:</strong> Kami menyediakan garansi produk untuk cacat produksi 
                  dengan syarat dan ketentuan yang berlaku</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900">
                  <CheckCircle className="w-5 h-5 mr-2 text-emerald-600" />
                  Layanan Digital Marketing (Meta Ads)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Untuk layanan Meta Ads dan digital marketing, berlaku ketentuan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Kampanye Iklan:</strong> Kami akan mengelola kampanye iklan sesuai 
                  dengan strategi yang telah disepakati bersama</li>
                  <li><strong>Budget Iklan:</strong> Budget iklan ditentukan oleh klien dan 
                  harus disetujui sebelum kampanye dimulai</li>
                  <li><strong>Laporan Performa:</strong> Laporan performa kampanye akan disediakan 
                  secara berkala (mingguan/bulanan)</li>
                  <li><strong>Konten Iklan:</strong> Konten iklan harus mematuhi kebijakan Meta dan 
                  peraturan hukum yang berlaku</li>
                  <li><strong>ROI Target:</strong> Target ROI akan ditentukan bersama dan 
                  menjadi acuan evaluasi kinerja kampanye</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900">
                  <AlertCircle className="w-5 h-5 mr-2 text-emerald-600" />
                  Kewajiban Pengguna
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Sebagai pengguna layanan CV DNA, Anda setuju untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Memberikan informasi yang akurat dan lengkap untuk keperluan transaksi</li>
                  <li>Melakukan pembayaran sesuai dengan kesepakatan yang telah ditetapkan</li>
                  <li>Mematuhi semua peraturan dan ketentuan yang berlaku</li>
                  <li>Tidak menggunakan layanan untuk kegiatan yang melanggar hukum</li>
                  <li>Menjaga kerahasiaan informasi bisnis dan tidak membagikannya kepada pihak ketiga</li>
                  <li>Memberikan konfirmasi dan feedback terkait produk dan layanan yang diterima</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Pembayaran dan Tagihan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Ketentuan pembayaran yang berlaku:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Metode Pembayaran:</strong> Transfer bank, tunai, atau metode lain yang disepakati</li>
                  <li><strong>Jatuh Tempo:</strong> Pembayaran harus dilunasi sesuai dengan invoice yang diterbitkan</li>
                  <li><strong>Denda Keterlambatan:</strong> Denda 2% per bulan untuk keterlambatan pembayaran</li>
                  <li><strong>Pembayaran DP:</strong> Untuk pesanan besar, DP minimum 50% diperlukan</li>
                  <li><strong>Pembatalan:</strong> Pembatalan pesanan akan dikenakan biaya administrasi</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Kebijakan Pengembalian</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Kebijakan pengembalian produk:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Cacat Produksi:</strong> Produk dengan cacat produksi dapat dikembalikan dalam 7 hari</li>
                  <li><strong>Kesalahan Pengiriman:</strong> Produk yang salah dikirim akan diganti atau uang dikembalikan</li>
                  <li><strong>Kondisi Pengembalian:</strong> Produk harus dalam kondisi asli dan tidak digunakan</li>
                  <li><strong>Proses Pengembalian:</strong> Pengembalian akan diproses dalam 14 hari kerja</li>
                  <li><strong>Biaya Pengiriman:</strong> Biaya pengiriman pengembalian ditanggung oleh pembeli</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Hak Kekayaan Intelektual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Semua konten, materi, dan desain yang terdapat dalam website CV DNA dilindungi 
                  oleh hak kekayaan intelektual. Anda tidak diperbolehkan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Menggunakan, menyalin, atau mendistribusikan konten tanpa izin tertulis</li>
                  <li>Memodifikasi atau membuat karya turunan dari konten kami</li>
                  <li>Menggunakan merek dagang CV DNA tanpa izin</li>
                  <li>Menyalin desain produk atau materi pemasaran kami</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Batasan Tanggung Jawab</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  CV DNA tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li>Keterlambatan pengiriman yang disebabkan oleh pihak ketiga</li>
                  <li>Kerusakan produk akibat penggunaan yang tidak tepat</li>
                  <li>Perubahan harga pasar yang mempengaruhi nilai produk</li>
                  <li>Gangguan layanan yang disebabkan oleh force majeure</li>
                </ul>
                <p className="text-sm text-slate-500 italic">
                  Maksimal tanggung jawab kami adalah sebesar nilai transaksi yang terkait dengan klaim.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Privasi dan Keamanan Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
                  Informasi lebih lengkap mengenai kebijakan privasi dapat ditemukan di 
                  <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 ml-1">
                    halaman Kebijakan Privasi
                  </Link>
                  kami.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Perubahan Syarat dan Ketentuan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  CV DNA berhak untuk mengubah syarat dan ketentuan ini kapan saja. Perubahan 
                  akan berlaku efektif setelah dipublikasikan di website kami. Pengguna disarankan 
                  untuk secara berkala meninjau syarat dan ketentuan ini.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Penyelesaian Sengketa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Segala sengketa yang timbul dari penggunaan layanan CV DNA akan diselesaikan 
                  melalui:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Negosiasi:</strong> Upaya penyelesaian secara damiah terlebih dahulu</li>
                  <li><strong>Mediasi:</strong> Jika negosiasi gagal, akan dilakukan mediasi</li>
                  <li><strong>Yurisdiksi:</strong> Untuk kasus hukum, berlaku hukum Republik Indonesia</li>
                  <li><strong>Wewenang Pengadilan:</strong> Pengadilan Negeri Depok memiliki yurisdiksi eksklusif</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Kontak Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Jika Anda memiliki pertanyaan mengenai syarat dan ketentuan ini, silakan hubungi:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p><strong>CV DNA</strong></p>
                  <p>Alamat: Kp. Stangkle No.30, Kel. Kemiri Muka, Kec. Beji, Kota Depok, Prov. Jawa Barat</p>
                  <p>Telepon: 085285703497</p>
                  <p>Email: legal@cvdna.com</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center text-slate-500 text-sm">
            <p>Syarat dan Ketentuan ini berlaku efektif sejak: 1 Januari 2024</p>
            <p className="mt-2">Terakhir diperbarui: 1 Januari 2024</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DNA</span>
            </div>
            <span className="font-bold text-xl">CV DNA</span>
          </div>
          <p className="text-slate-400 mb-4">
            Mitra terpercaya untuk perdagangan tekstil dan solusi digital marketing
          </p>
          <div className="flex justify-center space-x-6 text-sm text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Beranda</Link>
            <Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="#contact" className="hover:text-emerald-400 transition-colors">Kontak</Link>
          </div>
          <div className="border-t border-slate-800 mt-6 pt-6 text-slate-400">
            <p>&copy; 2024 CV DNA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}