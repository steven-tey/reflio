import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Logo } from './Icons/Logo';
import { useUser } from '@/utils/useUser';
import Link from 'next/link';
import { Button } from './Button'; 
import { Github } from './Icons/Github'; 

export const Navbar = () => {

  const { user } = useUser();
  const [active, setActive] = useState(false);
  const navClass = 'lg:text-lg font-medium hover:underline mx-4';

  return (
    <>
      {/* <div className="bg-gradient-to-r from-secondary to-secondary-2 py-4">
        <div className="wrapper text-center">
          <p className="text-lg text-white font-semibold">📢&nbsp;We're currently in public beta!</p>
        </div>
      </div> */}
      <div className="bg-gray-50 sticky top-0 z-50 border-b-2 border-gray-200">
        <div className="py-4 wrapper">
          <div className="flex justify-between">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link
                  href="/"
                >
                  <Logo className="h-8 lg:h-12 w-auto"/>
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center">
              <nav className="flex items-center justify-center">
                <a
                  href="/#features"
                  className={navClass}
                >
                  Features
                </a>
                <a
                  href="/pricing"
                  className={navClass}
                >
                  Pricing
                </a>
                <a
                  href="https://reflio.com/resources"
                  className={navClass}
                >
                  Docs & Guides
                </a>
                <a
                  href="https://reflio.canny.io"
                  className={navClass}
                  target="_blank"
                >
                  Roadmap
                </a>
              </nav>
            </div>

            <button
              className='inline-flex rounded lg:hidden outline-none'
              onClick={e=>{active ? setActive(false) : setActive(true) }}
            >
              {
                active ?
                  <XIcon className="w-8 h-auto"/>
                : <MenuIcon className="w-8 h-auto"/>
              }
            </button>

            {
              active &&
              <div className="origin-top-right absolute left-0 top-auto overflow-hidden mt-12 w-full shadow-xl border-t-4 border-gray-200 bg-white z-50">
                <a onClick={e=>{setActive(false)}} className="block p-5 text-md bg:text-white hover:bg-gray-100 border-b-2 border-gray-200" href="/#features">Features</a>
                <a onClick={e=>{setActive(false)}} className="block p-5 text-md bg:text-white hover:bg-gray-100 border-b-2 border-gray-200" href="/pricing">Pricing</a>
                <a onClick={e=>{setActive(false)}} className="block p-5 text-md bg:text-white hover:bg-gray-100 border-b-2 border-gray-200" href="/resources">Docs & Guides</a>
                <a onClick={e=>{setActive(false)}} className="block p-5 text-md bg:text-white hover:bg-gray-100 border-b-2 border-gray-200" href="https://reflio.canny.io" target="_blank">Roadmap</a>
                {
                  !user &&
                  <a onClick={e=>{setActive(false)}} className="block p-5 text-md bg:text-white hover:bg-gray-100 font-semibold" href="/signin">Sign In</a>
                }
                <a onClick={e=>{setActive(false)}} className="block p-5 text-md bg-primary border-b-primary-3 border-b-4 hover:bg-primary-2 font-semibold" href={user ? '/dashboard' : '/signup'}>{user ? 'Dashboard' : 'Get Started for Free' }</a>
              </div>
            }

            <div className="hidden lg:flex items-center">
              <a className="mr-3"href="https://github.com/Reflio-com/reflio" target="_blank" rel="noreferrer">
                <Github className="w-auto h-6"/>
              </a>
              {
                user ?
                <div className="flex-shrink-0">
                  <Button
                    small
                    primary
                    href="/dashboard"
                  >
                    <span>View Dashboard</span>
                  </Button>
                </div>
                :
                  <div className="flex-shrink-0">
                    <a
                      href="/signin"
                      className={navClass + ' mr-6'}
                    >
                      Sign In
                    </a>
                    <Button
                      small
                      primary
                      href="/signup"
                    >
                      <span>Get Started for Free</span>
                    </Button>
                  </div>        
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;