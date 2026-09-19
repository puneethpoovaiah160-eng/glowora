import { type FormEvent, type ReactNode, createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Link, Route, Switch, useLocation, useRoute } from 'wouter';
import { ArrowRight, Check, CheckCircle2, ChevronDown, Clock3, Droplets, Instagram, Leaf, Mail, MapPin, Menu, Minus, PackageCheck, Plus, ShieldCheck, ShoppingBag, Sparkles, Sun, Trash2, X } from 'lucide-react';
import image1 from '@assets/imported_slides/divyaecomercep_1789828439461/assets/images/image_1.jpg';
import image2 from '@assets/imported_slides/divyaecomercep_1789828439461/assets/images/image_2.jpg';
import image3 from '@assets/imported_slides/divyaecomercep_1789828439461/assets/images/image_3.jpg';
import image5 from '@assets/imported_slides/divyaecomercep_1789828439461/assets/images/image_5.jpg';
import image6 from '@assets/imported_slides/divyaecomercep_1789828439461/assets/images/image_6.jpg';
import image7 from '@assets/imported_slides/divyaecomercep_1789828439461/assets/images/image_7.jpg';
import image8 from '@assets/imported_slides/divyaecomercep_1789828439461/assets/images/image_8.jpg';
import image9 from '@assets/imported_slides/divyaecomercep_1789828439461/assets/images/image_9.jpg';
import image10 from '@assets/imported_slides/divyaecomercep_1789828439461/assets/images/image_10.jpg';
import image11 from '@assets/imported_slides/divyaecomercep_1789828439461/assets/images/image_11.jpg';
import image14 from '@assets/imported_slides/divyaecomercep_1789828439461/assets/images/image_14.jpg';
import image15 from '@assets/imported_slides/divyaecomercep_1789828439461/assets/images/image_15.jpg';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ErrorBoundary } from '@/components/error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router as WouterRouter } from 'wouter';

type Product = {
  slug: string;
  name: string;
  eyebrow: string;
  category: 'Cleanse' | 'Hydrate' | 'Protect' | 'Sets';
  price: number;
  description: string;
  image: string;
  accent: string;
  size: string;
  ingredients: string;
  use: string;
};

type CartLine = { product: Product; quantity: number };
type OrderStatus = 'Placed' | 'Packed' | 'Shipped' | 'Delivered';
type OrderCustomer = {
  name: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
};
type Order = {
  id: string;
  createdAt: string;
  status: OrderStatus;
  customer: OrderCustomer;
  lines: CartLine[];
  total: number;
};

const products: Product[] = [
  { slug: 'gentle-face-wash', name: 'Gentle Face Wash', eyebrow: 'Cleanse · 100 ml', category: 'Cleanse', price: 299, description: 'A soft, low-foam cleanse that leaves skin feeling fresh, never tight.', image: image2, accent: '#e9bfb9', size: '100 ml', ingredients: 'Aloe vera, oat extract, and a gentle blend of plant-derived cleansers.', use: 'Massage one pump onto damp skin morning and evening. Rinse with lukewarm water.' },
  { slug: 'hydrating-moisturizer', name: 'Hydrating Moisturizer', eyebrow: 'Hydrate · 50 g', category: 'Hydrate', price: 399, description: 'A cushiony daily cream that brings calm, lasting hydration to your skin barrier.', image: image14, accent: '#bbceae', size: '50 g', ingredients: 'Hyaluronic acid, squalane, and calendula for comfort that lasts all day.', use: 'Smooth a pea-sized amount over clean skin. Use morning and night.' },
  { slug: 'daily-sunscreen', name: 'Daily Sunscreen', eyebrow: 'Protect · SPF 30', category: 'Protect', price: 449, description: 'Lightweight, everyday protection with a dewy finish and no heavy white cast.', image: image15, accent: '#e7cda7', size: '50 ml', ingredients: 'Broad-spectrum mineral filters with vitamin E and a skin-softening finish.', use: 'Apply generously as the last step of your morning ritual. Reapply every two hours outdoors.' },
  { slug: 'daily-glow-set', name: 'Daily Glow Set', eyebrow: 'Cleanse · Hydrate · Protect', category: 'Sets', price: 899, description: 'The simple three-step ritual for skin that feels healthy, hydrated, and quietly luminous.', image: image5, accent: '#d9b7a4', size: '3-piece set', ingredients: 'Gentle Face Wash, Hydrating Moisturizer, and Daily Sunscreen.', use: 'Cleanse, hydrate, then protect. Keep the rhythm simple and repeat daily.' },
];

const formatPrice = (value: number) => `₹${value.toLocaleString('en-IN')}`;

type StoreContextValue = {
  lines: CartLine[];
  count: number;
  total: number;
  add: (product: Product, quantity?: number) => void;
  remove: (slug: string) => void;
  changeQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
  orders: Order[];
  placeOrder: (customer: OrderCustomer) => string;
  bagOpen: boolean;
  setBagOpen: (open: boolean) => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);
const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) throw new Error('Store context is unavailable');
  return context;
};

function StoreProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    try { return JSON.parse(localStorage.getItem('glowora-bag') || '[]') as CartLine[]; } catch { return []; }
  });
  const [orders, setOrders] = useState<Order[]>(() => {
    try { return JSON.parse(localStorage.getItem('glowora-orders') || '[]') as Order[]; } catch { return []; }
  });
  const [bagOpen, setBagOpen] = useState(false);
  useEffect(() => { localStorage.setItem('glowora-bag', JSON.stringify(lines)); }, [lines]);
  useEffect(() => { localStorage.setItem('glowora-orders', JSON.stringify(orders)); }, [orders]);
  const value = useMemo<StoreContextValue>(() => ({
    lines,
    count: lines.reduce((sum, line) => sum + line.quantity, 0),
    total: lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0),
    add: (product, quantity = 1) => setLines(current => {
      const existing = current.find(line => line.product.slug === product.slug);
      if (existing) return current.map(line => line.product.slug === product.slug ? { ...line, quantity: line.quantity + quantity } : line);
      return [...current, { product, quantity }];
    }),
    remove: slug => setLines(current => current.filter(line => line.product.slug !== slug)),
    changeQuantity: (slug, quantity) => setLines(current => quantity < 1 ? current.filter(line => line.product.slug !== slug) : current.map(line => line.product.slug === slug ? { ...line, quantity } : line)),
    clear: () => setLines([]),
    orders,
    placeOrder: customer => {
      const order: Order = {
        id: `GW-${Date.now().toString().slice(-6)}`,
        createdAt: new Date().toISOString(),
        status: 'Placed',
        customer,
        lines,
        total: lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0),
      };
      setOrders(current => [order, ...current]);
      setLines([]);
      return order.id;
    },
    bagOpen,
    setBagOpen,
  }), [lines, orders, bagOpen]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

