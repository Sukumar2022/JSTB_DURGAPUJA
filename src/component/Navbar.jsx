import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Committee",
    path: "/committee",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ================= NAVBAR ================= */}
      <div
        className="
          relative
          border-b border-[#9b1b16]/40
          bg-gradient-to-r
          from-[#5b0806]
          via-[#7d0b08]
          to-[#5b0806]
          shadow-[0_4px_20px_rgba(0,0,0,0.25)]
        "
      >
        {/* Bottom glowing line */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-[#c7351d]
            to-transparent
          "
        />

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex h-[72px] items-center justify-between">
            {/* ================================================= */}
            {/* LOGO */}
            {/* ================================================= */}

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="group flex items-center gap-3"
            >
              {/* Lotus Logo */}
              <div
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  sm:h-12
                  sm:w-12
                "
              >
                <img
                  src="/images/logo.png"
                  alt="Digital Puja"
                  className="h-12 w-auto"
                />
              </div>

              {/* Logo Text */}
              <div className="leading-none">
                <h1
                  className="
                    font-dm-serif
                    text-[16px]
                    font-semibold
                    tracking-wide
                    text-[#f7eee2]
                    sm:text-[21px]
                    uppercase
                  "
                >
                  Jujarsaha Singhabahinitala 
                </h1>

                <p
                  className="
                    mt-[4px]
                    text-[7px]
                    font-medium
                    uppercase
                    tracking-[0.32em]
                    text-[#d9c7b3]
                    sm:text-[8px]
                  "
                >
                 Barowari Durga Puja Committee
                </p>
              </div>
            </Link>

            {/* ================================================= */}
            {/* DESKTOP NAVIGATION */}
            {/* ================================================= */}

            <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `
                    group
                    relative
                    flex
                    h-[72px]
                    items-center
                    text-[13px]
                    font-medium
                    tracking-wide
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-[#f0b83d]"
                        : "text-[#f2e7dc] hover:text-[#e9b23b]"
                    }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      {/* Active underline */}
                      {isActive && (
                        <motion.span
                          layoutId="navbar-active"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                          className="
                            absolute
                            bottom-[14px]
                            left-1/2
                            h-[2px]
                            w-9
                            -translate-x-1/2
                            rounded-full
                            bg-[#e7aa35]
                          "
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* ================================================= */}
            {/* DESKTOP REGISTER BUTTON */}
            {/* ================================================= */}

            <div className="hidden items-center gap-5 lg:flex">
              <Link
                to="/admin-login"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#e8ad35]
                  to-[#f3c04e]
                  px-6
                  py-2.5
                  text-[12px]
                  font-semibold
                  text-[#4b170c]
                  shadow-[0_3px_12px_rgba(0,0,0,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-[1px]
                  hover:shadow-[0_5px_18px_rgba(231,171,52,0.3)]
                "
              >
              <i class="ri-user-shared-line  text-[15px]"></i>

                <span>Login</span>
              </Link>
            </div>

            {/* ================================================= */}
            {/* MOBILE MENU BUTTON */}
            {/* ================================================= */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-md
                text-[#f4e9dd]
                transition-all
                hover:bg-white/10
                lg:hidden
              "
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <i
                className={`
                  text-[25px]
                  transition-transform
                  duration-300
                  ${menuOpen ? "ri-close-line rotate-90" : "ri-menu-line"}
                `}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* MOBILE MENU */}
      {/* ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="
              overflow-hidden
              border-b
              border-[#a5251b]
              bg-[#5b0806]
              lg:hidden
            "
          >
            <nav className="mx-auto max-w-[1400px] px-5 py-5 sm:px-8">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `
                      flex
                      items-center
                      justify-between
                      rounded-md
                      px-4
                      py-3.5
                      text-sm
                      font-medium
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "bg-[#86100b] text-[#e9b23b]"
                          : "text-[#f2e7dc] hover:bg-[#76100a] hover:text-[#e9b23b]"
                      }
                      `
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{item.name}</span>

                        <i
                          className={`
                            text-lg
                            ${
                              isActive
                                ? "ri-arrow-right-line text-[#e9b23b]"
                                : "ri-arrow-right-s-line text-white/50"
                            }
                          `}
                        />
                      </>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Mobile Register */}
              <Link
                to="/admin-login"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#e5aa32]
                  to-[#f3c04e]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-[#4b170c]
                  shadow-lg
                "
              >
                <i className="ri-user-add-line text-lg" />
                Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
