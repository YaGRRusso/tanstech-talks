import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { langs } from '../i18n'
import { useTranslation } from 'react-i18next'

export const Route = createRootRoute({
    component: RootLayout,
})

export default function RootLayout() {
    const { i18n } = useTranslation()

    return (
        <>
            <div className="p-2 flex gap-2 justify-between">
                <div className='flex items-center gap-2'>

                    <Link to="/" className="[&.active]:font-bold">
                        Home
                    </Link>{' '}
                    <Link to="/about" className="[&.active]:font-bold">
                        About
                    </Link>
                </div>
                <div className='flex items-center gap-2'>
                    {langs.map((lang) => (
                        <button key={lang.value} onClick={() => i18n.changeLanguage(lang.value)} className='p-2 rounded hover:bg-slate-100 transition-colors'>{lang.label}</button>
                    ))}
                </div>
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    )
}