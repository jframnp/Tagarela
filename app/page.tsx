import { redirect } from 'next/navigation';
export default async function Home({ }) {
    redirect('/home');
}