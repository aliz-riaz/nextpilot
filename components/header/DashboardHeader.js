"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import styles from "./DashboardHeader.module.scss";
import { useSession } from "next-auth/react";
import Image from "next/image";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const DashboardHeader = () => {
  const { data } = useSession();
  console.log("data", data?.user);
  return (
    <>
      <header>
        <nav className="flex justify-between items-center px-6 p-6">
          <a className={`${styles.nav_left}`}>
            <span class="t">Your Company</span>
            <img
              className={` mx-auto h-10`}
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="aaaa"
            />
          </a>
          <div
            className={`${styles.nav_right} flex items-center gap-10 font-medium`}
          >
            <a href="#" className="font-semibold">
              Product
            </a>
            <a href="#" className="font-semibold">
              Features
            </a>
            <a href="#" className="font-semibold">
              Marketplace
            </a>
            <a href="#" className="font-semibold">
              Company
            </a>
            {!data ? (
              <a href="#" className="font-semibold">
                Log in <span aria-hidden="true">→</span>
              </a>
            ) : (
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <span>{data?.user?.name}</span>
                    <img
                      src={data?.user.avatar}
                      alt="profile"
                      width={`50`}
                      height={`50`}
                    />
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
export default DashboardHeader;
