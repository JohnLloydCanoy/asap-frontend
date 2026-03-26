import BetaAlert from '../../components/BetaAlert'; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      {/* This will show only in light theme, overlaying your content */}
      <BetaAlert supportEmail="canoy.john812@gmail.com" />
    </main>
  );
}