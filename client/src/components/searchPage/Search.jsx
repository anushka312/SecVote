import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, ChevronDown, ChevronUp, Filter, Clock, TrendingUp, BookOpen, Lightbulb, HelpCircle } from "lucide-react";



export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSearchResults([...searchResults, searchQuery]);
    }
  };

  
  return (
    <div className="p-8 md:p-16 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 bg-[#121212] text-white">
      {/* Main Search Section */}
      <div className="col-span-1 lg:col-span-2">
        <h1 className="text-5xl font-extrabold text-gray-100 mb-8">Search for Information</h1>

        <div className="bg-[#1e1e1e] p-8 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4">
            <Input
              type="text"
              placeholder="Search for topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#2C2F42] border border-transparent text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-[#5A96E3] transition-all w-full py-3 px-4"
            />
            <Button
              onClick={handleSearch}
              className="bg-[#5A96E3] hover:bg-[#7D67D2] transition-all text-white font-semibold py-3 px-6 rounded-lg shadow-md"
            >
              <Search className="w-6 h-6 mr-2" />
              Search
            </Button>
          </div>

          {/* Advanced Search Toggle */}
          <div className="mt-4">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 text-[#5A96E3] hover:text-[#7D67D2] transition-all text-lg font-semibold"
            >
              <Filter className="w-5 h-5" />
              Advanced Search
              {showAdvanced ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>

            {showAdvanced && (
              <div className="mt-4 p-6 bg-[#252525] rounded-lg">
                <h3 className="text-xl font-semibold text-gray-200 mb-4">Refine Your Search</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="text" placeholder="Filter by date" className="bg-[#2C2F42] text-white p-3 rounded-lg" />
                  <Input type="text" placeholder="Category (e.g. Voting, Laws)" className="bg-[#2C2F42] text-white p-3 rounded-lg" />
                </div>
                <Button className="mt-4 bg-[#FFD166] text-black px-4 py-2 rounded-lg hover:bg-[#E6C155]">Apply Filters</Button>
              </div>
            )}
          </div>
        </div>

        {/* Search Results */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4">Search Results</h2>
          {searchResults.length > 0 ? (
            <ul className="space-y-4">
              {searchResults.map((result, index) => (
                <li key={index} className="bg-[#252525] p-4 rounded-lg">🔍 {result}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No results found.</p>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-8 max-h-[60vh] overflow-y-scroll">
        {/* Trending Searches */}
        <div className="bg-[#1b1b1b] p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="text-[#FFD166] w-6 h-6" /> Trending Searches
          </h2>
          <ul className="space-y-3">
            <li className="text-gray-300 hover:text-white cursor-pointer">🔹 How to register to vote?</li>
            <li className="text-gray-300 hover:text-white cursor-pointer">🔹 Check voter ID status</li>
            <li className="text-gray-300 hover:text-white cursor-pointer">🔹 Find my polling station</li>
          </ul>
        </div>

        {/* Recently Searched */}
        <div className="bg-[#1b1b1b] p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Clock className="text-[#FFD166] w-6 h-6" /> Recent Searches
          </h2>
          <ul className="space-y-3">
            <li className="text-gray-300 hover:text-white cursor-pointer">🔸 Update voter address</li>
            <li className="text-gray-300 hover:text-white cursor-pointer">🔸 Voting process explained</li>
          </ul>
        </div>

        {/* Featured Articles */}
        <div className="bg-[#1b1b1b] p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="text-[#FFD166] w-6 h-6" /> Featured Articles
          </h2>
          <ul className="space-y-3">
            <li className="text-blue-400 hover:underline cursor-pointer">📘 Step-by-Step Guide to Voting</li>
            <li className="text-blue-400 hover:underline cursor-pointer">📘 What to Bring on Election Day</li>
          </ul>
        </div>

        {/* Search Tips */}
        <div className="bg-[#1b1b1b] p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="text-[#FFD166] w-6 h-6" /> Search Tips
          </h2>
          <ul className="space-y-3">
            <li className="text-gray-300">⚡ Use specific keywords for better results.</li>
            <li className="text-gray-300">⚡ Try alternative terms if needed.</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="bg-[#1b1b1b] p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <HelpCircle className="text-[#FFD166] w-6 h-6" /> Need Help?
          </h2>
          <p className="text-gray-300 mb-4">Check out our Help Center for more assistance.</p>
          <Link to="/help">
          <Button className="bg-[#FFD166] text-black px-4 py-2 rounded-lg hover:bg-[#E6C155]">Visit Help Center</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