const NavigationContext = createContext<{ previousPath: string }>({ previousPath: '/' });
function NavigationHistory({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const lastLocation = useRef(location);
  const [previousPath, setPreviousPath] = useState('/');
  useEffect(() => {
    if (lastLocation.current !== location) {
      setPreviousPath(lastLocation.current);
      lastLocation.current = location;
    }
  }, [location]);
  return <NavigationContext.Provider value={{ previousPath }}>{children}</NavigationContext.Provider>;
}

function BackLink({ fallback = '/', label = 'Back' }: { fallback?: string; label?: string }) {
  const [location] = useLocation();
  const { previousPath } = useContext(NavigationContext);
  const href = previousPath && previousPath !== location ? previousPath : fallback;
  return <Link href={href} className="focus-ring mb-8 inline-flex w-fit items-center gap-2 text-xs font-medium text-[#667360] transition-colors hover:text-[#486841]" data-testid="link-back">
    <ArrowRight size={14} className="rotate-180" /> {label}
  </Link>;
}

function Header() {
  const [location] = useLocation();
  const { count, bagOpen, setBagOpen } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [{ href: '/shop', label: 'Shop' }, { href: '/orders', label: 'Orders' }, { href: '/about', label: 'Our story' }, { href: '/contact', label: 'Contact' }];
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-[#486841]/15 bg-[#f8f4e9]/95 backdrop-blur-md">
        <div className="container-glowora flex h-[74px] items-center justify-between gap-5">
          <Link href="/" className="focus-ring flex items-center gap-2.5" data-testid="link-logo">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#486841] text-[#f8f4e9]"><Leaf size={17} strokeWidth={1.7} /></span>
            <span className="font-display text-[1.5rem] tracking-[-.03em] text-[#486841]">glowora</span>
          </Link>
          <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
            {nav.map(item => <Link key={item.href} href={item.href} className={`focus-ring text-[.79rem] font-medium tracking-[.08em] transition-colors hover:text-[#486841] ${location === item.href ? 'text-[#486841]' : 'text-[#667360]'}`} data-testid={`link-nav-${item.label.toLowerCase().replace(' ', '-')}`}>{item.label}</Link>)}
          </nav>
          <div className="flex items-center gap-3">
            <button className="focus-ring relative flex items-center gap-2 rounded-full px-2 py-2 text-[#486841] transition-colors hover:bg-[#bbceae]/40" onClick={() => setBagOpen(true)} aria-label={`Open bag with ${count} items`} data-testid="button-open-bag">
              <ShoppingBag size={19} strokeWidth={1.6} /><span className="hidden text-[.76rem] font-medium sm:inline">Bag</span>
              <span className="flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#e9bfb9] px-1 text-[.67rem] font-semibold text-[#31452f]" data-testid="text-bag-count">{count}</span>
            </button>
            <button className="focus-ring rounded-full p-2 text-[#486841] md:hidden" onClick={() => setMenuOpen(value => !value)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-toggle-menu">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </div>
        {menuOpen && <div className="border-t border-[#486841]/15 bg-[#f8f4e9] px-5 py-5 md:hidden">
          <nav className="container-glowora flex flex-col gap-4" aria-label="Mobile navigation">
            {nav.map(item => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="focus-ring border-b border-[#486841]/10 pb-3 text-[.85rem] font-medium tracking-[.08em] text-[#486841]" data-testid={`link-mobile-${item.label.toLowerCase().replace(' ', '-')}`}>{item.label}</Link>)}
          </nav>
        </div>}
      </header>
      {bagOpen && <BagDrawer />}
    </>
  );
}

function BagDrawer() {
  const { lines, total, setBagOpen, changeQuantity, remove } = useStore();
  return <div className="bag-overlay fixed inset-0 z-40" role="dialog" aria-modal="true" aria-label="Shopping bag" data-testid="drawer-shopping-bag">
    <button className="absolute inset-0 bg-[#263723]/35" onClick={() => setBagOpen(false)} aria-label="Close shopping bag" data-testid="button-close-bag-overlay" />
    <aside className="bag-panel absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col bg-[#f8f4e9] p-6 shadow-2xl sm:p-8">
      <div className="flex items-center justify-between border-b border-[#486841]/15 pb-5">
        <div><p className="eyebrow text-[#486841]/70">Your ritual</p><h2 className="font-display mt-1 text-2xl text-[#486841]">Shopping bag</h2></div>
        <button className="focus-ring rounded-full p-2 text-[#486841] hover:bg-[#bbceae]/40" onClick={() => setBagOpen(false)} aria-label="Close shopping bag" data-testid="button-close-bag"><X size={20} /></button>
      </div>
      {lines.length === 0 ? <div className="flex flex-1 flex-col items-center justify-center text-center">
        <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#bbceae]/45 text-[#486841]"><ShoppingBag size={26} strokeWidth={1.4} /></span>
        <h3 className="font-display text-2xl text-[#486841]">Your bag is taking a breath.</h3>
        <p className="mt-2 max-w-[250px] text-sm leading-6 text-[#667360]">Begin with one small step toward your daily glow.</p>
        <Link href="/shop" onClick={() => setBagOpen(false)} className="focus-ring mt-6 rounded-full bg-[#486841] px-6 py-3 text-xs font-semibold tracking-[.08em] text-[#f8f4e9] transition-transform hover:-translate-y-0.5" data-testid="link-bag-shop">Explore the collection</Link>
      </div> : <>
        <div className="flex-1 overflow-auto py-5">
          {lines.map(line => <div className="flex gap-4 border-b border-[#486841]/10 py-4" key={line.product.slug} data-testid={`row-bag-${line.product.slug}`}>
            <img src={line.product.image} alt="" className="h-24 w-20 rounded-lg object-cover" />
            <div className="min-w-0 flex-1"><div className="flex justify-between gap-2"><div><p className="text-sm font-medium text-[#31452f]">{line.product.name}</p><p className="mt-1 text-xs text-[#667360]">{formatPrice(line.product.price)}</p></div><button className="focus-ring text-[#667360] hover:text-[#486841]" onClick={() => remove(line.product.slug)} aria-label={`Remove ${line.product.name}`} data-testid={`button-remove-${line.product.slug}`}><Trash2 size={16} /></button></div>
              <div className="mt-4 flex w-fit items-center gap-3 rounded-full border border-[#486841]/20 px-2 py-1"><button className="focus-ring p-1 text-[#486841]" onClick={() => changeQuantity(line.product.slug, line.quantity - 1)} aria-label={`Decrease ${line.product.name} quantity`} data-testid={`button-decrease-${line.product.slug}`}><Minus size={13} /></button><span className="min-w-4 text-center text-xs" data-testid={`text-quantity-${line.product.slug}`}>{line.quantity}</span><button className="focus-ring p-1 text-[#486841]" onClick={() => changeQuantity(line.product.slug, line.quantity + 1)} aria-label={`Increase ${line.product.name} quantity`} data-testid={`button-increase-${line.product.slug}`}><Plus size={13} /></button></div>
            </div>
          </div>)}
        </div>
        <div className="border-t border-[#486841]/15 pt-5"><div className="flex justify-between text-sm"><span className="text-[#667360]">Subtotal</span><strong className="text-[#31452f]" data-testid="text-bag-total">{formatPrice(total)}</strong></div><p className="mt-2 text-xs leading-5 text-[#667360]">Shipping is calculated at checkout. Orders over ₹999 ship free.</p><Link href="/checkout" onClick={() => setBagOpen(false)} className="focus-ring mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#486841] py-3.5 text-xs font-semibold tracking-[.1em] text-[#f8f4e9] transition-transform hover:-translate-y-0.5" data-testid="button-proceed-checkout">Proceed to checkout <ArrowRight size={15} /></Link></div>
      </>}
    </aside>
  </div>;
}

function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  return <footer className="mt-24 bg-[#486841] text-[#f8f4e9]">
    <div className="container-glowora grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
      <div><div className="flex items-center gap-2.5"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#bbceae] text-[#486841]"><Leaf size={17} /></span><span className="font-display text-2xl">glowora</span></div><p className="mt-5 max-w-[250px] text-sm leading-6 text-[#f8f4e9]/70">Simple and gentle skincare products made for everyday use.</p></div>
      <div><p className="eyebrow text-[#bbceae]">Explore</p><div className="mt-5 flex flex-col gap-3 text-sm text-[#f8f4e9]/75"><Link href="/shop" className="focus-ring hover:text-[#f8f4e9]" data-testid="link-footer-shop">Shop all</Link><Link href="/orders" className="focus-ring hover:text-[#f8f4e9]" data-testid="link-footer-orders">Orders</Link><Link href="/about" className="focus-ring hover:text-[#f8f4e9]" data-testid="link-footer-about">Our story</Link><Link href="/contact" className="focus-ring hover:text-[#f8f4e9]" data-testid="link-footer-contact">Contact</Link></div></div>
      <div><p className="eyebrow text-[#bbceae]">Good to know</p><div className="mt-5 flex flex-col gap-3 text-sm text-[#f8f4e9]/75"><Link href="/shipping" className="focus-ring hover:text-[#f8f4e9]" data-testid="link-footer-shipping">Shipping & returns</Link><Link href="/privacy" className="focus-ring hover:text-[#f8f4e9]" data-testid="link-footer-privacy">Privacy</Link><Link href="/terms" className="focus-ring hover:text-[#f8f4e9]" data-testid="link-footer-terms">Terms</Link></div></div>
      <div><p className="eyebrow text-[#bbceae]">Stay in the ritual</p><p className="mt-5 text-sm leading-6 text-[#f8f4e9]/70">Notes on healthy skin, sent occasionally.</p>{subscribed ? <p className="mt-4 text-sm text-[#e9bfb9]" data-testid="status-newsletter-subscribed">You’re on the list. See you in your inbox.</p> : <div className="mt-4 flex gap-3"><input type="email" placeholder="Your email address" className="focus-ring min-w-0 flex-1 rounded-full border border-[#f8f4e9]/25 bg-transparent px-4 py-3 text-xs placeholder:text-[#f8f4e9]/50" aria-label="Email address" data-testid="input-footer-email" /><button className="focus-ring rounded-full bg-[#e9bfb9] px-4 text-[#31452f] transition-transform hover:-translate-y-0.5" onClick={() => setSubscribed(true)} aria-label="Subscribe to Glowora notes" data-testid="button-footer-subscribe"><ArrowRight size={17} /></button></div>}</div>
    </div>
    <div className="container-glowora flex flex-col justify-between gap-3 border-t border-[#f8f4e9]/15 py-5 text-xs text-[#f8f4e9]/55 sm:flex-row"><span>© 2024 Glowora. Made for everyday skin.</span><a href="https://instagram.com" className="focus-ring inline-flex items-center gap-2 hover:text-[#f8f4e9]" data-testid="link-instagram"><Instagram size={14} /> @glowora.skin</a></div>
  </footer>;
}

function PageIntro({ eyebrow, title, description, back }: { eyebrow: string; title: string; description?: string; back?: { fallback?: string; label?: string } }) {
  return <section className="container-glowora pb-14 pt-12 sm:pb-20 sm:pt-20">{back && <BackLink fallback={back.fallback} label={back.label} />}<p className="eyebrow text-[#486841]/70">{eyebrow}</p><h1 className="font-display mt-4 max-w-[800px] text-5xl leading-[1.03] tracking-[-.04em] text-[#486841] sm:text-7xl">{title}</h1>{description && <p className="mt-6 max-w-[570px] text-base leading-7 text-[#667360]">{description}</p>}</section>;
}

function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add, setBagOpen } = useStore();
  const addProduct = () => { add(product); setBagOpen(true); };
  return <article className="group reveal" style={{ animationDelay: `${index * 70}ms` }} data-testid={`card-product-${product.slug}`}>
    <Link href={`/shop/${product.slug}`} className="focus-ring block" data-testid={`link-product-${product.slug}`}><div className="relative overflow-hidden rounded-[1.4rem]" style={{ backgroundColor: product.accent }}><img src={product.image} alt={product.name} className="image-lift aspect-[4/4.5] w-full object-cover mix-blend-multiply" /><span className="absolute left-4 top-4 rounded-full bg-[#f8f4e9]/85 px-3 py-1.5 text-[.62rem] font-semibold tracking-[.12em] text-[#486841]">{product.category === 'Sets' ? 'SAVE 10%' : 'EVERYDAY ESSENTIAL'}</span></div><div className="flex items-start justify-between gap-4 pt-4"><div><p className="text-[.68rem] font-semibold uppercase tracking-[.13em] text-[#486841]/60">{product.eyebrow}</p><h3 className="mt-1 font-display text-[1.35rem] text-[#486841]">{product.name}</h3></div><p className="pt-1 text-sm font-medium text-[#486841]" data-testid={`text-price-${product.slug}`}>{formatPrice(product.price)}</p></div></Link>
    <button className="focus-ring mt-3 flex w-full items-center justify-between rounded-full border border-[#486841]/25 px-4 py-2.5 text-xs font-semibold tracking-[.08em] text-[#486841] transition-colors hover:bg-[#486841] hover:text-[#f8f4e9]" onClick={addProduct} data-testid={`button-add-${product.slug}`}>Add to bag <Plus size={15} /></button>
  </article>;
}

