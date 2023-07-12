import Link from "next/link";

const Links = [
  {
    name: "Guides",
    href: "",
  },
  {
    name: "Terms of Sale",
    href: "",
  },
  {
    name: "Terms of Use",
    href: "",
  },
  {
    name: "Nike Privacy Policy",
    href: "",
  },
  {
    name: "Your Privacy Choices",
    href: "",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-black">
      <div className="mx-auto py-20 text-center flex flex-col gap-y-5 items-center justify-center">
        <div className="flex items-center justify-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            color="#888888"
            className="social-icons"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M13 10a3 3 0 1 1-6 0c0-.171.018-.338.049-.5H6v3.997c0 .278.225.503.503.503h6.995a.503.503 0 0 0 .502-.503V9.5h-1.049c.031.162.049.329.049.5zm-3 2a2 2 0 1 0-.001-4.001A2 2 0 0 0 10 12zm2.4-4.1h1.199a.301.301 0 0 0 .301-.3V6.401a.301.301 0 0 0-.301-.301H12.4a.301.301 0 0 0-.301.301V7.6c.001.165.136.3.301.3zM10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 0 0 9.6 9.6a9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 10 .4zm5 13.489C15 14.5 14.5 15 13.889 15H6.111C5.5 15 5 14.5 5 13.889V6.111C5 5.5 5.5 5 6.111 5h7.778C14.5 5 15 5.5 15 6.111v7.778z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            color="#888888"
            className="social-icons"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            color="#888888"
            className="social-icons"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zm3.905 7.864c.004.082.005.164.005.244c0 2.5-1.901 5.381-5.379 5.381a5.335 5.335 0 0 1-2.898-.85c.147.018.298.025.451.025c.886 0 1.701-.301 2.348-.809a1.895 1.895 0 0 1-1.766-1.312a1.9 1.9 0 0 0 .853-.033a1.892 1.892 0 0 1-1.517-1.854v-.023c.255.141.547.227.857.237a1.89 1.89 0 0 1-.585-2.526a5.376 5.376 0 0 0 3.897 1.977a1.891 1.891 0 0 1 3.222-1.725a3.797 3.797 0 0 0 1.2-.459a1.9 1.9 0 0 1-.831 1.047a3.799 3.799 0 0 0 1.086-.299a3.834 3.834 0 0 1-.943.979z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            color="#888888"
            className="social-icons"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0 .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334zM10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zm0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9s5 .443 5 3.9s-.086 3.9-5 3.9z"
            ></path>
          </svg>
        </div>
        <div className="flex gap-3 px-2 mx-auto items-center justify-center flex-wrap">
          {Links.map((link, idx) => (
            <Link
              className="hover:text-white text-xs text-[#888888]"
              key={idx}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-center pt-6 text-[#888888] text-xs">
        &copy; {year} Nike Inc, All Rights Reserved
      </p>
      <p className="text-center py-2 text-[#888888] text-[9px]">
        Built by{" "}
        <Link
          href="https://github.com/OgaDavid"
          className="underline italic hover:text-white"
        >
          Oga David.
        </Link>
      </p>
    </div>
  );
};

export default Footer;
