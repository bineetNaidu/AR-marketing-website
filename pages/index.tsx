import Link from 'next/link';
import Head from 'next/head';
import { FeatureCard } from '../components/FeatureCard';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <>
      <Head>
        <title>Augmented Reality (AR/VR Marketing Page)</title>
      </Head>
      <div>
        <div
          className="relative min-h-screen h-full bg-no-repeat bg-cover bg-center bg-scroll object-cover"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGF1Z21lbnRlZCUyMHJlYWxpdHl8ZW58MHx8MHx8&auto=format)`,
          }}
        >
          <h1 className="text-gray-300 absolute text-6xl w-auto top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 italic font-mono font-bold">
            Augmented Reality
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center py-16">
          <div className="w-full max-w-2xl text-center">
            <h3 className="text-4xl text-black pb-4">
              A new way for your devices to be helpful
            </h3>
            <p className="text-stone-500 text-lg">
              Augmented reality overlays digital content and information onto
              the physical world — as if they’re actually there with you, in
              your own space. AR opens up new ways for your devices to be
              helpful throughout your day by letting you experience digital
              content in the same way you experience the world. It lets you
              search things visually, simply by pointing your camera at them. It
              can put answers right where your questions are by overlaying
              visual, immersive content on top of your real world.
            </p>
          </div>
          <div className="h-2/4 py-16 flex">
            <img
              className="h-96 w-full object-cover pr-4"
              src="https://images.unsplash.com/photo-1590126141992-d6a613152c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXVnbWVudGVkJTIwcmVhbGl0eXxlbnwwfHwwfHw%3D&auto=format"
              alt="AR"
            />
            <img
              className="h-96 w-full object-cover"
              src="https://images.unsplash.com/photo-1579616043939-95d87a6e8512?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXVnbWVudGVkJTIwcmVhbGl0eXxlbnwwfHwwfHw%3D&auto=format"
              alt="AR"
            />
          </div>

          <hr className="border-b-2 border-gray-200 w-full mb-16" />

          <div className="grid grid-cols-3 gap-3">
            <FeatureCard
              title="AR in Google Search"
              description="Now you can use AR to place 3D digital objects right in your own space directly from Search or from websites on Chrome. Learn more about everything from NASA’s Curiosity Rover to human anatomy to animals like hedgehogs, penguins, and sharks, with a greater sense of context and scale."
              imgSrc="https://images.unsplash.com/photo-1570552047082-ece4390cc6f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBob25lJTIwcG5nfGVufDB8fDB8fA%3D%3D&auto=format"
            />
            <FeatureCard
              title="Live View in Google Maps"
              description="Exploring a new area and feeling lost? With Live View in Google Maps, you can quickly orient yourself and know which way to go with directions overlaid right on top of your world."
              imgSrc="https://images.unsplash.com/photo-1552233659-012e177ed56d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBob25lJTIwcG5nfGVufDB8fDB8fA%3D%3D&auto=format"
            />
            <FeatureCard
              title="AR in Apps"
              description="Using ARCore, our developer platform, we're working with our developer, creator and brand partners to bring helpful, entertaining, and engaging AR experiences to apps."
              imgSrc="https://images.unsplash.com/photo-1533162518830-e683192f365b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHBob25lJTIwcG5nfGVufDB8fDB8fA%3D%3D&auto=format"
            >
              <Link href="/apps">
                <a className="text-blue-500 hover:text-blue-800 hover:underline text-lg">
                  Learn more
                </a>
              </Link>
            </FeatureCard>
          </div>

          <hr className="border-b-1 border-gray-200 w-full mt-16 mb-8" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
