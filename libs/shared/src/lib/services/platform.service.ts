import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * PlatformService
 * Servicio global para manejar diferencias entre Browser y Server (SSR).
 * Centraliza todos los accesos a APIs del navegador para evitar errores en SSR.
 */
@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  private platformId = inject(PLATFORM_ID);

  // ─────────────────────────────────────────
  // 1. DETECCIÓN DE PLATAFORMA
  // ─────────────────────────────────────────

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  get isServer(): boolean {
    return !this.isBrowser;
  }

  // ─────────────────────────────────────────
  // 2. WINDOW
  // ─────────────────────────────────────────

  getWindow(): Window | null {
    return this.isBrowser ? window : null;
  }

  /** Navega a una URL externa */
  navigateTo(url: string): void {
    if (this.isBrowser) window.location.href = url;
  }

  /** Abre una nueva pestaña */
  openTab(url: string): void {
    if (this.isBrowser) window.open(url, '_blank');
  }

  /** Scroll al top de la página */
  scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
    if (this.isBrowser) window.scrollTo({ top: 0, behavior });
  }

  /** Scroll a un elemento por ID */
  scrollToElement(id: string, behavior: ScrollBehavior = 'smooth'): void {
    if (!this.isBrowser) return;
    document.getElementById(id)?.scrollIntoView({ behavior });
  }

  /** Dimensiones de la ventana */
  getWindowSize(): { width: number; height: number } | null {
    if (!this.isBrowser) return null;
    return { width: window.innerWidth, height: window.innerHeight };
  }

  // ─────────────────────────────────────────
  // 3. DOCUMENT
  // ─────────────────────────────────────────

  getDocument(): Document | null {
    return this.isBrowser ? document : null;
  }

  /** Cambia el título de la página */
  setTitle(title: string): void {
    if (this.isBrowser) document.title = title;
  }

  /** Agrega/actualiza un meta tag (útil para SEO) */
  setMetaTag(name: string, content: string): void {
    if (!this.isBrowser) return;
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  // ─────────────────────────────────────────
  // 4. LOCALSTORAGE
  // ─────────────────────────────────────────

  setLocalStorage(key: string, value: unknown): void {
    if (!this.isBrowser) return;
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorage<T>(key: string): T | null {
    if (!this.isBrowser) return null;
    const item = localStorage.getItem(key);
    if (!item) return null;
    try {
      return JSON.parse(item) as T;
    } catch {
      return null;
    }
  }

  removeLocalStorage(key: string): void {
    if (this.isBrowser) localStorage.removeItem(key);
  }

  clearLocalStorage(): void {
    if (this.isBrowser) localStorage.clear();
  }

  // ─────────────────────────────────────────
  // 5. SESSIONSTORAGE
  // ─────────────────────────────────────────

  setSessionStorage(key: string, value: unknown): void {
    if (!this.isBrowser) return;
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getSessionStorage<T>(key: string): T | null {
    if (!this.isBrowser) return null;
    const item = sessionStorage.getItem(key);
    if (!item) return null;
    try {
      return JSON.parse(item) as T;
    } catch {
      return null;
    }
  }

  removeSessionStorage(key: string): void {
    if (this.isBrowser) sessionStorage.removeItem(key);
  }

  // ─────────────────────────────────────────
  // 6. COOKIES
  // ─────────────────────────────────────────

  setCookie(name: string, value: string, days = 7): void {
    if (!this.isBrowser) return;
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/`;
  }

  getCookie(name: string): string | null {
    if (!this.isBrowser) return null;
    return (
      document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${name}=`))
        ?.split('=')[1]
        .replace(/%20/g, ' ') ?? null
    );
  }

  deleteCookie(name: string): void {
    if (this.isBrowser) document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  }

  // ─────────────────────────────────────────
  // 7. TIMERS (seguros para SSR)
  // ─────────────────────────────────────────

  /** Crea un setInterval solo en el browser, devuelve el ID para limpiarlo */
  setInterval(callback: () => void, ms: number): ReturnType<typeof setInterval> | null {
    if (!this.isBrowser) return null;
    return setInterval(callback, ms);
  }

  clearInterval(id: ReturnType<typeof setInterval> | null): void {
    if (id !== null) clearInterval(id);
  }

  /** Crea un setTimeout solo en el browser */
  setTimeout(callback: () => void, ms: number): ReturnType<typeof setTimeout> | null {
    if (!this.isBrowser) return null;
    return setTimeout(callback, ms);
  }

  clearTimeout(id: ReturnType<typeof setTimeout> | null): void {
    if (id !== null) clearTimeout(id);
  }

  // ─────────────────────────────────────────
  // 8. EVENTOS DEL WINDOW
  // ─────────────────────────────────────────

  addEventListener<K extends keyof WindowEventMap>(
    event: K,
    callback: (e: WindowEventMap[K]) => void,
    options?: AddEventListenerOptions,
  ): void {
    if (this.isBrowser) window.addEventListener(event, callback, options);
  }

  removeEventListener<K extends keyof WindowEventMap>(
    event: K,
    callback: (e: WindowEventMap[K]) => void,
  ): void {
    if (this.isBrowser) window.removeEventListener(event, callback);
  }

  // ─────────────────────────────────────────
  // 9. CLIPBOARD
  // ─────────────────────────────────────────

  async copyToClipboard(text: string): Promise<boolean> {
    if (!this.isBrowser || !navigator.clipboard) return false;
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }

  // ─────────────────────────────────────────
  // 10. MEDIA QUERIES
  // ─────────────────────────────────────────

  matchMedia(query: string): boolean {
    if (!this.isBrowser) return false;
    return window.matchMedia(query).matches;
  }

  get isMobile(): boolean {
    return this.matchMedia('(max-width: 768px)');
  }

  get isTablet(): boolean {
    return this.matchMedia('(min-width: 769px) and (max-width: 1024px)');
  }

  get isDesktop(): boolean {
    return this.matchMedia('(min-width: 1025px)');
  }

  get prefersDarkMode(): boolean {
    return this.matchMedia('(prefers-color-scheme: dark)');
  }

  get prefersReducedMotion(): boolean {
    return this.matchMedia('(prefers-reduced-motion: reduce)');
  }
}
