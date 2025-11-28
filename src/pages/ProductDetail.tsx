import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, ChevronLeft, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/utils/formatCurrency';
import productsData from '@/data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/products" className="text-brand-blue hover:text-brand-accent">
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      sku: product.sku,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const images = [product.image, product.image, product.image];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-brand-blue hover:text-brand-accent mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="glass-card rounded-2xl overflow-hidden mb-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`glass-card rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-brand-blue' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full aspect-square object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-3 py-1 bg-brand-soft text-brand-success text-sm font-semibold rounded-full">
                In Stock
              </span>
              <span className="text-sm text-muted-foreground">SKU: {product.sku}</span>
            </div>

            <h1 className="text-4xl font-bold text-primary mb-4">{product.name}</h1>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-brand-accent text-brand-accent'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">({product.rating} rating)</span>
            </div>

            <div className="text-5xl font-bold text-brand-accent mb-8">
              {formatCurrency(product.price)}
            </div>

            <div className="mb-8">
              <h2 className="font-bold text-xl mb-3">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="font-bold text-xl mb-3">Features</h2>
              <ul className="space-y-2">
                {product.specs.map((spec, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-brand-success" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 ${
                isAdded
                  ? 'bg-brand-success text-white'
                  : 'bg-brand-accent text-white hover:bg-brand-accent/90'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-6 h-6" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-6 h-6" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
          <div className="space-y-6">
            {product.reviews.map((review, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold">{review.author}</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
