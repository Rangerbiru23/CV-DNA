'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Palette, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Globe, 
  Package,
  Users,
  Award,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState("textile")

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
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-600 hover:text-emerald-600 transition-colors">Beranda</a>
              <a href="#about" className="text-slate-600 hover:text-emerald-600 transition-colors">Tentang</a>
              <a href="#services" className="text-slate-600 hover:text-emerald-600 transition-colors">Layanan</a>
              <a href="#contact" className="text-slate-600 hover:text-emerald-600 transition-colors">Kontak</a>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Konsultasi Gratis</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                <Package className="w-4 h-4 mr-2" />
                Perdagangan Besar Tekstil
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  CV DNA
                </span>
                <br />
                Solusi Tekstil & Digital Marketing Terpercaya
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Mitra utama dalam perdagangan besar tekstil berkualitas tinggi dan 
                strategi Meta Ads yang efektif untuk mengembangkan bisnis Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Mulai Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  Lihat Katalog
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="/images/textile-factory.png" 
                  alt="Modern Textile Factory"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Palette className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">Tekstil Premium</h3>
                      <p className="text-sm text-slate-600">Kualitas terbaik</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Target className="w-8 h-8 text-teal-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">Meta Ads Expert</h3>
                      <p className="text-sm text-slate-600">Target tepat sasaran</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <TrendingUp className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">Berkembang Pesat</h3>
                      <p className="text-sm text-slate-600">ROI maksimal</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Globe className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-slate-900">Jangkauan Luas</h3>
                      <p className="text-sm text-slate-600">Nasional & Internasional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Layanan Unggulan Kami
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Solusi komprehensif untuk kebutuhan tekstil dan pemasaran digital Anda
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="textile" className="text-base py-3">
                <Package className="w-5 h-5 mr-2" />
                Perdagangan Tekstil
              </TabsTrigger>
              <TabsTrigger value="meta" className="text-base py-3">
                <BarChart3 className="w-5 h-5 mr-2" />
                Meta Ads Services
              </TabsTrigger>
            </TabsList>

            <TabsContent value="textile" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <img 
                      src="/images/textile-products.png" 
                      alt="Textile Products"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      <Package className="w-6 h-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-slate-900">Supplier Tekstil Terpercaya</CardTitle>
                    <CardDescription>Menyediakan berbagai jenis tekstil berkualitas tinggi untuk kebutuhan industri</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Kain katun premium</li>
                      <li>• Polyester berkualitas</li>
                      <li>• Tekstil sintetis</li>
                      <li>• Bahan baku garment</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-teal-600" />
                    </div>
                    <CardTitle className="text-slate-900">Partnership B2B</CardTitle>
                    <CardDescription>Kemitraan bisnis yang saling menguntungkan untuk jangka panjang</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Harga grosir kompetitif</li>
                      <li>• Pengiriman tepat waktu</li>
                      <li>• Kualitas terjamin</li>
                      <li>• Support 24/7</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <img 
                      src="/images/business-partnership.png" 
                      alt="Business Partnership"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-slate-900">Quality Control</CardTitle>
                    <CardDescription>Standar kualitas tinggi untuk setiap produk yang kami sediakan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Inspeksi ketat</li>
                      <li>• Sertifikasi produk</li>
                      <li>• Garansi kualitas</li>
                      <li>• Return policy</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="meta" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <img 
                      src="/images/meta-ads-team.png" 
                      alt="Meta Ads Team"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-slate-900">Meta Ads Campaign</CardTitle>
                    <CardDescription>Strategi iklan yang efektif di Facebook dan Instagram</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Target audience precision</li>
                      <li>• A/B testing</li>
                      <li>• Conversion optimization</li>
                      <li>• ROI tracking</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                      <BarChart3 className="w-6 h-6 text-pink-600" />
                    </div>
                    <CardTitle className="text-slate-900">Social Media Marketing</CardTitle>
                    <CardDescription>Manajemen konten dan engagement di platform sosial media</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Content strategy</li>
                      <li>• Community management</li>
                      <li>• Influencer partnership</li>
                      <li>• Analytics report</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-indigo-600" />
                    </div>
                    <CardTitle className="text-slate-900">Digital Growth</CardTitle>
                    <CardDescription>Solusi lengkap untuk pertumbuhan bisnis digital Anda</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Market research</li>
                      <li>• Competitor analysis</li>
                      <li>• Growth hacking</li>
                      <li>• Performance monitoring</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Mengapa Memilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">CV DNA</span>?
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Sebagai pemimpin dalam industri perdagangan tekstil dan pemasaran digital, 
                kami menggabungkan keahlian tradisional dengan inovasi teknologi terkini.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Berpengalaman & Terpercaya</h4>
                    <p className="text-slate-600">Years of experience in textile industry and digital marketing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Kualitas Terjamin</h4>
                    <p className="text-slate-600">Premium quality products and proven marketing strategies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Harga Kompetitif</h4>
                    <p className="text-slate-600">Best value for money with flexible pricing options</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                  <p className="text-slate-600">Klien Puas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">10+</div>
                  <p className="text-slate-600">Tahun Pengalaman</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <p className="text-slate-600">Produk Tekstil</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                  <p className="text-slate-600">Tingkat Kepuasan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-slate-600">
              Siap untuk memulai kerjasama? Tim kami siap membantu Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Alamat</h4>
                    <p className="text-slate-600">
                      Kp. Stangkle No.30, Kel. Kemiri Muka, Kec. Beji, Kota Depok, Prov. Jawa Barat
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Telepon</h4>
                    <p className="text-slate-600">085285703497</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">info@cvdna.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">Kirim Pesan</CardTitle>
                  <CardDescription>
                    Isi form di bawah ini dan tim kami akan segera menghubungi Anda
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-none"
                      placeholder="Tuliskan pesan Anda..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    Kirim Pesan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DNA</span>
                </div>
                <span className="font-bold text-xl">CV DNA</span>
              </div>
              <p className="text-slate-400">
                Mitra terpercaya untuk perdagangan tekstil dan solusi digital marketing.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Perdagangan Tekstil</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Meta Ads</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Social Media Marketing</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Digital Growth</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms & Conditions</a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-slate-400 mb-4">
                Dapatkan informasi terbaru tentang produk dan promosi kami
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white placeholder-slate-400"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 CV DNA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}