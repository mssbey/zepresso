"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { VisuallyHidden } from "radix-ui";

import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dialog as DialogPrimitive } from "radix-ui";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useIsDesktop } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

/**
 * Tek bir içeriği iki farklı kabukta sunar:
 * - Mobil: aşağıdan açılan, sürüklenebilir bottom sheet (vaul).
 * - Masaüstü: ortalanmış modal ya da sağdan açılan panel (Radix Dialog).
 *
 * Her iki kabuk da ESC, dışarı tıklama ve kapat düğmesini destekler;
 * gövde kaydırma kilidi kütüphaneler tarafından yönetilir, çakışmaz.
 */
export function ResponsiveSheet({
  open,
  onOpenChange,
  title,
  description,
  desktopVariant = "modal",
  contentClassName,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Ekran okuyucular için zorunlu başlık. */
  title: string;
  description?: string;
  desktopVariant?: "modal" | "side";
  contentClassName?: string;
  children: ReactNode;
}) {
  const isDesktop = useIsDesktop();

  if (!isDesktop) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange} repositionInputs={false}>
        <DrawerContent
          className={cn(
            "max-h-[92svh] border-t border-white/10 bg-[#0b0e11] p-0 text-ink",
            "after:!bg-transparent [&>div:first-child]:mt-3 [&>div:first-child]:h-1.5 [&>div:first-child]:w-11 [&>div:first-child]:bg-white/18",
            contentClassName,
          )}
        >
          <VisuallyHidden.Root>
            <DrawerTitle>{title}</DrawerTitle>
            {description && <DrawerDescription>{description}</DrawerDescription>}
          </VisuallyHidden.Root>

          <DrawerClose asChild>
            <CloseButton className="absolute top-3 right-3 z-30" />
          </DrawerClose>

          {children}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/72 backdrop-blur-[6px]" />
        <DialogPrimitive.Content
          className={cn(
            "fixed z-50 flex flex-col overflow-hidden bg-[#0b0e11] text-ink shadow-[0_40px_120px_-40px_rgba(0,0,0,1)] outline-none",
            "ring-1 ring-white/10",
            "data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0 duration-300",
            desktopVariant === "modal"
              ? "top-1/2 left-1/2 max-h-[88vh] w-[min(880px,calc(100vw-4rem))] -translate-x-1/2 -translate-y-1/2 rounded-3xl data-open:zoom-in-95 data-closed:zoom-out-95"
              : "inset-y-0 right-0 w-[min(460px,100vw)] border-l border-white/10 data-open:slide-in-from-right data-closed:slide-out-to-right",
            contentClassName,
          )}
        >
          <VisuallyHidden.Root>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </VisuallyHidden.Root>

          <DialogClose asChild>
            <CloseButton className="absolute top-4 right-4 z-30" />
          </DialogClose>

          {children}
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}

function CloseButton({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      aria-label="Kapat"
      className={cn(
        "grid size-9 place-items-center rounded-full bg-[#0b0e11]/80 text-ink ring-1 ring-inset ring-white/12 backdrop-blur-md transition-[background-color,transform] duration-300 hover:bg-white/10 active:scale-90",
        className,
      )}
      {...props}
    >
      <X className="size-4" strokeWidth={2.4} aria-hidden="true" />
    </button>
  );
}
