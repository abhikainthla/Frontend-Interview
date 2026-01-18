import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#000918] border-t mt-20 text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex align-center">
            <img className=" bg-[#000918] rounded-md p-1 h-[40px]" src="https://d502jbuhuh9wk.cloudfront.net/orgData/606b3abe0cf2821005a32675/pages/assets/images/tbSq2camonklogo.png" />
            <h2 className="text-2xl font-bold text-[#ffffff]">CA Monk</h2>
            </div>

            <p className="mt-3 text-sm text-muted-[#4e47e5] text-[#ffffff]">
              Empowering finance professionals with insights, trends, and career growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-[#4e47e5]">
              <li className="hover:text-[#4e47e5] cursor-pointer">Home</li>
              <li className="hover:text-[#4e47e5] cursor-pointer">Blogs</li>
              <li className="hover:text-[#4e47e5] cursor-pointer">Careers</li>
              <li className="hover:text-[#4e47e5] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-[#4e47e5]">
              <li className="hover:text-[#4e47e5] cursor-pointer">Accounting</li>
              <li className="hover:text-[#4e47e5] cursor-pointer">Finance</li>
              <li className="hover:text-[#4e47e5] cursor-pointer">Taxation</li>
              <li className="hover:text-[#4e47e5] cursor-pointer">Career Growth</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a className="rounded-full border p-2 hover:bg-muted transition">
                <Facebook size={18} />
              </a>
              <a className="rounded-full border p-2 hover:bg-muted transition">
                <Twitter size={18} />
              </a>
              <a className="rounded-full border p-2 hover:bg-muted transition">
                <Linkedin size={18} />
              </a>
              <a className="rounded-full border p-2 hover:bg-muted transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-[#4e47e5]">
          <p>© {new Date().getFullYear()} CA Monk. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#4e47e5] cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#4e47e5] cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
