'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, Eye, Lock, UserCheck, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
              <Shield className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              CV DNA berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda
            </p>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900">
                  <Eye className="w-5 h-5 mr-2 text-emerald-600" />
                  Informasi yang Kami Kumpulkan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Kami dapat mengumpulkan berbagai jenis informasi untuk menyediakan layanan terbaik kepada Anda:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat pengiriman</li>
                  <li><strong>Informasi Bisnis:</strong> Nama perusahaan, bidang usaha, kebutuhan produk</li>
                  <li><strong>Informasi Transaksi:</strong> Riwayat pembelian, preferensi produk, komunikasi bisnis</li>
                  <li><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, waktu akses, data penggunaan website</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900">
                  <Lock className="w-5 h-5 mr-2 text-emerald-600" />
                  Cara Kami Menggunakan Informasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Informasi yang kami kumpulkan digunakan untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Menyediakan produk dan layanan tekstil yang Anda butuhkan</li>
                  <li>Mengelola kampanye Meta Ads dan pemasaran digital</li>
                  <li>Memproses pesanan dan pengiriman produk</li>
                  <li>Memberikan dukungan pelanggan yang responsif</li>
                  <li>Mengirimkan informasi produk dan penawaran khusus</li>
                  <li>Meningkatkan kualitas layanan dan pengalaman pengguna</li>
                  <li>Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-slate-900">
                  <UserCheck className="w-5 h-5 mr-2 text-emerald-600" />
                  Berbagi Informasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga untuk keperluan pemasaran tanpa persetujuan Anda. Informasi Anda mungkin dibagikan dalam keadaan berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Penyedia Layanan:</strong> Pihak ketiga yang membantu kami mengoperasikan bisnis (payment processors, shipping companies)</li>
                  <li><strong>Kepatuhan Hukum:</strong> Jika diwajibkan oleh hukum atau untuk melindungi hak, properti, atau keselamatan kami</li>
                  <li><strong>Transfer Bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan aset perusahaan</li>
                  <li><strong>Dengan Persetujuan:</strong> Ketika Anda memberikan persetujuan eksplisit untuk berbagi informasi</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Keamanan Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Kami mengimplementasikan berbagai langkah keamanan untuk melindungi informasi pribadi Anda:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Enkripsi data selama transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke informasi pribadi bagi karyawan yang berwenang</li>
                  <li>System monitoring dan security audits secara berkala</li>
                  <li>Compliance dengan standar keamanan industri</li>
                </ul>
                <p className="text-sm text-slate-500 italic">
                  Namun, perlu diingat bahwa tidak ada metode transmisi internet atau penyimpanan elektronik yang 100% aman.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Hak Privasi Anda</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Sebagai pengguna, Anda memiliki hak-hak berikut mengenai data pribadi Anda:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                  <li><strong>Koreksi:</strong> Memperbarui atau memperbaiki informasi yang tidak akurat</li>
                  <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi Anda</li>
                  <li><strong>Pembatasan:</strong> Membatasi pemrosesan data pribadi Anda</li>
                  <li><strong>Portabilitas:</strong> Meminta transfer data ke pihak ketiga</li>
                  <li><strong>Penolakan:</strong> Menolak pemrosesan data untuk tujuan pemasaran</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Kebijakan Cookie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Cookie Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                  <li><strong>Cookie Performa:</strong> Membantu kami memahami cara penggunaan website</li>
                  <li><strong>Cookie Fungsional:</strong> Mengingat preferensi dan pengaturan Anda</li>
                  <li><strong>Cookie Pemasaran:</strong> Digunakan untuk kampanye Meta Ads dan iklan yang relevan</li>
                </ul>
                <p>
                  Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Perubahan Kebijakan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pemberitahuan di website kami</li>
                  <li>Email kepada pengguna terdaftar</li>
                  <li>Pembaruan tanggal "Terakhir Diperbarui"</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Kontak Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600">
                <p>
                  Jika Anda memiliki pertanyaan atau kekhawatiran mengenai kebijakan privasi kami, silakan hubungi:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p><strong>CV DNA</strong></p>
                  <p>Alamat: Kp. Stangkle No.30, Kel. Kemiri Muka, Kec. Beji, Kota Depok, Prov. Jawa Barat</p>
                  <p>Telepon: 085285703497</p>
                  <p>Email: privacy@cvdna.com</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center text-slate-500 text-sm">
            <p>Kebijakan Privasi ini berlaku efektif sejak: 1 Januari 2024</p>
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
            <Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms & Conditions</Link>
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