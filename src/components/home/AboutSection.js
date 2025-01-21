import Image from "next/image";

const AboutSection = ({ en, cards }) => {
  const data = [
    {
      img: "/images/icons/about1.svg",
      heading: en ? "Who We Are?" : "من نحن؟",
      para: en
        ? "Saudi Banks Media and Awareness Committee was established at the end of 2006 under Saudi Central Bank direction to enhance the banking industry culture among all members of Saudi society. Also, the main role of the Committee is to raise awareness about recent developments related to banking activities on the local and global level."
        : "أسست لجنة الإعلام والتوعية المصرفية في #البنوك_السعودية عام 2006، بناءً على موجب تعميم من البنك المركزي السعودي. ويتمثل دور اللجنة في تعزيز الصناعة المصرفية ونشر الوعي بين مختلف الشرائح والفئات العمرية في المجتمع السعودي لتحقيق أهداف رؤية 2030، حيث يعدّ رفع مستوى الوعي حول الأنشطة المصرفية المختلفة، وتثقيف الجمهور حول القضايا الحديثة المتعلقة بالصناعة والتحديثات على الصعيدين المحلي والعالمي، أحد الأهداف الرئيسية للجنة البنوك السعودية.",
    },
    {
      img: "/images/icons/about2.svg",
      heading: en ? "Our Role" : "دورنا",
      para: en
        ? "Saudi Banks are committed to achieving the highestlevel of transparency and adherence to theregulations, rules and guidelines that areapplicable to face money laundering activities inaccordance with the instructions issued by the Saudi Central Bank."
        : "تلتزم البنوك السعودية بتحقيق أعلى مستوى من الشفافية والالتزام بالأنظمة والقواعد والمبادئ التوجيهية المطبقة على مكافحة عمليات غسل الأموال، وفقًا للتعليمات الصادر عن البنك المركزي السعودي – ساما.",
    },
    {
      img: "/images/icons/about3.svg",
      heading: en ? "Our Vision" : "رؤيتنا",
      para: en
        ? "Vibrant society that has great knowledge of the Banking Industry’s significant roles, products and activities."
        : "مجتمع واعي بالمعرفة المصرفية وعلى دراية واطلاع مستمر بما تقدمة البنوك السعودية من خدمات ومنتجات ومساهمات مختلفة في سبيل تحقيق مجتمع مزدهر.",
    },
    {
      img: "/images/icons/about4.svg",
      heading: en ? "Common Responsibility" : "مسؤولية مشتركة",
      para: en
        ? "Although all Saudi Banks adopt the utmost confidentiality of their customer information, everyone plays a vital role in preserving their information."
        : "رغم تبني جميع المصارف السعودية أقصى درجات السرية بما يتضمن معلومات العملاء في كافة تعاملاتها ، إلا ان كل فرد يلعب دورا مهما في الحفاظ على المعلومات الخاصة به.",
    },
  ];
  return (
    <section className=" py-[80px] md:py-[9.29166666667vw]">
      <div className="myContainer flex flex-wrap justify-between gap-y-[32px]   md:gap-y-[5vw]">
        {cards.map((card, index) => (
          <div
            data-aos={"fade-up"}
            data-aos-delay={(index + 1) % 2 == 1 ? 0 : 200}
            key={index}
            className="md:w-[46%]"
          >
            <div
              className={`${
                index == 0
                  ? " md:mt-[1.25vw] "
                  : index == cards.length - 1
                  ? " md:mt-[1.1vw]"
                  : ""
              } w-[80px]  h- [80px] md:w-[6.5vw] md:h- [6.5vw] relative`}
            >
              {/* <Image
                src={card?.section_icon.permalink}
                fill
                alt={card?.section_title}
                loading="lazy"
              /> */}
              <img
                src={card?.section_icon.permalink}
                alt={card?.section_title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="heading3 mt-[1vw]">{card?.section_title}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: card?.section_descript }}
              className="para24 mt-[14px] md:mt-[1.25vw] font-[400]"
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
