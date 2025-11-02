



import StarRating from "@/app/components/starRate";
import { ArrowRight, Bookmark, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";




export default function Header(){
    return(      <div className="grid gap-8">

             <div className=" justify-between flex">
                  <div className="flex   gap-6">
                    <div className="  flex h-fit w-fit">
                      <Link
                        className="w-full h-full p-4  rounded-3xl bg-[#D3AE60]"
                        href="/tours"
                      >
                        <ArrowRight color="white" size={32} />
                      </Link>
                    </div>
                    <div className="grid gap-3.5">
                      <div className="flex items-center ">
                        <div className="flex items-center gap-1 ml-6">
                          <StarRating value={4.5} />{" "}
                          <p className="text-[#1C1C1F] font-semibold text-base">4.5</p>
                        </div>
                        <p className="text-base font-semibold text-[#555555]">
                          ۱۲۲ نظر
                        </p>
                      </div>
                      <p className="text-[#1C1C1F] font-bold text-[32px] ml-3">
                        Elite World Istanbul Taksim{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex  gap-4 items-end">
                    <button className="py-3 px-6 rounded-3xl bg-[#D3AE60] w-fit h-fit">
                      <Share2 size={24} color="white" />
                    </button>
                    <button className="py-3 px-6 rounded-3xl bg-[#D3AE60] w-fit h-fit">
                      <Bookmark size={24} color="white" />
                    </button>
                  </div>
                </div> <div className="grid grid-cols-2 gap-6">
                          <div>
                            <Image
                              src="/images/tours/test2.png"
                              width={616}
                              height={478}
                              alt="Logo"
                              className=" w-full rounded-3xl"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <Image
                                src="/images/tours/test2.png"
                                width={616}
                                height={478}
                                alt="Logo"
                                className=" w-full rounded-3xl"
                              />
                            </div>
                            <div>
                              <Image
                                src="/images/tours/test2.png"
                                width={616}
                                height={478}
                                alt="Logo"
                                className=" w-full rounded-3xl"
                              />
                            </div>
                            <div>
                              <Image
                                src="/images/tours/test2.png"
                                width={616}
                                height={478}
                                alt="Logo"
                                className=" w-full rounded-3xl"
                              />
                            </div>
                            <div>
                              <Image
                                src="/images/tours/test2.png"
                                width={616}
                                height={478}
                                alt="Logo"
                                className=" w-full rounded-3xl"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
        
    )
}