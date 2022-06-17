import blog from "https://deno.land/x/blog_fork@1.0.0/blog.tsx";

blog({
  title: "My Blog",
  about: "Hey I'm a 20 year old German student who loves to code. I am currently studying Computer Science and Media as a German-Chinese double degree.",
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
