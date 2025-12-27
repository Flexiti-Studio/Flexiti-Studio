// app/products/[id]/page.tsx
import { notFound } from 'next/navigation'
import ProductDetail from '../ProductDetail'
import { products } from '../products-data'


interface ProductDetailPageProps {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
    const product = products.find(p => p.id === parseInt(params.id))

    return {
        title: product ? `${product.name} - Flexiti Studio` : 'Product Not Found',
        description: product?.description,
    }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
    const product = products.find(p => p.id === parseInt(params.id))

    if (!product) {
        notFound()
    }

    return (



        <main className="flex flex-col gap-12 mt-10">
            <ProductDetail product={product} />
        </main>


    )
}