import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex items-center justify-between h-16 bg-blue-800 text-white px-8'>
      <Link href='/'>
        <div className='flex'>
          <div>
            <Image
              src='/images/small-roof-logo.svg'
              alt='Small white logo with roof and four circles underneath with a lightning bolt, flame, snowflake and water droplet.'
              width={49}
              height={24}
            />
          </div>
          <span className='pl-2 text-2xl font-semibold'>DSD Services</span>
        </div>
      </Link>
      <nav className='flex gap-8 font-semibold hover:text-blue-100 transition'>
        <Link href='/register'>Register</Link>
        <Link href='/login'>Login</Link>
      </nav>
    </header>
  );
}
