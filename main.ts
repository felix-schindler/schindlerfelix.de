import blog from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "My Blog",
  description: "thoughts and prayers",
  avatar: "https://avatars.githubusercontent.com/u/65357346",
  avatarClass: "rounded-full",
  author: "Felix",
  links: [
    { title: "eMail", url: "mailto:webmaster@schindlerfelix.de" },
    { title: "GitHub", url: "https://github.com/felix-schindler" }
  ],
  background: "#F9F9F9",
});
