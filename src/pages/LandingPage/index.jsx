import React from "react";

import {
  Button,
  FloatingInput,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";

import { CloseSVG } from "../../assets/images";

const LandingPagePage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-metropolis items-center justify-start mx-auto w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between max-w-[860px] py-4 w-full">
            <div className="flex flex-col items-center justify-center w-auto">
              <Img
                className="h-[50px] md:h-auto object-cover w-[120px] sm:w-full"
                src="images/img_logo.png"
                alt="logo"
              />
            </div>
            <Input
              name="search"
              placeholder="Search For brand, category, coupon"
              value={searchvalue}
              onChange={(e) => setSearchvalue(e)}
              className="!placeholder:text-blue_gray-400 !text-blue_gray-400 leading-[normal] p-0 text-left text-xs w-full"
              wrapClassName="border border-gray-300 border-solid flex md:flex-1 md:w-full"
              prefix={
                <Img
                  className="mt-auto mb-px cursor-pointer h-3 mr-2"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#8b8b8b"
                  className="cursor-pointer h-3 my-auto"
                  onClick={() => setSearchvalue("")}
                  style={{
                    visibility: searchvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={12}
                  width={12}
                  viewBox="0 0 12 12"
                />
              }
              color="gray_200"
            ></Input>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[148px] text-center text-sm uppercase"
              shape="round"
              color="red_600"
              size="xs"
              variant="fill"
            >
              Login / Sign Up
            </Button>
          </div>
          <div className="bg-gray-900 flex flex-1 flex-col items-center justify-center max-w-[1440px] w-full">
            <ul className="flex sm:flex-col flex-row sm:hidden items-center justify-start w-auto sm:w-full common-row-list">
              <li>
                <a href="javascript:">
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] text-center text-xs"
                    shape="square"
                    color="red_600"
                  >
                    Home
                  </Button>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-1 items-center justify-center p-4">
                    <Text
                      className="text-white-A700 text-xs w-auto"
                      size="txtMetropolisSemiBold12"
                    >
                      Deals
                    </Text>
                    <Img
                      className="h-3 w-3"
                      src="images/img_dropdown.svg"
                      alt="dropdown"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-1 items-center justify-center p-4">
                    <Text
                      className="text-white-A700 text-xs w-auto"
                      size="txtMetropolisSemiBold12"
                    >
                      Coupon
                    </Text>
                    <Img
                      className="h-3 w-3"
                      src="images/img_dropdown.svg"
                      alt="dropdown_One"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-1 items-center justify-center p-4">
                    <Text
                      className="text-white-A700 text-xs w-auto"
                      size="txtMetropolisSemiBold12"
                    >
                      Stores
                    </Text>
                    <Img
                      className="h-3 w-3"
                      src="images/img_dropdown.svg"
                      alt="dropdown_Two"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-col items-center justify-center p-4">
                    <a
                      href="javascript:"
                      className="text-white-A700 text-xs w-auto"
                    >
                      <Text size="txtMetropolisSemiBold12">Contact us</Text>
                    </a>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center max-w-[1440px] pb-4 pt-10 w-full">
          <div className="flex flex-col gap-5 items-center justify-center md:px-5 w-auto md:w-full">
            <Img
              className="h-[413px] sm:h-auto object-cover rounded-bl-[32px] rounded-br-[32px] w-[860px] md:w-full"
              src="images/img_image.png"
              alt="image"
            />
            <PagerIndicator
              className="flex gap-1.5 h-2 items-center justify-center w-[100px]"
              count={3}
              activeCss="inline-block cursor-pointer h-2 bg-gray-900_02 w-12 rounded"
              activeIndex={1}
              inactiveCss="inline-block cursor-pointer h-2 bg-blue_gray-100 w-5 rounded"
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center justify-start max-w-[1440px] py-10 w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:px-5 w-auto sm:w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[142px]"
              leftIcon={
                <Img
                  className="h-3 mb-px mr-1.5"
                  src="images/img_trophy.svg"
                  alt="trophy"
                />
              }
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              <div className="font-medium leading-[normal] text-left text-xs">
                Popular Coupons
              </div>
            </Button>
            <div className="flex flex-row gap-[9px] items-center justify-center p-3 w-auto">
              <Img className="h-3 w-3" src="images/img_timer.svg" alt="timer" />
              <Text
                className="text-gray-900_02 text-xs w-auto"
                size="txtMetropolisMedium12"
              >
                Ending Soon
              </Text>
            </div>
            <div className="flex flex-row gap-3 items-center justify-center p-3 w-auto">
              <Img className="h-3 w-3" src="images/img_hot.svg" alt="hot" />
              <Text
                className="text-gray-900_02 text-xs w-auto"
                size="txtMetropolisMedium12"
              >
                Latest Coupons
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start md:px-5 w-auto md:w-full">
            <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-auto">
                  <Text
                    className="leading-[20.00px] text-base text-center text-green-700"
                    size="txtMetropolisSemiBold16"
                  >
                    <>
                      Upto 60% off on
                      <br />
                      Appliances
                    </>
                  </Text>
                  <Img
                    className="h-6 md:h-auto object-cover w-20 sm:w-full"
                    src="images/img_image12.png"
                    alt="imageTwelve"
                  />
                  <Text
                    className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                    size="txtMetropolisMedium12Bluegray40001"
                  >
                    Upto 60% off on summer Appliances
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                  shape="round"
                  color="red_600"
                  size="xs"
                  variant="fill"
                >
                  Grab now
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-auto">
                  <Text
                    className="leading-[20.00px] text-base text-center text-green-700"
                    size="txtMetropolisSemiBold16"
                  >
                    <>
                      Upto 60% off on
                      <br />
                      Appliances
                    </>
                  </Text>
                  <Img
                    className="h-6 md:h-auto object-cover w-20 sm:w-full"
                    src="images/img_image12.png"
                    alt="imageTwelve"
                  />
                  <Text
                    className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                    size="txtMetropolisMedium12Bluegray40001"
                  >
                    Upto 60% off on summer Appliances
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                  shape="round"
                  color="red_600"
                  size="xs"
                  variant="fill"
                >
                  Grab now
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-auto">
                  <Text
                    className="leading-[20.00px] text-base text-center text-green-700"
                    size="txtMetropolisSemiBold16"
                  >
                    <>
                      Upto 60% off on
                      <br />
                      Appliances
                    </>
                  </Text>
                  <Img
                    className="h-6 md:h-auto object-cover w-20 sm:w-full"
                    src="images/img_image12.png"
                    alt="imageTwelve"
                  />
                  <Text
                    className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                    size="txtMetropolisMedium12Bluegray40001"
                  >
                    Upto 60% off on summer Appliances
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                  shape="round"
                  color="red_600"
                  size="xs"
                  variant="fill"
                >
                  Grab now
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-auto">
                  <Text
                    className="leading-[20.00px] text-base text-center text-green-700"
                    size="txtMetropolisSemiBold16"
                  >
                    <>
                      Upto 60% off on
                      <br />
                      Appliances
                    </>
                  </Text>
                  <Img
                    className="h-6 md:h-auto object-cover w-20 sm:w-full"
                    src="images/img_image12.png"
                    alt="imageTwelve"
                  />
                  <Text
                    className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                    size="txtMetropolisMedium12Bluegray40001"
                  >
                    Upto 60% off on summer Appliances
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                  shape="round"
                  color="red_600"
                  size="xs"
                  variant="fill"
                >
                  Grab now
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-auto">
                  <Text
                    className="leading-[20.00px] text-base text-center text-green-700"
                    size="txtMetropolisSemiBold16"
                  >
                    <>
                      Upto 60% off on
                      <br />
                      Appliances
                    </>
                  </Text>
                  <Img
                    className="h-6 md:h-auto object-cover w-20 sm:w-full"
                    src="images/img_image12.png"
                    alt="imageTwelve"
                  />
                  <Text
                    className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                    size="txtMetropolisMedium12Bluegray40001"
                  >
                    Upto 60% off on summer Appliances
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                  shape="round"
                  color="red_600"
                  size="xs"
                  variant="fill"
                >
                  Grab now
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-auto">
                  <Text
                    className="leading-[20.00px] text-base text-center text-green-700"
                    size="txtMetropolisSemiBold16"
                  >
                    <>
                      Upto 60% off on
                      <br />
                      Appliances
                    </>
                  </Text>
                  <Img
                    className="h-6 md:h-auto object-cover w-20 sm:w-full"
                    src="images/img_image12.png"
                    alt="imageTwelve"
                  />
                  <Text
                    className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                    size="txtMetropolisMedium12Bluegray40001"
                  >
                    Upto 60% off on summer Appliances
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                  shape="round"
                  color="red_600"
                  size="xs"
                  variant="fill"
                >
                  Grab now
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-auto">
                  <Text
                    className="leading-[20.00px] text-base text-center text-green-700"
                    size="txtMetropolisSemiBold16"
                  >
                    <>
                      Upto 60% off on
                      <br />
                      Appliances
                    </>
                  </Text>
                  <Img
                    className="h-6 md:h-auto object-cover w-20 sm:w-full"
                    src="images/img_image12.png"
                    alt="imageTwelve"
                  />
                  <Text
                    className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                    size="txtMetropolisMedium12Bluegray40001"
                  >
                    Upto 60% off on summer Appliances
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                  shape="round"
                  color="red_600"
                  size="xs"
                  variant="fill"
                >
                  Grab now
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-auto">
                  <Text
                    className="leading-[20.00px] text-base text-center text-green-700"
                    size="txtMetropolisSemiBold16"
                  >
                    <>
                      Upto 60% off on
                      <br />
                      Appliances
                    </>
                  </Text>
                  <Img
                    className="h-6 md:h-auto object-cover w-20 sm:w-full"
                    src="images/img_image12.png"
                    alt="imageTwelve"
                  />
                  <Text
                    className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                    size="txtMetropolisMedium12Bluegray40001"
                  >
                    Upto 60% off on summer Appliances
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                  shape="round"
                  color="red_600"
                  size="xs"
                  variant="fill"
                >
                  Grab now
                </Button>
              </div>
            </div>
          </div>
          <PagerIndicator
            className="flex gap-1.5 h-2 items-center justify-center w-[100px]"
            count={3}
            activeCss="inline-block cursor-pointer h-2 bg-gray-900_02 w-12 rounded"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer h-2 bg-blue_gray-100 w-5 rounded"
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
        </div>
        <div className="flex flex-col gap-10 items-center justify-start max-w-[1440px] py-10 w-full">
          <div className="flex flex-col gap-2 items-center justify-center max-w-[860px] pb-3 px-2 md:px-5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900_02 sm:text-xl w-auto"
              size="txtMetropolisSemiBold24"
            >
              Deals Of The Day
            </Text>
            <Line className="bg-red-600 h-[3px] w-[10%]" />
            <div className="flex flex-col items-start justify-start md:px-5 w-auto md:w-full">
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-auto">
                    <Text
                      className="leading-[20.00px] text-base text-center text-green-700"
                      size="txtMetropolisSemiBold16"
                    >
                      <>
                        Upto 60% off on
                        <br />
                        Appliances
                      </>
                    </Text>
                    <Img
                      className="h-6 md:h-auto object-cover w-20 sm:w-full"
                      src="images/img_image12.png"
                      alt="imageTwelve"
                    />
                    <Text
                      className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                      size="txtMetropolisMedium12Bluegray40001"
                    >
                      Upto 60% off on summer Appliances
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                    shape="round"
                    color="red_600"
                    size="xs"
                    variant="fill"
                  >
                    Grab now
                  </Button>
                </div>
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-auto">
                    <Text
                      className="leading-[20.00px] text-base text-center text-green-700"
                      size="txtMetropolisSemiBold16"
                    >
                      <>
                        Upto 60% off on
                        <br />
                        Appliances
                      </>
                    </Text>
                    <Img
                      className="h-6 md:h-auto object-cover w-20 sm:w-full"
                      src="images/img_image12.png"
                      alt="imageTwelve"
                    />
                    <Text
                      className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                      size="txtMetropolisMedium12Bluegray40001"
                    >
                      Upto 60% off on summer Appliances
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                    shape="round"
                    color="red_600"
                    size="xs"
                    variant="fill"
                  >
                    Grab now
                  </Button>
                </div>
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-auto">
                    <Text
                      className="leading-[20.00px] text-base text-center text-green-700"
                      size="txtMetropolisSemiBold16"
                    >
                      <>
                        Upto 60% off on
                        <br />
                        Appliances
                      </>
                    </Text>
                    <Img
                      className="h-6 md:h-auto object-cover w-20 sm:w-full"
                      src="images/img_image12.png"
                      alt="imageTwelve"
                    />
                    <Text
                      className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                      size="txtMetropolisMedium12Bluegray40001"
                    >
                      Upto 60% off on summer Appliances
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                    shape="round"
                    color="red_600"
                    size="xs"
                    variant="fill"
                  >
                    Grab now
                  </Button>
                </div>
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-auto">
                    <Text
                      className="leading-[20.00px] text-base text-center text-green-700"
                      size="txtMetropolisSemiBold16"
                    >
                      <>
                        Upto 60% off on
                        <br />
                        Appliances
                      </>
                    </Text>
                    <Img
                      className="h-6 md:h-auto object-cover w-20 sm:w-full"
                      src="images/img_image12.png"
                      alt="imageTwelve"
                    />
                    <Text
                      className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                      size="txtMetropolisMedium12Bluegray40001"
                    >
                      Upto 60% off on summer Appliances
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                    shape="round"
                    color="red_600"
                    size="xs"
                    variant="fill"
                  >
                    Grab now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 2 },
              1050: { items: 4 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="flex gap-5 md:px-5 w-auto"
            items={[...Array(12)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-col gap-6 items-center justify-start mx-2.5 p-5 rounded-[10px]">
                  <div className="flex flex-col gap-3 items-center justify-start w-auto">
                    <Img
                      className="h-6 md:h-auto object-cover w-20 sm:w-full"
                      src="images/img_image12.png"
                      alt="imageTwelve"
                    />
                    <Text
                      className="text-center text-gray-900_02 text-xs w-auto"
                      size="txtMetropolisMedium12"
                    >
                      Amazon
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-center text-green-700 text-xs w-auto"
                      size="txtMetropolisSemiBold12Green700"
                    >
                      Flat 30% Off
                    </Text>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                      shape="round"
                      color="red_600"
                      size="xs"
                      variant="fill"
                    >
                      Grab Now
                    </Button>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer h-2 bg-gray-900_02 w-12 rounded" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer h-2 bg-blue_gray-100 w-5 rounded"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          /> */}
          <PagerIndicator
            className="flex gap-1.5 h-2 items-center justify-center w-[100px]"
            count={3}
            activeCss="inline-block cursor-pointer h-2 bg-gray-900_02 w-12 rounded"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer h-2 bg-blue_gray-100 w-5 rounded"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
        </div>
        <div className="bg-gradient  flex flex-col gap-10 items-center justify-start max-w-[1440px] py-10 w-full">
          <div className="flex flex-col gap-2 items-center justify-center max-w-[860px] pb-3 px-2 md:px-5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900_02 sm:text-xl w-auto"
              size="txtMetropolisSemiBold24"
            >
              Coupon By Categories
            </Text>
            <Line className="bg-red-600 h-[3px] w-[10%]" />
          </div>
          <div className="flex flex-col items-center justify-start md:px-5 w-auto md:w-full">
            <List
              className="sm:flex-col flex-row md:gap-10 grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 justify-between max-w-[860px] w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border-b-2 border-red-600 border-solid flex flex-col gap-2.5 items-center justify-start sm:ml-[0] p-4 rounded-tl-lg rounded-tr-lg w-auto" style={{marginRight:"7px"}}>
                <Img
                  className="h-9 md:h-auto object-cover w-9"
                  src="images/img_fashion.png"
                  alt="fashion"
                />
                <Text
                  className="text-center text-gray-900_02 text-xs w-auto"
                  size="txtMetropolisSemiBold12Gray90002"
                >
                  Fashion
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-start sm:ml-[0] p-4 rounded-tl-lg rounded-tr-lg w-auto" style={{marginRight:"7px"}}>
                <Img
                  className="h-9 md:h-auto object-cover w-9"
                  src="images/img_food.png"
                  alt="food"
                />
                <Text
                  className="text-center text-gray-900_02 text-xs w-auto"
                  size="txtMetropolisSemiBold12Gray90002"
                >
                  Food
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-start sm:ml-[0] p-4 rounded-tl-lg rounded-tr-lg w-auto" style={{marginRight:"7px"}}>
                <Img
                  className="h-9 md:h-auto object-cover w-9"
                  src="images/img_beautycare.png"
                  alt="beautycare"
                />
                <Text
                  className="text-center text-gray-900_02 text-xs w-auto"
                  size="txtMetropolisSemiBold12Gray90002"
                >
                  Beauty
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-start sm:ml-[0] p-4 rounded-tl-lg rounded-tr-lg w-auto" style={{marginRight:"7px"}}>
                <Img
                  className="h-9 md:h-auto object-cover w-9"
                  src="images/img_toys.png"
                  alt="toys"
                />
                <Text
                  className="text-center text-gray-900_02 text-xs w-auto"
                  size="txtMetropolisSemiBold12Gray90002"
                >
                  Toys
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-start sm:ml-[0] p-4 rounded-tl-lg rounded-tr-lg w-auto" style={{marginRight:"7px"}}>
                <Img
                  className="h-9 md:h-auto object-cover w-9"
                  src="images/img_hosting.png"
                  alt="hosting"
                />
                <Text
                  className="text-center text-gray-900_02 text-xs w-auto"
                  size="txtMetropolisSemiBold12Gray90002"
                >
                  Cloud
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-start sm:ml-[0] p-4 rounded-tl-lg rounded-tr-lg w-auto" style={{marginRight:"7px"}}>
                <Img
                  className="h-9 md:h-auto object-cover w-9"
                  src="images/img_gaming.png"
                  alt="gaming"
                />
                <Text
                  className="text-center text-gray-900_02 text-xs w-auto"
                  size="txtMetropolisSemiBold12Gray90002"
                >
                  Gaming
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-start sm:ml-[0] p-4 rounded-tl-lg rounded-tr-lg w-auto"style={{marginRight:"7px"}}>
                <Img
                  className="h-9 md:h-auto object-cover w-9"
                  src="images/img_mobile.png"
                  alt="mobile"
                />
                <Text
                  className="text-center text-gray-900_02 text-xs w-auto"
                  size="txtMetropolisSemiBold12Gray90002"
                >
                  Phones
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-start sm:ml-[0] p-4 rounded-tl-lg rounded-tr-lg w-auto"style={{marginRight:"7px"}}>
                <Img
                  className="h-9 md:h-auto object-cover w-9"
                  src="images/img_travel.png"
                  alt="travel"
                />
                <Text
                  className="text-center text-gray-900_02 text-xs w-auto"
                  size="txtMetropolisSemiBold12Gray90002"
                >
                  Travel
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-start sm:ml-[0] p-4 rounded-tl-lg rounded-tr-lg w-auto">
                <Img
                  className="h-9 md:h-auto object-cover w-9"
                  src="images/img_movies.png"
                  alt="movies"
                />
                <Text
                  className="text-center text-gray-900_02 text-xs w-auto"
                  size="txtMetropolisSemiBold12Gray90002"
                >
                  Movies
                </Text>
              </div>
            </List>
            <div className="bg-white-A700 border-gray-200 border-solid border-t flex flex-col gap-4 items-center justify-start max-w-[860px] pb-6 pt-4 rounded-bl-[16px] rounded-br-[16px] w-full">
            <div className="flex flex-col items-start justify-start md:px-5 w-auto md:w-full">
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-auto">
                    <Text
                      className="leading-[20.00px] text-base text-center text-green-700"
                      size="txtMetropolisSemiBold16"
                    >
                      <>
                        Upto 60% off on
                        <br />
                        Appliances
                      </>
                    </Text>
                    <Img
                      className="h-6 md:h-auto object-cover w-20 sm:w-full"
                      src="images/img_image12.png"
                      alt="imageTwelve"
                    />
                    <Text
                      className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                      size="txtMetropolisMedium12Bluegray40001"
                    >
                      Upto 60% off on summer Appliances
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                    shape="round"
                    color="red_600"
                    size="xs"
                    variant="fill"
                  >
                    Grab now
                  </Button>
                </div>
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-auto">
                    <Text
                      className="leading-[20.00px] text-base text-center text-green-700"
                      size="txtMetropolisSemiBold16"
                    >
                      <>
                        Upto 60% off on
                        <br />
                        Appliances
                      </>
                    </Text>
                    <Img
                      className="h-6 md:h-auto object-cover w-20 sm:w-full"
                      src="images/img_image12.png"
                      alt="imageTwelve"
                    />
                    <Text
                      className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                      size="txtMetropolisMedium12Bluegray40001"
                    >
                      Upto 60% off on summer Appliances
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                    shape="round"
                    color="red_600"
                    size="xs"
                    variant="fill"
                  >
                    Grab now
                  </Button>
                </div>
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-auto">
                    <Text
                      className="leading-[20.00px] text-base text-center text-green-700"
                      size="txtMetropolisSemiBold16"
                    >
                      <>
                        Upto 60% off on
                        <br />
                        Appliances
                      </>
                    </Text>
                    <Img
                      className="h-6 md:h-auto object-cover w-20 sm:w-full"
                      src="images/img_image12.png"
                      alt="imageTwelve"
                    />
                    <Text
                      className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                      size="txtMetropolisMedium12Bluegray40001"
                    >
                      Upto 60% off on summer Appliances
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                    shape="round"
                    color="red_600"
                    size="xs"
                    variant="fill"
                  >
                    Grab now
                  </Button>
                </div>
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-[39px] items-center justify-end p-[15px] rounded-[10px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-auto">
                    <Text
                      className="leading-[20.00px] text-base text-center text-green-700"
                      size="txtMetropolisSemiBold16"
                    >
                      <>
                        Upto 60% off on
                        <br />
                        Appliances
                      </>
                    </Text>
                    <Img
                      className="h-6 md:h-auto object-cover w-20 sm:w-full"
                      src="images/img_image12.png"
                      alt="imageTwelve"
                    />
                    <Text
                      className="leading-[14.00px] max-w-[155px] md:max-w-full text-blue_gray-400_01 text-center text-xs"
                      size="txtMetropolisMedium12Bluegray40001"
                    >
                      Upto 60% off on summer Appliances
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                    shape="round"
                    color="red_600"
                    size="xs"
                    variant="fill"
                  >
                    Grab now
                  </Button>
                </div>
              </div>
            </div>
              {/* <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState1}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 4 },
                }}
                onSlideChanged={(e) => {
                  setsliderState1(e?.item);
                }}
                ref={sliderRef1}
                className="flex gap-5 w-auto"
                items={[...Array(12)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="bg-white-A700 flex flex-col gap-6 items-center justify-start mx-2.5 p-5 rounded-[10px]">
                      <div className="flex flex-col gap-3 items-center justify-start w-auto">
                        <Img
                          className="h-6 md:h-auto object-cover w-20 sm:w-full"
                          src="images/img_image12.png"
                          alt="imageTwelve"
                        />
                        <Text
                          className="text-center text-gray-900_02 text-xs w-auto"
                          size="txtMetropolisMedium12"
                        >
                          Amazon
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-center text-green-700 text-xs w-auto"
                          size="txtMetropolisSemiBold12Green700"
                        >
                          Flat 30% Off
                        </Text>
                        <Button
                          className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                          shape="round"
                          color="red_600"
                          size="xs"
                          variant="fill"
                        >
                          Grab Now
                        </Button>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer h-2 bg-gray-900_02 w-12 rounded" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer h-2 bg-blue_gray-100 w-5 rounded"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              /> */}
              <PagerIndicator
                className="flex gap-1.5 h-2 items-center justify-center w-[100px]"
                count={3}
                activeCss="inline-block cursor-pointer h-2 bg-gray-900_02 w-12 rounded"
                activeIndex={sliderState1}
                inactiveCss="inline-block cursor-pointer h-2 bg-blue_gray-100 w-5 rounded"
                sliderRef={sliderRef1}
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[1440px] py-6 w-full">
          <Img
            className="h-[212px] sm:h-auto object-cover rounded-[16px] w-[860px] md:w-full"
            src="images/img_image10.png"
            alt="imageTen"
          />
        </div>
        <div className="flex flex-col gap-10 items-center justify-start max-w-[1440px] py-10 w-full">
          <div className="flex flex-col gap-2 items-center justify-center max-w-[860px] pb-3 px-2 md:px-5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900_02 sm:text-xl w-auto"
              size="txtMetropolisSemiBold24"
            >
              Popular Membership
            </Text>
            <Line className="bg-red-600 h-[3px] w-[10%]" />
          </div>
          <div className="flex flex-col gap-5 md:h-auto items-start justify-start md:px-5 w-[860px] md:w-full">
            <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-200_01 border-solid h-[420px] relative rounded-[10px] w-[420px] sm:w-full">
                <div className="bg-blue_gray-100 h-[100px] ml-auto mr-[84px] mt-[95px] w-[100px]"></div>
                <Img
                  className="absolute h-[420px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[420px]"
                  src="images/img_image15.png"
                  alt="imageFifteen"
                />
              </div>
              <div className="bg-white-A700 border border-gray-200_01 border-solid h-[420px] relative rounded-[10px] w-[420px] sm:w-full">
                <div className="bg-blue_gray-100 h-[100px] ml-auto mr-[37px] mt-3 w-[100px]"></div>
                <div className="absolute h-[420px] inset-[0] justify-center m-auto rounded-[10px] w-[420px] sm:w-full">
                  <Img
                    className="h-[420px] m-auto object-cover w-[420px]"
                    src="images/img_image13.png"
                    alt="imageThirteen"
                  />
                  <div className="absolute bg-white-A700_b2 flex flex-col sm:h-auto h-full inset-[0] items-center justify-center m-auto p-2.5 w-[420px]">
                    <div className="flex flex-col items-center justify-start my-[30px] w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="grid grid-cols-2 justify-center min-h-[auto] w-full">
                          <div className="bg-white-A700 border-b border-gray-200_01 border-r border-solid flex flex-1 flex-col gap-6 items-center justify-start p-5 w-full">
                            <div className="flex flex-col gap-3 items-center justify-start w-auto">
                              <Img
                                className="h-6 md:h-auto object-cover w-20 sm:w-full"
                                src="images/img_image12.png"
                                alt="imageTwelve"
                              />
                              <Text
                                className="text-center text-gray-900_02 text-xs w-auto"
                                size="txtMetropolisMedium12"
                              >
                                Amazon
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-start w-auto">
                              <Text
                                className="text-center text-green-700 text-xs w-auto"
                                size="txtMetropolisSemiBold12Green700"
                              >
                                Flat 30% Off
                              </Text>
                              <Button
                                className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                                shape="round"
                                color="red_600"
                                size="xs"
                                variant="fill"
                              >
                                Grab Now
                              </Button>
                            </div>
                          </div>
                          <div className="bg-white-A700 border-b border-gray-200_01 border-solid flex flex-1 flex-col gap-6 items-center justify-start p-5 w-full">
                            <div className="flex flex-col gap-3 items-center justify-start w-auto">
                              <Img
                                className="h-6 md:h-auto object-cover w-20 sm:w-full"
                                src="images/img_image12.png"
                                alt="imageTwelve"
                              />
                              <Text
                                className="text-center text-gray-900_02 text-xs w-auto"
                                size="txtMetropolisMedium12"
                              >
                                Amazon
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-start w-auto">
                              <Text
                                className="text-center text-green-700 text-xs w-auto"
                                size="txtMetropolisSemiBold12Green700"
                              >
                                Flat 30% Off
                              </Text>
                              <Button
                                className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                                shape="round"
                                color="red_600"
                                size="xs"
                                variant="fill"
                              >
                                Grab Now
                              </Button>
                            </div>
                          </div>
                          <div className="bg-white-A700 border-gray-200_01 border-r border-solid flex flex-1 flex-col gap-6 items-center justify-start p-5 w-full">
                            <div className="flex flex-col gap-3 items-center justify-start w-auto">
                              <Img
                                className="h-6 md:h-auto object-cover w-20 sm:w-full"
                                src="images/img_image12.png"
                                alt="imageTwelve"
                              />
                              <Text
                                className="text-center text-gray-900_02 text-xs w-auto"
                                size="txtMetropolisMedium12"
                              >
                                Amazon
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-start w-auto">
                              <Text
                                className="text-center text-green-700 text-xs w-auto"
                                size="txtMetropolisSemiBold12Green700"
                              >
                                Flat 30% Off
                              </Text>
                              <Button
                                className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                                shape="round"
                                color="red_600"
                                size="xs"
                                variant="fill"
                              >
                                Grab Now
                              </Button>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-start p-5 w-full">
                            <div className="flex flex-col gap-3 items-center justify-start w-auto">
                              <Img
                                className="h-6 md:h-auto object-cover w-20 sm:w-full"
                                src="images/img_image12.png"
                                alt="imageTwelve"
                              />
                              <Text
                                className="text-center text-gray-900_02 text-xs w-auto"
                                size="txtMetropolisMedium12"
                              >
                                Amazon
                              </Text>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-start w-auto">
                              <Text
                                className="text-center text-green-700 text-xs w-auto"
                                size="txtMetropolisSemiBold12Green700"
                              >
                                Flat 30% Off
                              </Text>
                              <Button
                                className="cursor-pointer font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                                shape="round"
                                color="red_600"
                                size="xs"
                                variant="fill"
                              >
                                Grab Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-200_01 border-solid h-[420px] relative rounded-[10px] w-[420px] sm:w-full">
                <div className="bg-blue_gray-100 h-[100px] ml-auto mr-[91px] my-auto w-[100px]"></div>
                <Img
                  className="absolute h-[420px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[420px]"
                  src="images/img_image14.png"
                  alt="imageFourteen"
                />
              </div>
              <div className="bg-white-A700 border border-gray-200_01 border-solid h-[420px] relative rounded-[10px] w-[420px] sm:w-full">
                <div className="bg-blue_gray-100 h-[100px] ml-auto mr-[142px] mt-[100px] w-[100px]"></div>
                <Img
                  className="absolute h-[420px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[420px]"
                  src="images/img_image16.png"
                  alt="imageSixteen"
                />
              </div>
            </div>
          </div>
          <PagerIndicator
            className="flex gap-1.5 h-2 items-center justify-center w-[100px]"
            count={3}
            activeCss="inline-block cursor-pointer h-2 bg-gray-900_02 w-12 rounded"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer h-2 bg-blue_gray-100 w-5 rounded"
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
        </div>
        <div className="bg-gradient  flex flex-col items-center justify-center max-w-[1440px] py-10 w-full">
          <div className="md:h-[400px] h-[413px] pb-[13px] md:px-5 relative w-3/5 md:w-full">
            <div className="bg-white-A700 h-[400px] m-auto outline outline-[10px] outline-white-A700 rounded-[10px] w-full"></div>
            <div className="absolute bg-gray-100 md:h-[365px] h-[400px] inset-y-[0] left-[0] my-auto p-[5px] rounded-[10px] w-[49%] sm:w-full">
              <div className="absolute h-[365px] inset-[0] justify-center m-auto w-[365px]">
                <Img
                  className="h-[365px] m-auto object-cover w-[365px]"
                  src="images/img_5fe1c71b84667ab.png"
                  alt="5fe1c71b84667ab"
                />
                <Img
                  className="absolute h-6 right-[38%] top-[21%]"
                  src="images/img_union.svg"
                  alt="union"
                />
                <Img
                  className="absolute h-[39px] right-[1%] top-[9%]"
                  src="images/img_union.svg"
                  alt="union_One"
                />
              </div>
              <Img
                className="absolute h-[39px] left-[2%] top-[8%]"
                src="images/img_union.svg"
                alt="union_Two"
              />
              <Img
                className="absolute h-[51px] left-[37%] top-[1%]"
                src="images/img_union.svg"
                alt="union_Three"
              />
            </div>
            <div className="absolute flex flex-col gap-6 h-max inset-y-[0] items-start justify-start my-auto right-[0] w-auto">
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="leading-[40.00px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_02"
                  size="txtMetropolisSemiBold32"
                >
                  <>
                    Subscribe to our
                    <br />
                    Newsletter!
                  </>
                </Text>
                <Text
                  className="leading-[24.00px] text-base text-gray-500"
                  size="txtMetropolisRegular16"
                >
                  <>
                    Be the first to get exclusive offers
                    <br />
                    ands the latest news
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Input
                  name="textbox"
                  placeholder="Enter your email address"
                  className="font-montserrat leading-[normal] p-0 placeholder:text-gray-500 text-left text-xs w-full"
                  wrapClassName="border border-blue_gray-100_01 border-solid w-full"
                  type="email"
                  size="sm"
                ></Input>
                <Button
                  className="cursor-pointer font-metropolis font-semibold leading-[normal] text-center text-xs uppercase w-[148px]"
                  shape="round"
                  color="red_600"
                  size="xs"
                  variant="fill"
                >
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center justify-start max-w-[1440px] py-10 w-full">
          <div className="flex flex-col gap-2 items-center justify-center max-w-[860px] pb-3 px-2 md:px-5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900_02 sm:text-xl w-auto"
              size="txtMetropolisSemiBold24"
            >
              How It Works?
            </Text>
            <Line className="bg-red-600 h-[3px] w-[10%]" />
          </div>
          <div className="h-[234px] md:h-[468px] sm:h-[712px] md:px-5 relative w-[860px] md:w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-6 items-center justify-start sm:ml-[0] px-4 py-6 rounded-[16px] w-full">
                  <Button
                    className="flex h-14 items-center justify-center rounded-[12px] w-14"
                    color="red_600"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_login.svg"
                      alt="login"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Text
                      className="text-base text-center text-gray-900_02 w-full"
                      size="txtMetropolisSemiBold16Gray90002"
                    >
                      Signup
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[241px] md:max-w-full text-center text-gray-800 text-sm"
                      size="txtManropeMedium14"
                    >
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-6 items-center justify-start sm:ml-[0] px-4 py-6 rounded-[16px] w-full">
                  <Button
                    className="flex h-14 items-center justify-center rounded-[12px] w-14"
                    color="red_600"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_coupon.svg"
                      alt="coupon"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Text
                      className="text-base text-center text-gray-900_02 w-full"
                      size="txtMetropolisSemiBold16Gray90002"
                    >
                      Choose Coupon
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[241px] md:max-w-full text-center text-gray-800 text-sm"
                      size="txtManropeMedium14"
                    >
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-200_01 border-solid flex flex-1 flex-col gap-6 items-center justify-start sm:ml-[0] px-4 py-6 rounded-[16px] w-full">
                  <Button
                    className="flex h-14 items-center justify-center rounded-[12px] w-14"
                    color="red_600"
                    variant="fill"
                  >
                    <Img className="h-6" src="images/img_card.svg" alt="card" />
                  </Button>
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <Text
                      className="text-base text-center text-gray-900_02 w-full"
                      size="txtMetropolisSemiBold16Gray90002"
                    >
                      Grab Coupon
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[241px] md:max-w-full text-center text-gray-800 text-sm"
                      size="txtManropeMedium14"
                    >
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-auto top-[0] w-[55%]">
              <Img
                className="h-[39px] mt-7 w-[180px]"
                src="images/img_vector1.svg"
                alt="vectorOne"
              />
              <Img
                className="h-[39px] mb-7 w-[180px]"
                src="images/img_vector1.svg"
                alt="vectorTwo"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[1440px] py-10 w-full">
          <div className="bg-red-600 flex md:flex-col flex-row md:gap-5 items-center justify-center pl-7 pt-7 md:px-5 rounded-[24px] w-3/5 md:w-full">
            <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[50px] w-auto">
              <div className="flex flex-col gap-4 items-start justify-start w-[269px]">
                <Text
                  className="leading-[40.00px] max-w-[269px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-red-600"
                  size="txtMetropolisSemiBold32Red600"
                >
                  Want to be a part of our team
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[269px] md:max-w-full text-base text-gray-800_01"
                  size="txtMetropolisRegular16Gray80001"
                >
                  Be a part of best site of discount coupons
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-4 grid grid-cols-2 justify-start w-auto"
                orientation="horizontal"
              >
                <div className="bg-white-A700 border border-gray-200_02 border-solid flex flex-row gap-3 items-center justify-center px-5 py-3 rounded-lg shadow-bs1 w-auto">
                  <Img
                    className="h-8 md:h-auto object-cover w-8"
                    src="images/img_image64.png"
                    alt="imageSixtyFour"
                  />
                  <div className="flex flex-col gap-1 items-start justify-center w-auto">
                    <Text
                      className="text-[10px] text-gray-600 w-auto"
                      size="txtMetropolisMedium10"
                    >
                      Download From
                    </Text>
                    <Text
                      className="text-gray-900_02 text-sm uppercase w-auto"
                      size="txtMetropolisSemiBold14"
                    >
                      App Store
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-200_02 border-solid flex flex-row gap-3 items-center justify-center px-5 py-3 rounded-lg shadow-bs1 w-auto">
                  <Img
                    className="h-8 md:h-auto object-cover w-8"
                    src="images/img_image64_32x32.png"
                    alt="imageSixtyFour"
                  />
                  <div className="flex flex-col gap-1 items-start justify-center w-auto">
                    <Text
                      className="text-[10px] text-gray-600 w-auto"
                      size="txtMetropolisMedium10"
                    >
                      Download From
                    </Text>
                    <Text
                      className="text-gray-900_02 text-sm uppercase w-auto"
                      size="txtMetropolisSemiBold14"
                    >
                      Play Store
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="md:h-[361px] h-[372px] md:ml-[0] ml-[5px] relative w-[52%] md:w-full">
              <Img
                className="absolute h-[361px] inset-y-[0] my-auto object-cover right-[0] w-3/5"
                src="images/img_phone.png"
                alt="phone"
              />
              <Img
                className="absolute h-[321px] left-[0] object-cover top-[0] w-[51%]"
                src="images/img_phone.png"
                alt="phone_One"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center max-w-[1440px] pb-16 pt-10 w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row gap-5 items-start justify-center max-w-[860px] md:px-5 rounded-[16px] w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
              <Img
                className="h-[392px] md:h-auto object-cover w-full"
                src="images/img_image65.png"
                alt="imageSixtyFive"
              />
            </div>
            <div className="flex flex-col items-center justify-center max-w-[1440px] py-10 w-full">
              <div className="flex flex-col gap-2 items-center justify-start pb-3 w-[567px] sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_02 sm:text-xl w-auto"
                  size="txtMetropolisSemiBold24"
                >
                  Popular Categories
                </Text>
                <Line className="bg-red-600 h-[3px] w-[14%]" />
              </div>
              <List
                className="flex flex-col gap-[-1px] items-start w-auto"
                orientation="vertical"
              >
                <div className="border border-gray-300_01 border-solid flex sm:flex-col flex-row gap-[-1px] items-start justify-start my-0 w-[551px] sm:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Flight
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Bus
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Entertainment
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Jewellery
                  </Button>
                </div>
                <div className="border border-gray-300_01 border-solid flex sm:flex-col flex-row gap-[-1px] items-start justify-start my-0 w-[551px] sm:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Medicines
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Hosting
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Flowers
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Beauty
                  </Button>
                </div>
                <div className="border border-gray-300_01 border-solid flex sm:flex-col flex-row gap-[-1px] items-start justify-start my-0 w-[551px] sm:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    OTT
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Bills
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Kids
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Travel
                  </Button>
                </div>
                <div className="border border-gray-300_01 border-solid flex sm:flex-col flex-row gap-[-1px] items-start justify-start my-0 w-[551px] sm:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Food
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Eyewear
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Lifestyle
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Kitchen
                  </Button>
                </div>
                <div className="border border-gray-300_01 border-solid flex sm:flex-col flex-row gap-[-1px] items-start justify-start my-0 w-[551px] sm:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Recharge
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Electronics
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Hotel
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Footwear
                  </Button>
                </div>
                <div className="border border-gray-300_01 border-solid flex sm:flex-col flex-row gap-[-1px] items-start justify-start my-0 w-[551px] sm:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Lab
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Education
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Services
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Furniture
                  </Button>
                </div>
                <div className="border border-gray-300_01 border-solid flex sm:flex-col flex-row gap-[-1px] items-start justify-start my-0 w-[551px] sm:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Fashion
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Pizza
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Bike
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] text-center text-sm w-full"
                    shape="square"
                  >
                    Novelties
                  </Button>
                </div>
              </List>
            </div>
          </div>
        </div>
        <footer className="bg-gray-900_02 flex items-center justify-center md:px-5 py-8 w-full">
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[860px] w-full">
            <div className="flex flex-col gap-[13px] items-start justify-start w-auto">
              <div className="h-[50px] relative w-3/5">
                <Img
                  className="h-[50px] m-auto object-cover w-full"
                  src="images/img_logo.png"
                  alt="logo_One"
                />
                <Img
                  className="absolute h-[50px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_logo.png"
                  alt="maskgroup"
                />
              </div>
              <Text
                className="leading-[16.00px] max-w-[200px] md:max-w-full text-white-A700 text-xs"
                size="txtMetropolisRegular12"
              >
                Lorem Ipsum is simply dummy of the printing and type setting.
              </Text>
              <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                <FloatingInput
                  wrapClassName="placeholder:bg-white-A700 font-semibold leading-[normal] placeholder:left-[35px] p-0 sm:pl-5 placeholder:text-gray-600 text-gray-900_02 text-left text-xs placeholder:top-[0] uppercase w-full"
                  className="font-semibold leading-[normal] p-0 sm:pl-5 text-gray-900_02 text-left text-xs uppercase w-full"
                  name="appstore"
                  labelClasses="bg-white-A700 left-[35px] top-[0] text-gray-600"
                  focusedClasses="translate-y-[18px] scale-[1]"
                  wrapperClasses="w-full top-[0]"
                  labelText="Download From"
                  defaultText="App Store"
                ></FloatingInput>
                <FloatingInput
                  wrapClassName="placeholder:bg-white-A700 font-semibold leading-[normal] placeholder:left-[35px] p-0 sm:pl-5 placeholder:text-gray-600 text-gray-900_02 text-left text-xs placeholder:top-[0] uppercase w-full"
                  className="font-semibold leading-[normal] p-0 sm:pl-5 text-gray-900_02 text-left text-xs uppercase w-full"
                  name="playstore"
                  labelClasses="bg-white-A700 left-[35px] top-[0] text-gray-600"
                  focusedClasses="translate-y-[18px] scale-[1]"
                  wrapperClasses="w-full top-[0]"
                  labelText="Download From"
                  defaultText="Play Store"
                ></FloatingInput>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 items-start justify-start pt-4 w-full">
              <Text
                className="text-red-600 text-xs uppercase w-auto"
                size="txtMetropolisSemiBold12Red600"
              >
                Company
              </Text>
              <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        About Us
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_One"
                      />
                      <a
                        href="javascript:"
                        className="text-[10px] text-white-A700 w-auto"
                      >
                        <Text size="txtMetropolisMedium10WhiteA700">
                          Privacy Policy
                        </Text>
                      </a>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Two"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        Terms
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Three"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        Blogs
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Four"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        Branding
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Five"
                      />
                      <a
                        href="javascript:"
                        className="text-[10px] text-white-A700 w-auto"
                      >
                        <Text size="txtMetropolisMedium10WhiteA700">
                          Career
                        </Text>
                      </a>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-4 items-start justify-start pt-4 w-full">
              <Text
                className="text-red-600 text-xs uppercase w-auto"
                size="txtMetropolisSemiBold12Red600"
              >
                General
              </Text>
              <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Six"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        Partner With us
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Seven"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        Write to us
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Eight"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        Mobile App
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Nine"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        Site map
                      </Text>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-4 items-start justify-start pt-4 w-full">
              <Text
                className="text-red-600 text-xs uppercase w-auto"
                size="txtMetropolisSemiBold12Red600"
              >
                Pages
              </Text>
              <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Ten"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        Amazon Offer
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Eleven"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        Google Pay Offers
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Twelve"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        PayPal Offers
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Thirteen"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        PhonePe Offers
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Fourteen"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        Festival Offers
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Fifteen"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        Bank Offers
                      </Text>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-4 items-start justify-start pt-4 w-full">
              <Text
                className="text-red-600 text-xs uppercase w-auto"
                size="txtMetropolisSemiBold12Red600"
              >
                More
              </Text>
              <ul className="flex flex-col gap-3 items-start justify-start w-auto md:w-full common-column-list">
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Sixteen"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        City Offers
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Seventeen"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        Brand Offers
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Eighteen"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        Product Deals
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-0.5 items-center justify-start">
                      <Img
                        className="h-2.5 w-2.5"
                        src="images/img_arrow.svg"
                        alt="arrow_Nineteen"
                      />
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtMetropolisMedium10WhiteA700"
                      >
                        Gift Cards
                      </Text>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPagePage;
