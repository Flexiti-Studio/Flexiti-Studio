import { notFound } from 'next/navigation'
import ProductDetail from '../components/ProductDetail'
import { products as staticProducts } from '../components/products-data'
import client from '@/sanity/client'
import { Product } from '../components/types'

interface ProductDetailPageProps {
    params: Promise<{
        id: string
    }>
}

async function getProduct(id: string): Promise<Product | null> {
    // 1. Try to fetch from Sanity
    try {
        const query = `
          *[_type == "product" && (_id == $id || slug.current == $id)][0] {
            "id": _id,
            title,
            description,
            category,
            status,
            "image": mainImage.asset->url,
            alt,
            isFeatured,
            features,
            icon,
            color,
            reverse,
            order
          }
        `
        const sanityProduct = await client.fetch(query, { id })
        if (sanityProduct) {
            return {
                id: sanityProduct.id,
                name: sanityProduct.title,
                description: sanityProduct.description,
                category: sanityProduct.category,
                image: sanityProduct.image,
                alt: sanityProduct.alt || sanityProduct.title,
                features: sanityProduct.features || [],
                status: sanityProduct.status === 'Live' ? 'active' : sanityProduct.status === 'Beta' ? 'beta' : 'coming-soon',
                tags: [sanityProduct.category],
                pricing: { type: 'freemium' }
            }
        }
    } catch (error) {
        console.error('Error fetching product from Sanity:', error)
    }

    // 2. Fallback to static data (by numeric id or slug)
    const staticProduct = staticProducts.find(
        p => p.id.toString() === id || p.name.toLowerCase().replace(/\s+/g, '-') === id.toLowerCase()
    )
    return staticProduct || null
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
    const { id } = await params
    const product = await getProduct(id)

    return {
        title: product ? `${product.name} - Flexiti Studio` : 'Product Not Found',
        description: product?.description,
    }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
    const { id } = await params
    const product = await getProduct(id)

    if (!product) {
        notFound()
    }

    return (
        <main className="flex flex-col gap-12 mt-10 max-w-7xl mx-auto px-8 py-24 min-h-screen text-white">
            <ProductDetail product={product} />
        </main>
    )
}
