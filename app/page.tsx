export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Welcome to ShopHub
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Discover amazing products at great prices. Your shopping journey starts here.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <div className="rounded-lg bg-blue-50 px-8 py-4">
            <p className="text-sm text-gray-600">
              Phase 2 Complete ✅ - Layout and components ready
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Phase 3 will add product listing functionality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
