export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400">&#169; {currentYear} Bandicoot Form. All rights reserved.</p>
      </div>
    </footer>
  )
}

