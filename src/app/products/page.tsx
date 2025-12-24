'use client'

import { useState } from 'react'
import { Search, Filter, Package, ShoppingCart, Star, ChevronRight, Grid, List, X, Phone } from 'lucide-react'

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    { id: 'all', name: 'Semua Produk', count: 1180 },
    { id: 'pensil', name: 'Pensil & Pulpen', count: 150 },
    { id: 'kertas', name: 'Kertas & Buku', count: 200 },
    { id: 'alat-gambar', name: 'Alat Gambar', count: 100 },
    { id: 'kantor', name: 'Kantor Supplies', count: 300 },
    { id: 'art', name: 'Art Supplies', count: 180 },
    { id: 'storage', name: 'Storage', count: 80 },
    { id: 'printer', name: 'Printer Supplies', count: 120 },
    { id: 'custom', name: 'Custom Items', count: 50 }
  ]

  const products = [
    {
      id: 1,
      name: 'Pilot G2 Gel Pen 0.5mm',
      category: 'pensil',
      price: 15000,
      originalPrice: 20000,
      rating: 4.8,
      reviews: 124,
      image: '/logo.png',
      description: 'Pulpen gel dengan tinta yang halus dan nyaman untuk menulis',
      stock: 150,
      minOrder: 10,
      unit: 'pcs'
    },
    {
      id: 2,
      name: 'Staedtler Noris Pencil HB',
      category: 'pensil',
      price: 8000,
      originalPrice: 12000,
      rating: 4.9,
      reviews: 89,
      image: '/logo.png',
      description: 'Pensil kayu berkualitas tinggi untuk kebutuhan sekolah dan kantor',
      stock: 200,
      minOrder: 12,
      unit: 'pcs'
    },
    {
      id: 3,
      name: 'Paperline A4 80gsm',
      category: 'kertas',
      price: 45000,
      originalPrice: 55000,
      rating: 4.7,
      reviews: 203,
      image: '/logo.png',
      description: 'Kertas A4 berkualitas tinggi untuk printer dan fotokopi',
      stock: 500,
      minOrder: 1,
      unit: 'rim'
    },
    {
      id: 4,
      name: 'Faber-Castell Grip 2009',
      category: 'alat-gambar',
      price: 25000,
      originalPrice: 35000,
      rating: 4.9,
      reviews: 67,
      image: '/logo.png',
      description: 'Pensil warna dengan kualitas premium untuk seni dan desain',
      stock: 80,
      minOrder: 6,
      unit: 'set'
    },
    {
      id: 5,
      name: 'Joyko Stapler HD-10N',
      category: 'kantor',
      price: 35000,
      originalPrice: 45000,
      rating: 4.6,
      reviews: 45,
      image: '/logo.png',
      description: 'Stapler heavy duty untuk kebutuhan kantor yang padat',
      stock: 60,
      minOrder: 1,
      unit: 'pcs'
    },
    {
      id: 6,
      name: 'Copic Sketch Marker',
      category: 'art',
      price: 45000,
      originalPrice: 55000,
      rating: 5.0,
      reviews: 92,
      image: '/logo.png',
      description: 'Marker art profesional dengan kualitas terbaik',
      stock: 40,
      minOrder: 3,
      unit: 'pcs'
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-h2 font-bold mb-4">
              Katalog <span className="text-gradient">Produk</span>
            </h1>
            <p className="text-h3 text-muted-foreground max-w-3xl mx-auto">
              Temukan berbagai macam alat tulis dan gambar berkualitas tinggi untuk kebutuhan bisnis dan institusi Anda.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-surface-subtle border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center px-4 py-3 bg-card border border-border rounded-lg"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filter
            </button>

            {/* View Mode */}
            <div className="flex items-center bg-card border border-border rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className={`mt-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Categories */}
              <div>
                <h3 className="font-semibold mb-3">Kategori</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card hover:bg-surface text-muted-foreground'
                      }`}
                    >
                      {category.name}
                      <span className="ml-2 text-xs opacity-70">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold mb-3">Rentang Harga</h3>
                <div className="bg-card p-4 rounded-lg">
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-muted-foreground">Minimum: Rp {priceRange[0].toLocaleString()}</label>
                      <input
                        type="range"
                        min="0"
                        max="1000000"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Maksimum: Rp {priceRange[1].toLocaleString()}</label>
                      <input
                        type="range"
                        min="0"
                        max="1000000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div>
                <h3 className="font-semibold mb-3">Statistik</h3>
                <div className="bg-card p-4 rounded-lg space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Produk:</span>
                    <span className="font-medium">{filteredProducts.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Kategori Aktif:</span>
                    <span className="font-medium">
                      {selectedCategory === 'all' ? 'Semua' : categories.find(c => c.id === selectedCategory)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Harga Rata-rata:</span>
                    <span className="font-medium">
                      Rp {Math.round(filteredProducts.reduce((acc, p) => acc + p.price, 0) / filteredProducts.length).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-h3 font-semibold mb-2">Tidak Ada Produk Ditemukan</h3>
            <p className="text-body text-muted-foreground">
              Coba ubah filter atau kata kunci pencarian Anda.
            </p>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-200 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  <>
                    {/* Grid View */}
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      {product.originalPrice > product.price && (
                        <div className="absolute top-2 right-2 bg-danger text-white px-2 py-1 rounded-lg text-xs font-medium">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                        </div>
                      )}
                      <div className="absolute top-2 left-2 bg-success/90 text-white px-2 py-1 rounded-lg text-xs font-medium">
                        {product.stock > 50 ? 'Tersedia' : `Stok: ${product.stock}`}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400 text-sm">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground ml-2">({product.reviews})</span>
                      </div>
                      <h3 className="text-h4 font-semibold mb-2">{product.name}</h3>
                      <p className="text-small text-muted-foreground mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-h3 font-bold text-primary">
                            Rp {product.price.toLocaleString()}
                          </div>
                          {product.originalPrice > product.price && (
                            <div className="text-small text-muted-foreground line-through">
                              Rp {product.originalPrice.toLocaleString()}
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground text-right">
                          Min. {product.minOrder} {product.unit}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 btn-primary py-2 rounded-lg font-medium text-sm">
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Tambah
                        </button>
                        <button className="btn-secondary p-2 rounded-lg">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* List View */}
                    <div className="w-48 h-48 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center mb-2">
                            <div className="flex text-yellow-400 text-sm">
                              {[...Array(5)].map((_, i) => (
                                <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground ml-2">({product.reviews})</span>
                          </div>
                          <h3 className="text-h3 font-semibold mb-2">{product.name}</h3>
                          <p className="text-body text-muted-foreground mb-4">
                            {product.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-h2 font-bold text-primary">
                            Rp {product.price.toLocaleString()}
                          </div>
                          {product.originalPrice > product.price && (
                            <div className="text-small text-muted-foreground line-through">
                              Rp {product.originalPrice.toLocaleString()}
                            </div>
                          )}
                          <div className="text-xs text-muted-foreground mt-1">
                            Min. {product.minOrder} {product.unit}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="bg-success/10 text-success px-2 py-1 rounded">
                            {product.stock > 50 ? 'Tersedia' : `Stok: ${product.stock}`}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="bg-danger/10 text-danger px-2 py-1 rounded">
                              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <button className="btn-primary px-4 py-2 rounded-lg font-medium">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Tambah ke Keranjang
                          </button>
                          <button className="btn-secondary p-2 rounded-lg">
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-3 rounded-lg font-semibold">
              Muat Lebih Banyak
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 font-bold text-white mb-4">
            Butuh Bantuan Memilih Produk?
          </h2>
          <p className="text-body text-white/90 mb-8">
            Tim ahli kami siap membantu Anda menemukan produk yang tepat sesuai kebutuhan bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Konsultan
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Katalog
            </button>
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