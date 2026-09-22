import { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Document, Page, pdfjs } from 'react-pdf'
import pdfFile from '@/assets/Liam_Tapper_Resume_SEPT_06_2026.pdf'
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { Button } from '@/components/ui/button'

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker

export function ResumeViewer() {
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-10">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <nav className="flex items-center gap-1">
            <Button variant="ghost" size="sm">
              <a href="/">About</a>
            </Button>
            <Button variant="ghost" size="sm">
              <a href="/skills">Skills</a>
            </Button>
          </nav>
        </div>
      </header>

      <ErrorBoundary
        fallback={
          <p className="text-red-400">
            Failed to load PDF.
          </p>
        }
      >
        <Suspense fallback={<p>Loading document…</p>}>
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<p className="text-zinc-400">Loading document…</p>}
            error={<p className="text-red-400">Failed to load PDF.</p>}
          >
            <Suspense fallback={<p>Loading page…</p>}>
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-sm shadow-2xl shadow-black/50">
                  <Page
                    pageNumber={pageNumber}
                    renderAnnotationLayer
                    renderTextLayer
                  />
                </div>
              </div>
            </Suspense>
          </Document>
        </Suspense>
      </ErrorBoundary>
      {numPages && (
        <div className="mt-6 flex items-center gap-4 text-sm">
          <Button
            type="button"
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber((page) => page - 1)}
            className="rounded-md px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </Button>
          <span>
            Page {pageNumber} of {numPages}
          </span>
          <Button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber((page) => page + 1)}
            className="rounded-md px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </Button>
        </div>
      )}
    </main>
  )
}