import clsx from "clsx";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // Generate array of page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisibleDesktop = 7; // Max visible on desktop

    if (totalPages <= maxVisibleDesktop) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate range around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      // Add ellipsis after first page if needed
      if (start > 2) {
        pages.push("...");
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {/* Previous Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={clsx(
          "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          "border border-[color:rgba(255,255,255,.15)]",
          currentPage === 1
            ? "opacity-50 cursor-not-allowed text-[color:rgba(255,255,255,.5)]"
            : "hover:border-[color:rgba(255,255,255,.3)] hover:bg-[color:rgba(255,255,255,.05)]"
        )}
        aria-label="Previous page"
      >
        <span className="hidden sm:inline">Previous</span>
        <span className="sm:hidden">←</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1 sm:gap-2">
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            // Use a stable key based on position: first ellipsis appears before index > 2, second after
            const ellipsisKey = index < 3 ? "ellipsis-start" : "ellipsis-end";
            return (
              <span key={ellipsisKey} className="px-2 text-[color:rgba(255,255,255,.5)]">
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <button
              type="button"
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={clsx(
                "w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-sm font-medium transition-all",
                "border",
                isActive
                  ? "bg-[var(--red-600)] border-[var(--red-600)] text-white shadow-[0_0_15px_var(--glow)]"
                  : "border-[color:rgba(255,255,255,.15)] hover:border-[color:rgba(255,255,255,.3)] hover:bg-[color:rgba(255,255,255,.05)]"
              )}
              aria-label={`Page ${pageNum}`}
              aria-current={isActive ? "page" : undefined}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={clsx(
          "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          "border border-[color:rgba(255,255,255,.15)]",
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed text-[color:rgba(255,255,255,.5)]"
            : "hover:border-[color:rgba(255,255,255,.3)] hover:bg-[color:rgba(255,255,255,.05)]"
        )}
        aria-label="Next page"
      >
        <span className="hidden sm:inline">Next</span>
        <span className="sm:hidden">→</span>
      </button>
    </div>
  );
}
