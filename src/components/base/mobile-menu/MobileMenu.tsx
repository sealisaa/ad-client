'use client'

import { Fragment } from 'react'
import {
  Menu,
  Transition,
} from '@headlessui/react'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { LinksDataProps } from '@/components/base/link-list/data/links.data'
import Link from 'next/link'

export const MobileMenu = ({
  iconSize,
  centerLinks,
  extendLinks,
}: {
  iconSize: number
  centerLinks: LinksDataProps[]
  extendLinks: LinksDataProps[]
}) => {
  return (
    <>
      <div className='sm:hidden'>
        <Menu
          as='div'
          className='relative inline-block'>
          <div>
            <Menu.Button className='flex items-center justify-center px-2 py-2'>
              <Bars3BottomLeftIcon
                width={iconSize}
                height={iconSize}
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
            leaveTo='transform opacity-0 scale-95'>
            <Menu.Items className='absolute right-8 mt-1 flex w-96 origin-top-right flex-col items-start rounded-md bg-drCurrentLine'>
              <div className='ml-8 mt-4 px-4 py-4'>
                <Menu.Item>
                  <h1>Навигация по сайту</h1>
                </Menu.Item>
              </div>
              <div className='ml-8 flex w-full flex-col items-start gap-2 px-4'>
                {centerLinks.map(link => (
                  <Menu.Item key={link.id}>
                    <Link
                      href={link.href}
                      className='flex items-center gap-2 px-2 py-2 hover:rounded-md hover:bg-drCurrentLine/10 dark:hover:bg-drCurrentLine/75 dark:hover:text-drPurple'>
                      {link.icon}
                      {link.title}
                    </Link>
                  </Menu.Item>
                ))}
              </div>
              <div className='ml-8 px-4 py-4'>
                <Menu.Item>
                  <h1>Полезные ссылки</h1>
                </Menu.Item>
              </div>
              <div className='mb-8 ml-8 flex w-full flex-col items-start gap-2 px-4'>
                {extendLinks.map(link => (
                  <Menu.Item key={link.id}>
                    <Link
                      href={link.href}
                      className='flex items-center gap-2 px-2 py-2 hover:rounded-md hover:bg-drCurrentLine/10 dark:hover:bg-drCurrentLine/75 dark:hover:text-drPurple'>
                      {link.icon}
                      {link.title}
                    </Link>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  )
}