export default function PageNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-2 text-slate-600">This static site does not include that page.</p>
      </div>
    </div>
  );
}
