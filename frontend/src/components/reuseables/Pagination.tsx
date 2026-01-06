// components/reuseables/Pagination.tsx
'use client';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationCProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    maxVisiblePages?: number;
}

export function PaginationC({
    currentPage,
    totalPages,
    onPageChange,
    maxVisiblePages = 5,
}: PaginationCProps) {
    // Don't show pagination if only one page
    if (totalPages <= 1) return null;

    // Calculate visible page numbers
    const getVisiblePages = () => {
        const half = Math.floor(maxVisiblePages / 2);
        let start = Math.max(1, currentPage - half);
        const end = Math.min(totalPages, start + maxVisiblePages - 1);

        // Adjust start if we're near the end
        if (end - start + 1 < maxVisiblePages) {
            start = Math.max(1, end - maxVisiblePages + 1);
        }

        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    const visiblePages = getVisiblePages();

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const showStartEllipsis = visiblePages[0] > 2;
    const showEndEllipsis = visiblePages[visiblePages.length - 1] < totalPages - 1;

    return (
        <Pagination>
            <PaginationContent>
                {/* Previous Button */}
                <PaginationItem>
                    <PaginationPrevious
                        onClick={handlePrevious}
                        className={currentPage === 1 ?
                            "pointer-events-none opacity-50 cursor-not-allowed" :
                            "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                        }
                        aria-disabled={currentPage === 1}
                    />
                </PaginationItem>

                {/* First Page */}
                {visiblePages[0] > 1 && (
                    <PaginationItem>
                        <PaginationLink
                            onClick={() => onPageChange(1)}
                            isActive={currentPage === 1}
                            className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            1
                        </PaginationLink>
                    </PaginationItem>
                )}

                {/* Start Ellipsis */}
                {showStartEllipsis && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}

                {/* Visible Page Numbers */}
                {visiblePages.map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink
                            onClick={() => onPageChange(page)}
                            isActive={currentPage === page}
                            className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {/* End Ellipsis */}
                {showEndEllipsis && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )}

                {/* Last Page */}
                {visiblePages[visiblePages.length - 1] < totalPages && (
                    <PaginationItem>
                        <PaginationLink
                            onClick={() => onPageChange(totalPages)}
                            isActive={currentPage === totalPages}
                            className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {totalPages}
                        </PaginationLink>
                    </PaginationItem>
                )}

                {/* Next Button */}
                <PaginationItem>
                    <PaginationNext
                        onClick={handleNext}
                        className={currentPage === totalPages ?
                            "pointer-events-none opacity-50 cursor-not-allowed" :
                            "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                        }
                        aria-disabled={currentPage === totalPages}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}