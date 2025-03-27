import { useEffect, useState } from 'react';
import { ChevronDownIcon, UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { logout, getCurrentUser } from '../services/auth';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true); // Set loading to true at the start

            const userData = await getCurrentUser();
            setUser(userData);
            setIsLoading(false); // Set loading to false after data is fetched
        };

        fetchUser();
    }, []);

    return (
        <div className="bg-white p-0 flex items-center justify-end z-10">
            {/* Adjusted Padding */}
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center space-x-1 sm:space-x-2 hover:bg-gray-100 rounded-full p-1 sm:p-2" // Adjusted Padding and Space
                >
                    <UserCircleIcon className="h-5 w-5 sm:h-7 sm:w-7 text-gray-600" /> {/* Adjusted Icon Size */}
                    <div className="text-left">
                        {isLoading ? (  // Show loading indicator
                            <p className="text-xs sm:text-sm">Loading...</p> // Adjusted Font Size
                        ) : user ? (  // Only render user details if user is not null
                            <>
                              <p className="text-xs sm:hidden font-medium text-gray-700">{user.name}</p>  {/* Name only on mobile */}
                                <p className="hidden sm:block text-xs sm:text-sm font-medium text-gray-700">{user.name}</p> {/* Name on larger screens */}
                                <p className="hidden text-[0.7rem] sm:block sm:text-xs text-gray-500">{user.email}</p>  {/* Email on larger screens */}
                            </>
                        ) : (
                            <p className="text-xs sm:text-sm font-medium text-gray-700">Not logged in</p> // Displayed when user is null
                        )}
                    </div>
                    <ChevronDownIcon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" /> {/* Adjusted Icon Size */}
                </button>

                {isOpen && (
                    <div
                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5"
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <div className="px-4 py-3 border-b">
                            <p className="text-sm text-gray-900">Signed in as</p>
                            <p className="text-sm font-medium text-gray-700 truncate">{user?.email}</p> {/* Use optional chaining */}
                        </div>
                        <button
                            onClick={logout}
                            className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        >
                            <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2 text-gray-600" />
                            Sign out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}