import { Menu } from '@headlessui/react';
import Link from 'next/link';

function MyLink(props: any) {
  const { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

function DropDownMenu() {
  return (
    <div>
      <Menu>
        <Menu.Button>
          <span>Bupe Mulenga</span>
        </Menu.Button>
        <Menu.Items>
          <Menu.Item>
            <MyLink href="#">Profile</MyLink>
          </Menu.Item>
          <Menu.Item>
            <MyLink href="#">Settings</MyLink>
          </Menu.Item>
          <Menu.Item>
            <MyLink href="#">Sign Out</MyLink>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default DropDownMenu;
