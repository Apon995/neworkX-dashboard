"use client";

import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export const NotificationIcon = () => (
  <svg
    width="24"
    height="28"
    viewBox="0 0 31 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.44 0C12.233 0 9.15737 1.27403 6.88969 3.54183C4.622 5.80962 3.34803 8.88541 3.34803 12.0926V18.1872C3.34828 18.4552 3.28618 18.7196 3.16665 18.9594L0.200662 24.8899C0.0557772 25.1797 -0.0126363 25.5016 0.00191967 25.8253C0.0164757 26.1489 0.113518 26.4634 0.283829 26.739C0.454141 27.0145 0.692067 27.242 0.97501 27.3997C1.25795 27.5574 1.57652 27.6402 1.90045 27.6401H28.9796C29.3035 27.6402 29.622 27.5574 29.905 27.3997C30.1879 27.242 30.4259 27.0145 30.5962 26.739C30.7665 26.4634 30.8635 26.1489 30.8781 25.8253C30.8926 25.5016 30.8242 25.1797 30.6793 24.8899L27.7151 18.9594C27.5949 18.7197 27.5323 18.4553 27.532 18.1872V12.0926C27.532 8.88541 26.258 5.80962 23.9903 3.54183C21.7226 1.27403 18.647 0 15.44 0ZM15.44 32.8227C14.3679 32.8232 13.322 32.4912 12.4464 31.8724C11.5709 31.2536 10.9088 30.3785 10.5514 29.3676H20.3286C19.9712 30.3785 19.3091 31.2536 18.4336 31.8724C17.558 32.4912 16.5121 32.8232 15.44 32.8227Z"
      fill="black"
    />
  </svg>
);

export const NotificationIconTwo = () => (
  <svg
    width="20"
    height="24"
    viewBox="0 0 31 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.44 0C12.233 0 9.15737 1.27403 6.88969 3.54183C4.622 5.80962 3.34803 8.88541 3.34803 12.0926V18.1872C3.34828 18.4552 3.28618 18.7196 3.16665 18.9594L0.200662 24.8899C0.0557772 25.1797 -0.0126363 25.5016 0.00191967 25.8253C0.0164757 26.1489 0.113518 26.4634 0.283829 26.739C0.454141 27.0145 0.692067 27.242 0.97501 27.3997C1.25795 27.5574 1.57652 27.6402 1.90045 27.6401H28.9796C29.3035 27.6402 29.622 27.5574 29.905 27.3997C30.1879 27.242 30.4259 27.0145 30.5962 26.739C30.7665 26.4634 30.8635 26.1489 30.8781 25.8253C30.8926 25.5016 30.8242 25.1797 30.6793 24.8899L27.7151 18.9594C27.5949 18.7197 27.5323 18.4553 27.532 18.1872V12.0926C27.532 8.88541 26.258 5.80962 23.9903 3.54183C21.7226 1.27403 18.647 0 15.44 0ZM15.44 32.8227C14.3679 32.8232 13.322 32.4912 12.4464 31.8724C11.5709 31.2536 10.9088 30.3785 10.5514 29.3676H20.3286C19.9712 30.3785 19.3091 31.2536 18.4336 31.8724C17.558 32.4912 16.5121 32.8232 15.44 32.8227Z"
      fill="black"
    />
  </svg>
);

export const IconTwo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5Z"
      stroke="#FDAF37"
    />
    <path d="M12 7V14M12 17.5V16.5" stroke="#FDAF37" strokeLinecap="round" />
  </svg>
);

export const IconThree = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 17L5 12L6.41 10.58L10 14.17L17.59 6.58L19 8M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
      fill="#00BC7D"
    />
  </svg>
);

const notifications = [
  {
    id: 1,
    icon: <NotificationIconTwo />,
    title: "New learners applied",
    desc: "15 new applications for web dev program",
    time: "Just now",
    color: "text-black",
  },
  {
    id: 2,
    icon: <IconTwo />,
    title: "Trainers pending approval",
    desc: "8 trainers waiting for verification",
    time: "10 mins ago",
    color: "text-yellow-500",
  },
  {
    id: 3,
    icon: <IconThree />,
    title: "Trainers pending approval",
    desc: "Employers posted jobs",
    time: "10 mins ago",
    color: "text-green-600",
  },
];

export default function NotificationModal() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`relative ${pathname == "/super-admin" ? "block" : "hidden"}`}
      ref={dropdownRef}
    >
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 hover:bg-gray-100 rounded-full transition hover:cursor-pointer"
      >
        <NotificationIcon />
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-5 h-5  text-sm flex items-center justify-center rounded-full">
          {notifications.length}
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
           fixed md:absolute 
        top-[62%] left-1/2 md:top-auto md:left-auto 
        -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0
        md:right-0 md:mt-3 
        w-[90vw] max-w-sm md:w-80 
        bg-white shadow-lg rounded-lg border-none 
        z-50 max-h-[70vh] overflow-y-auto scrollbar-hide p-3"
        >
          <div className="p-4 font-semibold text-lg flex items-center gap-2">
            <NotificationIconTwo />
            Notifications
          </div>

          {notifications?.map((n, i) => (
            <div
              key={i}
              className="p-4 border-b border-auth-form-border last:border-none"
            >
              <div className="flex gap-3">
                <span className={`text-xl ${n.color}`}>{n.icon}</span>

                <div>
                  <h4 className="font-semibold text-black">{n.title}</h4>
                  <p className="text-sm text-black font-normal">{n.desc}</p>
                  <p className="text-xs text-ash-color font-normal mt-1">
                    {n.time}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {notifications.length === 0 && (
            <p className="text-center p-4 text-ash-color font-normal my-10">
              No notifications
            </p>
          )}
        </div>
      )}
    </div>
  );
}
