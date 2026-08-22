"use client";

import { useCallback, useMemo } from "react";

import { CategoryRail } from "@/components/category-rail";
import { FavoritesSheet } from "@/components/favorites-sheet";
import { FeaturedCarousel } from "@/components/featured-carousel";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MenuStoreProvider, useMenuStore } from "@/components/menu-store";
import { MenuSection } from "@/components/menu-section";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { ProductDetailSheet } from "@/components/product-detail-sheet";
import { ScrollProgress } from "@/components/scroll-progress";
import { SearchOverlay } from "@/components/search-overlay";
import { WelcomeCampaigns } from "@/components/welcome-campaigns";
import { VenueInfo } from "@/components/venue-info";
import { campaigns } from "@/data/campaigns";
import { categories } from "@/data/categories";
import { featuredProducts, products, productsByCategory } from "@/data/products";
import { useActiveSection } from "@/hooks/use-active-section";
import type { CategoryId } from "@/types/menu";

const VENUE_SECTION = "mekan";
const FEATURED_SECTION = categories[0].id;

/** Kategori bölümleri — "Öne Çıkanlar" karusel olduğu için ayrı tutulur. */
const menuCategories = categories.slice(1);

export function MenuExperience() {
  return (
    <MenuStoreProvider>
      <Experience />
    </MenuStoreProvider>
  );
}

function Experience() {
  const { panel, activeProductId, openSearch, openFavorites, openProduct, close } =
    useMenuStore();

  const sectionIds = useMemo(
    () => [...categories.map((category) => category.id), VENUE_SECTION],
    [],
  );
  const { activeId, scrollToSection } = useActiveSection(sectionIds);

  const handleCategorySelect = useCallback(
    (id: CategoryId) => scrollToSection(id),
    [scrollToSection],
  );

  const bottomNavActive =
    panel === "search"
      ? "ara"
      : panel === "favorites"
        ? "favoriler"
        : activeId === VENUE_SECTION
          ? "mekan"
          : "menu";

  const handleBottomNav = useCallback(
    (id: "menu" | "ara" | "favoriler" | "mekan") => {
      if (id === "ara") return openSearch();
      if (id === "favoriler") return openFavorites();
      close();
      scrollToSection(id === "mekan" ? VENUE_SECTION : FEATURED_SECTION);
    },
    [close, openFavorites, openSearch, scrollToSection],
  );

  /** Arama veya favorilerden bir ürüne geçiş: panel değişir, kaydırma bozulmaz. */
  const handleSelectProduct = useCallback(
    (id: string) => openProduct(id),
    [openProduct],
  );

  return (
    <>
      <WelcomeCampaigns
        campaigns={campaigns}
        products={products}
        onOpenProduct={handleSelectProduct}
      />
      <ScrollProgress />
      <Header />

      <main
        id="menu-icerigi"
        /* Mobil alt navigasyonun altında içerik kalmasın */
        className="grain relative pb-[calc(72px+env(safe-area-inset-bottom,0px))] md:pb-0"
      >
        <Hero onExplore={() => scrollToSection(FEATURED_SECTION)} />

        <CategoryRail activeId={activeId} onSelect={handleCategorySelect} />

        <FeaturedCarousel
          products={featuredProducts}
          onOpen={handleSelectProduct}
        />

        {menuCategories.map((category) => (
          <MenuSection
            key={category.id}
            category={category}
            products={productsByCategory(
              category.id as Exclude<CategoryId, "one-cikanlar">,
            )}
            onOpen={handleSelectProduct}
          />
        ))}

        <VenueInfo />
      </main>

      <MobileBottomNav active={bottomNavActive} onNavigate={handleBottomNav} />

      <SearchOverlay
        open={panel === "search"}
        onOpenChange={(next) => (next ? openSearch() : close())}
        onSelectProduct={handleSelectProduct}
      />

      <FavoritesSheet
        open={panel === "favorites"}
        onOpenChange={(next) => (next ? openFavorites() : close())}
        onSelectProduct={handleSelectProduct}
      />

      <ProductDetailSheet
        productId={activeProductId}
        open={panel === "product"}
        onOpenChange={(next) => {
          if (!next) close();
        }}
        onSelectProduct={handleSelectProduct}
      />
    </>
  );
}