function Home() {
  const { add, setBagOpen } = useStore();
  const featured = products.slice(0, 3);
  return <Page><main>
    <section className="container-glowora grid min-h-[calc(100dvh-74px)] items-center gap-10 py-10 lg:grid-cols-[.95fr_1.05fr] lg:py-16">
      <div className="reveal max-w-[560px]"><p className="eyebrow text-[#486841]/70">A little daily care</p><h1 className="font-display mt-6 text-[4.3rem] leading-[.94] tracking-[-.055em] text-[#486841] sm:text-[6.4rem]">Skin,<br /><em className="font-normal text-[#c88983]">simply.</em></h1><p className="mt-7 max-w-[410px] text-base leading-7 text-[#667360]">Simple and gentle skincare products made for everyday use. A quiet ritual for healthy skin, whatever your day looks like.</p><div className="mt-8 flex flex-wrap items-center gap-4"><Link href="/shop" className="focus-ring inline-flex items-center gap-3 rounded-full bg-[#486841] px-6 py-3.5 text-xs font-semibold tracking-[.1em] text-[#f8f4e9] transition-transform hover:-translate-y-1" data-testid="link-hero-shop">Shop the ritual <ArrowRight size={16} /></Link><span className="text-xs text-[#667360]">Made with care in small batches</span></div></div>
      <div className="relative reveal lg:pl-8" style={{ animationDelay: '120ms' }}><div className="absolute -left-2 top-12 h-36 w-36 rounded-full bg-[#e9bfb9]/65 blur-[1px] sm:h-48 sm:w-48" /><div className="relative overflow-hidden rounded-[2rem] rounded-br-[7rem]"><img src={image7} alt="A glowing face during a skincare ritual" className="image-lift aspect-[.85] w-full object-cover sm:aspect-[.9]" /><div className="absolute bottom-5 left-5 rounded-full bg-[#f8f4e9]/85 px-4 py-2 text-[.65rem] font-semibold tracking-[.12em] text-[#486841]">YOUR SKIN, IN ITS ELEMENT</div></div><div className="absolute -bottom-6 -right-2 hidden h-32 w-32 overflow-hidden rounded-full border-[8px] border-[#f8f4e9] sm:block"><img src={image3} alt="" className="h-full w-full object-cover" /></div></div>
    </section>
    <section className="bg-[#bbceae]/55 py-20 sm:py-28"><div className="container-glowora grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="eyebrow text-[#486841]/70">The Glowora way</p><h2 className="font-display mt-5 max-w-[420px] text-4xl leading-[1.05] tracking-[-.035em] text-[#486841] sm:text-6xl">Less noise.<br />More <em className="font-normal text-[#c88983]">glow.</em></h2></div><div className="grid gap-8 sm:grid-cols-3"><Feature icon={<Droplets />} title="Clean" text="A gentle reset, never stripped." /><Feature icon={<Sparkles />} title="Hydrate" text="Comfort that meets you where you are." /><Feature icon={<Sun />} title="Protect" text="Daily care for all your tomorrows." /></div></div></section>
    <section className="container-glowora py-20 sm:py-28"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow text-[#486841]/70">Start here</p><h2 className="font-display mt-4 text-4xl tracking-[-.035em] text-[#486841] sm:text-5xl">The everyday edit</h2></div><Link href="/shop" className="focus-ring inline-flex items-center gap-2 border-b border-[#486841] pb-1 text-xs font-semibold tracking-[.1em] text-[#486841]" data-testid="link-home-view-all">View all products <ArrowRight size={15} /></Link></div><div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{featured.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div></section>
    <section className="container-glowora pb-8"><div className="grid overflow-hidden rounded-[1.8rem] bg-[#e9bfb9] md:grid-cols-[1.05fr_.95fr]"><div className="flex flex-col justify-center p-8 sm:p-14"><p className="eyebrow text-[#486841]/70">Meet your new routine</p><h2 className="font-display mt-5 text-4xl leading-tight text-[#486841] sm:text-5xl">Healthy skin is<br />a daily thing.</h2><p className="mt-5 max-w-[390px] text-sm leading-6 text-[#486841]/75">No ten-step plans. No pressure to perfect. Just three thoughtful formulas, made to make showing up for your skin feel easy.</p><Link href="/about" className="focus-ring mt-7 inline-flex w-fit items-center gap-2 text-xs font-semibold tracking-[.1em] text-[#486841]" data-testid="link-home-story">Read our story <ArrowRight size={15} /></Link></div><img src={image9} alt="A moment of joyful skincare" className="h-full min-h-[360px] w-full object-cover" /></div></section>
  </main></Page>;
}

function Feature({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return <div><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f4e9] text-[#486841]">{icon}</span><h3 className="mt-5 font-display text-2xl text-[#486841]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#486841]/70">{text}</p></div>;
}

function Shop() {
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('featured');
  const categories = ['All', 'Cleanse', 'Hydrate', 'Protect', 'Sets'];
  const filtered = products.filter(product => category === 'All' || product.category === category).sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : products.indexOf(a) - products.indexOf(b));
  return <Page><main><PageIntro eyebrow="The collection" title="Skincare for your real life." description="A small, considered collection for the everyday moments that add up to healthy skin." />
    <section className="container-glowora pb-4"><div className="flex flex-col gap-5 border-y border-[#486841]/15 py-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex flex-wrap gap-2" role="group" aria-label="Filter products">{categories.map(item => <button key={item} className={`focus-ring rounded-full px-4 py-2 text-xs font-medium transition-colors ${category === item ? 'bg-[#486841] text-[#f8f4e9]' : 'bg-[#bbceae]/35 text-[#486841] hover:bg-[#bbceae]/65'}`} onClick={() => setCategory(item)} data-testid={`button-filter-${item.toLowerCase()}`}>{item}</button>)}</div><label className="relative flex items-center gap-2 text-xs text-[#667360]">Sort by <select value={sort} onChange={event => setSort(event.target.value)} className="focus-ring appearance-none rounded-full border border-[#486841]/20 bg-transparent py-2 pl-3 pr-8 text-xs text-[#486841]" aria-label="Sort products" data-testid="select-sort"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select><ChevronDown size={14} className="pointer-events-none absolute right-2.5 text-[#486841]" /></label></div></section>
    <section className="container-glowora pb-10 pt-10"><p className="text-xs text-[#667360]" data-testid="text-product-count">{filtered.length} {filtered.length === 1 ? 'product' : 'products'}</p><div className="mt-7 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div></section>
  </main></Page>;
}

function ProductPage() {
  const [, params] = useRoute('/shop/:slug');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { add, setBagOpen } = useStore();
  const product = products.find(item => item.slug === params?.slug);
  if (!product) return <NotFound />;
  const related = products.filter(item => item.slug !== product.slug).slice(0, 3);
  const handleAdd = () => { add(product, quantity); setAdded(true); setBagOpen(true); window.setTimeout(() => setAdded(false), 2300); };
  return <Page><main>
    <section className="container-glowora grid gap-10 pb-16 pt-12 sm:pt-20 lg:grid-cols-2 lg:gap-20"><div className="relative overflow-hidden rounded-[1.8rem]" style={{ backgroundColor: product.accent }}><img src={product.image} alt={product.name} className="aspect-[.9] w-full object-cover mix-blend-multiply" /><span className="absolute left-5 top-5 rounded-full bg-[#f8f4e9]/85 px-3 py-1.5 text-[.62rem] font-semibold tracking-[.12em] text-[#486841]">{product.category === 'Sets' ? 'THE COMPLETE RITUAL' : 'EVERYDAY ESSENTIAL'}</span></div>
      <div className="flex flex-col justify-center"><Link href="/shop" className="focus-ring mb-10 flex w-fit items-center gap-2 text-xs font-medium text-[#667360]" data-testid="link-back-shop"><ArrowRight size={14} className="rotate-180" /> Back to collection</Link><p className="eyebrow text-[#486841]/70">{product.eyebrow}</p><h1 className="font-display mt-4 text-5xl leading-[1.04] tracking-[-.04em] text-[#486841] sm:text-6xl" data-testid={`text-product-name-${product.slug}`}>{product.name}</h1><p className="mt-5 text-2xl text-[#486841]" data-testid={`text-detail-price-${product.slug}`}>{formatPrice(product.price)}</p><p className="mt-6 max-w-[500px] text-base leading-7 text-[#667360]">{product.description}</p><div className="my-8 flex flex-wrap gap-2 text-xs text-[#486841]"><span className="rounded-full bg-[#bbceae]/50 px-3 py-2">Plant-forward formula</span><span className="rounded-full bg-[#e9bfb9]/70 px-3 py-2">Made for daily use</span></div><div className="flex flex-wrap items-center gap-3"><div className="flex items-center gap-4 rounded-full border border-[#486841]/25 px-3 py-2"><button className="focus-ring p-1 text-[#486841]" onClick={() => setQuantity(value => Math.max(1, value - 1))} aria-label="Decrease quantity" data-testid="button-detail-decrease"><Minus size={16} /></button><span className="min-w-5 text-center text-sm" data-testid="text-detail-quantity">{quantity}</span><button className="focus-ring p-1 text-[#486841]" onClick={() => setQuantity(value => value + 1)} aria-label="Increase quantity" data-testid="button-detail-increase"><Plus size={16} /></button></div><button className="focus-ring flex min-w-[220px] flex-1 items-center justify-center gap-3 rounded-full bg-[#486841] px-6 py-3.5 text-xs font-semibold tracking-[.1em] text-[#f8f4e9] transition-transform hover:-translate-y-0.5 sm:flex-none" onClick={handleAdd} data-testid="button-detail-add">{added ? <><Check size={16} /> Added to bag</> : <>Add to bag <ShoppingBag size={16} /></>}</button>{added && <button className="focus-ring rounded-full border border-[#486841]/20 px-4 py-3 text-xs text-[#486841]" onClick={() => setBagOpen(true)} data-testid="button-view-bag">View bag</button>}</div><div className="mt-9 grid max-w-[500px] gap-4 border-t border-[#486841]/15 pt-6 sm:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-[.1em] text-[#486841]">How to use</p><p className="mt-2 text-sm leading-6 text-[#667360]">{product.use}</p></div><div><p className="text-xs font-semibold uppercase tracking-[.1em] text-[#486841]">What’s inside</p><p className="mt-2 text-sm leading-6 text-[#667360]">{product.ingredients}</p></div></div></div>
    </section><section className="bg-[#bbceae]/45 py-16"><div className="container-glowora"><p className="eyebrow text-[#486841]/70">Keep the ritual going</p><h2 className="font-display mt-4 text-4xl text-[#486841]">You might also like</h2><div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{related.map((item, index) => <ProductCard key={item.slug} product={item} index={index} />)}</div></div></section>
  </main></Page>;
}

function About() {
  return <Page><main><PageIntro eyebrow="Our story" title="Good skin care should feel like care." description="Glowora began with a simple question: what if a daily routine could be effective without asking for more time, more steps, or more of you?" back={{ fallback: '/', label: 'Back home' }} />
    <section className="container-glowora grid gap-8 pb-20 lg:grid-cols-[1.1fr_.9fr]"><img src={image10} alt="A person applying a drop of skincare" className="h-[520px] w-full rounded-[1.8rem] object-cover" /><div className="flex flex-col justify-end rounded-[1.8rem] bg-[#e9bfb9] p-8 sm:p-12"><p className="eyebrow text-[#486841]/70">Why Glowora</p><h2 className="font-display mt-5 text-4xl leading-tight text-[#486841]">A softer approach to healthy skin.</h2><p className="mt-5 text-sm leading-7 text-[#486841]/75">We make gentle, useful formulas that fit into real mornings and tired evenings. Each product does one thing well, with ingredients chosen for comfort, clarity, and everyday consistency.</p><p className="mt-5 text-sm leading-7 text-[#486841]/75">Because the best routine is the one you’ll actually want to return to tomorrow.</p></div></section>
    <section className="bg-[#486841] py-20 text-[#f8f4e9] sm:py-28"><div className="container-glowora"><p className="eyebrow text-[#bbceae]">Our values</p><div className="mt-10 grid gap-10 md:grid-cols-3"><Value number="01" title="Keep it kind" text="Skin is not a problem to solve. Our formulas support its natural rhythm, without harshness or hype." /><Value number="02" title="Make it useful" text="Every product earns its place. Clear labels, practical guidance, and a routine that makes sense." /><Value number="03" title="Leave room" text="A little breathing space is part of the ritual. We believe in less clutter, on your shelf and in your head." /></div></div></section>
    <section className="container-glowora py-20 sm:py-28"><div className="grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow text-[#486841]/70">The daily ritual</p><h2 className="font-display mt-4 text-4xl leading-tight text-[#486841] sm:text-5xl">Three small steps.<br /><em className="font-normal text-[#c88983]">That’s enough.</em></h2></div><div className="grid gap-4 sm:grid-cols-3"><RitualStep icon={<Droplets />} title="Cleanse" copy="Wash away the day, gently." /><RitualStep icon={<Leaf />} title="Hydrate" copy="Give your skin what it needs." /><RitualStep icon={<Sun />} title="Protect" copy="Let tomorrow meet you glowing." /></div></div></section>
  </main></Page>;
}

function Value({ number, title, text }: { number: string; title: string; text: string }) {
  return <div className="border-t border-[#f8f4e9]/25 pt-5"><span className="font-display text-3xl text-[#e9bfb9]">{number}</span><h3 className="mt-8 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-[#f8f4e9]/70">{text}</p></div>;
}
function RitualStep({ icon, title, copy }: { icon: ReactNode; title: string; copy: string }) {
  return <div className="rounded-2xl bg-[#bbceae]/35 p-5"><span className="text-[#486841]">{icon}</span><h3 className="mt-8 font-display text-xl text-[#486841]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#667360]">{copy}</p></div>;
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get('name') || '').trim()) next.name = 'Please share your name.';
    if (!String(data.get('email') || '').match(/^\S+@\S+\.\S+$/)) next.email = 'Please enter a valid email.';
    if (!String(data.get('message') || '').trim()) next.message = 'Please tell us a little more.';
    setErrors(next);
    if (!Object.keys(next).length) { setSubmitted(true); event.currentTarget.reset(); }
  };
  return <Page><main><PageIntro eyebrow="Say hello" title="We’re here to help." description="Questions about a product, your order, or building a calmer routine? Write to us. We read every note." back={{ fallback: '/', label: 'Back home' }} />
    <section className="container-glowora grid gap-14 pb-12 lg:grid-cols-[.7fr_1.3fr]"><div className="rounded-[1.8rem] bg-[#486841] p-8 text-[#f8f4e9] sm:p-10"><p className="eyebrow text-[#bbceae]">Find us here</p><div className="mt-12 space-y-8"><div className="flex gap-4"><Mail className="mt-1 text-[#e9bfb9]" size={19} /><div><p className="text-sm font-medium">Email</p><p className="mt-1 text-sm text-[#f8f4e9]/65">hello@glowora.skin</p></div></div><div className="flex gap-4"><Clock3 className="mt-1 text-[#e9bfb9]" size={19} /><div><p className="text-sm font-medium">Hours</p><p className="mt-1 text-sm leading-6 text-[#f8f4e9]/65">Mon–Fri, 10am–6pm IST<br />We reply within 1–2 days.</p></div></div><div className="flex gap-4"><MapPin className="mt-1 text-[#e9bfb9]" size={19} /><div><p className="text-sm font-medium">Based in</p><p className="mt-1 text-sm text-[#f8f4e9]/65">Mumbai, India</p></div></div></div></div>
      <div>{submitted ? <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[1.8rem] bg-[#bbceae]/45 p-8 text-center"><CheckCircle2 className="text-[#486841]" size={42} strokeWidth={1.3} /><h2 className="font-display mt-6 text-4xl text-[#486841]">Note received.</h2><p className="mt-3 max-w-[360px] text-sm leading-6 text-[#667360]">Thank you for reaching out. We’ll be in touch soon, usually within one to two working days.</p><button className="focus-ring mt-7 rounded-full border border-[#486841]/25 px-5 py-3 text-xs font-semibold tracking-[.08em] text-[#486841]" onClick={() => setSubmitted(false)} data-testid="button-send-another">Send another note</button></div> : <form onSubmit={submit} noValidate className="space-y-6" data-testid="form-contact"><div className="grid gap-6 sm:grid-cols-2"><Field label="Your name" name="name" error={errors.name} /><Field label="Email address" name="email" type="email" error={errors.email} /></div><div><label htmlFor="message" className="text-xs font-semibold tracking-[.06em] text-[#486841]">How can we help?</label><textarea id="message" name="message" rows={6} className={`focus-ring mt-2 w-full resize-none rounded-xl border bg-transparent px-4 py-3 text-sm text-[#31452f] placeholder:text-[#667360]/60 ${errors.message ? 'border-[#c16d6a]' : 'border-[#486841]/25'}`} placeholder="Tell us what’s on your mind..." data-testid="textarea-message" />{errors.message && <p className="mt-1 text-xs text-[#c16d6a]" data-testid="error-message">{errors.message}</p>}</div><button type="submit" className="focus-ring inline-flex items-center gap-3 rounded-full bg-[#486841] px-7 py-3.5 text-xs font-semibold tracking-[.1em] text-[#f8f4e9] transition-transform hover:-translate-y-0.5" data-testid="button-submit-contact">Send your note <ArrowRight size={16} /></button></form>}</div>
    </section>
  </main></Page>;
}

function Checkout() {
  const { lines, total, placeOrder } = useStore();
  const [, setLocation] = useLocation();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [placedOrderId, setPlacedOrderId] = useState<string | null>(null);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get('name') || '').trim()) next.name = 'Please share your name.';
    if (!String(data.get('email') || '').match(/^\S+@\S+\.\S+$/)) next.email = 'Please enter a valid email.';
    if (!String(data.get('address') || '').trim()) next.address = 'Please add your delivery address.';
    if (!String(data.get('city') || '').trim()) next.city = 'Please add your city.';
    if (!String(data.get('pincode') || '').match(/^\d{6}$/)) next.pincode = 'Please enter a valid 6-digit PIN code.';
    setErrors(next);
    if (!Object.keys(next).length) {
      const orderId = placeOrder({
        name: String(data.get('name')),
        email: String(data.get('email')),
        address: String(data.get('address')),
        city: String(data.get('city')),
        pincode: String(data.get('pincode')),
      });
      setPlacedOrderId(orderId);
      event.currentTarget.reset();
    }
  };

  if (placedOrderId) {
    return <Page><main className="container-glowora flex min-h-[65dvh] flex-col items-center justify-center py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#bbceae]/55 text-[#486841]"><CheckCircle2 size={32} strokeWidth={1.4} /></span>
      <p className="eyebrow mt-7 text-[#486841]/70">Order placed</p>
      <h1 className="font-display mt-4 max-w-[620px] text-5xl leading-[1.04] tracking-[-.04em] text-[#486841] sm:text-6xl">Your ritual is on its way.</h1>
      <p className="mt-5 max-w-[430px] text-sm leading-7 text-[#667360]">Order <strong className="text-[#486841]">{placedOrderId}</strong> has been received. We’ll send tracking updates to your email as it moves.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/orders" className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#486841] px-6 py-3.5 text-xs font-semibold tracking-[.1em] text-[#f8f4e9]" data-testid="link-view-order-status">View order status <ArrowRight size={15} /></Link>
        <Link href="/shop" className="focus-ring inline-flex items-center gap-2 rounded-full border border-[#486841]/25 px-6 py-3.5 text-xs font-semibold tracking-[.1em] text-[#486841]" data-testid="link-continue-shopping">Continue shopping</Link>
      </div>
    </main></Page>;
  }

  if (!lines.length) {
    return <Page><main className="container-glowora flex min-h-[65dvh] flex-col items-center justify-center py-20 text-center">
      <BackLink fallback="/shop" label="Back to collection" />
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#bbceae]/45 text-[#486841]"><ShoppingBag size={28} strokeWidth={1.4} /></span>
      <h1 className="font-display mt-6 text-5xl text-[#486841]">Your bag is empty.</h1>
      <p className="mt-4 max-w-[360px] text-sm leading-6 text-[#667360]">Choose a few everyday essentials before you continue to checkout.</p>
      <Link href="/shop" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-[#486841] px-6 py-3.5 text-xs font-semibold tracking-[.1em] text-[#f8f4e9]" data-testid="link-empty-checkout-shop">Explore the collection <ArrowRight size={15} /></Link>
    </main></Page>;
  }

  return <Page><main>
    <PageIntro eyebrow="Secure your ritual" title="A calm checkout." description="Add your delivery details and we’ll prepare your Glowora essentials with care." back={{ fallback: '/shop', label: 'Back to collection' }} />
    <section className="container-glowora grid gap-10 pb-16 lg:grid-cols-[1.1fr_.9fr]">
      <form onSubmit={submit} noValidate className="rounded-[1.8rem] border border-[#486841]/15 bg-[#f8f4e9] p-6 sm:p-10" data-testid="form-checkout">
        <div className="flex items-center justify-between gap-4 border-b border-[#486841]/15 pb-5"><div><p className="eyebrow text-[#486841]/70">Delivery details</p><h2 className="font-display mt-2 text-3xl text-[#486841]">Where should we send it?</h2></div><MapPin className="text-[#486841]" size={22} strokeWidth={1.4} /></div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Field label="Your name" name="name" error={errors.name} />
          <Field label="Email address" name="email" type="email" error={errors.email} />
        </div>
        <div className="mt-6"><Field label="Street address" name="address" error={errors.address} /></div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Field label="City" name="city" error={errors.city} />
          <Field label="PIN code" name="pincode" error={errors.pincode} />
        </div>
        <div className="mt-8 flex items-start gap-3 rounded-xl bg-[#bbceae]/35 p-4 text-xs leading-5 text-[#486841]"><ShieldCheck size={17} className="mt-0.5 shrink-0" /> Your details are used only to prepare and deliver this order.</div>
        <button type="submit" className="focus-ring mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#486841] px-7 py-4 text-xs font-semibold tracking-[.1em] text-[#f8f4e9] transition-transform hover:-translate-y-0.5" data-testid="button-place-order">Place order <ArrowRight size={16} /></button>
      </form>
      <aside className="h-fit rounded-[1.8rem] bg-[#e9bfb9] p-6 sm:p-8" aria-label="Order summary">
        <p className="eyebrow text-[#486841]/70">Your order</p>
        <div className="mt-6 space-y-4">{lines.map(line => <div className="flex items-center gap-3" key={line.product.slug} data-testid={`checkout-line-${line.product.slug}`}><img src={line.product.image} alt="" className="h-16 w-14 rounded-lg object-cover" /><div className="min-w-0 flex-1"><p className="text-sm font-medium text-[#31452f]">{line.product.name}</p><p className="mt-1 text-xs text-[#486841]/70">Qty {line.quantity}</p></div><strong className="text-sm text-[#31452f]">{formatPrice(line.product.price * line.quantity)}</strong></div>)}</div>
        <div className="mt-7 border-t border-[#486841]/20 pt-5"><div className="flex justify-between text-sm"><span className="text-[#486841]/70">Subtotal</span><strong className="text-[#31452f]">{formatPrice(total)}</strong></div><div className="mt-3 flex justify-between text-sm"><span className="text-[#486841]/70">Shipping</span><span className="text-[#31452f]">{total >= 999 ? 'Free' : formatPrice(60)}</span></div><div className="mt-5 flex justify-between border-t border-[#486841]/20 pt-5 text-base"><span className="font-medium text-[#31452f]">Total</span><strong className="text-[#486841]">{formatPrice(total >= 999 ? total : total + 60)}</strong></div></div>
        <p className="mt-6 text-xs leading-5 text-[#486841]/70">Orders are packed within 1–2 working days and usually arrive within 3–6 working days across India.</p>
      </aside>
    </section>
  </main></Page>;
}

