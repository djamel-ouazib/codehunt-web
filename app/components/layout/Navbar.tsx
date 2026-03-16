import Link from "next/link"

const NavLinks=[
  {name:'CodeHunt',href:'/',style:'font-bold text-lg tracking-tight'},
  {name:'Influencers',href:'/influencers',style:''},
  {name:'Brands',href:'/brands',style:''},
]
export default function Navbar(){

    return (
        <nav  className="fixed top-0 left-0 py-2 right-0 z-50 bg-white ">
            <ul className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between border  border-gray-200 rounded-full">
                {NavLinks.map((link,index)=>(
                    <Link key={index} href={link.href}>
                        <li key={index} className={link.style}> {link.name}</li>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}