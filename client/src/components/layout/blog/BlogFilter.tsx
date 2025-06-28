interface BlogFilterProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const BlogFilter = ({ searchTerm, setSearchTerm }: BlogFilterProps) => {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-sm border border-gray-200/60 bg-white px-4 py-4 pl-12 font-light text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none"
            />
            <svg
              className="absolute top-4 left-4 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFilter;
