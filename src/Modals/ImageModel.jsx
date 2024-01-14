import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckboxGroup } from "@chakra-ui/react";
import { useState } from "react";
function ImageModel(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imagesize, setImagesize] = useState();
  const [sizeselect, setSizeselect] = useState("small");

  const smallSizeSelector = () => {
    setSizeselect("small");
    imageDownloader("small");
  };
  const largeSizeSelector = () => {
    setSizeselect("large");
    imageDownloader("large");
  };
  const imageDownloader = (sizeselect) => {
    if (sizeselect === "large") setImagesize(props?.imag?.largeImageURL);
    if (sizeselect === "small") setImagesize(props?.imag?.webformatURL);
    console.log(sizeselect);
  };

  return (
    <>
      <Button onClick={onOpen} className="text-white">
        ABC
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          size={"6xl"}
        >
          <div className="content w-[90%] bg-white rounded-xl border-2 border-white mt-7">
            <div className="header flex justify-between p-4 bg-stone-100 items-center rounded-xl">
              <div className="id_name">
                <span className="font-semibold">Preview </span>:{" "}
                {props?.imag.id}
              </div>
              <div className="close  border-black border-2 flex justify-center items-center p-2 rounded-lg">
                <ModalCloseButton />
              </div>
            </div>
            <div className="main_image_content flex justify-around items-center p-4 gap-3">
              <div className="image_preview w-[65%] flex justify-center items-center">
                <img
                  src={props?.imag.webformatURL}
                  alt=""
                  className="object-cover h-[50%] rounded-lg"
                />
              </div>
              <div className="options flex flex-col gap-6 w-80">
                <div className="option1 flex flex-col gap-3">
                  <div className="option_title text-2xl  font-semibold">
                    Download
                  </div>
                  <div className="des ">
                    <CheckboxGroup>
                      <div className="checkbox-content flex flex-col gap-3">
                        <div
                          className={`small flex ${
                            sizeselect === "small" ? "border-green-600" : ""
                          } py-1 px-3 justify-between border-4 rounded-lg items-center`}
                          onClick={smallSizeSelector}
                        >
                          <span className=""> Small</span>
                          <div className="right flex gap-4 items-center">
                            <div className="size font-semibold">
                              {props?.imag.webformatWidth +
                                " x " +
                                props?.imag.webformatHeight}
                            </div>
                            <div className="checkbox w-4 h-4 bg-gray-300 rounded-full active:bg-green-500"></div>
                          </div>
                        </div>
                        <div
                          className={`large flex ${
                            sizeselect === "large" ? " border-green-600" : ""
                          } py-1 px-3 justify-between border-4 rounded-lg items-center`}
                          onClick={largeSizeSelector}
                        >
                          <span className=""> Large</span>
                          <div className="right flex gap-4 items-center">
                            <div className="size font-semibold">
                              {props?.imag.imageWidth +
                                " x " +
                                props?.imag.imageHeight}
                            </div>
                            <div className="checkbox w-4 h-4 bg-gray-300 rounded-full active:bg-green-500"></div>
                          </div>
                        </div>
                      </div>
                    </CheckboxGroup>
                  </div>
                  <a href={`${imagesize}`} download>
                    <div className="download_link bg-green-500 py-2 px-4 text-center font-semibold rounded-lg text-white w-full cursor-pointer active:bg-green-600">
                      Download for Free
                    </div>
                  </a>
                </div>
                <div className="option2 flex flex-col gap-3">
                  <div className="information text-2xl font-semibold">
                    Information
                  </div>
                  <div className="information_details flex justify-between items-center ">
                    <div className="details_first flex flex-col gap-3">
                      <div className="user flex gap-1 justify-center flex-col">
                        <div className="title text-sm">User</div>
                        <div className="user_name font-semibold text-sm">
                          {props?.imag.user}😎
                        </div>
                      </div>
                      <div className="views flex gap-1 justify-center flex-col">
                        <div className="title text-sm">Views</div>
                        <div className="user_name font-semibold text-sm">
                          {props?.imag.views}
                        </div>
                      </div>
                    </div>
                    <div className="details_second flex flex-col gap-3">
                      <div className="user_id flex gap-1 justify-center flex-col">
                        <div className="title text-sm">User ID</div>
                        <div className="userid_name font-semibold text-sm">
                          {props?.imag.user_id}
                        </div>
                      </div>
                      <div className="download flex gap-1 justify-center flex-col">
                        <div className="title text-sm">Downloads</div>
                        <div className="user_name font-semibold text-sm">
                          {props?.imag.downloads}
                        </div>
                      </div>
                    </div>
                    <div className="details_third flex flex-col gap-3">
                      <div className="Type flex gap-1 justify-center flex-col">
                        <div className="title text-sm">Type</div>
                        <div className="type_name font-semibold text-sm">
                          {props?.imag.type}
                        </div>
                      </div>
                      <div className="likes flex gap-1 justify-center flex-col">
                        <div className="title text-sm">Likes</div>
                        <div className="user_name font-semibold text-sm">
                          {props?.imag.likes}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_tags flex items-center px-4 py-3 gap-4">
              <span className="font-semibold">Tags:</span>
              <div className="tags_image flex gap-2 items-center">
                {props?.imag.tags?.split(", ").map((t) => (
                  <div className="individual_tag py-1 px-3 rounded bg-stone-100 text-sm">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ImageModel;
