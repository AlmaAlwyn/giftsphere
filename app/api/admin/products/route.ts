import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

async function checkAdmin() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "ADMIN") {
    return false;
  }
  return true;
}

export async function GET(req: NextRequest) {
  try {
    if (!await checkAdmin()) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!await checkAdmin()) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();

    const product = await prisma.product.create({
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        price: parseFloat(data.price),
        originalPrice: data.originalPrice ? parseFloat(data.originalPrice) : null,
        discount: data.discount ? parseInt(data.discount) : 0,
        images: data.images || [],
        categoryId: data.categoryId,
        occasion: data.occasion || [],
        priceRange: data.priceRange,
        stockCount: parseInt(data.stockCount) || 0,
        inStock: data.inStock ?? true,
        featured: data.featured ?? false,
      },
    });

    return NextResponse.json({ product }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    if (!await checkAdmin()) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id, ...data } = await req.json();

    const product = await prisma.product.update({
      where: { id },
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        price: data.price ? parseFloat(data.price) : undefined,
        originalPrice: data.originalPrice ? parseFloat(data.originalPrice) : undefined,
        discount: data.discount ? parseInt(data.discount) : undefined,
        images: data.images,
        categoryId: data.categoryId,
        occasion: data.occasion,
        priceRange: data.priceRange,
        stockCount: data.stockCount ? parseInt(data.stockCount) : undefined,
        inStock: data.inStock,
        featured: data.featured,
      },
    });

    return NextResponse.json({ product });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    if (!await checkAdmin()) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await req.json();

    await prisma.product.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
