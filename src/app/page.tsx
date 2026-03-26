import BetaAlert from '../../components/BetaAlert'; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      {/* This will show only in light theme, overlaying your content */}
      <BetaAlert supportEmail="canoy.john812@gmail.com" />
      
      {/* Your actual page content goes here */}
      <h1 className="text-5xl font-extrabold text-gray-900 tracking-tighter">ASAP</h1>
      <p className="mt-4 text-xl text-gray-600">Frontend Dashboard Content</p>
    </main>
  );
}