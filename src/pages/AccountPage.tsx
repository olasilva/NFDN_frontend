import { useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

type AccountMode = 'choice' | 'login' | 'signup'

export default function AccountPage({ mode }: { mode: AccountMode }) {
  const [searchParams] = useSearchParams()
  const [feedback, setFeedback] = useState('')
  const needsAccount = searchParams.get('next') === 'apply'
  const returnTo = needsAccount ? '?next=apply' : ''

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    if (mode === 'signup' && formData.get('password') !== formData.get('confirmPassword')) {
      setFeedback('Your passwords do not match.')
      return
    }
    setFeedback('Your details are ready. Account access will be enabled when authentication is connected.')
  }

  return (
    <main className="mx-auto flex min-h-[calc(100dvh-136px)] w-full max-w-[1080px] items-center px-5 py-8 sm:px-8 lg:min-h-[calc(100dvh-64px)] lg:px-10">
      <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,460px)] lg:items-center lg:gap-16">
        <section className="max-w-xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-brand"><i aria-hidden="true" className="bx bx-lock-alt text-base" />NDFN account</span>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
            {mode === 'choice' ? 'Your projects, all in one place.' : mode === 'login' ? 'Welcome back.' : 'Create your account.'}
          </h1>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted">
            {needsAccount
              ? 'Log in or create an account to continue with your contract application.'
              : 'Keep track of projects, request quotes, and connect with trusted building professionals.'}
          </p>
        </section>

        <section className="w-full rounded-[10px] border border-line bg-surface p-5 sm:p-7">
          {mode === 'choice' ? <>
            <h2 className="font-display text-xl font-semibold">Choose how to continue</h2>
            <p className="mt-2 text-sm text-muted">Sign in to an existing account or create a new one.</p>
            <div className="mt-6 grid gap-3">
              <Link to={`/login${returnTo}`} className="flex h-12 items-center justify-center gap-2 rounded-[8px] bg-brand text-sm font-semibold text-brand-ink hover:bg-brand/90">
                <i aria-hidden="true" className="bx bx-log-in text-lg" />Log in
              </Link>
              <Link to={`/create-account${returnTo}`} className="flex h-12 items-center justify-center gap-2 rounded-[8px] border border-line bg-surface-2 text-sm font-semibold text-ink hover:border-muted">
                <i aria-hidden="true" className="bx bx-user-plus text-lg" />Create account
              </Link>
            </div>
          </> : <>
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-xl font-semibold">{mode === 'login' ? 'Log in' : 'Create account'}</h2>
              <Link to={`/account${returnTo}`} className="text-xs font-medium text-brand hover:text-ink">Back</Link>
            </div>
            <form onSubmit={submitForm} className="mt-5 grid gap-4">
              {mode === 'signup' && <label className="grid gap-1.5 text-xs font-medium text-muted">Full name
                <input autoComplete="name" name="name" required className="h-11 rounded-[8px] border border-line bg-bg px-3 text-sm text-ink outline-none focus:border-brand" />
              </label>}
              <label className="grid gap-1.5 text-xs font-medium text-muted">Email address
                <input autoComplete="email" name="email" type="email" required className="h-11 rounded-[8px] border border-line bg-bg px-3 text-sm text-ink outline-none focus:border-brand" />
              </label>
              <label className="grid gap-1.5 text-xs font-medium text-muted">Password
                <input autoComplete={mode === 'login' ? 'current-password' : 'new-password'} name="password" type="password" minLength={8} required className="h-11 rounded-[8px] border border-line bg-bg px-3 text-sm text-ink outline-none focus:border-brand" />
              </label>
              {mode === 'signup' && <label className="grid gap-1.5 text-xs font-medium text-muted">Confirm password
                <input autoComplete="new-password" name="confirmPassword" type="password" minLength={8} required className="h-11 rounded-[8px] border border-line bg-bg px-3 text-sm text-ink outline-none focus:border-brand" />
              </label>}
              <button type="submit" className="mt-1 flex h-11 items-center justify-center gap-2 rounded-[8px] bg-brand text-sm font-semibold text-brand-ink hover:bg-brand/90">
                <i aria-hidden="true" className={`bx ${mode === 'login' ? 'bx-log-in' : 'bx-user-plus'} text-lg`} />{mode === 'login' ? 'Log in' : 'Create account'}
              </button>
              {feedback && <p role="status" className="text-xs leading-5 text-muted">{feedback}</p>}
            </form>
            <p className="mt-5 border-t border-line pt-4 text-xs text-muted">
              {mode === 'login' ? 'New to NDFN?' : 'Already have an account?'}{' '}
              <Link to={mode === 'login' ? `/create-account${returnTo}` : `/login${returnTo}`} className="font-semibold text-brand hover:text-ink">
                {mode === 'login' ? 'Create account' : 'Log in'}
              </Link>
            </p>
          </>}
        </section>
      </div>
    </main>
  )
}