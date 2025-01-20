import { Button } from "../../components/Button";
import { PresentationCard } from "../../components/PresentationCard";
import { NavigationLayout } from "../../layouts/NavigationLayout";

export const AdoptionPage = () => {
  return (
    <>
      <NavigationLayout>
        <img
          src="./images/adoption-bg.jpg"
          alt="Cat-and-Dog"
          className="w-full object-cover h-48 sm:h-64 md:h-72 lg:h-96"
        />
        <div className="flex flex-col bg-beige">
          <h1 className="text-center mt-12 text-xl sm:text-2xl font-josefin font-semibold text-pennBlue">
            DIFFERENT WAYS TO HELP OUR FURRY FRIENDS
          </h1>
          <section className="flex flex-col sm:flex-row gap-15 mb-20 mt-10 justify-around items-center">
            <PresentationCard
              title={"Give a Donation"}
              description={
                "By contributing, you support our mission to rescue, care for, and find loving homes for pets."
              }
              buttonName={"Read more"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                height="80px"
                width="80px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <path
                  style={{ fill: "#CEE8FA" }}
                  d="M204.846,14.289c30.539,0,44.241,17.117,49.632,27.171c0.677,1.263,2.515,1.262,3.189-0.003  c5.373-10.054,19-27.168,49.536-27.168c34.786,0,65.386,23.746,65.386,67.109c0,17.547-3.577,32.579-13.5,49.355  c-20.225,34.187-86.853,78.506-100.539,87.24c-1.513,0.966-3.429,0.967-4.945,0.006c-13.698-8.692-80.337-52.791-100.72-87.247  c-9.925-16.777-13.476-31.808-13.476-49.355C139.41,38.035,170.061,14.289,204.846,14.289z"
                />
                <g>
                  <path
                    style={{ fill: "#2D527C" }}
                    d="M256.073,233.007c-3.585,0-7.083-1.016-10.117-2.939c-8.351-5.3-82.196-52.871-105.367-92.039   c-10.697-18.079-15.467-35.544-15.467-56.631c0-24.446,8.349-45.262,24.144-60.199C163.725,7.529,183.464,0,204.846,0   c25.242,0,41.396,9.978,51.212,19.891C265.858,9.978,281.988,0,307.204,0c21.382,0,41.113,7.532,55.561,21.205   c15.775,14.932,24.114,35.747,24.114,60.193c0,21.055-4.778,38.521-15.491,56.631c-23.014,38.904-96.812,86.69-105.151,92.009   C263.195,231.981,259.679,233.007,256.073,233.007z M204.846,28.578c-25.458,0-51.147,16.333-51.147,52.82   c0,16.101,3.327,28.293,11.484,42.079c15.094,25.512,63.327,61.063,90.875,79.101c27.544-18.122,75.746-53.766,90.733-79.101   c8.175-13.818,11.509-26.008,11.509-42.079c0-36.487-25.663-52.82-51.097-52.82c-21.865,0-32.152,10.665-36.933,19.613   c-2.806,5.248-8.246,8.503-14.201,8.503c-5.944,0-11.38-3.248-14.186-8.479C237.083,39.255,226.759,28.578,204.846,28.578z"
                  />
                  <path
                    style={{ fill: "#2D527C" }}
                    d="M418.185,512H93.815c-19.275,0-34.956-15.681-34.956-34.956V270.408   c0-19.275,15.681-34.956,34.956-34.956h97.294c7.891,0,14.289,6.399,14.289,14.289v45.227h115.494   c7.89,0,14.289,6.399,14.289,14.289c0,7.891-6.399,14.289-14.289,14.289H191.109c-7.89,0-14.289-6.399-14.289-14.289v-45.227   H93.815c-3.517,0-6.377,2.861-6.377,6.377v206.636c0,3.517,2.861,6.377,6.377,6.377h324.37c3.517,0,6.377-2.861,6.377-6.377   V270.408c0-3.517-2.861-6.377-6.377-6.377h-97.294c-7.891,0-14.289-6.399-14.289-14.289c0-7.89,6.399-14.289,14.289-14.289h97.294   c19.275,0,34.956,15.681,34.956,34.956v206.636C453.141,496.319,437.46,512,418.185,512z"
                  />
                  <path
                    style={{ fill: "#2D527C" }}
                    d="M175.173,403.252h-22.966v31.275c0,3.694-4.501,5.54-9.002,5.54s-9.002-1.846-9.002-5.54v-73.398   c0-3.808,4.5-5.424,9.002-5.424c4.5,0,9.002,1.616,9.002,5.424v28.274h22.966v-28.274c0-3.808,4.5-5.424,9.001-5.424   s9.002,1.616,9.002,5.424v73.398c0,3.694-4.5,5.54-9.002,5.54c-4.5,0-9.001-1.846-9.001-5.54V403.252z"
                  />
                  <path
                    style={{ fill: "#2D527C" }}
                    d="M223.636,390.902h17.31c3.462,0,5.424,3.348,5.424,7.04c0,3.116-1.616,6.81-5.424,6.81h-17.31   v19.618h30.929c3.462,0,5.424,3.694,5.424,7.963c0,3.692-1.616,7.732-5.424,7.732h-41.084c-3.924,0-7.848-1.846-7.848-5.54v-73.281   c0-3.694,3.924-5.54,7.848-5.54h41.084c3.808,0,5.424,4.04,5.424,7.732c0,4.27-1.962,7.963-5.424,7.963h-30.929V390.902z"
                  />
                  <path
                    style={{ fill: "#2D527C" }}
                    d="M275.678,440.067c-3.924,0-7.848-1.846-7.848-5.54v-73.398c0-3.808,4.5-5.424,9.002-5.424   c4.5,0,9.002,1.616,9.002,5.424v63.243h26.312c3.462,0,5.194,3.924,5.194,7.848c0,3.924-1.732,7.848-5.194,7.848H275.678z"
                  />
                  <path
                    style={{ fill: "#2D527C" }}
                    d="M324.602,361.129c0-2.886,2.653-5.424,6.694-5.424h23.889c15.234,0,27.237,7.156,27.237,26.544   v0.576c0,19.388-12.464,26.774-28.39,26.774h-11.424v24.927c0,3.694-4.501,5.54-9.002,5.54c-4.501,0-9.002-1.846-9.002-5.54   v-73.396H324.602z M342.607,371.4v24.35h11.424c6.463,0,10.388-3.694,10.388-11.54v-1.27c0-7.848-3.924-11.54-10.388-11.54   L342.607,371.4L342.607,371.4z"
                  />
                </g>
              </svg>
            </PresentationCard>

            <PresentationCard
              title={"Find a Pet"}
              description={
                "Looking for a new best friend? Search our listings for pets needing a new home or temporary foster care."
              }
              buttonName={"Read more"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80px"
                height="80px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M19.0803 15.7201C18.4903 12.1901 15.1003 9.32007 11.5203 9.32007C7.63028 9.32007 4.21028 12.4701 3.88028 16.3501C3.75028 17.8501 4.23028 19.2701 5.22028 20.3401C6.20028 21.4101 7.58028 22.0001 9.08028 22.0001H13.7603C15.4503 22.0001 16.9303 21.3401 17.9403 20.1501C18.9503 18.9601 19.3503 17.3801 19.0803 15.7201Z"
                  fill="#292D32"
                />
                <path
                  d="M10.2796 7.86C11.8978 7.86 13.2096 6.54819 13.2096 4.93C13.2096 3.31181 11.8978 2 10.2796 2C8.66141 2 7.34961 3.31181 7.34961 4.93C7.34961 6.54819 8.66141 7.86 10.2796 7.86Z"
                  fill="#292D32"
                />
                <path
                  d="M16.94 9.0299C18.2876 9.0299 19.38 7.93748 19.38 6.5899C19.38 5.24233 18.2876 4.1499 16.94 4.1499C15.5924 4.1499 14.5 5.24233 14.5 6.5899C14.5 7.93748 15.5924 9.0299 16.94 9.0299Z"
                  fill="#292D32"
                />
                <path
                  d="M20.5496 12.93C21.6266 12.93 22.4996 12.057 22.4996 10.98C22.4996 9.90307 21.6266 9.03003 20.5496 9.03003C19.4727 9.03003 18.5996 9.90307 18.5996 10.98C18.5996 12.057 19.4727 12.93 20.5496 12.93Z"
                  fill="#292D32"
                />
                <path
                  d="M3.94 10.9801C5.28757 10.9801 6.38 9.88767 6.38 8.5401C6.38 7.19252 5.28757 6.1001 3.94 6.1001C2.59243 6.1001 1.5 7.19252 1.5 8.5401C1.5 9.88767 2.59243 10.9801 3.94 10.9801Z"
                  fill="#292D32"
                />
              </svg>
            </PresentationCard>
            <PresentationCard
              title={"Shelter Volunteer"}
              description={
                "Help pets in your community and come joining as a volunteer at your local animal shelter."
              }
              buttonName={"Read more"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                height="75px"
                width="75px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 512.001 512.001"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    style={{ fill: "#2D527C" }}
                    d="M325.711,512.001H110.539c-28.486,0-51.66-23.174-51.66-51.66V225.285   c0-17.428,8.742-33.474,23.388-42.922l132.997-85.806c24.747-15.967,56.728-15.967,81.473,0l132.997,85.806   c14.645,9.448,23.388,25.493,23.388,42.922v256.394c0,8.158-6.615,14.772-14.772,14.772c-8.157,0-14.772-6.613-14.772-14.772   V225.285c0-7.347-3.686-14.113-9.862-18.097l-132.997-85.806c-15.02-9.689-34.425-9.689-49.441,0L98.283,207.189   c-6.175,3.984-9.86,10.749-9.86,18.097v235.056c0,12.196,9.921,22.116,22.116,22.116h215.173c8.157,0,14.772,6.613,14.772,14.772   S333.87,512.001,325.711,512.001z"
                  />
                  <path
                    style={{ fill: "#2D527C" }}
                    d="M486.918,172.985c-2.844,0-5.715-0.818-8.25-2.529L281.504,37.412   c-15.491-10.455-35.514-10.455-51.01,0L33.332,170.456c-6.764,4.566-15.943,2.78-20.508-3.981   c-4.563-6.762-2.78-15.945,3.982-20.508L213.969,12.922c25.533-17.23,58.53-17.228,84.061,0l197.164,133.044   c6.762,4.563,8.545,13.745,3.981,20.508C496.321,170.703,491.662,172.985,486.918,172.985z"
                  />
                </g>
                <path
                  style={{ fill: "#CEE8FA" }}
                  d="M355.553,295.572c17.355-22.28,1.873-63.362,1.873-63.362s-42.946-4.867-60.562,16.835  c-12.565-4.652-26.372-7.225-40.863-7.225c-14.492,0-28.3,2.573-40.863,7.225c-17.617-21.703-60.562-16.835-60.562-16.835  s-15.482,41.082,1.873,63.362c0.78,1,1.628,1.928,2.507,2.821c-5.288,11.023-8.215,27.741-8.215,40.452  c0,51.042,47.126,75.532,105.26,75.532s105.26-24.49,105.26-75.532c0-12.713-2.926-29.43-8.215-40.452  C353.925,297.5,354.773,296.574,355.553,295.572z"
                />
                <g>
                  <path
                    style={{ fill: "#2D527C " }}
                    d="M256.001,429.151c-72.916,0-120.032-35.446-120.032-90.304c0-10.002,1.671-24.85,6.124-38.043   c-17.726-28.066-3.139-69.027-1.34-73.801c1.954-5.188,6.65-8.844,12.159-9.469c0.507-0.058,5.144-0.56,11.99-0.56   c16.758,0,38.566,2.851,54.112,15.256c11.9-3.44,24.302-5.179,36.987-5.179c12.684,0,25.085,1.74,36.987,5.179   c15.544-12.404,37.353-15.256,54.112-15.256c6.845,0,11.484,0.504,11.99,0.56c5.508,0.625,10.204,4.281,12.159,9.469   c1.801,4.774,16.382,45.733-1.34,73.802c4.454,13.196,6.124,28.043,6.124,38.043C376.032,393.705,328.917,429.151,256.001,429.151z    M165.701,246.518c-2.913,12.035-5.129,30.312,2.4,39.977c0.332,0.427,0.784,0.929,1.384,1.539   c4.367,4.437,5.48,11.136,2.789,16.75c-3.917,8.166-6.761,22.491-6.761,34.064c0,19.042,8.13,34.034,24.164,44.559   c15.918,10.448,39.473,16.203,66.323,16.203s50.405-5.755,66.323-16.203c16.033-10.525,24.164-25.515,24.164-44.559   c0-11.571-2.844-25.896-6.761-34.065c-2.69-5.61-1.576-12.306,2.784-16.744c0.61-0.619,1.053-1.112,1.394-1.551   c7.522-9.655,5.309-27.92,2.392-39.968c-18.135,0.123-31.947,4.421-37.966,11.837c-3.988,4.913-10.668,6.739-16.596,4.544   c-11.303-4.185-23.326-6.306-35.734-6.306c-12.408,0-24.432,2.123-35.736,6.306c-5.934,2.199-12.609,0.369-16.597-4.544   C197.648,250.941,183.837,246.642,165.701,246.518z"
                  />
                  <path
                    style={{ fill: "#2D527C" }}
                    d="M212.875,333.091h-2.028c-8.158,0-14.772-6.613-14.772-14.772c0-8.158,6.613-14.772,14.772-14.772   h2.028c8.158,0,14.772,6.613,14.772,14.772C227.646,326.477,221.033,333.091,212.875,333.091z"
                  />
                  <path
                    style={{ fill: "#2D527C" }}
                    d="M301.155,333.091h-2.03c-8.157,0-14.772-6.613-14.772-14.772c0-8.158,6.615-14.772,14.772-14.772   h2.03c8.157,0,14.772,6.613,14.772,14.772C315.926,326.477,309.313,333.091,301.155,333.091z"
                  />
                </g>
              </svg>
            </PresentationCard>
          </section>
          <section className="bg-columbiaBlue flex flex-col lg:flex-row items-center justify-center gap-7 py-10 px-6 sm:px-12 md:px-24 lg:px-32 shadow-lg rounded-xl">
            <div className="flex flex-col items-center justify-center gap-7">
              <h1 className="mt-20 text-2xl sm:text-3xl font-josefin font-semibold text-pennBlue drop-shadow-md">
                ADOPT A CAT
              </h1>
              <p className="text-center font-josefin w-full text-gray-800 text-xl drop-shadow-md">
                Looking for a furry friend to share your home and heart? Adopt a
                cat today! Whether you’re seeking a playful kitten or a calm
                companion, we have a variety of loving cats ready to become part
                of your family. Give them a second chance and make a lifelong
                connection. Visit us and meet your purrfect match!
              </p>
              <Button
                path={"/adoptions"}
                className="font-josefin bg-pennBlue hover:bg-midnightGreen p-3 text-white font-semibold mt-5 mb-10 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl rounded-lg"
              >
                SEE MORE
              </Button>
            </div>
            <img
              src="./images/cat.jpg"
              alt="Cat-and-Dog"
              className="lg:mr-20 w-full object-cover h-48 sm:h-64 md:h-72 lg:h-96 rounded-full shadow-lg"
            />
          </section>
          <section className="bg-beige flex flex-col lg:flex-row items-center justify-center gap-7 py-10 px-6 sm:px-12 md:px-24 lg:px-32 shadow-lg rounded-xl">
            <img
              src="./images/dog.jpg"
              alt="Cat-and-Dog"
              className="lg:mr-20 w-full object-cover h-48 sm:h-64 md:h-72 lg:h-96 rounded-full shadow-lg"
            />
            <div className="flex flex-col items-center justify-center gap-7">
              <h1 className="mt-2 lg:mt-20 text-2xl sm:text-3xl font-josefin font-semibold text-midnightGreen drop-shadow-md">
                ADOPT A DOG
              </h1>
              <p className="text-center font-josefin w-full text-midnightGreen text-xl drop-shadow-md">
                Ready to welcome unconditional love into your life? Adopt a dog
                today! From energetic pups to loyal seniors, we have a variety
                of dogs looking for their forever home. Make a difference by
                giving them a loving family. Visit us and find your new best
                friend!
              </p>
              <Button
                path={"/adoptions"}
                className="font-josefin bg-pennBlue hover:bg-midnightGreen p-3 text-white font-semibold mt-5 mb-10 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl rounded-lg"
              >
                SEE MORE
              </Button>
            </div>
          </section>
        </div>
      </NavigationLayout>
    </>
  );
};
