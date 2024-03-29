import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItem({ listing }) {
    return (
        <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[350px]">
            <Link to={`/listing/${listing._id}`}>
                <img src={listing.imageUrls[0] || "https://digitalshiftagency.com/wp-content/uploads/real-estate-images.jpg"} alt="listing cover"
                    className="h-[330px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300" />
                <div className="p-3 flex flex-col gap-2 w-full">
                    <p className="truncate text-lg font-semibold text-slate-700">{listing.name}</p>
                    <div className="flex gap-1 items-center">
                        <MdLocationOn className="h-4 w-4 text-green-700" />
                        <p className="text-sm text-gray-600 truncate w-full">{listing.address}</p>
                    </div>
                    <p className="line-clamp-2 text-sm text-gray-600">{listing.description}</p>
                    <p className="text-slate-700 mt-2 font-semibold">
                        ${' '}
                        {listing.offer ? listing.discountPrice.toLocaleString('en-US') : listing.regularPrice.toLocaleString('en-US')}
                        {listing.type === 'rent' && ' / month'}
                    </p>
                    <div className="text-slate-700 flex gap-4">
                        <div className="font-bold text-xs">
                            {listing.bedrooms > 1 ? `${listing.bedrooms} beds` : `${listing.bedrooms} bed`}
                        </div>
                        <div className="font-bold text-xs">
                            {listing.bathrooms > 1 ? `${listing.bathrooms} baths` : `${listing.bathrooms} bath`}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

import PropTypes from 'prop-types';

ListingItem.propTypes = {
    // listing prop is an object with a specific shape
    listing: PropTypes.shape({
        // _id is a string and is required
        _id: PropTypes.string.isRequired,
        // name is a string and is required
        name: PropTypes.string.isRequired,
        // address is a string and is required
        address: PropTypes.string.isRequired,
        // description is a string
        description: PropTypes.string,
        // offer is a bool
        offer: PropTypes.bool,
        // discountPrice is a number
        discountPrice: PropTypes.number,
        // regularPrice is a number and is required
        regularPrice: PropTypes.number.isRequired,
        // type is a string and is one of 'rent' or 'sale'
        type: PropTypes.oneOf(['rent', 'sale']),
        // bedrooms is a number and is required
        bedrooms: PropTypes.number.isRequired,
        // bathrooms is a number and is required
        bathrooms: PropTypes.number.isRequired,
        // imageUrls is an array of strings
        imageUrls: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};
