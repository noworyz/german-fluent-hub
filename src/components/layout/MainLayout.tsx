import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function MainLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinkCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-primary" : "text-foreground/80 hover:text-primary";

  return (
    <div className="min-h-screen flex flex-col font-body">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold">DeutschPro</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" end className={navLinkCls}>Home</NavLink>
            <NavLink to="/about" className={navLinkCls}>About</NavLink>
            <NavLink to="/services" className={navLinkCls}>Services</NavLink>
            <a href="/#testimonials" className="text-foreground/80 hover:text-primary">Testimonials</a>
            <NavLink to="/blog" className={navLinkCls}>Blog</NavLink>
            <NavLink to="/contact" className={navLinkCls}>Contact</NavLink>
          </nav>

          <div className="hidden md:block">
            <Button asChild variant="hero">
              <Link to="/contact?trial=true">Book Free Trial</Link>
            </Button>
          </div>

          <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            <Menu />
          </button>
        </div>
        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t bg-background">
            <div className="container mx-auto px-6 py-3 flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((i) => (
                <NavLink key={i.to} to={i.to} onClick={() => setOpen(false)} className={navLinkCls} end>
                  {i.label}
                </NavLink>
              ))}
              <Button asChild variant="hero" onClick={() => setOpen(false)}>
                <Link to="/contact?trial=true">Book Free Trial</Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      <Outlet />

      <footer className="mt-16 border-t">
        <div className="container mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-heading font-semibold mb-3">DeutschPro</h4>
            <p className="text-muted-foreground">Learn German online with tailored, friendly lessons.</p>
          </div>
          <div>
            <h5 className="font-heading font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="story-link">About</Link></li>
              <li><Link to="/services" className="story-link">Services</Link></li>
              <li><Link to="/blog" className="story-link">Blog</Link></li>
              <li><Link to="/contact" className="story-link">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading font-semibold mb-3">Trust</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Secure payments</li>
              <li>Student satisfaction guarantee</li>
              <li>Worldwide availability</li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading font-semibold mb-3">Newsletter</h5>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! You'll receive helpful German tips.");
              }}
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="flex-1 rounded-md border px-3 py-2 bg-background"
                aria-label="Email address"
              />
              <Button variant="cta" type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DeutschPro. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
