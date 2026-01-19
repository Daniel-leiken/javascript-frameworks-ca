/**
 * Footer Component
 */

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">ShopHub</h3>
            <p className="mt-2 text-sm text-gray-600">
              Your one-stop shop for quality products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="/cart" className="text-gray-600 hover:text-blue-600">
                  Shopping Cart
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <p className="mt-2 text-sm text-gray-600">
              Have questions? Get in touch with us through our contact page.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} ShopHub. All rights reserved.</p>
          <p className="mt-1">JavaScript Frameworks Course Assignment - Noroff</p>
        </div>
      </div>
    </footer>
  );
}
