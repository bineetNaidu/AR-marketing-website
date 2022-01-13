import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FeatureCard } from '../../components/FeatureCard';
import { Footer } from '../../components/Footer';

type AppDataType = {
  _id: string;
  app: {
    title: string;
    description: string;
    imgSrc: string;
  };
};

const Apps = ({ apps }) => {
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
            {apps &&
              (apps as AppDataType[]).map(({ _id, app }) => (
                <FeatureCard
                  key={_id}
                  title={app.title}
                  description={app.description}
                  imgSrc={app.imgSrc}
                />
              ))}
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  const Q = `
		query GetAppList {
			getAppList(sort: {order: "asc", field: "_createdAt"} ) {
				items {
					_id
					app {
						imgSrc
						description
						title
					}
				}
			}
		}
`;
  const URL = process.env.TAKESHAPE_API_ENDPOINT;
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.TAKESHAPE_API_KEY}`,
    },
    body: JSON.stringify({ query: Q }),
  });
  const data = await res.json();
  return {
    props: {
      apps: data.data.getAppList.items,
    },
  };
};

export default Apps;
