import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

import { ChevronDownIcon } from '@heroicons/react/solid';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



function Nav() {
    const [navigation, setNavigation] = useState([
        { name: 'C:\ Home', href: '#home', current: true },
        { name: 'D:\ About', href: '#about', current: false },
        { name: 'F:\ Projects', href: '#projects', current: false },
        { name: 'E:\ Contact', href: '#contact', current: false },
    ])





    function toggleActive(active) {
        const index = navigation.findIndex(x => x.name === active);
        setNavigation(navigation.map((item, i) => {
            if (i === index) {
                return { ...item, current: true }
            } else {

                return { ...item, current: false }
            }
        }))

    }


    const [scroll, setScroll] = React.useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const offset = window.scrollY;
            if (offset >= 150) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);

    return (

        <header >
            <Disclosure as="nav" id='scrollNav' className={scroll ? 'bg-[#BE93D4] fixed z-50 w-full transition-all duration-300 shadow-md' : "bg-[#BE93D4] fixed z-50 w-full transition-all duration-300 "}>
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 leading-[80px]">
                            <div className={scroll ? "relative flex items-center justify-between h-12 leading-[40px] transition-all duration-300 " : " transition-all duration-300 relative flex items-center justify-between h-20 leading-[80px]"} >
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                    <div className="flex-shrink-0 flex items-center text-center text-white   text-xl">
                                        <Link href='#home'>Michael C</Link>
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex font-bold  space-x-4 ">
                                            {navigation.map((item) => (
                                                <a
                                                    onClick={() => toggleActive(item.name)}
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? ' text-white hover:bg-[#9867C5] hover:text-white font-bold transition-colors duration-300ms' : ' font-bold text-white transition-colors duration-300ms hover:bg-[#9867C5] hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'section' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                            <Menu as='div' className='relative inline-block text-left'>
                                            <div>
                                                <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
                                                Account
                                                <ChevronDownIcon
                                                    className='-mr-1 ml-2 h-5 w-5'
                                                    aria-hidden='true'
                                                />
                                                </Menu.Button>
                                            </div>
                                
                                            <Transition
                                                as={Fragment}
                                                enter='transition ease-out duration-100'
                                                enterFrom='transform opacity-0 scale-95'
                                                enterTo='transform opacity-100 scale-100'
                                                leave='transition ease-in duration-75'
                                                leaveFrom='transform opacity-100 scale-100'
                                                leaveTo='transform opacity-0 scale-95'
                                            >
                                                <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'>
                                                <div className='py-1'>
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                        href='#'
                                                        className={classNames(
                                                            active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                        >
                                                        Edit
                                                        </a>
                                                    )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                        href='#'
                                                        className={classNames(
                                                            active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                        >
                                                        Duplicate
                                                        </a>
                                                    )}
                                                    </Menu.Item>
                                                </div>
                                                <div className='py-1'>
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                        href='#'
                                                        className={classNames(
                                                            active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                        >
                                                        Archive
                                                        </a>
                                                    )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                        href='#'
                                                        className={classNames(
                                                            active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                        >
                                                        Move
                                                        </a>
                                                    )}
                                                    </Menu.Item>
                                                </div>
                                                <div className='py-1'>
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                        href='#'
                                                        className={classNames(
                                                            active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                        >
                                                        Share
                                                        </a>
                                                    )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                        href='#'
                                                        className={classNames(
                                                            active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                        >
                                                        Add to favorites
                                                        </a>
                                                    )}
                                                    </Menu.Item>
                                                </div>
                                                <div className='py-1'>
                                                    <Menu.Item disabled>
                                                    {({ active }) => (
                                                        <a
                                                        href='#'
                                                        className={classNames(
                                                            active
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                        >
                                                        Delete
                                                        </a>
                                                    )}
                                                    </Menu.Item>
                                                </div>
                                                </Menu.Items>
                                            </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <Disclosure.Panel className="sm:hidden">
                            <Transition
                                show={open}
                                enter=" transition-all duration-150 ease-out"
                                enterFrom="transform opacity-0  h-0"
                                enterTo="transform opacity-100 h-44"
                                leave="duration-100 transition-all ease-in"
                                leaveFrom="opacity-100 transform  h-44"
                                leaveTo=" transform  h-0"
                            >
                                <div className="px-2 pt-2 pb-3 space-y-1 ">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            onClick={() => toggleActive(item.name)}
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'text-white hover:bg-[#9867C5] hover:text-white font-bold transition-colors duration-300ms' : 'text-white font-bold transition-colors duration-300ms hover:bg-[#9867C5] hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'section' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                       <Menu as='div' className='relative inline-block text-left'>
              <div>
                <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
                  Account
                  <ChevronDownIcon
                    className='-mr-1 ml-2 h-5 w-5'
                    aria-hidden='true'
                  />
                </Menu.Button>
              </div>
  
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Edit
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Duplicate
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Archive
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Move
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Share
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Add to favorites
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className='py-1'>
                    <Menu.Item disabled>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Delete
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
                                </div>
                            </Transition>
                        </Disclosure.Panel>


                    </>
                )
                }
            </Disclosure >
        </header >
    )
}

export default Nav