import Link from "next/link";

export default function Footer() {
  return (
    <div className="block fixed justify-center items-center left-0 bottom-0 w-full bg-[#0f0f0f] border-t-[1px]">
      <p className="text-center m-0 px-2 py-1 text-sm text-[#c7c7c7]">
        &copy;{new Date().getFullYear()} Dirty Zuk & The Boyz. All rights
        reserved.
        <Link className="no-underline text-[#c7c7c7]" href="/privacy">
          Privacy Policy.
        </Link>
      </p>
    </div>
  );
}
