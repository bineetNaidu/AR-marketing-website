import Link from 'next/link';
import Head from 'next/head';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | AR Marketing page</title>
      </Head>
      <div>
        <div
          className="relative min-h-screen h-full bg-no-repeat bg-cover bg-center bg-scroll object-cover"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1493497029755-f49c8e9a8bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGF1Z21lbnRlZCUyMHJlYWxpdHl8ZW58MHx8MHx8&auto=format)`,
          }}
        >
          <div className="text-gray-300 absolute  w-auto top-48 right-8 italic font-mono font-bold">
            <h1 className="text-2xl">Join the Augmented Reality community</h1>
            <div className="mt-8 flex justify-center">
              <div className="mb-4 w-full">
                <label
                  className="block text-gray-400 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>

                <input
                  className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />

                <label
                  className="block text-gray-400 text-sm font-bold mb-2 mt-4"
                  htmlFor="password"
                >
                  Password
                </label>

                <input
                  className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />

                <div className="flex items-center justify-between">
                  <button className="hover:bg-gray-500 border-gray-700 border text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Login
                  </button>
                  <Link href="/">
                    <a className="hover:underline text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Back to Home
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
