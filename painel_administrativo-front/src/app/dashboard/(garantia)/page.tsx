"use client"

import { redirect } from "next/navigation"
import { Package, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="container">
      <div className="p-4 flex flex-row justify-start gap-4">
        <Button
          className="bg-foreground text-white hover:bg-primary focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded-md px-4 py-2 h-60 w-60 flex flex-col items-center justify-center gap-y-2"
          onClick={() => redirect("/dashboard/garantias")}
        >
          <Wrench className="me-2 size-20" aria-hidden />
          <p className="text-xl">GARANTIAS</p>
        </Button>
        <Button
          className="bg-foreground text-white hover:bg-primary focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 rounded-md px-4 py-2 h-60 w-60 flex flex-col items-center justify-center gap-y-2"
          onClick={() => redirect("/dashboard/divergencias")}
        >
          <Package className="me-2 size-20" aria-hidden />
          <p className="text-xl">DIVERGÊNCIAS</p>
        </Button>
      </div>
    </div>
  )
}
