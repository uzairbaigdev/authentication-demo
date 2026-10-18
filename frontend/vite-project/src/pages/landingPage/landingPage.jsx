import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="none"
    className="h-4 w-4"
  >
    <path
      d="M4.167 10h11.666m0 0-5-5m5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    fill="none"
    className="h-5 w-5 shrink-0 text-teal-600"
  >
    <path
      d="m5 10.25 3.25 3.25L15.5 6.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LandingPage = () => (
  <main className="min-h-screen overflow-hidden bg-[#f8faf9] text-slate-900">
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
      <Link to="/" className="flex items-center gap-2.5" aria-label="Aster home">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path
              d="M12 3.75 19 7.5v9L12 20.25 5 16.5v-9l7-3.75Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path
              d="m9.25 12.25 1.8 1.8 3.9-4.1"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-lg font-bold tracking-tight">aster</span>
      </Link>

      <nav aria-label="Main navigation" className="flex items-center gap-3">
        <Link
          to="/login"
          className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:text-slate-950"
        >
          Log in
        </Link>
        <Link
          to="/register"
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          Get started
        </Link>
      </nav>
    </header>

    <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-20">
      <div className="relative z-10 max-w-2xl">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-3.5 py-2 text-xs font-semibold text-teal-800 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-teal-500" />
          Identity that just works
        </div>
        <h1 className="max-w-xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[4.45rem]">
          A simpler way to feel <span className="text-teal-700">secure.</span>
        </h1>
        <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Sign in with confidence. Aster keeps your account protected, your
          information private, and getting started refreshingly simple.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            Create your account <ArrowIcon />
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            I already have an account
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2">
            <CheckIcon /> Private by default
          </span>
          <span className="inline-flex items-center gap-2">
            <CheckIcon /> Ready in minutes
          </span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-14 h-72 w-72 rounded-full bg-teal-200/45 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-16 -left-10 h-60 w-60 rounded-full bg-cyan-100/70 blur-3xl"
        />
        <div className="relative rounded-[2rem] border border-white bg-white/75 p-3 shadow-[0_30px_100px_-35px_rgba(15,45,48,0.3)] backdrop-blur sm:p-5">
          <div className="rounded-[1.5rem] bg-[#edf5f2] p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Account overview
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Your security, at a glance
                </p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-teal-700 shadow-sm">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M12 3.5 19 6v5.4c0 4.4-2.8 7.4-7 9.1-4.2-1.7-7-4.7-7-9.1V6l7-2.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m9 12 2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 text-sm font-bold text-teal-800">
                    JD
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Jordan Davis</p>
                    <p className="mt-0.5 text-xs text-slate-500">Personal account</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Protected
                </span>
              </div>

              <div className="my-5 h-px bg-slate-100" />
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
                      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                        <rect x="3.5" y="5" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="m4.5 6 5.5 4.25L15.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-800">Email verified</p>
                      <p className="mt-0.5 text-[11px] text-slate-500">jordan@example.com</p>
                    </div>
                  </div>
                  <CheckIcon />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
                      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                        <rect x="5" y="8.5" width="10" height="8" rx="1.8" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M7.5 8.5V6a2.5 2.5 0 0 1 5 0v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-medium text-slate-800">Secure sign-in</p>
                      <p className="mt-0.5 text-[11px] text-slate-500">Your account is protected</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-teal-700">On</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-900 px-4 py-3.5 text-white shadow-lg shadow-slate-900/10">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-teal-200">
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                  <path d="M10 2.75v2.5m0 9.5v2.5m7.25-7.25h-2.5m-9.5 0h-2.5m12.38-5.13-1.77 1.77m-6.72 6.72-1.77 1.77m10.26 0-1.77-1.77m-6.72-6.72L4.87 4.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="10" cy="10" r="3.25" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold">Everything looks good</p>
                <p className="mt-0.5 text-[11px] text-slate-300">You’re all set to go.</p>
              </div>
              <span className="ml-auto text-xs text-slate-300">Just now</span>
            </div>
          </div>
        </div>
        <div className="absolute -left-5 top-1/2 hidden -translate-y-1/2 items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl shadow-slate-900/10 sm:flex">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
            <CheckIcon />
          </span>
          <div>
            <p className="text-xs font-semibold text-slate-900">Privacy first</p>
            <p className="mt-0.5 text-[11px] text-slate-500">Your data stays yours</p>
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-slate-200/70 bg-white/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 sm:grid-cols-3 sm:gap-6 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Simple setup</span> — get going in moments
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Built for peace of mind</span> — security made clear
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Always in your control</span> — your account, your way
          </p>
        </div>
      </div>
    </section>

    <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
      <p>© 2025 Aster. Simple, secure access.</p>
      <p>Designed to make signing in feel effortless.</p>
    </footer>
  </main>
);

export default LandingPage;