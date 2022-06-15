import blog from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "My Blog",
  description: "thoughts and prayers",
  avatar: "https://avatars.githubusercontent.com/u/65357346",
  avatarClass: "rounded-full",
  author: "Felix",
  links: [
    { title: "GitHub", url: "https://github.com/felix-schindler" },
    { title: "GitLab", url: "https://gitlab.com/felix-schindler" },
    { title: "Telegram", url: "https://t.me/felix_schindler" }
  ],
  background: "#f9f9f9",
});
