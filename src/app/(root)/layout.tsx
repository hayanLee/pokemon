import QueryProvider from '@/(providers)/QueryProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Pokemon',
    description: '포켓몬도감',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${inter.className} container mx-auto`}>
                <QueryProvider>
                    <div className='rounded-lg bg-blue-50 min-h-screen py-10'>{children}</div>
                </QueryProvider>
            </body>
        </html>
    );
}
