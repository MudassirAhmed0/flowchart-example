import Link from "next/link";

const Button = ({ text, href }) => {
  return (
    <Link
      href={href}
      data-aos="fade"
      data-aos-delay="200"
      className="py-[12px] px-[24px] md:py-[1.25vw] md:px-[2.5vw]  para24 transition duration-500 bg-white hover:text-white text-[#4FE0A3] hover:bg-[#4FE0A3]"
    >
      {text}
    </Link>
  );
};

export default Button;
