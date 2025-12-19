import { NavLink } from "react-router-dom";

export default function NewsCard({ title, imagePath, content, postId }) {
  return (
    <div className="bg-[#780000] text-white rounded-sm shadow-sm overflow-hidden">
      <div className="w-[100%] h-[60%] bg-white">
        <img
          className="h-full w-full object-contain"
          src={`http://localhost:3000${imagePath}`}
        />
      </div>
      <div className="p-[0.4rem] flex flex-col gap-[1rem]">
        <NavLink
          to={`/post/${postId}`}
          className="font-bold md:text-xl hover:underline"
        >
          {title}
        </NavLink>
        <span className="hidden md:block truncate">{content}</span>
      </div>
    </div>
  );
}
