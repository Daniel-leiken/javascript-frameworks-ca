/**
 * Footer Component
 */

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-700 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-white">ShopHub</h3>
            <p className="mt-2 text-sm text-blue-100">
              Your one-stop shop for quality products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="/" className="text-blue-100 hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-100 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/cart" className="text-blue-100 hover:text-white">
                  Shopping Cart
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-2 text-sm text-blue-100">
              Have questions? Get in touch with us through our contact page.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-700 pt-8 text-center text-sm text-blue-100">
          <p>&copy; {currentYear} ShopHub. All rights reserved.</p>
          <p className="mt-1">JavaScript Frameworks Course Assignment - Noroff</p>
        </div>
      </div>
    </footer>
  );
}
