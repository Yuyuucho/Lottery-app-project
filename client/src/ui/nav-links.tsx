'use client';

import Link from "next/link";

const links = [
    { key: 'home', name: 'ホームへ戻る', href: '/' },
    { key: 'signup', name: '新規登録', href: '/signup' },
    { key: 'login', name: 'ログイン', href: '/login'}
    //{ key: 'logout', name: 'ログアウト', href: '/logout' }
    
];


export default function NavLinks() {
    
    //const pathname=usePathname()
    return(
        <div>
            {links.map((link) => {
                return (
                    <Link
                        key={link.key}
                        href={link.href}                        
                    >
                    <p>{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}