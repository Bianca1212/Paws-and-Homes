import { Button } from "../../components/Button";
import { ContactDiv } from "../../components/ContactDiv";
import { SignInInput } from "../../components/sign-in/SignInInput";
import { NavigationLayout } from "../../layouts/NavigationLayout";

export const ContactPage = () => {
  return (
    <>
      <NavigationLayout>
        <section className="flex flex-col gap-5 items-center py-4 text-pennBlue">
          <h1 className="mt-10 text-2xl sm:text-3xl font-semibold text-center drop-shadow-md">
            CONTACT US
          </h1>
          <p className="m-8 md:m-0 mt-8 text-xl sm:text-2xl font-josefin font-semibold text-center drop-shadow-md">
            Any questions or remarks? Just write us a message!
          </p>
          <div className="flex flex-col gap-10 justify-center">
            <SignInInput placeholder={"Enter your Name"} />
            <SignInInput placeholder={"Enter a Valid Email address"} />
            <textarea
              placeholder="Write here..."
              rows={10}
              className="font-josefin sm:w-96 sm:h-14 p-4 cursor-pointer border-2 border-gray-500 border-pennBlue text-center rounded-md placeholder:font-bold hover:placeholder:text-white hover:placeholder:font-bold focus:outline-none"
            />
          </div>
          <Button className="bg-pennBlue hover:bg-midnightGreen text-white hover:bg-chocolate p-3 rounded-md font-semibold">
            Submit
          </Button>
        </section>

        {/* Contact Section */}
        <section className="mt-10 py-4 flex flex-col gap-10 justify-around items-center bg-gray-300">
          <h2 className="text-xl sm:text-2xl text-gray-800">
            Contact Information
          </h2>
          <div className="flex flex-col lg:flex-row gap-20">
            <ContactDiv>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z"
                  fill="#124559"
                />
                <path
                  d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z"
                  fill="#124559"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.4857 5.3293C13.5995 4.93102 14.0146 4.7004 14.4129 4.81419L14.2069 5.53534C14.4129 4.81419 14.4129 4.81419 14.4129 4.81419L14.4144 4.81461L14.4159 4.81505L14.4192 4.81602L14.427 4.81834L14.4468 4.8245C14.4618 4.82932 14.4807 4.8356 14.5031 4.84357C14.548 4.85951 14.6074 4.88217 14.6802 4.91337C14.8259 4.97581 15.0249 5.07223 15.2695 5.21694C15.7589 5.50662 16.4271 5.9878 17.2121 6.77277C17.9971 7.55775 18.4782 8.22593 18.7679 8.7154C18.9126 8.95991 19.009 9.15897 19.0715 9.30466C19.1027 9.37746 19.1254 9.43682 19.1413 9.48173C19.1493 9.50418 19.1555 9.52301 19.1604 9.53809L19.1665 9.55788L19.1688 9.56563L19.1698 9.56896L19.1702 9.5705C19.1702 9.5705 19.1707 9.57194 18.4495 9.77798L19.1707 9.57194C19.2845 9.97021 19.0538 10.3853 18.6556 10.4991C18.2607 10.6119 17.8492 10.3862 17.7313 9.99413L17.7276 9.98335C17.7223 9.96832 17.7113 9.93874 17.6928 9.89554C17.6558 9.8092 17.5887 9.66797 17.4771 9.47938C17.2541 9.10264 16.8514 8.53339 16.1514 7.83343C15.4515 7.13348 14.8822 6.73078 14.5055 6.50781C14.3169 6.39619 14.1757 6.32909 14.0893 6.29209C14.0461 6.27358 14.0165 6.26254 14.0015 6.25721L13.9907 6.25352C13.5987 6.13564 13.3729 5.72419 13.4857 5.3293Z"
                  fill="#191970"
                />
              </svg>
              <p className="font-semibold">Phone Number</p>
              <p className="text-gray-800">(555) 123-4567</p>
            </ContactDiv>
            <ContactDiv>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                height="40px"
                width="40px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 512.001 512.001"
                xmlSpace="preserve"
              >
                <g>
                  <polygon
                    style={{ fill: "#CEE8FA" }}
                    points="152.517,181.664 152.517,219.684 325.514,362.724 498.513,219.684 498.513,181.664  "
                  />
                  <polygon
                    style={{ fill: "#CEE8FA" }}
                    points="152.517,181.664 263.435,181.664 359.485,102.247 359.485,64.228 13.487,64.228    13.487,102.247 152.517,217.202  "
                  />
                </g>
                <path
                  style={{ fill: "#124559" }}
                  d="M507.107,230.077c3.099-2.561,4.893-6.373,4.893-10.395v-38.019c0-7.449-6.04-13.487-13.487-13.487  H300.912l67.165-55.535c3.099-2.561,4.893-6.373,4.893-10.395V64.228c0-7.449-6.04-13.487-13.487-13.487H13.487  C6.038,50.741,0,56.779,0,64.228v3.138v34.881v224.952v0.111v3.028c0,7.449,6.038,13.487,13.487,13.487H139.03v100.811v0.111v3.028  c0,7.449,6.038,13.487,13.487,13.487h345.997c7.448,0,13.487-6.038,13.487-13.487v-3.138V301.593c0-7.449-6.04-13.487-13.487-13.487  c-7.448,0-13.487,6.038-13.487,13.487v114.39l-101.378-83.823L507.107,230.077z M485.025,213.335l-159.51,131.889L166.004,213.335  v-18.184h97.432h221.591v18.184H485.025z M26.975,130.899l101.378,83.823L26.975,298.546V130.899z M166.004,248.335l101.378,83.823  l-101.378,83.823V248.335z M345.996,95.899l-87.415,72.278H152.515c-7.449,0-13.487,6.038-13.487,13.487v3.138v3.747L26.975,95.899  V77.715h319.021V95.899z M47.169,316.849l91.859-75.954v75.954H47.169z M464.831,434.285H186.199l102.348-84.626l28.373,23.46  c2.494,2.062,5.543,3.093,8.594,3.093s6.1-1.032,8.594-3.093l28.373-23.46L464.831,434.285z"
                />
              </svg>
              <p className="font-semibold">Email</p>
              <p className="text-gray-800">paws&homes@gmail.com</p>
            </ContactDiv>
            <ContactDiv>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45px"
                height="45px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                  stroke="#124559"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                  stroke="#124559"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-semibold">Location</p>
              <p className="text-gray-800">1234 Pet Lane</p>
              <p className="text-gray-800">Suite 101 Hometown, AN 54321</p>
            </ContactDiv>
            <ContactDiv>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  fill="#124559"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
                  fill="white"
                />
              </svg>
              <p className="font-semibold">Working Hours</p>
              <p className="text-gray-800">Monday to Saturday</p>
              <p className="text-gray-800">09:00 AM To 09:00 PM</p>
            </ContactDiv>
          </div>
        </section>

        {/* <div className="relative w-full h-[200px] bg-gray-300"></div> */}
      </NavigationLayout>
    </>
  );
};
