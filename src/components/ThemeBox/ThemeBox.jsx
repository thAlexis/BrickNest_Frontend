import { NavLink } from "react-router-dom";

export default function ThemeBox({ themeName }) {
  let imgClass = "";
  let spanText = themeName;
  switch (themeName) {
    case "The Hobbit and Lord of the Rings":
      imgClass =
        " absolute scale-[90%] right-[-1.4rem] top-[-1.6rem] lg:top-[-2.2rem]";
      spanText = "Hobbit";
      break;
    case "The LEGO Movie":
      imgClass =
        "absolute scale-[70%] top-[-2.2rem] right-[-1.4rem] sm:top-[-2.8rem] lg:top-[-3.4rem]";
      spanText = "The LEGO Movie";
      break;
    case "Technic":
      imgClass =
        "absolute w-[8rem] scale-[110%] top-[0] sm:scale-[140%] sm:top-[1rem] sm:right-[1rem] lg:scale-[165%] lg:right-[2rem] lg:top-[2rem]";
      break;
    case "Super Heroes Marvel":
      imgClass =
        "absolute scale-[72%] top-[-1.6rem] right-[-1.8rem] sm:right-[-2rem] lg:right-[-2.4rem]";
      spanText = "Marvel";
      break;
    case "Super Heroes DC":
      spanText = "DC";
      imgClass =
        "absolute scale-[70%] top-[-2rem] right-[-1.4rem] sm:top-[-2.4rem] lg:top-[-3rem]";
      break;
    case "Star Wars":
      imgClass =
        "absolute scale-[70%] top-[-2.6rem] right-[-2rem] sm:top-[-3.4rem] lg:top-[-3.8rem]";
      break;
    case "Sonic The Hedgehog":
      imgClass =
        "absolute scale-[55%] top-[-2.8rem] right-[-1.8rem] sm:top-[-3.6rem] lg:top-[-4.2rem]";
      spanText = "Sonic";
      break;
    case "Pirates":
      imgClass = "absolute scale-[110%] right-[-2rem] top-[0.2rem]";
      break;
    case "Ninjago":
      imgClass = "absolute scale-[80%] top-[-0.4rem] right-[-1.4rem]";
      break;
    case "Disney":
      imgClass =
        "absolute scale-[52%] top-[-4.6rem] right-[-1.8rem] sm:top-[-5.8rem] lg:top-[-7rem]";
      break;
    case "Harry Potter":
      imgClass =
        "absolute scale-[75%] right-[-2.2rem] bottom-[-3.2rem] sm:bottom-[-3.8rem] lg:top-[-5rem] lg:right-[-3.4rem]";
      break;
    case "City":
      imgClass =
        "absolute scale-[80%] right-[-2rem] bottom-[-1.8rem] sm:bottom-[-2.2rem] lg:bottom-[-2.8rem]";
      break;
  }

  return (
    <NavLink
      to={`/catalog/${themeName}`}
      className="bg-[#780000] h-[8rem] sm:h-[10rem] lg:h-[12rem] w-[8rem] lg:w-[12rem] sm:w-[10rem] rounded-[0.6rem] flex flex-col justify-end hover:scale-[110%] transition-all duration-300 relative"
    >
      <img src={`/mainThemes_img/${themeName}.png`} className={imgClass} />
      <span
        className={`${
          (themeName == "Harry Potter" || themeName == "The LEGO Movie") &&
          "w-[50%]"
        } z-[30] text-white text-base lg:text-lg font-robotoCond font-semibold pl-[0.4rem]`}
      >
        {spanText}
      </span>
    </NavLink>
  );
}
