import { Fragment } from "react/jsx-runtime";
import { Companies } from "./Companies";
import { Skills } from "./Skills";

export const Home = () => {
  return (
    <Fragment>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <img
              src="https://i.postimg.cc/dQyvHKqC/DSC_0106.jpg"
              height="100px"
              width="100px"
              alt="resume_profile_pic"
              loading="lazy"
              className="float-left rounded-full"
            />
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
              Rousbel Villar
            </h2>
            <p className="mt-2 text-lg/8 text-gray-300">
              Software Engineer specialized in full stack development.
            </p>
          </div>

          <Companies />
          <Skills />
        </div>
      </div>
    </Fragment>
  );
};
