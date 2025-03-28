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
    <div className="pt-10 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 bg-[#121212] text-white">
      {/* Main Search Section */}
      <div className="col-span-1 lg:col-span-2">
        <h1 className="text-4xl font-extrabold text-gray-100 mb-8">Search for Information</h1>

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
      
    </div>
  );
}
