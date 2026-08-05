export type CartItem = {
  id: string;
  name: string;
  image: string;
  link?: string;
  quantity: number;
};

const CART_STORAGE_KEY = "lorveniq-cart";

function isBrowser() {
  return typeof window !== "undefined";
}

export function getCartItems(): CartItem[] {
  if (!isBrowser()) {
    return [];
  }

  const raw = window.localStorage.getItem(CART_STORAGE_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed;
  } catch {
    return [];
  }
}

export function saveCartItems(items: CartItem[]) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("cart-updated"));
}

export function addCartItem(item: Omit<CartItem, "quantity">) {
  const existing = getCartItems();
  const index = existing.findIndex((entry) => entry.id === item.id);

  if (index >= 0) {
    existing[index].quantity += 1;
    saveCartItems(existing);
    return existing;
  }

  const updated = [...existing, { ...item, quantity: 1 }];
  saveCartItems(updated);
  return updated;
}

export function updateCartItemQuantity(itemId: string, quantity: number) {
  const existing = getCartItems();
  const updated = existing
    .map((item) => (item.id === itemId ? { ...item, quantity } : item))
    .filter((item) => item.quantity > 0);

  saveCartItems(updated);
  return updated;
}

export function removeCartItem(itemId: string) {
  const existing = getCartItems();
  const updated = existing.filter((item) => item.id !== itemId);
  saveCartItems(updated);
  return updated;
}

export function clearCartItems() {
  saveCartItems([]);
  return [] as CartItem[];
}
