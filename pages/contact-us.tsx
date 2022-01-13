import Link from 'next/link';
import Head from 'next/head';

const ContactUs = () => {
  const handleMessageSubmit = () => {
    alert('Message sent!');
  };

  return (
    <>
      <Head>
        <title>Contact Us | AR marketing page</title>
      </Head>
      <div>
        <div
          className="relative min-h-screen h-full bg-no-repeat bg-cover bg-center bg-scroll object-cover"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1580983561252-463dca6ad904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGF1Z21lbnRlZCUyMHJlYWxpdHl8ZW58MHx8MHx8&auto=format)`,
          }}
        >
          <div className="text-gray-300 absolute  w-auto top-44 left-20 italic font-mono font-bold">
            <h1 className="text-2xl">
              Contact the Augmented Reality community
            </h1>
            <div className="mt-8 flex justify-center">
              <div className="mb-4 w-full">
                <label
                  className="block text-gray-400 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Your Email
                </label>

                <input
                  className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="you@provider.com"
                />

                <label
                  className="block text-gray-400 text-sm font-bold mb-2 mt-4"
                  htmlFor="message"
                >
                  Your Message
                </label>

                <textarea
                  className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="hello there :)"
                  rows={6}
                />

                <div className="flex items-center justify-between">
                  <button
                    className="hover:bg-gray-500 border-gray-700 border text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleMessageSubmit}
                  >
                    Send the message
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

export default ContactUs;
