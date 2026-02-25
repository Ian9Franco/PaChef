export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background p-4">
      <div className="glass-panel w-full max-w-md p-8 rounded-2xl flex flex-col items-center space-y-6 animate-in fade-in zoom-in duration-500">
        <h1 className="text-3xl font-bold tracking-tight">STATLINE</h1>
        <p className="text-muted-foreground text-center">
          Sign in to your account
        </p>
        {/* Placeholder for Auth form */}
        <div className="w-full space-y-4">
          <div className="h-10 w-full bg-secondary rounded-md animate-pulse"></div>
          <div className="h-10 w-full bg-secondary rounded-md animate-pulse"></div>
          <div className="h-10 w-full bg-primary rounded-md opacity-80"></div>
        </div>
      </div>
    </div>
  )
}
