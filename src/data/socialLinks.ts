import { LuGithub, LuLinkedin } from "react-icons/lu";
import { Mail } from "lucide-react";
import type { SocialLink } from "../models/socialLink";

export const socialLinks: SocialLink[] = [
  {
    icon: LuGithub,
    url: "https://github.com/MarcosCucoro",
  },
  {
    icon: LuLinkedin,
    url: "https://www.linkedin.com/in/marcoscucoro/",
  },
  {
    icon: Mail,
    url: "mailto:marcos.cucoro@hotmail.com",
  },
];