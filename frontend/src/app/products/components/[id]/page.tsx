// app/products/[id]/page.tsx
import { notFound } from 'next/navigation'
import ProductDetail from '../ProductDetail'
import { products } from '../products-data'


interface ProductDetailPageProps {
    params: Promise<{
        id: string
    }>
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
    const { id } = await params
    const product = products.find(p => p.id === parseInt(id))

    return {
        title: product ? `${product.name} - Flexiti Studio` : 'Product Not Found',
        description: product?.description,
    }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
    const { id } = await params
    const product = products.find(p => p.id === parseInt(id))

    if (!product) {
        notFound()
    }

    return (



        <main className="flex flex-col gap-12 mt-10">
            <ProductDetail product={product} />
        </main>


    )
}