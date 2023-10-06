import forkify from "../images/forkify-app.jpeg";
import bookmark from "../images/bookmark-manager-demo.jpeg";
import twitter from "../images/twitter-capture.jpeg";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="font-bold text-4xl text-center text-blue-400 pt-5">
        Some of my recent projects
      </h2>
      {/* <!-- Global Container --> */}
      <div className="flex items-center justify-center min-h-screen">
        {/* <!-- Inner Container --> */}
        <div className="flex flex-col my-6 basis-4/5 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
          {/* <!-- Col 1 --> */}
          <div className="bg-slate-700 rounded-xl text-white">
            {/* <!-- Upper Container --> */}
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">Twitter/X Clone</div>
              <img
                src={twitter}
                alt="twitter/x clone"
                loading="lazy"
                className="rounded-xl h-48 w-96 pt-1"
              />
              <div className="flex justify-center">
                <a
                  href="https://tailwind-bookmark-manager.vercel.app/"
                  className="inline-block px-10 py-3 my-6 text-center border  rounded-lg duration-200 bg-blue-400 hover:bg-green-500 hover:border-violet-800"
                >
                  Check it out
                </a>
              </div>
            </div>

            {/* <!-- Border --> */}
            <div className="border-t border-slate-700"></div>

            {/* <!-- Lower Container --> */}
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              {/* <!-- List Container --> */}
              <div className="flex flex-col space-y-2">
                {/* <!-- List Item 1 --> */}
                <div className="flex justify-center">
                  <span className="text-sm ml-1">
                    Original Twitter clone with the ability to like, follow and
                    create tweets.
                  </span>
                </div>

                {/* <!-- List Item 2 --> */}
                <div className="flex justify-center">
                  <span className="text-sm ml-1">
                    Built using Node, React and Tailwind.
                  </span>
                </div>

                {/* <!-- List Item 3 --> */}
                <div className="flex justify-center">
                  <a
                    href="https://github.com/rruiz88/twitter-clone-node-react"
                    className="text-md ml-1 text-green-500 hover:underline"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Col 2 --> */}
          <div className="bg-slate-700 rounded-xl text-white">
            {/* <!-- Upper Container --> */}
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">Bookmark Manager</div>
              <img
                src={bookmark}
                alt="bookmark manager"
                loading="lazy"
                className="rounded-xl h-48 w-96 pt-1"
              />
              <div className="flex justify-center">
                <a
                  href="https://tailwind-bookmark-manager.vercel.app/"
                  className="inline-block px-10 py-3 my-6 text-center border  rounded-lg duration-200 bg-blue-400 hover:bg-green-500 hover:border-violet-800"
                >
                  Check it out
                </a>
              </div>
            </div>

            {/* <!-- Border --> */}
            <div className="border-t border-slate-700"></div>

            {/* <!-- Lower Container --> */}
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              {/* <!-- List Container --> */}
              <div className="flex flex-col space-y-2">
                {/* <!-- List Item 1 --> */}
                <div className="flex justify-center">
                  <span className="text-sm ml-1">
                    Created using Tailwind CSS.
                  </span>
                </div>

                {/* <!-- List Item 2 --> */}
                <div className="flex justify-center">
                  <span className="text-sm ml-1">
                    Responsive to screen sizes.
                  </span>
                </div>

                {/* <!-- List Item 3 --> */}
                <div className="flex justify-center">
                  <a
                    href="https://github.com/rruiz88/tailwind-bookmark-manager"
                    className="text-md ml-1 text-green-500 hover:underline"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Col 3 --> */}
          <div className="bg-slate-700 rounded-xl text-white">
            {/* <!-- Upper Container --> */}
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">Forkify</div>
              <img
                src={forkify}
                alt="forkify"
                loading="lazy"
                className="rounded-xl h-48 w-96 pt-1"
              />
              <div className="flex justify-center ">
                <a
                  href="https://forkify-rruiz.netlify.app/"
                  className="inline-block px-10 py-3 my-6 text-center border  rounded-lg duration-200 bg-blue-400 hover:bg-green-500 hover:border-violet-800"
                >
                  Check it out
                </a>
              </div>
            </div>
            {/* 
          <!-- Border --> */}
            <div className="border-t border-slate-700"></div>

            {/* <!-- Lower Container --> */}
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              {/* <!-- List Container --> */}
              <div className="flex flex-col space-y-2">
                {/* <!-- List Item 1 --> */}
                <div className="flex justify-center">
                  <img />
                  <span className="text-sm ml-1">
                    Search many popular recipes.
                  </span>
                </div>

                {/* <!-- List Item 2 --> */}
                <div className="flex justify-center">
                  <span className="text-sm ml-1">Upload your own recipes.</span>
                </div>

                {/* <!-- List Item 3 --> */}
                <div className="flex justify-center">
                  <a
                    href="https://github.com/rruiz88/twitter-clone-node-react"
                    className="text-md ml-1 text-green-500 hover:underline"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
