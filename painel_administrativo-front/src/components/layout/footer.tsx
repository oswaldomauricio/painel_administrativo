import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-sidebar-border">
      <div className="container flex justify-between items-center p-4 md:px-6">
        <p className="text-xs text-muted-foreground md:text-sm">
          © {currentYear}{" "}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "link" }), "inline p-0")}
          >
            Norte Auto Pecas
          </a>
          .
        </p>
        <p className="text-xs text-muted-foreground md:text-sm">
          Projetado e desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/oswaldo-mauricio/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "link" }), "inline p-0")}
          >
            Oswaldo Mauricio
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