const orderStatuses: OrderStatus[] = ['Placed', 'Packed', 'Shipped', 'Delivered'];

function OrderTimeline({ status }: { status: OrderStatus }) {
  const currentIndex = orderStatuses.indexOf(status);
  return <div className="mt-6 grid grid-cols-4 gap-2" aria-label={`Order status: ${status}`} data-testid="order-status-timeline">
    {orderStatuses.map((item, index) => <div key={item} className="relative text-center">
      <span className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full border ${index <= currentIndex ? 'border-[#486841] bg-[#486841] text-[#f8f4e9]' : 'border-[#486841]/20 bg-transparent text-[#486841]/45'}`}>{index < currentIndex ? <Check size={14} /> : <span className="text-[.65rem]">{index + 1}</span>}</span>
      <p className={`mt-2 text-[.64rem] font-semibold tracking-[.06em] ${index <= currentIndex ? 'text-[#486841]' : 'text-[#667360]/60'}`}>{item}</p>
      {index < orderStatuses.length - 1 && <span className={`absolute left-[calc(50%+17px)] right-[calc(-50%+17px)] top-4 h-px ${index < currentIndex ? 'bg-[#486841]' : 'bg-[#486841]/15'}`} />}
    </div>)}
  </div>;
}

function Orders() {
  const { orders } = useStore();
  return <Page><main>
    <PageIntro eyebrow="Order management" title="Keep an eye on your ritual." description="See every Glowora order in one place, with simple progress updates from our studio to your door." back={{ fallback: '/', label: 'Back home' }} />
    <section className="container-glowora pb-16">
      {!orders.length ? <div className="rounded-[1.8rem] bg-[#bbceae]/35 px-6 py-16 text-center sm:px-10"><PackageCheck className="mx-auto text-[#486841]" size={40} strokeWidth={1.3} /><h2 className="font-display mt-6 text-4xl text-[#486841]">No orders yet.</h2><p className="mx-auto mt-3 max-w-[380px] text-sm leading-6 text-[#667360]">Once you place your first order, its delivery progress will appear here.</p><Link href="/shop" className="focus-ring mt-7 inline-flex items-center gap-2 rounded-full bg-[#486841] px-6 py-3.5 text-xs font-semibold tracking-[.1em] text-[#f8f4e9]" data-testid="link-orders-shop">Start shopping <ArrowRight size={15} /></Link></div> : <div className="space-y-6">{orders.map(order => <article key={order.id} className="rounded-[1.8rem] border border-[#486841]/15 bg-[#f8f4e9] p-6 sm:p-8" data-testid={`card-order-${order.id}`}><div className="flex flex-col justify-between gap-4 border-b border-[#486841]/15 pb-5 sm:flex-row sm:items-start"><div><p className="eyebrow text-[#486841]/70">Order {order.id}</p><p className="mt-2 text-sm text-[#667360]">{new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium' }).format(new Date(order.createdAt))} · {order.lines.reduce((sum, line) => sum + line.quantity, 0)} items</p></div><span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#bbceae]/45 px-3 py-2 text-xs font-semibold text-[#486841]"><PackageCheck size={14} /> {order.status}</span></div><div className="mt-5 grid gap-3 sm:grid-cols-2">{order.lines.map(line => <div className="flex items-center gap-3" key={line.product.slug}><img src={line.product.image} alt="" className="h-14 w-12 rounded-lg object-cover" /><div><p className="text-sm font-medium text-[#31452f]">{line.product.name}</p><p className="mt-1 text-xs text-[#667360]">Qty {line.quantity}</p></div></div>)}</div><OrderTimeline status={order.status} /><div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#486841]/15 pt-5"><p className="text-sm text-[#667360]">Delivering to <span className="text-[#486841]">{order.customer.city}, {order.customer.pincode}</span></p><strong className="text-[#486841]">{formatPrice(order.total)}</strong></div></article>)}</div>}
    </section>
  </main></Page>;
}

function Field({ label, name, type = 'text', error }: { label: string; name: string; type?: string; error?: string }) {
  return <div><label htmlFor={name} className="text-xs font-semibold tracking-[.06em] text-[#486841]">{label}</label><input id={name} name={name} type={type} className={`focus-ring mt-2 w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-[#31452f] placeholder:text-[#667360]/60 ${error ? 'border-[#c16d6a]' : 'border-[#486841]/25'}`} placeholder={label} data-testid={`input-${name}`} />{error && <p className="mt-1 text-xs text-[#c16d6a]" data-testid={`error-${name}`}>{error}</p>}</div>;
}

const legalCopy: Record<string, { eyebrow: string; title: string; intro: string; sections: { heading: string; text: string }[] }> = {
  privacy: { eyebrow: 'The fine print', title: 'Privacy, plainly put.', intro: 'We keep your information safe, use it thoughtfully, and never sell it.', sections: [{ heading: 'What we collect', text: 'When you place an order or contact us, we may collect your name, email address, delivery details, and the information you choose to share. We collect only what helps us provide and improve Glowora.' }, { heading: 'How we use it', text: 'Your information is used to process orders, answer questions, send updates you have requested, and make our service more useful. You can unsubscribe from marketing messages at any time.' }, { heading: 'Keeping it safe', text: 'We use reasonable technical and organisational safeguards to protect your personal information. If you have a question about your data, email hello@glowora.skin.' }] },
  terms: { eyebrow: 'The fine print', title: 'Terms that make sense.', intro: 'A few simple guidelines for a good experience on both sides.', sections: [{ heading: 'Using Glowora', text: 'Glowora content, product descriptions, and photography are created for your personal, non-commercial use. Please do not copy or reuse them without permission.' }, { heading: 'Orders and payment', text: 'Prices are listed in Indian Rupees and may change without notice. An order is confirmed once payment has been received. If an item becomes unavailable, we will let you know and refund the affected amount.' }, { heading: 'Product care', text: 'Please read product labels and patch test new skincare. Glowora products are made for everyday use, but individual results and sensitivities vary.' }] },
  shipping: { eyebrow: 'Good to know', title: 'Shipping & returns.', intro: 'The practical details, before your ritual arrives at your door.', sections: [{ heading: 'Delivery', text: 'Orders are packed within 1–2 working days and usually arrive within 3–6 working days across India. You will receive tracking details by email once your order leaves us.' }, { heading: 'Shipping charges', text: 'Standard shipping is ₹60. Delivery is free on orders over ₹999. At the moment, Glowora ships within India.' }, { heading: 'Returns', text: 'If your order arrives damaged or incorrect, email hello@glowora.skin within 48 hours with your order number and a photo. For hygiene reasons, we cannot accept returns of opened skincare products.' }] },
};

function LegalPage({ kind }: { kind: keyof typeof legalCopy }) {
  const content = legalCopy[kind];
  return <Page><main><PageIntro eyebrow={content.eyebrow} title={content.title} description={content.intro} back={{ fallback: '/', label: 'Back home' }} /><section className="container-glowora max-w-[850px] pb-16">{content.sections.map((section, index) => <article key={section.heading} className="border-t border-[#486841]/15 py-8" data-testid={`section-${kind}-${index}`}><div className="grid gap-4 sm:grid-cols-[.35fr_1fr]"><h2 className="font-display text-2xl text-[#486841]">{section.heading}</h2><p className="text-sm leading-7 text-[#667360]">{section.text}</p></div></article>)}</section></main></Page>;
}

function NotFound() {
  return <Page><main className="container-glowora flex min-h-[65dvh] flex-col items-center justify-center py-20 text-center"><span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#bbceae]/45 text-[#486841]"><Leaf size={28} /></span><p className="eyebrow mt-7 text-[#486841]/70">A little detour</p><h1 className="font-display mt-4 text-5xl text-[#486841] sm:text-6xl">This page wandered off.</h1><p className="mt-5 max-w-[390px] text-sm leading-6 text-[#667360]">Let’s get you back to something good for your skin.</p><Link href="/" className="focus-ring mt-8 inline-flex items-center gap-3 rounded-full bg-[#486841] px-6 py-3.5 text-xs font-semibold tracking-[.1em] text-[#f8f4e9]" data-testid="link-not-found-home">Back home <ArrowRight size={16} /></Link></main></Page>;
}

function Page({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <div className="grain min-h-[100dvh] overflow-x-hidden bg-[#f8f4e9]"><Header /><ErrorBoundary resetKey={location}>{children}</ErrorBoundary><Footer /></div>;
}

function Router() {
  return <Switch><Route path="/" component={Home} /><Route path="/shop" component={Shop} /><Route path="/shop/:slug" component={ProductPage} /><Route path="/checkout" component={Checkout} /><Route path="/orders" component={Orders} /><Route path="/about" component={About} /><Route path="/contact" component={Contact} /><Route path="/privacy"><LegalPage kind="privacy" /></Route><Route path="/terms"><LegalPage kind="terms" /></Route><Route path="/shipping"><LegalPage kind="shipping" /></Route><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>;
}

const queryClient = new QueryClient();
function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><NavigationHistory><StoreProvider><Router /></StoreProvider></NavigationHistory></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;