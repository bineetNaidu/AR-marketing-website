import Head from 'next/head';
import Link from 'next/link';
import { FeatureCard } from '../../components/FeatureCard';
import { Footer } from '../../components/Footer';

const Apps = () => {
  return (
    <>
      <Head>
        <title>Apps | AR apps</title>
      </Head>
      <div>
        <div
          className="relative min-h-screen h-full bg-no-repeat bg-cover bg-center bg-scroll object-cover"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1567881248445-83ead68a44d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGF1Z21lbnRlZCUyMHJlYWxpdHl8ZW58MHx8MHx8&auto=format)`,
          }}
        >
          <h1 className="text-gray-300 absolute text-3xl sm:text-4xl md:text-6xl w-auto top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 italic font-mono font-bold">
            AR in action
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center py-16">
          <div className="w-full max-w-2xl text-center px-2">
            <h3 className="text-4xl text-black pb-4">
              Step into endless possibilities
            </h3>
            <p className="text-stone-500 text-lg">
              Take a look at AR experiences created by Google and the community.
              Anything can happen when reality is just the jumping off point.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <FeatureCard
              title="MARK"
              description="MARK is an AR social platform that allows users to discover, create and share AR art pieces and messages. The platform is built with the latest features of ARCore including Persistent Cloud Anchors and Depth API."
              imgSrc="https://storage.googleapis.com/ar-vr-marketing-assets/mark.jpg"
            />
            <FeatureCard
              title="Snapchat"
              description="Snapchat is a social app that lets you easily talk with friends, view Live Stories from around the world, and explore news in Discover. It uses the Depth API to add a layer of realism to select filters."
              imgSrc="https://storage.googleapis.com/ar-vr-marketing-assets/snapchat.jpg"
            />
            <FeatureCard
              title="TikTok"
              description="TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine. TikTok is the world’s largest social video platform, with more than 1.5 billion active users."
              imgSrc="https://storage.googleapis.com/ar-vr-marketing-assets/TikTok.jpeg"
            />
          </div>

          <div className="w-full max-w-2xl text-center ">
            <button className="bg-transparent border-2 border-blue-700 text-blue-700 py-2 px-4 rounded-sm mt-16 mb-28 font-medium transition-all hover:border-blue-900 hover:text-blue-900">
              Load more
            </button>

            <h3 className="text-4xl text-black pb-4">
              Create your own AR Experience
            </h3>
            <Link href="/login">
              <button className="bg-blue-700 text-white py-2 px-4 rounded-sm font-medium transition-all hover:bg-blue-800 hover:text-gray-300">
                DOWNLOAD SDK
              </button>
            </Link>
          </div>
        </div>

        <hr className="border-b-1 border-gray-200 w-full mt-16 mb-8" />
        <Footer />
      </div>
    </>
  );
};

export default Apps;
