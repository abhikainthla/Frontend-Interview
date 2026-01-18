import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-[#f7f7f7] bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              className="bg-[#000918] rounded-md p-1 h-[45px]"
              src="https://d502jbuhuh9wk.cloudfront.net/orgData/606b3abe0cf2821005a32675/pages/assets/images/tbSq2camonklogo.png"
              alt="CA Monk"
            />
            <span className="text-xl md:text-2xl font-semibold text-gray-900">
              CA MONK
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <button className="hover:text-black transition">Tools</button>
            <button className="hover:text-black transition">Practice</button>
            <button className="hover:text-black transition">Events</button>
            <button className="hover:text-black transition">Job Board</button>
            <button className="hover:text-black transition">Points</button>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button className="bg-[#4e47e5] text-white">
              Profile
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-md p-2 hover:bg-muted"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t py-4 space-y-4">
            <button className="block w-full text-left px-2 text-sm text-gray-600 hover:text-black">
              Tools
            </button>
            <button className="block w-full text-left px-2 text-sm text-gray-600 hover:text-black">
              Practice
            </button>
            <button className="block w-full text-left px-2 text-sm text-gray-600 hover:text-black">
              Events
            </button>
            <button className="block w-full text-left px-2 text-sm text-gray-600 hover:text-black">
              Job Board
            </button>
            <button className="block w-full text-left px-2 text-sm text-gray-600 hover:text-black">
              Points
            </button>

            <div className="pt-2">
              <Button className="w-full bg-[#4e47e5] text-white">
                Profile
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
