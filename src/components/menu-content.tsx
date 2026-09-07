"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

import type { Category, MenuContent, Product } from "@/types/menu";

interface MenuContentValue extends MenuContent {
  /** Karusel olarak gösterilen ilk kategori ("Öne Çıkanlar"). */
  featuredCategory: Category | undefined;
  /** Bölüm olarak listelenen kategoriler — karusel kategorisi hariç. */
  menuCategories: Category[];
  /** "Baristanın Seçimleri" karuselindeki ürünler. */
  featuredProducts: Product[];
  getProductById: (id: string) => Product | undefined;
  productsByCategory: (categoryId: Product["categoryId"]) => Product[];
  /** Detay panelindeki benzer ürünler — aynı kategoriden, kendisi hariç. */
  getRelatedProducts: (product: Product, limit?: number) => Product[];
  /** Kategori kimliğinden görünen ad. */
  categoryName: (categoryId: string) => string | undefined;
}

const MenuContentContext = createContext<MenuContentValue | null>(null);

/**
 * Sunucuda okunan menü içeriğini istemci bileşenlerine dağıtır.
 * Sık kullanılan aramalar (kimliğe / kategoriye göre) burada bir kez kurulur.
 */
export function MenuContentProvider({
  content,
  children,
}: {
  content: MenuContent;
  children: ReactNode;
}) {
  const value = useMemo<MenuContentValue>(() => {
    const { products, categories } = content;

    const byId = new Map(products.map((product) => [product.id, product]));
    const names = new Map<string, string>(
      categories.map((category) => [category.id, category.name]),
    );
    const byCategory = new Map<string, Product[]>();
    for (const product of products) {
      const list = byCategory.get(product.categoryId);
      if (list) list.push(product);
      else byCategory.set(product.categoryId, [product]);
    }

    return {
      ...content,
      featuredCategory: categories[0],
      menuCategories: categories.slice(1),
      featuredProducts: products.filter((product) => product.featured),
      getProductById: (id) => byId.get(id),
      productsByCategory: (categoryId) => byCategory.get(categoryId) ?? [],
      getRelatedProducts: (product, limit = 6) =>
        (byCategory.get(product.categoryId) ?? [])
          .filter((item) => item.id !== product.id)
          .slice(0, limit),
      categoryName: (categoryId) => names.get(categoryId),
    };
  }, [content]);

  return (
    <MenuContentContext.Provider value={value}>{children}</MenuContentContext.Provider>
  );
}

export function useMenuContent() {
  const value = useContext(MenuContentContext);
  if (!value) {
    throw new Error("useMenuContent, MenuContentProvider içinde kullanılmalıdır.");
  }
  return value;
}
