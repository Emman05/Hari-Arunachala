import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import './contact.css'
const ContactPage = () => {
  const navigate = useNavigate();

  const onText7Click = useCallback(() => {
    // Please sync "Privacy Policy Page" to the project
  }, []);

  const onText8Click = useCallback(() => {
    // Please sync "Terms and Conditions Page" to the project
  }, []);

  const onLinkText26Click = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  const onLinkText27Click = useCallback(() => {
    // Please sync "About Us Page" to the project
  }, []);

  const onLinkText28Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMenuItemContainer4Click = useCallback(() => {
    // Please sync "Food Products Page" to the project
  }, []);

  const onMenuItemContainer5Click = useCallback(() => {
    // Please sync "Religious SrorePage" to the project
  }, []);

  const onMenuItemContainer6Click = useCallback(() => {
    // Please sync "Books Page" to the project
  }, []);

  const onMenuItemContainer7Click = useCallback(() => {
    // Please sync "Subsidized Food page" to the project
  }, []);

  return (
    <div className="relative w-full flex flex-col items-start justify-start text-left text-29xl text-black font-text-medium-normal">
      <div className="bg-white w-[1440px] overflow-hidden flex flex-row items-center justify-start py-28 px-16 box-border gap-[80px] z-[0]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <b className="self-stretch relative leading-[120%]">Contact us</b>
            <div className="self-stretch relative text-lg leading-[150%]">
              Our dedicated Customer Support team is here to assist you with any
              inquiries or assistance you may need
            </div>
          </div>
          <div className="w-[616px] flex flex-col items-start justify-start gap-[24px] text-base">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative leading-[150%]">Name</div>
              <div className="self-stretch bg-white flex flex-row items-center justify-start p-3 text-neutral-dark-gray border-[1px] border-solid border-black">
                <div className="flex-1 relative leading-[150%] hidden">
                  Placeholder
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative leading-[150%]">Email</div>
              <div className="self-stretch bg-white flex flex-row items-center justify-start p-3 text-neutral-dark-gray border-[1px] border-solid border-black">
                <div className="flex-1 relative leading-[150%] hidden">
                  Placeholder
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="self-stretch relative leading-[150%]">
                Message
              </div>
              <div className="self-stretch bg-white box-border h-[182px] flex flex-row items-start justify-start p-3 relative text-neutral-dark-gray border-[1px] border-solid border-black">
                <div className="flex-1 relative leading-[150%] z-[0]">
                  Type your message...
                </div>
                <img
                  className="absolute my-0 mx-[!important] right-[3.29px] bottom-[3.05px] w-[2.71px] h-[2.71px] z-[1]"
                  alt=""
                  src="./line-1.svg"
                />
                <img
                  className="absolute my-0 mx-[!important] right-[3.29px] bottom-[3.29px] w-[6.71px] h-[6.71px] z-[2]"
                  alt=""
                  src="./line-2.svg"
                />
              </div>
            </div>
            <div className="rounded-3xs bg-black flex flex-row items-center justify-center py-3 px-6 text-sunshade-300 border-[1px] border-solid border-black">
              <div className="relative leading-[150%]">Submit</div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="./placeholder--image@2x.png"
        />
      </div>
      <div className="bg-white box-border w-[1440px] overflow-hidden flex flex-row items-center justify-center py-20 px-16 gap-[324px] z-[1] text-5xl border-t-[1px] border-solid border-black border-b-[1px]">
        <b className="relative leading-[140%] inline-block w-80 shrink-0">
          Feel free to reach out to us through the following channels:
        </b>
        <div className="flex flex-row items-center justify-start gap-[59.14px] text-[29.57px]">
          <div className="relative w-[122.05px] h-[124.75px]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="./image-4@2x.png"
            />
          </div>
          <div className="relative leading-[150%]">
            Nourishing Lives, Enriching Souls
          </div>
        </div>
      </div>
      <div className="bg-white w-[1440px] overflow-hidden flex flex-row items-center justify-start py-28 px-16 box-border relative gap-[32px] z-[2] text-13xl">
        <div className="my-0 mx-[!important] absolute top-[112.25px] left-[64px] w-[304px] flex flex-col items-start justify-start gap-[24px] z-[0]">
          <img
            className="relative w-12 h-12 overflow-hidden shrink-0"
            alt=""
            src="./icon--email.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative leading-[130%]">Email</b>
              <div className="self-stretch relative text-base leading-[150%]">
                Our team will respond promptly to your email within [Insert
                Response Time]
              </div>
            </div>
            <div className="self-stretch relative text-base [text-decoration:underline] leading-[150%]">
              hello@mail.io
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[112.25px] left-[400px] w-[304px] flex flex-col items-start justify-start gap-[24px] z-[1]">
          <img
            className="relative w-12 h-12 overflow-hidden shrink-0"
            alt=""
            src="./icon--phone.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative leading-[130%]">Phone</b>
              <div className="self-stretch relative text-base leading-[150%]">
                Our team is available during our operating hours to address your
                queries.
              </div>
            </div>
            <div className="self-stretch relative text-base [text-decoration:underline] leading-[150%]">
              +1 (555) 000-0000
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[112.25px] left-[736px] w-[304px] flex flex-col items-start justify-start gap-[24px] z-[2]">
          <img
            className="relative w-12 h-12 overflow-hidden shrink-0"
            alt=""
            src="./icon--pin.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative leading-[130%]">Office</b>
              <div className="self-stretch relative text-base leading-[150%]">
                <p className="m-0">
                  Visit our physical store to explore our products and
                  experience the essence of Hari Arunachala. You can find us at:
                </p>
                <p className="m-0">[Insert Store Address]</p>
              </div>
            </div>
            <div className="self-stretch relative text-base [text-decoration:underline] leading-[150%]">
              123 Sample St, Sydney NSW 2000 AU
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[190.25px] left-[1072px] w-[304px] flex flex-col items-center justify-center z-[3]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <b className="self-stretch relative leading-[130%]">
                Office Operating Hours:
              </b>
              <div className="self-stretch relative text-base leading-[150%]">
                <p className="m-0">
                  Monday to Saturday: [Insert Opening Time] - [Insert Closing
                  Time]
                </p>
                <p className="m-0">
                  {" "}
                  Sunday: [Insert Opening Time] - [Insert Closing Time]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sunshade-50 w-[1440px] overflow-hidden flex flex-row items-start justify-center py-28 px-16 box-border z-[3] text-center">
        <div className="w-[768px] flex flex-col items-center justify-start gap-[80px]">
          <div className="w-[768px] flex flex-col items-start justify-start gap-[24px]">
            <b className="self-stretch relative leading-[120%]">
              Frequently asked questions
            </b>
            <div className="self-stretch relative text-lg leading-[150%]">
              Frequently asked questions ordered by popularity. Remember that if
              the visitor has not committed to the call to action, they may
              still have questions (doubts) that can be answered.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-left text-lg">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative bg-black w-[768px] h-px" />
              <div className="w-[768px] overflow-hidden flex flex-row items-center justify-start py-5 px-0 box-border gap-[12px]">
                <b className="flex-1 relative leading-[150%]">
                  Question text goes here
                </b>
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="./icon.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative bg-black w-[768px] h-px" />
              <div className="w-[768px] overflow-hidden flex flex-row items-center justify-start py-5 px-0 box-border gap-[12px]">
                <b className="flex-1 relative leading-[150%]">
                  Question text goes here
                </b>
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="./icon.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative bg-black w-[768px] h-px" />
              <div className="w-[768px] overflow-hidden flex flex-row items-center justify-start py-5 px-0 box-border gap-[12px]">
                <b className="flex-1 relative leading-[150%]">
                  Question text goes here
                </b>
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="./icon.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative bg-black w-[768px] h-px" />
              <div className="w-[768px] overflow-hidden flex flex-row items-center justify-start py-5 px-0 box-border gap-[12px]">
                <b className="flex-1 relative leading-[150%]">
                  Question text goes here
                </b>
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="./icon.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative bg-black w-[768px] h-px" />
              <div className="w-[768px] overflow-hidden flex flex-row items-center justify-start py-5 px-0 box-border gap-[12px]">
                <b className="flex-1 relative leading-[150%]">
                  Question text goes here
                </b>
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0"
                  alt=""
                  src="./icon.svg"
                />
              </div>
            </div>
            <div className="relative bg-black w-[768px] h-px" />
          </div>
          <div className="w-[560px] flex flex-col items-center justify-start gap-[24px] text-13xl">
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
              <b className="self-stretch relative leading-[130%]">
                Still have questions?
              </b>
              <div className="self-stretch relative text-lg leading-[150%]">
                Support details to capture customers that might be on the fence.
              </div>
            </div>
            <div className="rounded-3xs bg-black flex flex-row items-center justify-center py-3 px-6 text-left text-base text-sunshade-300 border-[1px] border-solid border-sunshade-300">
              <div className="relative leading-[150%]">Contact us</div>
            </div>
          </div>
          <div className="self-stretch relative text-12xl leading-[120%] font-para-2">
            Join our newsletter to stay up to date on features and releases.
          </div>
          <div className="w-[500px] flex flex-col items-start justify-start text-left text-xs">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-base text-dimgray">
                <div className="flex-1 bg-white flex flex-row items-center justify-start p-3 border-[1px] border-solid border-sunshade-200">
                  <div className="flex-1 relative leading-[150%]">
                    Enter Your Email
                  </div>
                </div>
                <div className="bg-black flex flex-row items-center justify-center py-3 px-6 text-sunshade-300 border-[1px] border-solid border-black">
                  <div className="relative leading-[150%]">Subscribe</div>
                </div>
              </div>
              <div
                className="self-stretch relative leading-[150%] cursor-pointer"
                onClick={onText7Click}
              >
                {`By subscribing you agree to with our `}
                <span className="[text-decoration:underline]">
                  Privacy Policy
                </span>{" "}
                and provide consent to receive updates from our company.
              </div>
              <div
                className="self-stretch relative leading-[150%] cursor-pointer"
                onClick={onText8Click}
              >
                {`By subscribing you agree to with our `}
                <span className="[text-decoration:underline]">
                  Terms and Conditions
                </span>{" "}
                and provide consent to receive updates from our company.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sunshade-50 w-[1440px] overflow-hidden flex flex-col items-center justify-start py-20 px-0 box-border gap-[80px] z-[4] text-center">
        <div className="bg-white box-border w-[1440px] h-[348px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-28 px-16 relative border-t-[1px] border-solid border-black">
          <div className="my-0 mx-[!important] absolute top-[calc(50%_-_68px)] left-[calc(50%_-_384px)] w-[768px] flex flex-col items-center justify-start z-[0]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <b className="self-stretch relative leading-[120%]">
                Nourishing Lives, Enriching Souls
              </b>
              <div className="self-stretch relative text-lg leading-[150%]">
                we value your engagement and support. Whether you have
                questions, feedback, or simply want to connect, we are here to
                serve you with warmth and care.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1280px] flex flex-col items-start justify-start gap-[80px] text-left text-base">
          <div className="self-stretch relative bg-black h-px" />
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px]">
            <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Column One
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-sm">
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">Link One</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">Link Two</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Three
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Four
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Five
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Column Two
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-sm">
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">Link Six</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Seven
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Eight
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Nine
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">Link Ten</div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Column Three
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-sm">
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Eleven
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Twelve
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Thirteen
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Fourteen
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Fifteen
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Column Four
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-sm">
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Sixteen
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Seventeen
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Eightteen
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Nineteen
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-2 px-0">
                  <div className="flex-1 relative leading-[150%]">
                    Link Twenty
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
            <div className="self-stretch relative bg-black h-px" />
            <div className="flex flex-row items-center justify-center gap-[640px]">
              <div className="flex flex-row items-center justify-start gap-[32px]">
                <div className="relative w-[66.04px] h-[67.5px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="./image-41@2x.png"
                  />
                </div>
                <div className="relative leading-[150%]">
                  Nourishing Lives, Enriching Souls
                </div>
              </div>
              <div className="relative text-sm leading-[150%]">
                © 2023 Hari Arunachala. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute my-0 mx-[!important] top-[0px] left-[0px] w-[1440px] h-[72px] z-[5] text-base">
        <div className="absolute top-[0px] left-[calc(50%_-_720px)] bg-sunshade-50 shadow-[0px_-1px_0px_#000_inset] w-[1440px] h-[72px] overflow-hidden flex flex-col items-center justify-center py-0 px-16 box-border">
          <div className="self-stretch flex flex-row items-center justify-center relative gap-[32px]">
            <div className="flex flex-row items-center justify-start gap-[32px] z-[0]">
              <div className="relative w-[66.04px] h-[67.5px]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="./image-42@2x.png"
                />
              </div>
              <div className="relative leading-[150%]">
                Nourishing Lives, Enriching Souls
              </div>
            </div>
            <div className="flex-1 bg-sunshade-50 flex flex-col items-end justify-center z-[1] text-sunshade-50">
              <div className="rounded-3xs bg-sunshade-300 flex flex-row items-center justify-center py-2 px-5 border-[1px] border-solid border-sunshade-300">
                <div className="relative leading-[150%]">Login</div>
              </div>
            </div>
            <div className="my-0 mx-[!important] absolute top-[21.75px] left-[802px] overflow-hidden flex flex-row items-start justify-start gap-[32px] z-[2]">
              <div
                className="relative leading-[150%] cursor-pointer"
                onClick={onLinkText26Click}
              >
                Home
              </div>
              <div
                className="relative leading-[150%] cursor-pointer"
                onClick={onLinkText27Click}
              >
                About Us
              </div>
              <div
                className="relative leading-[150%] cursor-pointer"
                onClick={onLinkText28Click}
              >
                Contact Us
              </div>
              <div className="flex flex-row items-center justify-center gap-[4px]">
                <div className="relative leading-[150%]">Products</div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="./chevron-down.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-6/12 top-[100%] right-[0%] left-[50%] rounded-4xs bg-sunshade-50 box-border h-0 overflow-hidden flex flex-row items-start justify-start p-6 gap-[32px] border-[1px] border-solid border-black">
          <div className="w-80 flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch relative text-sm leading-[150%] font-semibold">
              Page group one
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-[12px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="./icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page One
                </div>
                <div className="self-stretch relative text-sm leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-[12px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="./icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page Two
                </div>
                <div className="self-stretch relative text-sm leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-[12px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="./icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page Three
                </div>
                <div className="self-stretch relative text-sm leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-[12px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="./icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page Four
                </div>
                <div className="self-stretch relative text-sm leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
          </div>
          <div className="w-80 flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch relative text-sm leading-[150%] font-semibold">
              Page group two
            </div>
            <div
              className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-[12px] cursor-pointer"
              onClick={onMenuItemContainer4Click}
            >
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="./icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page Five
                </div>
                <div className="self-stretch relative text-sm leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div
              className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-[12px] cursor-pointer"
              onClick={onMenuItemContainer5Click}
            >
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="./icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page Six
                </div>
                <div className="self-stretch relative text-sm leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div
              className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-[12px] cursor-pointer"
              onClick={onMenuItemContainer6Click}
            >
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="./icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page Seven
                </div>
                <div className="self-stretch relative text-sm leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
            <div
              className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-[12px] cursor-pointer"
              onClick={onMenuItemContainer7Click}
            >
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="./icon--relume.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Page Eight
                </div>
                <div className="self-stretch relative text-sm leading-[150%]">
                  Lorem ipsum dolor sit amet consectetur elit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;