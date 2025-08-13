import Image from 'next/image';
import React from 'react';

const UserSupportCard = () => {
  return (
    <div className="flex flex-col gap-2 rounded-2xl shadow-lg bg-white p-3 border">
      <div className="relative w-20 h-20 ">
        <Image
          src="/image-1.png"
          alt="User support illustration"
          className="rounded-md object-cover"
          fill
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-teal-600 mb-2">24/7 User Support</h2>
        <p className="text-gray-600 text-xs">
          Get instant assistance anytime with our dedicated user support. We’re here to help with any questions or issues
          you may have!
        </p>
      </div>
    </div>
  );
};

export default UserSupportCard;
