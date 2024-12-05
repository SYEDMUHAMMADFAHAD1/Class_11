import ParentComponent from "./Components/ParentComponent";
import Footer from "./Components/footer"

export default function Home() {
  return (
    <div>
      {/* Main Container */}
      <div className="justify-items-center mt-10 bg-white px-4 py-4 md:px-10 lg:px-20 md:py-8 lg:py-12">

        <h1 className ="text-gray-800 text-center text-xl md:text-2xl lg:text-3xl font-bold font-serif mb-6 underline hover:text-blue-700">Props and Map Method</h1>
      {/* Parent Component for Car Details */}
        <ParentComponent />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}