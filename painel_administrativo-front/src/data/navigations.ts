import type { NavigationType } from "@/types"

export const navigationsData: NavigationType[] = [
  {
    title: "Painel",
    items: [
      {
        title: "Inicio",
        href: "/dashboard",
        iconName: "House",
      },
      {
        title: "Garantia",
        href: "/dashboard/garantias",
        iconName: "Wrench",
      },
      {
        title: "Divergências",
        href: "/dashboard/divergencias",
        iconName: "Package",
      },
      // {
      //   title: "Caixa",
      //   href: "/dashboard/caixa",
      //   iconName: "PackageOpen",
      // },
    ],
  },
]
