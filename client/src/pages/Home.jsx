import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListingItem from "../components/ListingItem";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import 'swiper/css/bundle';

export default function Home() {
    const [offerListings, setOfferListings] = useState([]);
    const [saleListings, setSaleListings] = useState([]);
    const [rentListings, setRentListings] = useState([]);
    SwiperCore.use([Navigation]);

    console.log(saleListings);
    useEffect(() => {
        const fetchOfferListings = async () => {
            try {
                const res = await fetch("/api/listing/get?offer=true&limit=3");
                const data = await res.json();
                setOfferListings(data);
                fetchRentListings();
            } catch (error) {
                console.log(error);
            }
        }
        const fetchRentListings = async () => {
            try {
                const res = await fetch("/api/listing/get?type=rent&limit=3");
                const data = await res.json();
                setRentListings(data);
                fetchSaleListings();
            } catch (error) {
                console.log(error);
            }
        }
        const fetchSaleListings = async () => {
            try {
                const res = await fetch("/api/listing/get?type=sale&limit=3");
                const data = await res.json();
                setSaleListings(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchOfferListings();
    }, [])
    return (
        <div>
            {/* top */}
            <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
                <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
                    Find your next <span className="text-slate-500">perfect</span>
                    <br />
                    place with ease
                </h1>
                <div className="text-gray-400 text-xs sm:text-sm">
                    ReelEstate is a platform that helps you find the best places to rent or sell your property.
                    <br />
                    We have a wide variety of properties for you to choose from.
                </div>
                <Link className="text-xs sm:text-sm text-blue-800 font-bold hover:underline" to="/search">
                    Lets get started...
                </Link>
            </div>
            {/* swiper */}
            <Swiper navigation>
                {
                    offerListings && offerListings.length > 0 && offerListings.map((listing) => (
                        <SwiperSlide key={listing._id}>
                            <div style={{ background: `url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize: "cover" }} className="h-[500px]">

                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {/* listing results for offer,sale and rent*/}
            <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">

                {offerListings && offerListings.length > 0 && (
                    <div className="">
                        <div className="my-3">
                            <h2 className="text-2xl font-semibold text-slate-600">Recent offers</h2>
                            <Link className="text-sm text-blue-800 hover:underline" to={'/search?offer=true'}>
                                Show more offers
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-5">
                            {offerListings.map((listing) => (
                                <ListingItem key={listing._id} listing={listing} />
                            ))}
                        </div>
                    </div>
                )}

                {rentListings && rentListings.length > 0 && (
                    <div className="">
                        <div className="my-3">
                            <h2 className="text-2xl font-semibold text-slate-600">Recent places for rent</h2>
                            <Link className="text-sm text-blue-800 hover:underline" to={'/search?type=rent'}>
                                Show more places for rent
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-5">
                            {rentListings.map((listing) => (
                                <ListingItem key={listing._id} listing={listing} />
                            ))}
                        </div>
                    </div>
                )}

                {saleListings && saleListings.length > 0 && (
                    <div className="">
                        <div className="my-3">
                            <h2 className="text-2xl font-semibold text-slate-600">Recent places for sale</h2>
                            <Link className="text-sm text-blue-800 hover:underline" to={'/search?type=sale'}>
                                Show more places for sale
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-5">
                            {saleListings.map((listing) => (
                                <ListingItem key={listing._id} listing={listing} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
